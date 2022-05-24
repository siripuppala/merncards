import axios from 'axios';

import { Card } from 'react-bootstrap';

const CardRow = (props) => {   
    const deleteStudent = () =>{
        axios.delete('http://localhost:4000/students/delete-student/' + props.obj._id)
        .then((res) => {
            console.log('Student successfully deleted!')
        }).catch((error) => {
            console.log(error)
        })
    }
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="card.jfif" width='30px' height='10px'/>
                <Card.Body>
                    <Card.Title>{props.obj.name}</Card.Title>
                    <Card.Text>
                    Email: {props.obj.email} <br/>
                    RollNo: {props.obj.rollno}
                    </Card.Text>           
                </Card.Body>
            </Card>           
        );
}
export default CardRow;