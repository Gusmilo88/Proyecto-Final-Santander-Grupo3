import "./style.css";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { loginRequest } from "../../util/customer";
import toast from "react-hot-toast";

const FormLogin = ({ buttonText, pathText }) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const Loguear = async (e) => {
    e.preventDefault();

    const claves =
    {
      "username": username,
      "password": password
    }

    const respuesta = await loginRequest(claves)
    if (!!respuesta.response) {
      toast.error(respuesta.response.data.error)
    } else {
      toast.success("Usuario creado correctamente!!!");
      localStorage.setItem('token',respuesta.token);
      navigate('/');
        }

  };


  return (
    <div>
      <section className="section-login">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-black bg-opacity-80 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={Loguear}>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                  <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" className="bg-black text-white border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />

                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-black text-white border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required fdprocessedid="pph936" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <Link id="forgot" href="#" className="text-sm font-medium">Forgot password?</Link>
                </div>
                <p className="text-sm text-white">
                  Don’t have an account yet? <Link id="signUp" to={"/register"} className="font-medium">Sign up</Link>
                </p>
                <input type="submit" className="mb-2 inline-block rounded p-2 text-center text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]" value="Login" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormLogin