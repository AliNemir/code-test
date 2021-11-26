import { Form, Button } from "react-bootstrap"

import {StudentContext} from '../contexts/StudentContext';
import {useContext, useState} from 'react';

const EditForm = ({theStudent}) =>{

    const id = theStudent.id;

    const [name, setName] = useState(theStudent.name);
    const [email, setEmail] = useState(theStudent.email);
    const [address, setAddress] = useState(theStudent.address);
    const [phone, setPhone] = useState(theStudent.phone);


    const {updateStudent} = useContext(StudentContext);

    const updatedStudent = {id, name, email, address, phone}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(id, updatedStudent)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
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
                    onChange={(e)=> setAddress(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Student
            </Button>
        </Form>

     )
}

export default EditForm;