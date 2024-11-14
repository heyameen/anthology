import { ComponentProps } from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  sizes?: 'small' | 'medium' | 'large';
};

export const Button = ({
  variant = 'primary',
  sizes = 'medium',
  className,
  ...props
}: ButtonProps) => {
  const classes = clsx(styles.button, styles[variant], styles[sizes], className);

  return <button className={classes} {...props} />;
};
