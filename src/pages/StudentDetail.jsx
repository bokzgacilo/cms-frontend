import { useParams, Link } from 'react-router-dom';

const StudentDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Student Details</h1>
      <p>{params.studentId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default StudentDetail;
