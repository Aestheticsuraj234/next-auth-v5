import { CardWrapper } from "./card-wrapper"


const LoginForm = () => {
  return (
    <CardWrapper
    headerLabel="Welcome Back!"
    backButtonLabel="Dont have an Account!"
    backButtonHref="/auth/register/"
    showSocial
    >LoginForm</CardWrapper>
  )
}

export default LoginForm