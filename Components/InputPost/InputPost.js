'use client'
import { useSelector , useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import "./InputPost.css"

export default function InputPost() {
    return (
        <div id="InputPostContainer">
            <Form.Control as="textarea" aria-label="With textarea" />
        </div>
    )
}
