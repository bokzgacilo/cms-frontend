import { Link } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react';

const CoursePage = () => {
  const COURSES = [
    { id: 'c1', title: 'Course1' },
    { id: 'c2', title: 'Course2' },
    { id: 'c3', title: 'Course3' },
  ];
  // const rows = Array.from({ length: 8 }, (_, rowIndex) => (
  //   <Tr key={rowIndex}>
  //     {Array.from({ length: 6 }, (_, colIndex) => (
  //       <Td key={colIndex}>
  //         Row {rowIndex + 1}, Column {colIndex + 1}
  //       </Td>
  //     ))}
  //   </Tr>
  // ));
  return (
    <>
      <h1>Course Page</h1>

      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Category</Th>
            <Th>User</Th>
            <Th>Status</Th>
            <Th>Created</Th>
            <Th>Updated</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {COURSES.map((course) => (
            <Td key={course.id}>
              <Link to={course.id}>{course.title}</Link>
            </Td>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default CoursePage;
