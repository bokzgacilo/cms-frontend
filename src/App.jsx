import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Pages
import RootLayout from './layout/Root';
import NotFound from './NotFound';
import HomePage from './pages/Home';
import CoursePage from './pages/CoursePage';
import CourseDetail from './pages/CourseDetail';
import StudentPage from './pages/StudentPage';
import StudentDetail from './pages/StudentDetail';
import TeacherPage from './pages/TeacherPage';
import TeacherDetail from './pages/TeacherDetail';
import SectionPage from './pages/SectionPage';
import SectionDetail from './pages/SectionDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'courses', element: <CoursePage /> },
      { path: 'courses/:courseId', element: <CourseDetail /> },
      { path: 'students', element: <StudentPage /> },
      { path: 'students/:studentId', element: <StudentDetail /> },
      { path: 'teachers', element: <TeacherPage /> },
      { path: 'teachers/:teacherId', element: <TeacherDetail /> },
      { path: 'sections', element: <SectionPage /> },
      { path: 'sections/:sectionId', element: <SectionDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
