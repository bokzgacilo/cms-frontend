import React from 'react';
import { Link } from 'react-router-dom';

const TeacherPage = () => {
  const TEACHER = [
    { id: 't1', title: 'Teacher1' },
    { id: 't2', title: 'Teacher2' },
    { id: 't3', title: 'Teacher3' },
  ];
  return (
    <>
      <h1>Teachers Page</h1>
      <ul>
        {TEACHER.map((teach) => (
          <li key={teach.id}>
            <Link to={teach.id}>{teach.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeacherPage;
