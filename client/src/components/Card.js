import { useEffect, useState, memo } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Card.css';

function Card({item, setCart, cart}) {
  const [imageURL, setImageURL] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    import(`../assets/images/${item._id}.jpg`).then((module) => {
      setImageURL(module.default);
    });
  }, [item._id]); // Add item._id as a dependency to refresh the image when item changes

  function addToCart() {
    if (!disabled) {
      setCart((prevCart) => {
        const existingItemIndex = prevCart.findIndex(i => i._id === item._id);

        if (existingItemIndex !== -1) {
          // Item is already in the cart
          toast.warning('Item is already in the cart.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return prevCart;
        } else {
          // Item is not in the cart
          toast.success('🤤 Booking the table for you!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return [...prevCart, { ...item, quantity: 1 }];
        }
      });

      // Disable the button after adding the item
      setDisabled(true);
    }
  }

  return (
    <div className="Card">
      <div className="Card-inner">
        <div className="Card-inner-left">
          <img src={imageURL} alt={item.name} />
        </div>
        <div className="Card-inner-right">
          <div>
            <div className="title">{item.name}</div>
            <div className="desc">Savor the flavors!</div>
          </div>
          <div>
            <div className="price">Rs. {item.price}</div>
            <button onClick={addToCart} disabled={disabled}>Book now</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default memo(Card);
