
// eslint-disable-next-line react/prop-types
export default function Button({type, value, handler}) {
  return (
    <div>
        <button onClick={handler} className={type === 'danger' ? 'btn btn-outline btn-error' : 'btn btn-outline btn-success'}>{value}</button>
    </div>
  )
}
