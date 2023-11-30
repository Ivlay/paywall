'use client';

import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
  HTMLInputTypeAttribute,
} from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, className, type, ...props }, ref) => {
    return (
      <div className={clsx(styles.field, className)}>
        <label>
          {label && <span className={styles.label}>{label}</span>}
          <input
            className={clsx(
              styles.reset,
              styles.input,
              Boolean(error) && styles.error,
              styles[type as string]
            )}
            type={type}
            ref={ref}
            {...props}
          />
        </label>
      </div>
    );
  }
);
