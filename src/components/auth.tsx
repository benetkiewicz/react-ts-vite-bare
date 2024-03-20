import { GoogleLogin } from "@react-oauth/google";

function Auth() {
  const responseMessage = (response) => {
    console.log(response);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin
        onSuccess={responseMessage}
        onError={() => {
          console.log("error!");
        }}
      />
    </div>
  );
}

export default Auth;
