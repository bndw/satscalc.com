import { useEffect, useState } from "react";

export const BitcoinPrice = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState("");

  useEffect(() => {
    fetch("https://api.kraken.com/0/public/Ticker?pair=xbtusd")
      .then((res) => res.json())
      .then((data) => {
        const rawPrice = data.result.XXBTZUSD.c[0];
        setBitcoinPrice(rawPrice);
      });
  }, []);

  return bitcoinPrice;
};
