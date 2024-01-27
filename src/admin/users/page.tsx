"use client";
import React, { useEffect, useState } from "react";
import { paginator } from "../lib/paginator";
import { getUsers } from "./actions";
import { setData, setPage, sortTable } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/layout/appLayout";
import DataTable from "../components/tables/dataTable";
import { columns } from "./columns";
import { RootState } from "../store";
import { SortTypes } from "../lib/types";
import { Button, Checkbox, FormControlLabel, Grid, Link } from "@mui/material";
import { Add } from "@mui/icons-material";
const Users = () => {
  const dispatcher = useDispatch();
  const { items, currentPage, elements, itemsPerPage, sortKey, isLoading } =
    useSelector((state: RootState) => state.users);
  const [types, setTypes] = useState([]);
  const [confirmed, setConfirmed] = useState(null);
  useEffect(() => {
    paginator(
      getUsers,
      setData,
      dispatcher,
      "users",
      currentPage,
      itemsPerPage,
      sortKey,
      { type: types, confirmed: confirmed }
    );
  }, [currentPage, itemsPerPage, sortKey, types, confirmed]);
  const onPageChange = (page: number, itemsPerPage: number) => {
    dispatcher(setPage({ page, itemsPerPage }));
  };
  const onSortChange = (column: string | null, sort: SortTypes) => {
    dispatcher(sortTable({ column, sort }));
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
        <Link href="users/new">
          <Button startIcon={<Add />} variant="contained">
            Nuevo Invitado 
          </Button>
        </Link>
      </Grid>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e, val) => {
              if (val) {
                setTypes([...types, 1]);
              } else {
                setTypes(types.filter((i) => i != 1));
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
                setTypes([...types, 2]);
              } else {
                setTypes(types.filter((i) => i != 2));
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
                setTypes([...types, 3]);
              } else {
                setTypes(types.filter((i) => i != 3));
              }
            }}
          />
        }
        label="Niños"
      />

    <FormControlLabel
        control={
          <Checkbox
            onChange={(e,val) => setConfirmed( val? 1 : 0)}
          />
        }
        label="Confirmados"
      />
      
      
        <span style={{fontStyle: "italic", color: '#555555'}}>
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
      />
    </AppLayout>
  );
};
export default Users;
