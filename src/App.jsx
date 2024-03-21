import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [investmentCoin, setInvestmentCoin] = useState('');
  const [initialCoinValue, setInitialCoinValue] = useState('');
  const [futureCoinValue, setFutureCoinValue] = useState('');
  const [investmentProfit, setInvestmentProfit] = useState('');
  const [coinAmount, setCoinAmount] = useState('');
  const [percentageGain, setPercentageGain] = useState('');
  const [activeTab, setActiveTab] = useState('coinCalculator');

  const calculateCoin = () => {
    const investment = parseFloat(investmentCoin);
    const initial = parseFloat(initialCoinValue);
    const future = parseFloat(futureCoinValue);
    if (isNaN(investment) || isNaN(initial) || isNaN(future)) return "";
    const initialCoinAmount = investment / initial;
    const profit = (future - initial) * initialCoinAmount;
    const profitPerCoin = future - initial;
    return `Total coin buy: ${initialCoinAmount.toFixed(4)} coins<br>Initial coin value: $${initial.toFixed(4)}<br>New coin value: $${future.toFixed(4)}<br>Profit per coin: $${profitPerCoin.toFixed(4)}<br>Total Profit amount: $${profit.toFixed(4)}`;
  };

  const calculateProfit = () => {
    const investment = parseFloat(investmentProfit);
    const amount = parseFloat(coinAmount);
    const percentage = parseFloat(percentageGain);
    if (isNaN(investment) || isNaN(amount) || isNaN(percentage)) return "";
    const initialCoinAmount = investment / amount;
    const initialCoinValue = amount;
    const newCoinValue = amount * (1 + percentage / 100);
    const profit = newCoinValue - initialCoinValue;
    const profitAmount = profit * initialCoinAmount;
    return `Total coin buy: ${initialCoinAmount.toFixed(4)} coins<br>Initial coin value: $${initialCoinValue.toFixed(4)}<br>New coin value: $${newCoinValue.toFixed(4)}<br>Profit per coin: $${profit.toFixed(4)}<br>Total Profit amount: $${profitAmount.toFixed(4)}`;
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Profit Calculation</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'coinCalculator' ? 'active' : ''}`} onClick={() => setActiveTab('coinCalculator')}>
            Coin Calculator
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'profitCalculator' ? 'active' : ''}`} onClick={() => setActiveTab('profitCalculator')}>
            Profit Calculator
          </a>
        </li>
      </ul>

      <div className="tab-content mt-4">
        {activeTab === 'coinCalculator' && (
          <div className="tab-pane active" id="coinCalculator">
            <input type="number" value={investmentCoin} onChange={e => setInvestmentCoin(e.target.value)} placeholder="Enter amount" className="form-control mb-2" />
            <input type="number" value={initialCoinValue} onChange={e => setInitialCoinValue(e.target.value)} placeholder="Enter value" className="form-control mb-2" />
            <input type="number" value={futureCoinValue} onChange={e => setFutureCoinValue(e.target.value)} placeholder="Enter value" className="form-control mb-2" />
            <div dangerouslySetInnerHTML={{ __html: calculateCoin() }} />
          </div>
        )}
        {activeTab === 'profitCalculator' && (
          <div className="tab-pane active" id="profitCalculator">
            <input type="number" value={investmentProfit} onChange={e => setInvestmentProfit(e.target.value)} placeholder="Enter amount" className="form-control mb-2" />
            <input type="number" value={coinAmount} onChange={e => setCoinAmount(e.target.value)} placeholder="
Enter amount" className="form-control mb-2" />
<input type="number" value={percentageGain} onChange={e => setPercentageGain(e.target.value)} placeholder="Enter percentage gain" className="form-control mb-2" />
<div dangerouslySetInnerHTML={{ __html: calculateProfit() }} />
</div>
)}
</div>
</div>
);
}

export default App;
