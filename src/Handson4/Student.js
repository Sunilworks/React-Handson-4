import React, { useState } from "react";
import '../App.css' 
import { NavLink } from "react-router-dom";

function Student() {
  const [data] = useState([
    {
      name: "Sunil",
      age: 22,
      course: "MERN",
      batch: "June",
      change: "Edit",
    },
    {
      name: "Ashish",
      age: 24,
      course: "MERN",
      batch: "November",
      change: "Edit",
    },
    {
      name: "Ram",
      age: 23,
      course: "MERN",
      batch: "August",
      change: "Edit",
    },
    {
      name: "Prince",
      age: 21,
      course: "MERN",
      batch: "April",
      change: "Edit",
    },
    {
      name: "Raj",
      age: 20,
      course: "MERN",
      batch: "March",
      change: "Edit",
    },
    {
      name: "Shivam",
      age: 25,
      course: "MERN",
      batch: "September",
      change: "Edit",
    },
    {
      name: "Laxman",
      age: 21,
      course: "MERN",
      batch: "February",
      change: "Edit",
    },
  ]);
  return (
    <>
      <div className="main">
        <div className="container">
          <h2>STUDENT DETAILS</h2>
          <button className="btn">Add new Student</button>
        </div>
        <table className='students-table'>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>COURSE</th>
            <th>BATCH</th>
            <th>CHANGE</th>
          </tr>
          {
            data.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.course}</td>
                  <td>{student.batch}</td>
                  <td className='edit-item'><NavLink>{student.change}</NavLink></td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </>
  );
}

export default Student;
