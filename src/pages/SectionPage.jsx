import { Link } from 'react-router-dom';

const SectionPage = () => {
  const SECTION = [
    { id: 'sec1', title: 'Section1' },
    { id: 'sec2', title: 'Section2' },
    { id: 'sec3', title: 'Section3' },
  ];
  return (
    <>
      <h1>Sections Page</h1>
      <ul>
        {SECTION.map((sec) => (
          <li key={sec.id}>
            <Link to={sec.id}>{sec.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SectionPage;
