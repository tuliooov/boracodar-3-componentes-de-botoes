import * as h from './Spinner.header';

function Spinner() {
  return (
    <div
      className={h.style.Spinner}
    >
      <h.AiOutlineLoading3Quarters />
    </div>
  )
}

export { Spinner }