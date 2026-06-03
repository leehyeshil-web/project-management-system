/**
 * Electron Main Process
 * Handles window creation and IPC communication
 */

import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';
import { initializeDatabase, closeDatabase } from './database/db';

let mainWindow: BrowserWindow | null = null;

/**
 * Create application window
 */
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1024,
    minHeight: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
    },
    icon: path.join(__dirname, '../assets/icon.png'),
  });

  const startUrl = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startUrl);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

/**
 * Create application menu
 */
const createMenu = () => {
  const template: any = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Exit',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            app.quit();
          },
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click: () => {
            // Show about dialog
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

/**
 * App event listeners
 */
app.on('ready', () => {
  createWindow();
  createMenu();
  initializeDatabase();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('quit', () => {
  closeDatabase();
});

/**
 * IPC Handlers
 * These will be implemented in the database module
 */

// Project handlers
ipcMain.handle('project:create', async (event, projectData) => {
  // Implemented in database/queries/projects.ts
});

ipcMain.handle('project:read', async (event, projectId) => {
  // Implemented in database/queries/projects.ts
});

ipcMain.handle('project:update', async (event, projectId, projectData) => {
  // Implemented in database/queries/projects.ts
});

ipcMain.handle('project:delete', async (event, projectId) => {
  // Implemented in database/queries/projects.ts
});

ipcMain.handle('project:list', async (event, filters) => {
  // Implemented in database/queries/projects.ts
});

// Invoice handlers
ipcMain.handle('invoice:create', async (event, invoiceData) => {
  // Implemented in database/queries/invoices.ts
});

ipcMain.handle('invoice:read', async (event, invoiceId) => {
  // Implemented in database/queries/invoices.ts
});

ipcMain.handle('invoice:update', async (event, invoiceId, invoiceData) => {
  // Implemented in database/queries/invoices.ts
});

ipcMain.handle('invoice:delete', async (event, invoiceId) => {
  // Implemented in database/queries/invoices.ts
});

ipcMain.handle('invoice:list', async (event, projectId) => {
  // Implemented in database/queries/invoices.ts
});

// Payment handlers
ipcMain.handle('payment:create', async (event, paymentData) => {
  // Implemented in database/queries/payments.ts
});

ipcMain.handle('payment:list', async (event, projectId) => {
  // Implemented in database/queries/payments.ts
});

// Expense handlers
ipcMain.handle('expense:create', async (event, expenseData) => {
  // Implemented in database/queries/expenses.ts
});

ipcMain.handle('expense:list', async (event, projectId) => {
  // Implemented in database/queries/expenses.ts
});

// Exchange rate handlers
ipcMain.handle('exchangeRate:create', async (event, rateData) => {
  // Implemented in database/queries/taxes.ts
});

ipcMain.handle('exchangeRate:list', async (event, filters) => {
  // Implemented in database/queries/taxes.ts
});

// Tax settings handlers
ipcMain.handle('taxSettings:get', async (event) => {
  // Implemented in database/queries/taxes.ts
});

ipcMain.handle('taxSettings:update', async (event, settings) => {
  // Implemented in database/queries/taxes.ts
});
