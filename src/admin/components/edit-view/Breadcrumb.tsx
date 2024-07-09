import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';

const Breadcrumb = ({
  link,
  name,
  element,
}: {
  link: string;
  name: string;
  element: string | undefined;
}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 1 }}>
      <Link color="inherit" to={link}>
        {name}
      </Link>
      <Link color="inherit" to="#">
        {element ?? 'Nuevo'}
      </Link>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
