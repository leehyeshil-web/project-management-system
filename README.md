# Tanzania Project Management & Accounting System

A comprehensive desktop application for managing projects, invoices, payments, expenses, and profitability analysis with support for Tanzanian tax regulations (VAT & WHT).

## Features

### 📊 Project Management
- Create and manage multiple projects
- Track project status and timelines
- Multi-currency support (TZS & USD)

### 💰 Accounting Management
- **Invoice Management**: Create invoices with VAT (18%)
- **Payment Tracking**: Record received payments with WHT deductions
- **Expense Management**: Track project expenses and outsourcing costs
- **Tax Calculation**: Automatic VAT & WHT calculations
  - Services/Consulting: 5% WHT
  - Real Estate Rent: 10% WHT

### 💹 Profitability Analysis
- Real-time profit margin calculations
- Project-wise cost breakdown
- Revenue vs. expense analysis
- Currency conversion tracking (USD to TZS)

### 🔌 Offline-First
- Full SQLite database support
- Works completely offline
- No internet required

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Desktop**: Electron 24
- **Database**: SQLite3 (better-sqlite3)
- **Charts**: Recharts
- **Styling**: React Icons + CSS

## Installation

```bash
# Clone the repository
git clone https://github.com/leehyeshil-web/project-management-system.git
cd project-management-system

# Install dependencies
npm install

# Start development server
npm start
```

## Development

```bash
# Run React dev server and Electron together
npm start

# Build for production
npm run build

# Test
npm test
```

## Project Structure

```
src/
├── main/                          # Electron main process
│   ├── database/                  # SQLite database layer
│   │   ├── db.ts                 # Database initialization
│   │   ├── queries/              # SQL query handlers
│   │   │   ├── projects.ts
│   │   │   ├── invoices.ts
│   │   │   ├── payments.ts
│   │   │   ├── expenses.ts
│   │   │   └── taxes.ts
│   │   └── migrations/           # Database schema
│   │       └── schema.sql
│   └── electron.ts               # Main process setup
├── renderer/                       # React app
│   ├── components/               # Reusable components
│   │   ├── ProjectForm.tsx
│   │   ├── InvoiceForm.tsx
│   │   ├── PaymentForm.tsx
│   │   ├── ExpenseForm.tsx
│   │   └── TaxCalculator.tsx
│   ├── pages/                    # Page components
│   │   ├── Dashboard.tsx         # Main overview
│   │   ├── Projects.tsx          # Project management
│   │   ├── Accounting.tsx        # Invoices, payments, expenses
│   │   ├── Profitability.tsx     # Analysis & reports
│   │   └── Settings.tsx          # App settings
│   ├── utils/                    # Utility functions
│   │   ├── taxCalculator.ts      # VAT & WHT calculations
│   │   ├── currencyConverter.ts  # USD to TZS conversion
│   │   └── profitCalculator.ts   # Profit analysis
│   └── App.tsx                   # Root component
└── types/                         # TypeScript types
    └── index.ts
```

## Tax Configuration

### VAT (Value Added Tax)
- Rate: 18%
- Applied on: All invoices

### WHT (Withholding Tax)
- Services/Consulting: 5%
- Real Estate Rent: 10%
- Applied on: Payments received and expenses paid

### Currency
- Primary: TZS (Tanzania Shilling)
- Secondary: USD
- All taxes calculated and paid in TZS

## Database Schema

### Tables
- `projects` - Project information
- `invoices` - Customer invoices
- `payments` - Payment records with tax details
- `expenses` - Project expenses
- `exchange_rates` - USD to TZS conversion history
- `tax_settings` - Configurable tax rates
- `project_profitability` - Calculated profit metrics

## License

MIT

## Author

Tanzania PM System - 2024
