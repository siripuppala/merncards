import axios from 'axios';

const CardTableRow = (props) => {
   
    const deleteStudent = () =>{
        axios.delete('http://localhost:4000/students/delete-student/' + props.obj._id)
        .then((res) => {
            console.log('Student successfully deleted!')
        }).catch((error) => {
            console.log(error)
        })
    }
        return (
            <tr>
                <td>{props.obj.name}</td>
                <td>{props.obj.email}</td>
                <td>{props.obj.rollno}</td>
                
            </tr>
        );

}

export default CardTableRow;