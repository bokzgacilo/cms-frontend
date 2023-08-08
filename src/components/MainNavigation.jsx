import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className="w-full h-[40px] border flex font-bold  justify-center items-center">
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
    </header>
  );
};

export default MainNavigation;
