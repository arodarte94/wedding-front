import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styles from '../../styles/tables.module.scss'

export default function DataTable({ columns, 
  rows, 
  currentPage,
   elementsCount, 
   onPageChange, 
   onSortChange, 
   isLoading,
   setSelectedRows,
   itemsPerPage,
  enableCheckboxes }: 
  { columns: GridColDef[], 
    rows: any,
    currentPage: number,
    elementsCount: number,
    onPageChange: any,
    onSortChange: any,
    isLoading: boolean,
    setSelectedRows?: any,
    itemsPerPage: number,
    enableCheckboxes?: boolean
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
              paginationModel: { page: currentPage - 1, pageSize: itemsPerPage },
            },
          }}
          paginationModel={{page: currentPage - 1, pageSize: itemsPerPage}}
          paginationMode='server'
          sortingMode="server"
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? styles.even : styles.odd
          }
          onPaginationModelChange={ (e) => onPageChange(e.page + 1, e.pageSize)}
          onSortModelChange={ (e) => onSortChange(e[0]?.field, e[0]?.sort)}
          onFilterModelChange={(e) => onFilterChange(e)}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          checkboxSelection={enableCheckboxes}
          autoHeight
          keepNonExistentRowsSelected
          disableRowSelectionOnClick 
          onRowSelectionModelChange={(selectedValues) => {
            
            if(setSelectedRows)
              setSelectedRows(selectedValues);
          }}
        />
    </div>
  );
}