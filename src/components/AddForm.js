import { Form, Button } from "react-bootstrap"

import {StudentContext} from '../contexts/StudentContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addStudent} = useContext(StudentContext);

    const [newStudent, setNewStudent] = useState({
        name:"", email:"", phone:"", address:""
    });

    const onInputChange = (e) => {
        setNewStudent({...newStudent,[e.target.name]: e.target.value})
    }

    const {name, email, phone, address} = newStudent;

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(name, email, phone, address);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Student
            </Button>
        </Form>

     )
}

export default AddForm;