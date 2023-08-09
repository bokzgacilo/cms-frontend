import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { Flex } from '@chakra-ui/react';

const MainNavigation = () => {
  return (
    <Flex
      height={'40px'}
      width={'full'}
      border={'1px solid black'}
      justify={'center'}
      align={'center'}
    >
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              to="/courses"
            >
              Course
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              to="/students"
            >
              Student
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              to="/teachers"
            >
              Teacher
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              to="/sections"
            >
              Section
            </NavLink>
          </li>
        </ul>
      </nav>
    </Flex>
  );
};

export default MainNavigation;
