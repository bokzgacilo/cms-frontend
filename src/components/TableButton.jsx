import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const TableButton = (props) => {
  return (
    <Button colorScheme={props.color} size="sm">
      {props.children}
    </Button>
  );
};

TableButton.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TableButton;
