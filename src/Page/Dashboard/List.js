import React from 'react'

function List({ students, handleEdit, handleDelete }) {


    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>SNo.</th>
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Check-in time</th>
                        <th>Check-out time</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student, i) => (
                            <tr key={student.id}>
                                <td>{i + 1}</td>
                                <td>{student.Name}</td>
                                <td>{student.RollNo}</td>
                                <td>{student.checkin}</td>
                               
                                <td>{student.checkout}</td>
                                <td>{student.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(student.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(student.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Data is stored yet</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List