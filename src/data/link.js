import { APP_NAME } from "../constants"

export const navLinksData = [
    {
        to: '/about',
        link: 'About',
        isDropdown: false
    },
    {
        link: 'Minor Trading',
        isDropdown: true,
        dropdown: [
            {
                to: '/options-copy-trading',
                link: 'Options copy trading',
            },
            {
                to: '/advance-trading-account',
                link: 'Advance trading account',
            },
            {
                to: '/live-trading',
                link: 'Live trade interface',
            },
            
        ]
    },
    {
        link: 'Trading Categories',
        isDropdown: true,
        dropdown: [
            {
                to: '/futures-trading',
                link: 'Futures Trading',
            },
            {
                to: '/stock-trading',
                link: 'Stock Trading',
            },
            {
                to: '/forex-trading',
                link: 'Forex Trading',
            },
            {
                to: '/oil-gas-stock-trading',
                link: 'Oil and gas stock trading',
            },
        ]
    },
    {
        to: '/insight',
        link: 'Insight',
        isDropdown: false,
    },
    {
        link: 'Contact',
        isDropdown: true,
        dropdown: [
            {
                to: '/',
                link: {APP_NAME},
            },
        ]
    },
]

export const dashboardLinksData = [
    {
        to: '/dashboard',
        link: 'Home',
        leading: '/icons/dashboard.png',
        isDropdown: false,
        demarcation: true,
    },
    {
        to: '/dashboard-buy',
        link: 'Buy',
        leading: '/icons/buy.svg',
        isDropdown: false,
    },
    {
        link: 'Stock Trading',
        leading: '/icons/stock.svg',
        isDropdown: true,
        demarcation: true,
        dropdown: [
            {
                to: '/dashboard-stock-trading?stock=TSLA',
                link: 'TSLA',
            },
            {
                to: '/dashboard-stock-trading?stock=SPY',
                link: 'SPY',
            },
            {
                to: '/dashboard-stock-trading?stock=SPX',
                link: 'SPX',
            },
            {
                to: '/dashboard-stock-trading?stock=APPL',
                link: 'APPL',
            },
            {
                to: '/dashboard-stock-trading?stock=BA',
                link: 'BA',
            },
            {
                to: '/dashboard-stock-trading?stock=SP',
                link: 'S&P',
            },
        ]
    },
    {
        link: 'Live Trading',
        leading: '/icons/livetrade.svg',
        isDropdown: true,
        dropdown: [
            {
                to: '/dashboard-live-trading-intro',
                link: 'Live trading Intro',
            },
            {
                to: '/dashboard-live-trading-plans',
                link: 'Join live trade',
            },
            {
                to: '/dashboard-my-live-trading-plans',
                link: 'My trades',
            },
        ]
    },
    {
        link: 'Invest',
        leading: '/icons/invest.svg',
        isDropdown: true,
        demarcation: true,
        dropdown: [
            {
                to: '/dashboard-investment-plans',
                link: 'Subscribe to a Plan',
            },
            {
                to: '/dashboard-my-investment-plans',
                link: 'My Investments',
            },
        ]
    },
    {
        to: '/transaction-history',
        link: 'Transaction History',
        leading: '/icons/transaction.png',
        isDropdown: false,
    },
    {
        to: '/dashboard-kyc',
        link: 'KYC Verification',
        leading: '/icons/2fa.png',
        isDropdown: false,
        demarcation: true,
    },
    {
        to: '/dashboard-profile',
        link: 'Profile',
        leading: '/icons/profile.png',
        isDropdown: false,
    },
    {
        to: '/dashboard-support',
        link: 'Support',
        leading: '/icons/support.png',
        isDropdown: false,
    },
]