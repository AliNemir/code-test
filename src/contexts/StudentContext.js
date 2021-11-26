import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const StudentContext = createContext()

const StudentContextProvider  = (props) => {

    const [students, setStudents] = useState([
        
])

useEffect(()=> {
    setStudents(JSON.parse(localStorage.getItem('students')))
},[])

useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
})


const sortedStudents = students.sort((a,b)=>(a.name < b.name ? -1 : 1));



const addStudent = (name, email, address, phone) => {
    setStudents([...students , {id:uuidv4(), name, email, address, phone}])
}


const deleteStudent = (id) => {
    setStudents(students.filter(Student => Student.id !== id))
}

const updateStudent = (id, updatedStudent) => {
    setStudents(students.map((student) => student.id === id ? updatedStudent : student))
}

    return (
        <StudentContext.Provider value={{sortedStudents, addStudent, deleteStudent, updateStudent}}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;