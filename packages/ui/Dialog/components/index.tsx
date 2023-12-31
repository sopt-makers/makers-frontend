import React from 'react';
import { ChildrenProp, DialogDescriptionProps, DialogFooterProp } from '../types';
import { description, footer, gap, margintBottom, title } from './style.css';

export function DialogTitle({ children, device }: ChildrenProp) {
  return <div className={title[device]}>{children}</div>;
}

export function DialogDescription({ children, device, isCheck = false }: DialogDescriptionProps) {
  return (
    <div
      className={`${description[device]} ${device === 'desktop' && margintBottom[`${isCheck}`]}`}
    >
      {children}
    </div>
  );
}

export function DialogFooter({ children, align, device }: DialogFooterProp) {
  return <div className={`${footer[align]} ${gap[device]}`}>{children}</div>;
}
