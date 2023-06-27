import { useDispatch } from "react-redux"
import { decrement, increment } from "../redux/cart"

const AfterCart = ({ product }) => {

  const dispatch = useDispatch()
  return (<div>

    <button  

    onClick={()=>{
      dispatch(decrement(product))
    }}
    
    >-</button>
    <span style={{ padding: "15px" }}>{product.count}</span>
    <button onClick={() => { dispatch(increment(product)) }}>+</button>



  </div>)
}

export default AfterCart