import FormRegister from '../components/FormRegister'
import Layout from '../layouts/Layout'

const Register = () => {
  return (
    <div>
      <Layout>
        <FormRegister buttonText={"Register"} pathText={"/"}/>
      </Layout>
    </div>
  )
}

export default Register
