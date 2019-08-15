import React from 'react';


function Header ({date}) {
    return (
        <div className = "header">
            <h1>🚀 NASA Photo of the Day 🚀</h1>
            <h3>{date}</h3>
        </div>
    )

}
export default header