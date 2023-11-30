import type { FC } from 'react';

import styles from './styles.module.css';

interface CheckboxProps {
  label: string | React.ReactElement;
}

export const Checkbox: FC<CheckboxProps> = ({ label }) => {
  return (
    <label className={styles.wrapper}>
      <span className={styles.checkbox}>
        <input type="checkbox" />
      </span>
      <p className={styles.label}>{label}</p>
    </label>
  );
};
