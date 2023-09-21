'use client'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useSelector , useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import "./InputPost.css"

export default function InputPost() {
    return (
        <Container>
            <Form.Control as="textarea" aria-label="With textarea" placeholder="NEwPost" style={{height:"150px",borderRadius:"20px"}}/>
            <Button variant="primary">Send</Button>
        </Container>
    )
}
