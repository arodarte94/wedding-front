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
          <Link to={"/admin/users/" + params.row.id}>{params.row.name}</Link>
      ),
  }, 
  { field: 'email', headerName: 'Correo', width: 300 },
  // { field: 'confirmed', headerName: 'Confirmado', width: 150 },
  { field: 'confirmed_at', headerName: 'Fecha de confirmación', width: 200 },
  { field: 'guests_count', headerName: 'Extras', width: 200 },
  { field: 'type', headerName: 'Tipo', width: 200 },
  {
    field: 'group',
    headerName: 'Grupo',
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.group?.name ?? '', 
  },
  {
    field: 'host',
    headerName: 'Responsable',
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.host?.name ?? '', 
  },
  { field: 'dinner', headerName: 'Cena', width: 300 },
  
  createdAtColumn,
  updatedAtColumn
];