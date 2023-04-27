"use client";

import { useEffect, useState } from "react";
import { BitcoinPrice as btcPrice } from "../utils/bitcoin-price";

export const BitcoinPrice = () => {
  const [isLoading, setLoading] = useState(false);
  const bitcoinPrice = btcPrice();

  const formatCurrency = (val: string) => {
    const n = parseFloat(val);
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

    return formatter.format(n);
  };

  useEffect(() => setLoading(!bitcoinPrice), [bitcoinPrice]);

  if (isLoading || !bitcoinPrice) return <p>Loading...</p>;

  return <div>Bitcoin price: {formatCurrency(bitcoinPrice)}</div>;
};
