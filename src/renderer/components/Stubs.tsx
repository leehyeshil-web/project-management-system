/**
 * Stub Pages - To be implemented
 */

import React from 'react';

export const Profitability: React.FC = () => (
  <div style={{ padding: '2rem', marginLeft: '250px' }}>
    <h1>Profitability Analysis</h1>
    <p>Coming soon...</p>
  </div>
);

export const Settings: React.FC = () => (
  <div style={{ padding: '2rem', marginLeft: '250px' }}>
    <h1>Settings</h1>
    <p>Coming soon...</p>
  </div>
);

// Stub Form Components
export const InvoiceForm: React.FC<any> = ({ onClose }) => (
  <div onClick={onClose} style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  }}>
    <div onClick={(e) => e.stopPropagation()} style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '8px',
      maxWidth: '600px',
      width: '90%'
    }}>
      <h2>Invoice Form</h2>
      <p>Invoice form implementation coming soon</p>
      <button onClick={onClose} style={{
        padding: '0.75rem 1.5rem',
        background: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>Close</button>
    </div>
  </div>
);

export const PaymentForm: React.FC<any> = ({ onClose }) => (
  <div onClick={onClose} style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  }}>
    <div onClick={(e) => e.stopPropagation()} style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '8px',
      maxWidth: '600px',
      width: '90%'
    }}>
      <h2>Payment Form</h2>
      <p>Payment form implementation coming soon</p>
      <button onClick={onClose} style={{
        padding: '0.75rem 1.5rem',
        background: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>Close</button>
    </div>
  </div>
);

export const ExpenseForm: React.FC<any> = ({ onClose }) => (
  <div onClick={onClose} style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  }}>
    <div onClick={(e) => e.stopPropagation()} style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '8px',
      maxWidth: '600px',
      width: '90%'
    }}>
      <h2>Expense Form</h2>
      <p>Expense form implementation coming soon</p>
      <button onClick={onClose} style={{
        padding: '0.75rem 1.5rem',
        background: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>Close</button>
    </div>
  </div>
);
