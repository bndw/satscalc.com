"use client";

import { useEffect, useState } from "react";
import styles from "./calculator.module.css";
import { BitcoinPrice } from "../utils/bitcoin-price";

export const Calculator = () => {
  const [sats, setSats] = useState("");
  const [btc, setBtc] = useState("");
  const [usd, setUsd] = useState("");

  const formatDecimal = (val: any) => {
    return val.toLocaleString("fullwide", {
      useGrouping: true,
      maximumSignificantDigits: 6,
    });
  };

  const parseNumber = (val: string) => {
    return parseFloat(val.replace(/[^0-9|.]/g, ""));
  };

  const btcPrice = parseNumber(BitcoinPrice());

  const handleUpdate = (type: string, v: string) => {
    const val = parseNumber(v);

    let newbtc: number;
    switch (type) {
      case "sats":
        setSats(v);

        if (isNaN(val) || v.endsWith(".")) {
          return;
        }
        setSats(formatDecimal(val));

        newbtc = val / 100000000;
        setBtc(formatDecimal(newbtc));
        setUsd(formatDecimal(newbtc * btcPrice));
        break;
      case "btc":
        setBtc(v);

        if (isNaN(val) || v.endsWith(".")) {
          return;
        }
        setBtc(formatDecimal(val));

        setSats(formatDecimal(val * 100000000));
        setUsd(formatDecimal(val * btcPrice));
        break;
      case "usd":
        setUsd(v);

        if (isNaN(val) || v.endsWith(".")) {
          return;
        }

        setUsd(formatDecimal(val));

        newbtc = val / btcPrice;
        setBtc(formatDecimal(newbtc));
        setSats(formatDecimal(newbtc * 100000000));
        break;
    }
  };

  useEffect(() => {
    // Initialize the calculator with some numbers
    handleUpdate("sats", "1000");
  }, [btcPrice]);

  return (
    <form className="flex flex-col">
      <label htmlFor="sats">Sats</label>
      <input
        className={styles.input}
        onChange={(e) => handleUpdate("sats", e.target.value)}
        value={sats}
        type="text"
        id="sats"
        name="sats"
      />

      <label htmlFor="btc">BTC</label>
      <input
        className={styles.input}
        onChange={(e) => handleUpdate("btc", e.target.value)}
        value={btc}
        type="text"
        id="btc"
        name="btc"
      />

      <label htmlFor="usd">USD</label>
      <div className="flex">
        <span className={styles.usd}>$</span>
        <input
          className={styles.input}
          style={{ padding: "0" }}
          onChange={(e) => handleUpdate("usd", e.target.value)}
          value={usd}
          type="text"
          id="usd"
          name="usd"
        />
      </div>
    </form>
  );
};
