import { Table, TableBody, TableContainer } from '@mui/material';
import React, { useState } from 'react';
import { User } from '../../../models/user';
import TableHeader from './TableHeader';
import UserItem from './UserItem';

type Order = 'asc' | 'desc';

interface Props {
  tableData: User[];
  handleCheckAll(check: boolean): void;
  handleCheckBox(id: string): void;
}

const UsersTable = (props: Props) => {
  const { tableData, handleCheckAll, handleCheckBox } = props;
  const [fieldSort, setFieldSort] = useState('');
  const [orderSort, setOrderSort] = useState<Order>('asc');

  const handleSort = (name: string) => {
    const isAsc = fieldSort === name && orderSort === 'asc';
    setOrderSort(isAsc ? 'desc' : 'asc');
    setFieldSort(name);
  };

  return (
    <TableContainer sx={{ marginTop: '20px', backgroundColor: '#323259', width: '100%'}}>
      <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
        <TableHeader
          fieldSort={fieldSort}
          orderSort={orderSort}
          handleSort={handleSort}
          handleCheckAll={handleCheckAll}
        />
        <TableBody>
          {tableData?.map((item) => (
            <UserItem key={item.profile_id} data={item} onCheckBox={handleCheckBox} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;