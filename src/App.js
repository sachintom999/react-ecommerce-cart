import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import ProductDetail from './components/ProductDetail';
import products from './data/products';
import { setProducts } from './redux/product';
import { BsFillCartFill } from 'react-icons/bs'
import cart from './redux/cart';

function App() {

  const { productList } = useSelector(state => state.product)
  const { cartCount  } = useSelector(state => state.cart)

  const dispatch = useDispatch()


  useEffect(() => {

    dispatch(setProducts(products))



  }, [])

  return (
    <div className="App-header">

      <div>
      <BsFillCartFill />
      {cartCount}

      </div>


      {
        productList.map((product) => { return (<ProductDetail key={product.id} product={product} />) })
      }





    </div>
  );
}

export default App;
