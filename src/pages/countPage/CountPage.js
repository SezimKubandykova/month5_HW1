import {useDispatch, useSelector} from "react-redux";

function CountPage () {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)
  const increment = () => {
    dispatch ({
      type: "INCREMENT_COUNT",
      payload: count +1
    })
  }
  const decrement = () => {
    dispatch({
      type: "DECREMENT_COUNT",
      payload: count -1
    })
  }

  return (
      <>
        <h1>Count - {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </>
  )

}
export default CountPage;