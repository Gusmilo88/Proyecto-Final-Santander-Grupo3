import FormRegister from '../../components/FormRegister'
import Layouts from '../../layouts'

const Register = () => {
  return (
    <div>
      <Layouts>
        <FormRegister buttonText={"Register"} pathText={"/"}/>
      </Layouts>
    </div>
  )
}

export default Register
