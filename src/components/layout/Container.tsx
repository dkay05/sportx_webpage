import React from 'react';
import { cn } from '@/lib/utils';
import { CONTAINER_MAX_WIDTHS } from '@/utils/constants';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'xl',
  className,
  fluid = false,
}) => {
  const containerClasses = cn(
    'w-full mx-auto px-4 sm:px-6 lg:px-8',
    !fluid && CONTAINER_MAX_WIDTHS[size],
    className
  );

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
