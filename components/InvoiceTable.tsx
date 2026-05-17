import React from 'react';

export interface Item {
  id: number;
  description: string;
  quantity: number;
  price: number;
}

interface Props {
  items: Item[];
  onRemove: (id: number) => void;
}

const InvoiceTable: React.FC<Props> = ({ items, onRemove }) => {
  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Subtotal</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${(item.quantity * item.price).toFixed(2)}</td>
            <td>
              <button onClick={() => onRemove(item.id)}>✕</button>
            </td>
          </tr>
        ))}
        <tr className="total-row">
          <td colSpan={3}>Total</td>
          <td colSpan={2}>${total.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvoiceTable;