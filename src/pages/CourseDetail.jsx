import { useParams, Link } from 'react-router-dom';

const CourseDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Course Details</h1>
      <p>{params.courseId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default CourseDetail;
