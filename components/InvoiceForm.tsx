import React, { useState } from 'react';
import InvoiceTable, { Item } from './InvoiceTable';

const InvoiceForm: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [desc, setDesc] = useState('');
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);

  const addItem = () => {
    if (!desc || qty <= 0 || price <= 0) {
      return;
    }
    const newItem: Item = {
      id: Date.now(),
      description: desc,
      quantity: qty,
      price
    };
    setItems(prev => [...prev, newItem]);
    setDesc('');
    setQty(1);
    setPrice(0);
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <input
          type="number"
          min="1"
          placeholder="Qty"
          value={qty}
          onChange={e => setQty(parseInt(e.target.value, 10))}
        />
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(parseFloat(e.target.value))}
        />
        <button className="add-item-btn" onClick={addItem}>
          Add Item
        </button>
      </div>
      {items.length > 0 && (
        <InvoiceTable items={items} onRemove={removeItem} />
      )}
    </div>
  );
};

export default InvoiceForm;