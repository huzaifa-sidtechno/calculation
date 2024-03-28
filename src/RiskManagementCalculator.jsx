import React, { useState } from 'react';

function RiskManagementCalculator() {
  const [inputs, setInputs] = useState({
    accountSize: '',
    riskPercentage: '',
    entryPrice: '',
    stopLossPrice: '',
    takeProfitPrice: ''
  });

  const [results, setResults] = useState({
    positionSize: '',
    riskRewardRatio: '',
    totalRisked: '',
    numberOfCoins: ''
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
    calculateRiskManagement();
  };

  const calculateRiskManagement = () => {
    const { accountSize, riskPercentage, entryPrice, stopLossPrice, takeProfitPrice } = inputs;
    const accountSizeFloat = parseFloat(accountSize);
    const riskPercentageFloat = parseFloat(riskPercentage);
    const entryPriceFloat = parseFloat(entryPrice);
    const stopLossPriceFloat = parseFloat(stopLossPrice);
    const takeProfitPriceFloat = parseFloat(takeProfitPrice);

    if (!isNaN(accountSizeFloat) && !isNaN(riskPercentageFloat) && !isNaN(entryPriceFloat) &&
        !isNaN(stopLossPriceFloat) && !isNaN(takeProfitPriceFloat)) {
      const accountRiskDollars = (accountSizeFloat * riskPercentageFloat) / 100;
      const tradeRiskPerCoin = entryPriceFloat - stopLossPriceFloat;
      const positionSize = accountRiskDollars / tradeRiskPerCoin;
      const potentialRewardPerCoin = takeProfitPriceFloat - entryPriceFloat;
      const riskRewardRatio = potentialRewardPerCoin / tradeRiskPerCoin;
      const totalRisked = accountRiskDollars;
      const numberOfCoins = positionSize / entryPriceFloat;

      setResults({
        positionSize: 'Position Size: ' + positionSize.toFixed(2),
        riskRewardRatio: 'Risk/Reward Ratio: ' + riskRewardRatio.toFixed(2),
        totalRisked: 'Total Capital Risked: $' + totalRisked.toFixed(2),
        numberOfCoins: 'Number of Coins to Buy: ' + numberOfCoins.toFixed(2)
      });
    }
  };

  const handleReset = () => {
    setInputs({
      accountSize: '',
      riskPercentage: '',
      entryPrice: '',
      stopLossPrice: '',
      takeProfitPrice: ''
    });
    setResults({
      positionSize: '',
      riskRewardRatio: '',
      totalRisked: '',
      numberOfCoins: ''
    });
  };

  return (
    <div className="container mt-5">
      <div className="form-group">
        <label htmlFor="accountSize">Account Size ($)</label>
        <input type="number" className="form-control" id="accountSize" placeholder="Enter Account Size" value={inputs.accountSize} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="riskPercentage">Risk Percentage (%)</label>
        <input type="number" className="form-control" id="riskPercentage" placeholder="Enter Risk Percentage" value={inputs.riskPercentage} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="entryPrice">Entry Price ($)</label>
        <input type="number" className="form-control" id="entryPrice" placeholder="Enter Entry Price" value={inputs.entryPrice} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="stopLossPrice">Stop Loss Price ($)</label>
        <input type="number" className="form-control" id="stopLossPrice" placeholder="Enter Stop Loss Price" value={inputs.stopLossPrice} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="takeProfitPrice">Take Profit Price ($)</label>
        <input type="number" className="form-control" id="takeProfitPrice" placeholder="Enter Take Profit Price" value={inputs.takeProfitPrice} onChange={handleChange} />
      </div>
      
      <h4 className="mt-4">Results</h4>
      <p id="positionSize">{results.positionSize}</p>
      <p id="riskRewardRatio">{results.riskRewardRatio}</p>
      <p id="totalRisked">{results.totalRisked}</p>
      <p id="numberOfCoins">{results.numberOfCoins}</p>
      <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default RiskManagementCalculator;
