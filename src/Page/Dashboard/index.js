import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { studentsData} from '../../data';
import TotalStudent from './TotalStudent';


function Dashboard() {

    //const [students, setStudents] = useState(studentsData);
    const [selectedStudents, setSelectedStudents] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [total, setTotal] = useState(0);
    
    let stud;
    if (localStorage.getItem("students") === null) {
       stud = [];
    } else {
       stud = JSON.parse(localStorage.getItem("students"));
    }
    const [students, setStudents] = useState(stud);

    const handleTotalAdd = (counter) =>{
        setTotal(students.length - counter);
       // console.log(total , " in index" ,students.length);
    }

    const handleEdit = (id) => {
        const [student] = students.filter(student => student.id === id);

        setSelectedStudents(student);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [student] = students.filter(student => student.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: ` data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                setStudents(students.filter(student =>student.id !== id));
                console.log(students, " in index");
                // handleTotalAdd();
            }
        });
    }


    return (
      <div className="container">
        {/* List */}

        {!isAdding && !isEditing && (
          <>
            {/* <h1>Current Students in Class are {total}</h1> */}
            <Header setIsAdding={setIsAdding} />
            <TotalStudent total={total}/>
            <List
              students={students}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleTotalAdd={handleTotalAdd}
            />
          </>
        )}

        {/* Add */}
        {isAdding && (
          <Add
            students={students}
            setStudents={setStudents}
            setIsAdding={setIsAdding}
            handleTotalAdd={handleTotalAdd}
          />
        )}
        {/* Edit */}
        {isEditing && (
          <Edit
            students={students}
            selectedStudents={selectedStudents}
            setStudents={setStudents}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    );
}

export default Dashboard;