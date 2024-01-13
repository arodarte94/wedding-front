import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styles from '../../styles/tables.module.scss'

const onFilterChange = (e) => {
  console.log(e);
}

export default function DataTable({ columns, 
  rows, 
  currentPage,
   elementsCount, 
   onPageChange, 
   onSortChange, 
   isLoading }: 
  { columns: GridColDef[], 
    rows: any,
    currentPage: number,
    elementsCount: number,
    onPageChange: any,
    onSortChange: any,
    isLoading: boolean
  }) {

  return (
    <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowCount={elementsCount}
          loading={isLoading}
          initialState={{
            pagination: {
              paginationModel: { page: currentPage - 1, pageSize: 10 },
            },
          }}
          paginationMode='server'
          sortingMode="server"
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? styles.even : styles.odd
          }
          onPaginationModelChange={ (e) => onPageChange(e.page + 1, e.pageSize)}
          onSortModelChange={ (e) => onSortChange(e[0]?.field, e[0]?.sort)}
          onFilterModelChange={(e) => onFilterChange(e)}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          checkboxSelection
          autoHeight
          keepNonExistentRowsSelected
          disableRowSelectionOnClick 
        />
    </div>
  );
}