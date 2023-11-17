import "./style.css";
import { Link } from 'react-router-dom'

const Button = ({buttonName, path}) => {
  return (
    <div role="button">
      <Link to={path}>
          <button
            id="btn-seeMore"
            className="mb-3 inline-block rounded px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {buttonName}
          </button>
          </Link>
    </div>
  )
}

export default Button
