import { Link, NavLink } from "react-router-dom";
import Button from "../Button";
import "./style.css";

const FormRegister = ({buttonText, pathText}) => {
  return (
    <div>
    <section className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/src/assets/video/octagon.mp4" type="video/mp4" />
       
        </video>
      </div>
      <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative z-10">
      <div className="w-full bg-black bg-opacity-80 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email"
            className="bg-black text-white border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
         
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••"
             className="bg-black text-white border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••"
            className="bg-black text-white border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link id="linkTerms" className="font-medium hover:underline">Terms and Conditions</Link></label>
            </div>
          </div>
          <Button buttonName={buttonText} path={pathText}/>          
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <Link id="linkLogin" to={"/Login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default FormRegister
