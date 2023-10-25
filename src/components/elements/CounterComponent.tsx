import React from 'react';

const data = [
  { count: '5000+', label: 'Products' },
  { count: '1000+', label: 'Clients' },
  { count: '100%', label: 'Satisfaction' }
];

const CounterComponent = () => {
  return (
    <div className="row">
      {data.map((item, index) => (
        <div className="col-lg-3 col-sm-4 col-4" key={index}>
          <h3 className="text-heading-4 color-gray-900 mb-15">
            <span className="count">{item.count}</span>
          </h3>
          <p className="text-body-text-md color-gray-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CounterComponent;