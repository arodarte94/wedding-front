import { deleteUsers, getUsers } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/layout/appLayout";
import DataTable from "../components/tables/dataTable";
import { columns } from "./columns";
import { RootState } from "../store";
import { Grid } from "@mui/material";
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
    onPageChange,
    onSortChange,
    setSelectedRows,
    setParams,
    removeRows,
  } = usePaginator(getUsers, "users");

  const { openDeleteModal, toggleModal, handleDelete } = useDeleteModal();
  const appState = useSelector((state: RootState) => state.app);

  const deleteSelected = async () => {
    dispatcher(setIsLoading(true));
    const response = await deleteUsers(selectedRows);
    handleDelete(response, () => removeRows(selectedRows));
  };

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
      ></Grid>
      <TableOptions
        editButton={{ link: "/admin/users/new", label: "Nuevo invitado" }}
        deleteButton={{
          fn: () => toggleModal(true),
          label: "Eliminar invitados",
          active: selectedRows.length > 0,
        }}
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
        setParams={setParams}
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
