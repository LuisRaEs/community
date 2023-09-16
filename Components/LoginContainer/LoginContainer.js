import "./LoginContainer.css"
import LoginLogo from "../LoginLogo/LoginLogo"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function LoginContainer() {
  return (
    <div id="loginContainer">
        <LoginLogo/>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  )
}
