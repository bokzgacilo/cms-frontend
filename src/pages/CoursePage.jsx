import { Link } from 'react-router-dom';
import TableExample from '../components/SampleTable';

const CoursePage = () => {
  const COURSES = [
    { id: 'c1', title: 'Course1' },
    { id: 'c2', title: 'Course2' },
    { id: 'c3', title: 'Course3' },
  ];
  return (
    <>
      <h1>Course Page</h1>
      <ul>
        {COURSES.map((course) => (
          <li key={course.id}>
            <Link to={course.id}>{course.title}</Link>
          </li>
        ))}
      </ul>
      <TableExample />
    </>
  );
};

export default CoursePage;
