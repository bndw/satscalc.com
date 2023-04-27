import { BitcoinPrice } from "./components/bitcoin-price";
import { Calculator } from "./components/calculator";

export default function Home() {
  return (
    <main className="h-screen" style={{ margin: "15px" }}>
      <div className="flex justify-end">
        <BitcoinPrice />
      </div>
      <div className="flex justify-center items-center h-screen">
        <Calculator />
      </div>
    </main>
  );
}
