import type { FC } from 'react';

import { LeftPart } from './LeftPart';
import { RightPart } from './RightPart';

import styles from './styles.module.css';

export const HomePage: FC = () => {
  return (
    <section className={styles.section}>
      <LeftPart />
      <RightPart />
    </section>
  );
};
