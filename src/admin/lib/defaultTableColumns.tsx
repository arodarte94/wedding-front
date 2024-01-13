import { GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import { getGridStringOperators } from "@mui/x-data-grid";

const stringOperators = getGridStringOperators().filter((op => ['contains'].includes(op.value)));

const transformDate = (params: GridValueGetterParams) => {
    
  if(!params.value)
      return "--";
  
    const date = new Date(params.value);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
}

export const idColumn =   { 
field: 'id',
headerName: 'ID',
width: 100,
filterOperators: stringOperators
//  renderHeader: (params: GridColumnHeaderParams) => (
//      <ColumnFilter title={'ID'} type={'text'} field={params.field}></ColumnFilter>
//   )},
}

export const nameColumn =   { 
  field: 'name',
  headerName: 'Nombre',
width: 300,
  //  renderHeader: (params: GridColumnHeaderParams) => (
  //      <ColumnFilter title={'ID'} type={'text'} field={params.field}></ColumnFilter>
  //   )},
// renderCell: (params: GridRenderCellParams<any, Date>) => (
//         <Link href={"roles/" + params.row.id}>{params.row.name}</Link>
//     ),
} 

export const createdAtColumn =   { 
    field: 'created_at', 
    headerName: 'Fecha de creación', 
width: 220,
    valueGetter: transformDate
  };

  export const updatedAtColumn =   { 
    field: 'updated_at', 
    headerName: 'Última actualización', 
    width: 220,
    valueGetter: transformDate,
  };