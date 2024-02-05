import { deleteUsers, getUsers } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/layout/appLayout";
import DataTable from "../components/tables/dataTable";
import { columns } from "./columns";
import { RootState } from "../store";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import DeleteModal from "../components/layout/deleteModal";
import usePaginator from "../lib/hooks/usePaginator";
import useDeleteModal from "../lib/hooks/useDeleteModal";
import { setIsLoading } from "../lib/appSlice";
import TableOptions from "../components/tables/tableOptions";

const Users = () => {
  const dispatcher = useDispatch();
  const {
    currentPage,
    elements,
    isLoading,
    items,
    selectedRows,
    itemsPerPage,
    customParams,
    onPageChange,
    onSortChange,
    setCustomParams,
    setSelectedRows,
    removeRows,
  } = usePaginator(getUsers, "users");

  const { openDeleteModal, toggleModal, handleDelete } = useDeleteModal();
  const appState = useSelector((state: RootState) => state.app);

  const deleteSelected = async () => {
    dispatcher(setIsLoading(true));
    const response = await deleteUsers(selectedRows);
    handleDelete(response, () => removeRows(selectedRows));
  };

  const filterType = (type) => {

    if(typeof customParams?.type?.length ) 
      return customParams?.type.filter((i) => i != type)

    return null;
  }
  return (
    <AppLayout>
      <Grid
        container
        item
        xs={12}
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        marginBottom={2}
      >
      </Grid>
      <TableOptions
        editButton={{ link: "/admin/users/new", label: "Nuevo usuario" }}
        deleteButton={{
          fn: () => toggleModal(true),
          label: "Eliminar usuarios",
          active: selectedRows.length > 0,
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e, val) => {
              if (val) {
                setCustomParams({...customParams, type: [ ...customParams?.type ?? [], 1]});
              } else {
                setCustomParams({...customParams, type: filterType(1) } );
              }
            }}
          />
        }
        label="Principales"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e, val) => {
              if (val) {
                setCustomParams({...customParams, type: [ ...customParams?.type ?? [], 2]});
              } else {
                setCustomParams({...customParams, type: filterType(2) } );
              }
            }}
          />
        }
        label="Acompañantes"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e, val) => {
              if (val) {
                setCustomParams({...customParams, type: [ ...customParams?.type ?? [], 3]});
              } else {
                setCustomParams({...customParams, type: filterType(3) } );
              }
            }}
          />
        }
        label="Niños"
      />

      <FormControlLabel
        control={<Checkbox onChange={(e, val) => setCustomParams({...customParams, confirmed: val ? 1 : 0})} />}
        label="Confirmados"
      />

      <span style={{ fontStyle: "italic", color: "#555555" }}>
        {elements} - invitados encontrados
      </span>
      <DataTable
        columns={columns}
        rows={items}
        currentPage={currentPage}
        elementsCount={elements}
        onPageChange={onPageChange}
        onSortChange={onSortChange}
        isLoading={isLoading}
        itemsPerPage={itemsPerPage}
        setSelectedRows={(selected: any) => setSelectedRows(selected)}
        enableCheckboxes
      />
      <DeleteModal
        open={openDeleteModal}
        close={() => toggleModal(false)}
        deleteElements={deleteSelected}
        isLoading={appState.isLoading}
      >
        ¿Estás seguro de eliminar los {selectedRows.length} usuarios
        seleccionados?
      </DeleteModal>
    </AppLayout>
  );
};
export default Users;
