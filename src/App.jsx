import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Pages
import HomePage from './layout/Home';
import CoursePage from './pages/CoursePage';
import CourseDetail from './pages/CourseDetail';
import StudentPage from './pages/StudentPage';
import StudentDetail from './pages/StudentDetail';
import TeacherPage from './pages/TeacherPage';
import TeacherDetail from './pages/TeacherDetail';
import SectionPage from './pages/SectionPage';
import SectionDetail from './pages/SectionDetail';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          exact 
          path="/" 
          element={ <HomePage />} 
        />

        <Route 
          path="/courses" 
          element={ <CoursePage />} 
        />

        <Route 
          path="/courses/:id" 
          element={ <CourseDetail />} 
        />

        <Route 
          path="/students" 
          element={ <StudentPage />} 
        />

        <Route 
          path="/students/:id" 
          element={ <StudentDetail />} 
        />

        <Route 
          path="/teachers" 
          element={ <TeacherPage />} 
        />

        <Route 
          path="/teachers/:id" 
          element={<TeacherDetail />} 
        />

        <Route 
          path="/sections" 
          element={<SectionPage />} 
        />

        <Route 
          path="/sections/:id" 
          element={<SectionDetail />} 
        />

        <Route 
          path="*"
          element={<NotFound />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
