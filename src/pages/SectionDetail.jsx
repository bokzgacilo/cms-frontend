import { useParams, Link } from 'react-router-dom';

const SectionDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Teacher Details</h1>
      <p>{params.sectionId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default SectionDetail;
