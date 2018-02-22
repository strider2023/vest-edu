import { SideNavObject } from './side-nav-obj';

export const INVESTOR_SIDE_NAV: SideNavObject[] = [
    { icon: 'dashboard', name: 'My Dashboard', route: '/investor', isVisible: true },
    { icon: 'person', name: 'My Profile', route: '/investor/profile', isVisible: true },
    { icon: 'credit_card', name: 'Loan Offers', route: '/investor/loans', isVisible: true },
    { icon: 'account_balance', name: 'My Investments', route: '/investor/investment', isVisible: true },
    { icon: 'credit_card', name: 'My Payments', route: '/investor/payments', isVisible: true },
    { icon: 'settings', name: 'My Account', route: '/investor/account', isVisible: true }
];
