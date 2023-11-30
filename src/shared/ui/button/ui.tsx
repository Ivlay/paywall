'use client';

import { forwardRef, type ButtonHTMLAttributes, ElementType } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

interface ButtonProps<E extends ElementType = ElementType>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: E;
  href?: string;
  variant?: 'filled' | 'outline' | 'standard';
}

const DEFAULT_ELEMENT: ElementType = 'button';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, as, className, variant = 'standard', ...props }, ref) => {
    const Element = as || DEFAULT_ELEMENT;

    return (
      <Element
        ref={ref}
        className={clsx(styles.reset, styles.btn, styles[variant], className)}
        {...props}
      >
        {children}
      </Element>
    );
  }
);
