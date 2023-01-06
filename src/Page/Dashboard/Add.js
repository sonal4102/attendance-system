import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ students, setStudents, setIsAdding, handleTotalAdd}) {
  const [Name, setName] = useState("");
  const [RollNo, setRollNo] = useState("");
  const [checkin, setcheckin] = useState("");
  const [checkout, setcheckout] = useState("");
  const [date, setDate] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

//   useEffect(() => {
//     handleTotalAdd();
//     console.log(handleTotalAdd);
//   }, [students]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!Name || !RollNo || !checkin || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = students.length + 1;
    const newStudent = {
      id,
      Name,
      RollNo,
      checkin,
      checkout,
      date,
    };
    //console.log("hi1",students);
    let bool = false;
    students.map((e) => {
      //console.log("hi2", e, RollNo, e.RollNo == RollNo);
      if (e.RollNo == RollNo) {
        console.log("Roll Nu. is repeated");
        bool = true;
      }
    });
    if (bool) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "roll no. already exist",
        showConfirmButton: true,
      });
    }
    students.push(newStudent);
    setStudents(students);
    // handleTotalAdd();
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${Name}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Student</h1>
        <label htmlFor="Name">Student Name</label>
        <input
          id="Name"
          type="text"
          ref={textInput}
          name="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="Roll No.">Roll No.</label>
        <input
          id="Roll No."
          type="number"
          name="Roll No."
          value={RollNo}
          onChange={(e) => setRollNo(()=>{
            if(e.target.value>=0){
                return e.target.value;
            }else{
                return Swal.fire({
                  icon: "error",
                  title: "Error!",
                  text: "roll no. Cannot be negative",
                  showConfirmButton: true,
                });
            }
          })}
        />
        <label htmlFor="check-in time">Check-in Time</label>
        <input
          id="check-in time"
          type="time"
          name="check-in time"
          value={checkin}
          onChange={(e) => setcheckin(e.target.value)}
        />
        <label htmlFor="check-out time">Check-out Time</label>
        <input
          id="check-out time"
          type="time"
          name="check-out time"
          value={checkout}
          onChange={(e) => setcheckout(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add