import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/layout/appLayout";
import DataTable from "../components/tables/dataTable";
import { columns } from "./columns";
import { RootState } from "../store";
import { Button, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { getGroups } from "./actions";
import usePaginator from "../lib/hooks/usePaginator";
import useDeleteModal from "../lib/hooks/useDeleteModal";
import { setIsLoading } from "../lib/appSlice";
import { deleteUsers } from "../users/actions";

const Groups = () => {
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
    setParams,
    removeRows,
  } = usePaginator(getGroups, "groups");

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
      >
        <Link to="new">
          <Button startIcon={<Add />} variant="contained">
            Nuevo grupo
          </Button>
        </Link>
      </Grid>

      <DataTable
        columns={columns}
        rows={items}
        currentPage={currentPage}
        elementsCount={elements}
        onPageChange={onPageChange}
        onSortChange={onSortChange}
        isLoading={isLoading}
        itemsPerPage={itemsPerPage}
        setParams={setParams}
      />
    </AppLayout>
  );
};

export default Groups;
