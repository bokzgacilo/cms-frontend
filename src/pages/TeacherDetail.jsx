import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TeacherDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Teacher Details</h1>
      <p>{params.teacherId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default TeacherDetail;
