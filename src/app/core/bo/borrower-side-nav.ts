import { SideNavObject } from './side-nav-obj';

export const BORROWER_SIDE_NAV: SideNavObject[] = [
    { icon: 'dashboard', name: 'My Dashboard', route: '/borrower', isVisible: true},
    { icon: 'person', name: 'My Profile', route: '/borrower/profile', isVisible: true},
    { icon: 'credit_card', name: 'My Loans', route: '/borrower/loans', isVisible: true},
    { icon: 'account_balance', name: 'Apply a New Loan', route: '', isVisible: true},
    { icon: 'credit_card', name: 'Transaction History', route: '', isVisible: true},
    { icon: 'settings', name: 'My Account', route: '', isVisible: true}
];
