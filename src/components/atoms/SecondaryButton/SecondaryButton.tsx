import * as h from './SecondaryButton.header';

function SecondaryButton(props: h.Types.ButtonProperties) {
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
      className={h.style.SecondaryButton}
      style={{
        cursor: cursor()
      }}
    >
      <RenderIcon />
      {props.children}
    </button>
  )
}

export { SecondaryButton }