import {IconType} from 'react-icons';

type Variant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProperties
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: Variant;
  isLoading?: boolean;
  icon?: IconType;
}

export type {
  Variant,
  ButtonProperties
}