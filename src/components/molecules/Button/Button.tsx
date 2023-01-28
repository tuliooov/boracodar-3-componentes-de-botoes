import * as h from './Button.header';

const button: {[key in h.Types.Variant]: (props: h.Types.ButtonProperties) => JSX.Element} = {
  primary: h.PrimaryButton,
  secondary: h.SecondaryButton,
  tertiary: h.TertiaryButton
}

function Button(props: h.Types.ButtonProperties) {
  return button[props.variant](props)
}

export { Button };
