import * as h from './TertiaryButton.header';

function TertiaryButton(props: h.Types.ButtonProperties) {
  function RenderIcon() {
    if (props.disabled) return <></>;
    if (props.isLoading) {
        return <h.Spinner />
    }
    if (props.icon) {
      return <props.icon
        size={16}
        color="white"
      />
    }
    return <></>;
  }
  function cursor() {
    if (props.disabled) return 'not-allowed';
    if (props.isLoading) return 'progress';
    if (props.icon) return 'move';
    return 'auto';
  }
  return (
    <button
      {...props}
      className={h.style.TertiaryButton}
      style={{
        cursor: cursor()
      }}
    >
      <RenderIcon />
      {props.children}
    </button>
  )
}

export { TertiaryButton }