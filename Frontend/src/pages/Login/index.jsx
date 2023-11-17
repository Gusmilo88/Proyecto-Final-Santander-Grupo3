import Layouts from "../../layouts"
import FormLogin from "../../components/Login"

const Login = () => {
  return (
    <div>
      <Layouts>
        <FormLogin buttonText={"Login"} pathText={"/"}/>
      </Layouts>
    </div>
  )
}

export default Login
