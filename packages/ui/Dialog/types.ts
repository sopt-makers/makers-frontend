import React, { ReactNode } from 'react';
import { CheckBoxProps } from '../CheckBox';

export interface ChildrenProp {
  children: ReactNode;
  device: 'desktop' | 'mobile';
}

export interface DialogDescriptionProps extends ChildrenProp {
  isCheck?: boolean;
}

export interface DialogFooterProp extends ChildrenProp {
  align: 'center' | 'left' | 'right';
  device: 'desktop' | 'mobile';
}

interface TypeOptionsProp {
  cancelButtonText?: string;
  approveButtonText?: string;
  buttonFunction?: () => void;
}

export interface DialogOptionType {
  device: 'desktop' | 'mobile';
  title: ReactNode;
  description: ReactNode;
  checkBoxOptions?: CheckBoxProps;
  type?: 'default' | 'danger' | 'single';
  typeOptions?: TypeOptionsProp;
}

export interface DialogValueProps extends DialogOptionType {
  isOpen: boolean;
  onClose: () => void;
}

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  device: 'desktop' | 'mobile';
  children?: ReactNode;
}

export type ProviderChildren = { children: React.ReactNode };
