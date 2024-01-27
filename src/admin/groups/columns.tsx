import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { createdAtColumn, idColumn, nameColumn, updatedAtColumn } from '../lib/defaultTableColumns';
import { Link } from 'react-router-dom'

export const columns: GridColDef[] = [
  idColumn,
  { 
    field: 'name',
    headerName: 'Nombre',
    width: 300,
    //  renderHeader: (params: GridColumnHeaderParams) => (
    //      <ColumnFilter title={'ID'} type={'text'} field={params.field}></ColumnFilter>
    //   )},
  renderCell: (params: GridRenderCellParams<any, Date>) => (
          <Link to={"/admin/groups/" + params.row.id}>{params.row.name}</Link>
      ),
  }, 
  { field: 'capacity', headerName: 'Capacidad', width: 200 },
  { field: 'users_count', headerName: 'Invitados', width: 100 },
  createdAtColumn,
  updatedAtColumn
];