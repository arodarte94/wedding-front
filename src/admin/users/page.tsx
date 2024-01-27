'use client';
import React, { useEffect } from 'react';
import { paginator } from '../lib/paginator';
import { getUsers } from './actions';
import { setData, setPage, sortTable } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/layout/appLayout';
import DataTable from '../components/tables/dataTable';
import { columns } from './columns';
import { RootState } from '../store';
import { SortTypes } from '../lib/types';
import { Button, Grid, Link } from '@mui/material';
import { Add } from '@mui/icons-material';

const Users = () => {

  const dispatcher = useDispatch();
  const { items, 
    currentPage, 
    elements, 
    itemsPerPage, 
    sortKey, 
    isLoading 
  } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    paginator(getUsers, setData, dispatcher, 'users', currentPage, itemsPerPage, sortKey);
  }, [currentPage, itemsPerPage, sortKey]);

  const onPageChange = (page: number, itemsPerPage: number) => {
    dispatcher(setPage({page, itemsPerPage}))
  }

  const onSortChange = (column: string | null, sort: SortTypes) => {
      dispatcher(sortTable({column, sort}))
  }
  
  return (
    <AppLayout>

      <Grid container item xs={12} 
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end" marginBottom={2}>
            <Link href='users/new'>
            <Button startIcon={<Add />} variant='contained'>Nuevo Invitado</Button>
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
        />
    </AppLayout>

  );
};

export default Users;