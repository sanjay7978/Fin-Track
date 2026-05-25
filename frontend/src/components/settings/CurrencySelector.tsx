import React, { useState, useEffect } from 'react';
import { DollarSign, Globe } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}

const currencies: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬' }
];

interface CurrencySelectorProps {
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  isOpen,
  onClose,
  currentCurrency,
  onCurrencyChange
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(currentCurrency);

  const filteredCurrencies = currencies.filter(currency =>
    currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    currency.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = () => {
    onCurrencyChange(selectedCurrency);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="w-full max-w-md transform transition-all duration-300 animate-in slide-in-from-bottom-4">
        <Card className="max-h-[80vh] overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Select Currency</h2>
              <p className="text-gray-600 dark:text-gray-300">Choose your preferred currency</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Search currencies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300/50 dark:border-slate-600/50 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
            />
          </div>

          <div className="max-h-80 overflow-y-auto space-y-2 mb-6">
            {filteredCurrencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => setSelectedCurrency(currency)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                  selectedCurrency.code === currency.code
                    ? 'bg-blue-50 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-50 dark:hover:bg-slate-800/50 text-gray-900 dark:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{currency.flag}</span>
                  <div className="text-left">
                    <p className="font-medium">{currency.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{currency.code}</p>
                  </div>
                </div>
                <span className="text-lg font-bold">{currency.symbol}</span>
              </button>
            ))}
          </div>

          <div className="flex space-x-3">
            <Button variant="ghost" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleSave} className="flex-1">
              Save Currency
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export const useCurrency = () => {
  const [currency, setCurrency] = useState<Currency>(currencies[0]); // Default to USD

  useEffect(() => {
    const savedCurrency = localStorage.getItem('selectedCurrency');
    if (savedCurrency) {
      try {
        const parsed = JSON.parse(savedCurrency);
        setCurrency(parsed);
      } catch (error) {
        console.error('Error parsing saved currency:', error);
      }
    }
  }, []);

  const updateCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    localStorage.setItem('selectedCurrency', JSON.stringify(newCurrency));
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.code,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return {
    currency,
    updateCurrency,
    formatAmount,
    currencySymbol: currency.symbol
  };
};