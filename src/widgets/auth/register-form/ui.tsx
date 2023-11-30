'use client';

import NextLink from 'next/link';

import { Button, Checkbox, Input } from '@/shared/ui';

import styles from './styles.module.css';

export const RegisterForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldWrapper}>
        <Input name="name" label="Name" />
        <Input name="username" label="Username" />
      </div>
      <Input
        className={styles.input}
        required
        name="email"
        label="Email"
        type="email"
      />
      <Input
        className={styles.input}
        required
        placeholder="6+ characters"
        name="password"
        label="Password"
        type="password"
        minLength={6}
      />

      <Checkbox
        label={
          <>
            Creating an account means you’re okay with our{' '}
            <NextLink href="/terms-of-service">Terms of Service</NextLink>,{' '}
            <NextLink href="/privacy-policy">Privacy Policy</NextLink>, and our
            default <NextLink href="/notification">Notification Settings</NextLink>.
          </>
        }
      />

      <Button className={styles.submit} variant="filled" type="submit">
        Create Account
      </Button>

      <p className={styles.captcha}>
        This site is protected by reCAPTCHA and the Google{' '}
        <NextLink href="/privacy-policy">Privacy Policy</NextLink> and{' '}
        <NextLink href="/terms-of-service">Terms of Service</NextLink> apply.
      </p>
    </form>
  );
};
