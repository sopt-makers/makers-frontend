import React from 'react';
import Dialog from '.';
import Button from '../Button';
import CheckBox from '../CheckBox';
import { buttonMinSize, buttonSize, checkBoxWapper } from './style.css';
import { DialogValueProps } from './types';

export const DialogComponent = ({
  isOpen,
  onClose,
  device = 'mobile',
  title,
  description,
  checkBoxOptions,
  type,
  typeOptions,
}: DialogValueProps) => {
  const onApprove = () => {
    typeOptions && typeOptions.buttonFunction;
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} device={device}>
      <Dialog.Title device={device}>{title}</Dialog.Title>
      <Dialog.Description device={device} isCheck={checkBoxOptions !== undefined}>
        {description}
      </Dialog.Description>

      {checkBoxOptions && (
        <div className={checkBoxWapper}>
          <CheckBox
            label={checkBoxOptions.label}
            size={checkBoxOptions.size ?? 'small'}
            checked={checkBoxOptions.checked}
            color={checkBoxOptions.color}
            onChange={checkBoxOptions.onChange}
          />
        </div>
      )}
      <Dialog.Footer align={device === 'mobile' ? 'center' : 'right'} device={device}>
        {type === 'default' && (
          <>
            <Button
              size="md"
              rounded="md"
              theme="black"
              onClick={onClose}
              className={buttonSize[device]}
            >
              {typeOptions?.cancelButtonText}
            </Button>
            <Button
              size="md"
              rounded="md"
              theme="white"
              onClick={onApprove}
              className={buttonSize[device]}
            >
              {typeOptions?.approveButtonText}
            </Button>
          </>
        )}
        {type === 'danger' && (
          <>
            <Button
              size="md"
              rounded="md"
              theme="black"
              onClick={onClose}
              className={buttonSize[device]}
            >
              {typeOptions?.cancelButtonText}
            </Button>
            <Button
              size="md"
              rounded="md"
              theme="red"
              onClick={onApprove}
              className={buttonSize[device]}
            >
              {typeOptions?.approveButtonText}
            </Button>
          </>
        )}
        {type === 'single' && (
          <Button
            size="md"
            rounded="md"
            theme="white"
            onClick={onApprove}
            className={`${buttonSize[device]} ${device === 'mobile' && buttonMinSize['single']}`}
          >
            {typeOptions?.approveButtonText}
          </Button>
        )}
      </Dialog.Footer>
    </Dialog>
  );
};
