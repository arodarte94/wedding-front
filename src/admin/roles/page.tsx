import { deleteRoles, getRoles } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/layout/appLayout";
import DataTable from "../components/tables/dataTable";
import { columns } from "./columns";
import { RootState } from "../store";
import TableOptions from "../components/tables/tableOptions";
import DeleteModal from "../components/layout/deleteModal";
import ComboBox from "../components/inputs/ComboBox";
import { setIsLoading } from "../lib/appSlice";
import { useState } from "react";
import usePaginator from "../lib/hooks/usePaginator";
import useDeleteModal from "../lib/hooks/useDeleteModal";

const Roles = () => {

  const dispatcher = useDispatch();
  const appState = useSelector((state: RootState) => state.app);
  const [replacementRole, setReplacementRole] = useState(null);

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
    removeRows,
  } = usePaginator(getRoles, "roles");

  const {openDeleteModal, toggleModal, handleDelete} = useDeleteModal();

  const deleteSelected = async () => {
    dispatcher(setIsLoading(true))
    const response = await deleteRoles(selectedRows, replacementRole);
    handleDelete(response, () => removeRows(selectedRows));
  };

  return (
    <AppLayout>
      <TableOptions
        editButton={{ link: "/roles/new", label: "Nuevo rol" }}
        deleteButton={{
          fn: () => toggleModal(true),
          label: "Eliminar roles",
          active: selectedRows.length > 0,
        }}
      />
      <DataTable
        columns={columns}
        rows={items}
        currentPage={currentPage}
        elementsCount={elements}
        onPageChange={(onPageChange)}
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
       <p>¿Estás seguro de eliminar los {selectedRows.length} roles seleccionados?</p>
        <p>
        Para poder eliminar estos roles, debes seleccionar el nuevo rol que
        tendrán todos los usuarios que estaban asignados a estos roles.
        </p>
        <ComboBox
          src={getRoles}
          async
          required
          field="name"
          fieldKey="role"
          responseProperty="roles"
          label="Rol"
          set={(newValue: any) => setReplacementRole(newValue)}
        ></ComboBox>
      </DeleteModal>
    </AppLayout>
  );
};

export default Roles;
