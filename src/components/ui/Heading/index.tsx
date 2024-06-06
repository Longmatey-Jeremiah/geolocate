import { Heading as BaseHeading, IHeadingProps } from 'native-base';
import React from 'react';

type HeadingProps = {
  children: React.ReactNode;
} & IHeadingProps;
function Heading({ children, ...rest }: HeadingProps) {
  return (
    <BaseHeading fontWeight={600} {...rest}>
      {children}
    </BaseHeading>
  );
}

export { Heading };
