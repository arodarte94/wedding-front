import { DataGrid, GridColDef, esES } from "@mui/x-data-grid";
import styles from "../../styles/tables.module.scss";
import { Box } from "@mui/material";
import ColumnFilter from "./columnFilter";
import NoRows from "./NoRows";
import { useEffect, useRef } from "react";

export default function DataTable({
  columns,
  rows,
  currentPage,
  elementsCount,
  onPageChange,
  onSortChange,
  isLoading,
  setSelectedRows,
  itemsPerPage,
  enableCheckboxes,
  setParams,
}: {
  columns: GridColDef[];
  rows: any;
  currentPage: number;
  elementsCount: number;
  onPageChange: any;
  onSortChange: any;
  isLoading: boolean;
  setSelectedRows?: any;
  itemsPerPage: number;
  enableCheckboxes?: boolean;
  setParams?: any;
}) {
  const gridRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleGridScroll = (event) => {
      headerRef.current.scrollLeft = event.target.scrollLeft;
    };

    const handleHeaderScroll = (event) => {
      const scroller = gridRef.current.querySelector(
        ".MuiDataGrid-virtualScroller",
      );
      if (scroller) {
        scroller.scrollLeft = event.target.scrollLeft;
      }
    };

    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          const scroller = gridRef.current.querySelector(
            ".MuiDataGrid-virtualScroller",
          );
          if (scroller) {
            scroller.addEventListener("scroll", handleGridScroll);
            observer.disconnect();
          }
        }
      }
    });

    observer.observe(gridRef.current, { childList: true, subtree: true });

    headerRef.current.addEventListener("scroll", handleHeaderScroll);

    return () => {
      observer.disconnect();
      if (headerRef.current) {
        headerRef.current.removeEventListener("scroll", handleHeaderScroll);
      }
    };
  }, []);

  return (
    <div style={{ height: 500, width: "100%" }} ref={gridRef}>
      <Box className={styles.tableHeaderWrapper} ref={headerRef}>
        <Box className={styles.tableHeader}>
          {enableCheckboxes && (
            <Box
              className={[styles.tableSearchColumn, styles.checkBoxColumn].join(
                " ",
              )}
              sx={{ width: "50px" }}
            ></Box>
          )}
          {columns.map((column) => {
            return (
              <Box
                className={styles.tableSearchColumn}
                sx={{ width: column.width }}
              >
                <ColumnFilter
                  filter={column.filter}
                  title={column.headerName}
                  field={column.field}
                  set={setParams}
                  property={column?.property}
                  isLoading={isLoading}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
      <DataGrid
        sx={{ backgroundColor: "#fff" }}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        hideFooterPagination={isLoading}
        rows={rows}
        columns={columns}
        rowCount={elementsCount}
        loading={isLoading}
        slots={{ noRowsOverlay: NoRows }}
        initialState={{
          pagination: {
            paginationModel: { page: currentPage - 1, pageSize: itemsPerPage },
          },
        }}
        paginationModel={{ page: currentPage - 1, pageSize: itemsPerPage }}
        paginationMode="server"
        sortingMode="server"
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? styles.even : styles.odd
        }
        onPaginationModelChange={(e) => onPageChange(e.page + 1, e.pageSize)}
        onSortModelChange={(e) => onSortChange(e[0]?.field, e[0]?.sort)}
        // onFilterModelChange={(e) => onFilterChange(e)}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        checkboxSelection={enableCheckboxes}
        autoHeight
        keepNonExistentRowsSelected
        disableRowSelectionOnClick
        onRowSelectionModelChange={(selectedValues) => {
          if (setSelectedRows) setSelectedRows(selectedValues);
        }}
      />
    </div>
  );
}
