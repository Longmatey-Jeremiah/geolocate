import React from 'react';
import { Button as BaseButton, IButtonProps } from 'native-base';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'primary_outline' | 'secondary_outline';
} & IButtonProps;

interface colorProps {
  primary: string;
  secondary: string;
  [key: string]: string;
}

const bg: colorProps = {
  primary: 'primary.100',
  secondary: 'brand.100',
  primary_outline: 'transparent',
  secondary_outline: 'transparent',
};

const color: colorProps = {
  primary: 'brand.100',
  secondary: 'primary.200',
  primary_outline: 'brand.100',
  secondary_outline: 'primary.100',
};

function Button({ children, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <BaseButton
      bg={bg[variant]}
      py="12px"
      _text={{
        color: color[variant],
      }}
      fontWeight={500}
      {...rest}
    >
      {children}
    </BaseButton>
  );
}

export { Button };
