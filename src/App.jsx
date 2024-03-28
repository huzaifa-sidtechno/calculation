import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RiskManagementCalculator from './RiskManagementCalculator';

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
    <div className="container mt-5" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 className="text-center mb-4">Profit Calculation</h2>
      <ul className="nav nav-tabs" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'coinCalculator' ? 'active' : ''}`} style={{ cursor: 'pointer', color: activeTab === 'coinCalculator' ? '#fff' : '#007bff', backgroundColor: activeTab === 'coinCalculator' ? '#007bff' : 'transparent', borderRadius: '10px 0 0 0' }} onClick={() => setActiveTab('coinCalculator')}>
            Coin Calculator
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'profitCalculator' ? 'active' : ''}`} style={{ cursor: 'pointer', color: activeTab === 'profitCalculator' ? '#fff' : '#007bff', backgroundColor: activeTab === 'profitCalculator' ? '#007bff' : 'transparent' }} onClick={() => setActiveTab('profitCalculator')}>
            Profit Calculator
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'RiskManagementCalculator' ? 'active' : ''}`} style={{ cursor: 'pointer', color: activeTab === 'RiskManagementCalculator' ? '#fff' : '#007bff', backgroundColor: activeTab === 'RiskManagementCalculator' ? '#007bff' : 'transparent', borderRadius: '0 10px 0 0' }} onClick={() => setActiveTab('RiskManagementCalculator')}>
            Risk Management Calculator
          </a>
        </li>
      </ul>

      <div className="tab-content mt-4">
        {activeTab === 'coinCalculator' && (
          <div className="tab-pane active" id="coinCalculator">
            <input type="number" value={investmentCoin} onChange={e => setInvestmentCoin(e.target.value)} placeholder="Enter your amount for investment" className="form-control mb-2" />
            <input type="number" value={initialCoinValue} onChange={e => setInitialCoinValue(e.target.value)} placeholder="Enter current value of coin" className="form-control mb-2" />
            <input type="number" value={futureCoinValue} onChange={e => setFutureCoinValue(e.target.value)} placeholder="Enter future value of coin" className="form-control mb-2" />
            <div dangerouslySetInnerHTML={{ __html: calculateCoin() }} />
          </div>
        )}
        {activeTab === 'profitCalculator' && (
          <div className="tab-pane active" id="profitCalculator">
            <input type="number" value={investmentProfit} onChange={e => setInvestmentProfit(e.target.value)} placeholder="Enter your amount for investment" className="form-control mb-2" />
            <input type="number" value={coinAmount} onChange={e => setCoinAmount(e.target.value)} placeholder="Enter current value of coin" className="form-control mb-2" />
            <input type="number" value={percentageGain} onChange={e => setPercentageGain(e.target.value)} placeholder="Enter future percentage of gain %" className="form-control mb-2" />
            <div dangerouslySetInnerHTML={{ __html: calculateProfit() }} />
          </div>
        )}
        {activeTab === 'RiskManagementCalculator' && (
          <div className="tab-pane active" id="RiskManagementCalculator">
            <RiskManagementCalculator />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
