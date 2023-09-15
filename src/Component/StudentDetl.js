import { useState } from "react";

function StudentCmp(){
    const [data] = useState([
        {name : "Alex", age : 29, course : "Mearn", edit : "edit"},
        {name : "Alex", age : 29, course : "Mearn", edit : "edit"},
        {name : "Alex", age : 29, course : "Mearn", edit : "edit"},
        {name : "Alex", age : 29, course : "Mearn", edit : "edit"},
        {name : "Alex", age : 29, course : "Mearn", edit : "edit"}
    ])

    return(
        <div id="stdetls">
            <h1>Student Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                {data.map((item,index)=>{
                    return(

                    
                    <tbody key={index}>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>
                        </tr>
                    </tbody>
                    )
                })}
            </table>

        </div>
    )
}

export default StudentCmp