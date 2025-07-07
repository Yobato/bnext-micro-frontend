// types/primereact-overrides.d.ts

declare module 'primereact/menu' {
    import * as React from 'react';
  
    export interface MenuProps {
      model?: any[];
      popup?: boolean;
      id?: string;
      style?: React.CSSProperties;
      className?: string;
    }
  
    export class Menu extends React.Component<MenuProps> {
      toggle(event: any): void;
    }
  }
  
  declare module 'primereact/toast' {
    import * as React from 'react';
  
    export interface ToastMessage {
      severity?: string;
      summary?: string;
      detail?: string;
      life?: number;
    }
  
    export interface ToastProps {}
  
    export class Toast extends React.Component<ToastProps> {
      show(message: ToastMessage | ToastMessage[]): void;
      clear(): void;
    }
  }
  