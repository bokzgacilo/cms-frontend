import React from 'react';
import { Link } from 'react-router-dom';

const StudentPage = () => {
  const STUDENT = [
    { id: 's1', title: 'Student1' },
    { id: 's2', title: 'Student2' },
    { id: 's3', title: 'Student3' },
  ];
  return (
    <>
      <h1>Students Page</h1>
      <ul>
        {STUDENT.map((stud) => (
          <li key={stud.id}>
            <Link to={stud.id}>{stud.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StudentPage;
