import React from 'react'

function TotalStudent({ total }) {
    return (
        <header>
            {/* <h4>Student's in class</h4> */}
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                {/* <button className='round-button'>Student's in class - {total}</button> */}
                <span style={{display:'block',fontWeight:'bold',backgroundColor:'#F7CB90',width:'15%',height:'35px',borderRadius:"5px"}}>Student's in class - {total}</span>
            </div>
        </header>
    )
}

export default TotalStudent