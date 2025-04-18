import React, { useEffect, useState } from 'react';
import { getOverview } from '../api/Overview';
import { ShoppingCart, DollarSign, User, ArrowUp, ArrowDown } from 'lucide-react';



const cardConfigs = [
  {
    key: 'Turnover',
    title: 'Turnover',
    icon: <ShoppingCart size={24} />,    
    bgClass: 'bg-primary',
    getValue: data => data.turnover.amount,
    getChange: data => data.turnover.changePercentage,
    getDirection: data => data.turnover.changeDirection,
    getPeriod: data => data.turnover.period
  },
  {
    key: 'Profit',
    title: 'Profit',
    icon: <DollarSign size={24} />,   
    bgClass: 'bg-warning',
    getValue: data => data.profit.amount,
    getChange: data => data.profit.changePercentage,
    getDirection: data => data.profit.changeDirection,
    getPeriod: data => data.profit.period
  },
  {
    key: 'New Customer',
    title: 'New Customer',
    icon: <User size={24} />,   
    bgClass: 'bg-success',
    getValue: data => data.newCustomer.count,
    getChange: data => data.newCustomer.changePercentage,
    getDirection: data => data.newCustomer.changeDirection,
    getPeriod: data => data.newCustomer.period
  }
];

export default function OverviewCards() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getOverview()
      .then(setData)
      .catch(err => console.error('Load overview error:', err));
  }, []);

  if (!data) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '8rem' }}>
        <span className="text-muted">Loading overview...</span>
      </div>
    );
  }

  return (
    <div className="row g-3">
      {cardConfigs.map(config => {
        const value = config.getValue(data);
        const change = config.getChange(data);
        const direction = config.getDirection(data);
        const period = config.getPeriod(data);
        const ArrowIcon = direction === 'up' ? ArrowUp : ArrowDown;
        const textColor = direction === 'up' ? 'text-success' : 'text-danger';

        return (
          <div key={config.key} className="col-12 col-md-4">
            <div className={`d-flex p-4 rounded shadow ${config.bgClass} text-white h-100 flex-column justify-content-between`}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 text-uppercase">{config.title}</h6>
                <div className="opacity-75">{config.icon}</div>
              </div>
              <div>
                <h2 className="fw-bold">${value.toLocaleString()}</h2>
                <div className="d-flex align-items-center mt-2">
                  <ArrowIcon className={`me-2 ${textColor}`} />
                  <span className={`${textColor} fw-semibold me-2`}>{change.toFixed(2)}%</span>
                  <small className="text-white-50">({period})</small>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
