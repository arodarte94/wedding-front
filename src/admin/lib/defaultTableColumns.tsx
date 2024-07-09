import { GridValueGetterParams } from '@mui/x-data-grid';
import { getGridStringOperators } from '@mui/x-data-grid';
import { TextFilter } from '../components/tables/columnFilter';
import DateRangePicker from '../components/inputs/DateRangePicker';

const stringOperators = getGridStringOperators().filter((op) =>
  ['contains'].includes(op.value),
);

export const transformDate = (params: GridValueGetterParams) => {
  if (!params.value) return '--';

  const date = new Date(params.value);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

export const idColumn = {
  field: 'id',
  headerName: 'ID',
  width: 100,
  filterOperators: stringOperators,
  filter: TextFilter,
};

export const nameColumn = {
  field: 'name',
  headerName: 'Nombre',
  width: 300,
};

export const createdAtColumn = {
  field: 'created_at',
  headerName: 'Fecha de creación',
  width: 200,
  valueGetter: transformDate,
  filter: DateRangePicker,
};

export const updatedAtColumn = {
  field: 'updated_at',
  headerName: 'Última actualización',
  width: 200,
  valueGetter: transformDate,
  filter: DateRangePicker,
};
