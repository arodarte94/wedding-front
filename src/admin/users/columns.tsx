import { GridCellParams, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import { createdAtColumn, idColumn, updatedAtColumn } from '../lib/defaultTableColumns';
import { Link } from 'react-router-dom'
import styles from "../styles/tables.module.scss";
import { TextFilter } from '../components/tables/columnFilter';
import DateRangePicker from '../components/inputs/DateRangePicker';
export const columns: GridColDef[] = [

  idColumn,
  { 
    field: 'name',
    headerName: 'Nombre',
    width: 300,
    filter: TextFilter,
    //  renderHeader: (params: GridColumnHeaderParams) => (
    //      <ColumnFilter title={'ID'} type={'text'} field={params.field}></ColumnFilter>
    //   )},
  renderCell: (params: GridRenderCellParams<any, Date>) => (
          <Link to={"/admin/users/" + params.row.id}>{params.row.name}</Link>
      ),
  }, 
  { field: 'email', headerName: 'Correo', width: 250, filter: TextFilter, },
  // { field: 'confirmed', headerName: 'Confirmado', width: 150 },
  { field: 'confirmed_at', headerName: 'Fecha de confirmación', width: 200, filter: DateRangePicker, },
  { field: 'guests_count', headerName: 'Extras utilizados', width: 200, filter: TextFilter, },
  { field: 'slots', headerName: 'Extras disponibles', width: 200, filter: TextFilter, },
  { 
    field: 'type', 
    headerName: 'Tipo', 
    width: 200 ,
    filter: TextFilter,
    cellClassName: (params: GridCellParams) =>
    {
      if(params.row.type === "Acompañante")
        return styles.guest;
    
      else if(params.row.type === "Niño acompañante")
        return styles.guestChild;
    }
  },
  {
    field: 'group',
    headerName: 'Grupo',
    width: 200,
    filter: TextFilter,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.group?.name ?? '', 
  },
  {
    field: 'host',
    headerName: 'Responsable',
    width: 200,
    filter: TextFilter,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.host?.name ?? '', 
  },
  { field: 'entree', headerName: 'Entrada', width: 250, filter: TextFilter, },
  { field: 'dinner', headerName: 'Cena', width: 250, filter: TextFilter, },
  
  createdAtColumn,
  updatedAtColumn
];