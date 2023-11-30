import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom'


const ShoppingCart = () => {
  return (
    <div>
      <div className="container padding-bottom-3x mb-1 mt-4">
  {/* Shopping Cart*/}
  <div className="table-responsive shopping-cart">
    <table className="table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th className="text-center">Quantity</th>
          <th className="text-center">Subtotal</th>
          <th className="text-center">Discount</th>
          <th className="text-center"><Link id='clearButton' className="btn btn-sm" href="#">Clear Cart</Link></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="product-item">
              <Link className="product-thumb" href="#"><img id='imgCart' src="src/assets/images/carrito1.jpg" alt="Product" /></Link>
              <div className="product-info">
                <h4 className="product-title"><Link href="#">Collectivities Party</Link></h4>
              </div>
            </div>
          </td>
          <td className="text-center">
            <div className="count-input">
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </td>
          <td className="text-center text-lg text-medium">$ 10.00</td>
          <td className="text-center text-lg text-medium">$ 5.00</td>
          <td className="text-center"><Link className="remove-from-cart" href="#" data-toggle="tooltip" title data-original-title="Remove item"><i id='trashIcon' className="fa fa-trash" /></Link></td>
        </tr>
        <tr>
          <td>
            <div className="product-item">
              <Link className="product-thumb" href="#"><img id='imgCart' src="src/assets/images/carrito2.jpg" alt="Product" /></Link>
              <div className="product-info">
                <h4 className="product-title"><Link href="#">Jurassic Park</Link></h4>
              </div>
            </div>
          </td>
          <td className="text-center">
            <div className="count-input">
              <select className="form-control">
                <option>1</option>
                <option selected>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </td>
          <td className="text-center text-lg text-medium">$ 3.00</td>
          <td className="text-center">—</td>
          <td className="text-center"><Link className="remove-from-cart" href="#" data-toggle="tooltip" title data-original-title="Remove item"><i id='trashIcon' className="fa fa-trash" /></Link></td>
        </tr>
        <tr>
          <td>
            <div className="product-item">
              <Link className="product-thumb" href="#"><img id='imgCart' src="src/assets/images/carrito3.jpg" alt="Product" /></Link>
              <div className="product-info">
                <h4 className="product-title"><Link href="#">Metallica in concert</Link></h4>
              </div>
            </div>
          </td>
          <td className="text-center">
            <div className="count-input">
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </td>
          <td className="text-center text-lg text-medium">$ 20.00</td>
          <td className="text-center">—</td>
          <td className="text-center"><Link className="remove-from-cart" href="#" data-toggle="tooltip" title data-original-title="Remove item"><i id='trashIcon' className="fa fa-trash" /></Link></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="shopping-cart-footer">
    <div className="column">
      <form className="coupon-form" method="post">
        <input className="form-control form-control-sm" type="text" placeholder="Coupon code" required />
        <button id="btnCart" className="btn btn-sm" type="submit">Apply Coupon</button>
      </form>
    </div>
    <div className="column text-lg">Subtotal: <span className="text-medium">$ 28.00</span></div>
  </div>
  <div className="shopping-cart-footer">
    <div className="column"><Link className="btn btn-outline-secondary" to={"/"}><i class="fa-solid fa-arrow-left"></i>Back to home</Link></div>
    <div className="column">
      {/* <Link className="btn btn-primary" href="#" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Your cart" data-toast-message="is updated successfully!">Update Cart</Link> */}
      <Link to={`/`} id="btnCart" className="mb-2 inline-block rounded p-2 text-center text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">Buy</Link>
</div>
  </div>
</div>

    </div>
  )
}

export default ShoppingCart