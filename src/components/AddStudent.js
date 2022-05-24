import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

function AddStudent() {

    const history = useHistory();

    //const [studentInfo,setStudentInfo] = useState({});  
    const [studentName,setStudentName] = useState();
    const [studentEmail,setStudentEmail] = useState();
    const [studentRollNo,setStudentRollNo] = useState();
    const [postId, setPostId] = useState(null);

      const onChangeName=(e) => {
        setStudentName(e.target.value)
      };
      const onChangeEmail=(e) => {
        setStudentEmail(e.target.value)
      }
      const onChangeRollNo=(e) => {
        setStudentRollNo(e.target.value)
      }

    const onSubmit = (e) => {

        e.preventDefault();
        let studentInfo = {name:studentName,email:studentEmail,rollno:studentRollNo}
      
        //using axios
                console.log(studentInfo);    
        axios.post('http://localhost:4000/students/create-student', studentInfo)
        .then(res => console.log(res.data));
      
        setStudentEmail('');
        setStudentName('');
        setStudentRollNo('');       
       
       console.log(`Student successfully created!`);
        history.push('/StudentCard')       
    }
    return (       
             <Form onSubmit={onSubmit}>
                 <Table striped bordered hover>
             <tr>
                    <td><Form.Control type="text" required value={studentName} onChange={onChangeName}/></td>
                    <td><Form.Control type="text" required value={studentEmail} onChange={onChangeEmail}/></td>
                    <td><Form.Control  type="number" required  value={studentRollNo} onChange={onChangeRollNo}/></td>
                    <td> <Button variant="info" size="lg" block="block" type="submit">
                        Create Student 
                    </Button>
                    </td>
                </tr>
                </Table>
             </Form>
       
    );
}

export default AddStudent;