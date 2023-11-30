import type { FC } from 'react';
import NextLink from 'next/link';

import { RegisterForm } from '@/widgets/auth/register-form';

import styles from './styles.module.css';
import { Button } from '@/shared/ui';
import { Icon } from '@/shared/ui/icons';

export const RightPart: FC = () => {
  return (
    <div className={styles.right}>
      <div className={styles.already}>
        Already a member? <NextLink href="/sign-in">Sign In</NextLink>
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.alternative}>
          <Button className={styles.google} variant="filled">
            <Icon.Google />
            Sign up with Google
          </Button>
          <Button className={styles.twitter}>
            <Icon.Twitter />
          </Button>
        </div>
        <div className={styles.or}>
          <span>
            Or
          </span>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};
