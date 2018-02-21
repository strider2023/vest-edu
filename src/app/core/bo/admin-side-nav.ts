import { SideNavObject } from './side-nav-obj';

export const ADMIN_SIDE_NAV: SideNavObject[] = [
    { icon: 'dashboard', name: 'My Dashboard', route: '/admin', isVisible: true },
    { icon: 'credit_card', name: 'Loan Requests', route: '/admin/loans', isVisible: true },
    { icon: 'credit_card', name: 'Transaction History', route: '', isVisible: true },
    { icon: 'account_balance', name: 'Reports', route: '', isVisible: true },
    { icon: 'person', name: 'My Users', route: '', isVisible: true },
    { icon: 'settings', name: 'Settings', route: '', isVisible: true }
];
