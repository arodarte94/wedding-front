import { GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
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
          <Link to={"/users/" + params.row.id}>{params.row.name}</Link>
      ),
  }, 
  { field: 'username', headerName: 'Username', width: 200 },
  { field: 'email', headerName: 'Correo', width: 300 },
  {
    field: 'role',
    headerName: 'Rol',
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.role?.name ?? '', 
  },
  createdAtColumn,
  updatedAtColumn
];