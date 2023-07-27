import AuthForm from "../auth-form"

export default function Breakfast() {
    return (
        <LoginCard/>
    )
}

function LoginCard() {
    return (
        <div className="row">
      <div className="col-6">
        <h1 className="header">Sign in to Wondernest</h1>
        <p className="">
          Create a profile to join the next Breakfasts for Good and to find other people that share your interests.
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
      
    </div>
    )
}