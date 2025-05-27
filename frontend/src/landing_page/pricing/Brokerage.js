import React, {useState} from 'react';

const data = {
  Equity: {
    columns: ['Buy', 'Sell'],
    rows: {
      Brokerage: ['0.01% or ₹20', '0.01% or ₹20'],
      'STT/CTT': ['0.1%', '0.1%'],
      'Transaction Charges': ['NSE: 0.00345%', 'NSE: 0.00345%'],
      'GST': ['18% on charges', '18% on charges'],
      'SEBI Charges': ['₹10/crore', '₹10/crore'],
      'Stamp Charges': ['₹150/crore', '-'],
    },
  },
  Currency: {
    columns: ['Futures', 'Options'],
    rows: {
      Brokerage: ['₹20/order', '₹20/order'],
      'STT/CTT': ['No STT', 'No STT'],
      'Transaction Charges': ['0.0012%', '0.0012%'],
      'GST': ['18% on charges', '18% on charges'],
      'SEBI Charges': ['₹10/crore', '₹10/crore'],
      'Stamp Charges': ['₹100/crore', '₹100/crore'],
    },
  },
  Commodity: {
    columns: ['Futures', 'Options'],
    rows: {
      Brokerage: ['0.03% or ₹20', '₹20/order'],
      'STT/CTT': ['0.01% (Sell side)', '0.05% (Sell side)'],
      'Transaction Charges': ['MCX: 0.0021%', 'MCX: 0.0418%'],
      'GST': ['18% on charges', '18% on charges'],
      'SEBI Charges': ['Agri: ₹1/crore, Non-Agri: ₹10/crore', 'Same as Futures'],
      'Stamp Charges': ['0.002% or ₹200/crore', '0.003% or ₹300/crore'],
    },
  },
};

export default function Brokerage() {

    const [selected, setSelected] = useState('Equity');
    const { columns, rows } = data[selected];

  return (
     <div className="container my-5 py-3">
      <h3 className="text-center fs-1 my-5 py-4 heading">Brokerage Charges</h3>

      <ul className="nav nav-tabs justify-content-center custom-tabs mb-4">
        {Object.keys(data).map((key) => (
          <li className="nav-item" key={key}>
            <button
              className={`nav-link ${selected === key ? 'active' : ''}`}
              onClick={() => setSelected(key)}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>

      <div className="table-responsive">
        <table className="table table-bordered shadow-sm table-hover rounded-table">
          <thead className="table-dark text-light">
            <tr>
              <th>Charges</th>
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(rows).map(([key, values]) => (
              <tr key={key}>
                <td className="fw-semibold text-center">{key}</td>
                {values.map((val, i) => (
                  <td className='text-center' key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};