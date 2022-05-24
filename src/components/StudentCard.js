import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import CardTableRow from './CardTableRow';
import CardRow from './CardRow';
import { Table } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import AddStudent from './AddStudent';
import { useEffect } from 'react';

const StudentCard = () => {

    const [students,setStudents] = useState([]); 

   
    //using Fetch
    useEffect(() => {
        fetch('http://localhost:4000/students/')
            .then(response => response.json())
            .then(data => setStudents(data));
   }, []);

    /*
   //using axios
    axios.get('http://localhost:4000/students/')
    .then(res => {       
        setStudents(res.data);        
    })
    .catch((error) => {       
      console.log(error);
    });
  
*/
      
    return (
    
  <div className="table-wrapper">
      {/*}
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roll No</th>
                </tr>
                </thead>
                <tbody>
                {students.map((res, i) => ( 
                        <CardTableRow obj={res} key={i} />
                    )
                )}
                </tbody>  
            </Table>
                {*/}
            
            <Table striped bordered hover>
                
                <tr>

                </tr> 
            </Table>
                {
                students.map((res, i,index) => ( 
                    <td> 
                   <CardRow obj={res} key={i} />
                   </td>
                ))}



                    <br/><br/>


            <AddStudent/>
        </div>
    
    );
};

export default StudentCard;