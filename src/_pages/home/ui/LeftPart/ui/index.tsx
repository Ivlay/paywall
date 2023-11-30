import type { FC } from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';

import { Icon } from '@/shared/ui/icons';

import styles from './styles.module.css';

export const LeftPart: FC = () => {
  return (
    <div className={styles.left}>
      <div className={styles.topContent}>
        <NextLink className={styles.logo} href="/">
          <Icon.Logo />
        </NextLink>
        <h2 className={styles.title}>
          Productize yourself & create a one-person business.
        </h2>
      </div>
      <div className={styles.image}>
        <NextImage
          src="/images/paywall.svg"
          alt="paywall"
          width={453}
          height={207}
        />
      </div>
    </div>
  );
};
