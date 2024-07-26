import { useRouteError } from "react-router-dom";
import './errorpage.css'
import { Container } from "react-bootstrap";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <Container style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <h1>Oops!</h1>
      <p>Looks like you found a broken link...</p>
      <p>Please do use a favor and report the <a href="/ContactUs">problem</a></p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  )
}
