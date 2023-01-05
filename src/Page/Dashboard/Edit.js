import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ students, selectedStudents, setStudents, setIsEditing }) {

    const id = selectedStudents.id;

    const [Name, setName] = useState(selectedStudents.Name);
    const [RollNo, setRollNo] = useState(selectedStudents.RollNo);
    const [checkin, setcheckin] = useState(selectedStudents.checkin);
    const [checkout, setcheckout] = useState(selectedStudents.checkout);
    const [date, setDate] = useState(selectedStudents.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!Name || !RollNo || !checkin ||!date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const student = {
            id,
            Name,
            RollNo,
            checkin,
            checkout,
            date
        };

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                students.splice(i, 1, student );
                break;
            }
        }

        setStudents(students);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${Name}'s  data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Student's Data</h1>
                <label htmlFor="Name">Student Name</label>
                <input
                    id="Name"
                    type="text"
                    
                    name="Name"
                    value={Name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="Roll No.">Roll No.</label>
                <input
                    id="Roll No."
                    type="number"
                    name="Roll No."
                    value={RollNo}
                    onChange={e => setRollNo(e.target.value)}
                />
                <label htmlFor="check-in time">Check-in Time</label>
                <input
                    id="check-in time"
                    type="time"
                    name="check-in time"
                    value={checkin}
                    onChange={e => setcheckin(e.target.value)}
                />
                <label htmlFor="check-out time">Check-out Time</label>
                <input
                    id="check-out time"
                    type="time"
                    name="check-out time"
                    value={checkout}
                    onChange={e => setcheckout(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit