import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react';

const CustomTh = chakra(Th, {
  baseStyle: {
    bg: 'gray.200',
    fontWeight: 'semibold',
    p: 2,
    borderBottom: '1px solid',
    borderColor: 'gray.300',
  },
});

const CustomTd = chakra(Td, {
  baseStyle: {
    p: 2,
    borderBottom: '1px solid',
    borderColor: 'gray.300',
  },
});

const TableExample = () => {
  const rows = Array.from({ length: 8 }, (_, rowIndex) => (
    <Tr key={rowIndex}>
      {Array.from({ length: 5 }, (_, colIndex) => (
        <CustomTd key={colIndex}>
          Row {rowIndex + 1}, Column {colIndex + 1}
        </CustomTd>
      ))}
    </Tr>
  ));

  return (
    <Table variant="striped" colorScheme="gray">
      <Thead>
        <Tr>
          <CustomTh>Title</CustomTh>
          <CustomTh>Category</CustomTh>
          <CustomTh>User</CustomTh>
          <CustomTh>Status</CustomTh>
          <CustomTh>Created</CustomTh>
          <CustomTh>Updated</CustomTh>
          <CustomTh>Edit</CustomTh>
          <CustomTh>Delete</CustomTh>
        </Tr>
      </Thead>
      <Tbody>{rows}</Tbody>
    </Table>
  );
};

export default TableExample;
