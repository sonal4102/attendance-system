import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h3>Student Attendance System</h3>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Student</button>
            </div>
        </header>
    )
}

export default Header