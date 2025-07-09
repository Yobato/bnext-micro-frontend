// import './src/styles/globals.css';

// Export component untuk Auth
export { default as FormLogin } from './src/components/auth/form';
export {default as Info} from './src/components/auth/info';
export { default as NoSupport } from './src/components/auth/noSupport';

// Export component untuk Layout
export { default as Header } from './src/components/layout/Header';
export { default as Footer } from './src/components/layout/Footer';
export { default as Sidebar } from './src/components/layout/Sidebar';

// Export component common
export { ErrorTimeout } from './src/components/common/ErrorTimeout';
export { TableSkeleton, FormSkeleton, CardSkeleton } from './src/components/common/LoadingSkeleton';

export { default as Table } from './src/components/common/Table';
export { default as Pagination } from './src/components/common/Pagination';

// Export constant
export { menuRaw } from './src/constants/menu';