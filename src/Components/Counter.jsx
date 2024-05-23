import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function Counter({onIncrement, onDecrement, value}) {


  return (
    <div className="flex flex-col gap-5 justify-center items-center border-solid border-2 border-green-600 py-4  px-6">
        <div>
            {value}
        </div>
        <div className="flex gap-5 justify-center items-center">
            <Button value={'Increase'} handler={onIncrement}/>
            <Button value={'decrease'} handler={onDecrement} type={'danger'}/>
        </div>
    </div>
  )
}
