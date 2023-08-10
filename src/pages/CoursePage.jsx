import { Link } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Td, Th, Box } from '@chakra-ui/react';
import TableButton from '../components/TableButton';

const CoursePage = () => {
  const COURSES = [
    { id: 'c1', title: 'Course1' },
    { id: 'c2', title: 'Course2' },
    { id: 'c3', title: 'Course3' },
  ];
  //rows and colums of the table
  // const rows = Array.from({ length: 3 }, (_, rowIndex) => (
  //   <Tr key={rowIndex}>
  //     {Array.from({ length: 8 }, (_, colIndex) => (
  //       <Td key={colIndex}>
  //         Row {rowIndex + 1}, Column {colIndex + 1}
  //       </Td>
  //     ))}
  //   </Tr>
  // ));
  return (
    <>
      <h1>Course Page</h1>

      <Box
        display={{ base: 'block', md: 'flex' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems="center"
        padding={{ base: '4', md: '8' }}
      >
        <Table
          width="100%"
          border="1px"
          borderColor="gray.300"
          variant="striped"
          colorScheme="gray"
          textAlign="center"
        >
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
              <Tr key={course.id}>
                <Td>
                  <Link to={course.id}>{course.title}</Link>
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td>
                  <TableButton color="yellow">Edit</TableButton>
                </Td>
                <Td>
                  <TableButton color="red">Delete</TableButton>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default CoursePage;
