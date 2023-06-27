import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cart"
import { useSelector } from "react-redux"
import AfterCart from "./AfterCart"

const ProductDetail = ({ product }) => {

    const dispatch = useDispatch()

    const { cartList } = useSelector(state => state.cart)
    const exists = cartList.find(item => item.id === product.id )

    const handleClick = () => {
        dispatch(addToCart(product))
    }
    return (<div>
        <p>{product.name}</p>
        {
            exists ? <AfterCart product={exists} /> : <button onClick={handleClick}>Add to cart</button>
        }
        <p>------</p>

    </div>)
}

export default ProductDetail