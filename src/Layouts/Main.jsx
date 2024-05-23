import { useDispatch, useSelector } from "react-redux";
import Counter from "../Components/Counter";
import { decrement, increment } from "../Features/Counter/countersSlice"
import Posts from "./Posts";


export default function Main() {
  const counterArray = useSelector(state => state.counters)
  const patch = useDispatch()

  const totalCounter = counterArray.reduce((sum, current) => sum + current.value, 0)

  // console.log(counterArray)

  // handle increment
  const handleIncrement = (counterId) => {
    patch(increment(counterId))

  }
  // handle decrement
  const handleDecrement = (counterId) => {
    patch(decrement(counterId))

  }


  return (
    <div className="border-solid border-2 border-red-600 px-20 py-20 mx-10 my-10 flex justify-center items-center flex-col gap-4">
      <div className="text-2xl bg-green-500 px-2 py-2 ">Total Counters: {totalCounter}</div>
      <div className="text-3xl text-center grid grid-cols-2 gap-6">
        {
          counterArray.map(e => <Counter key={e.id}
            value={e.value}
            onIncrement={() => handleIncrement(e.id)}
            onDecrement={() => handleDecrement(e.id)}
          />)
        }

      </div>
      <Posts/>
    </div>
  )
}
