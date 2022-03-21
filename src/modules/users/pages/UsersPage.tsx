import { Button, Container, CssBaseline, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'typesafe-actions';
import { API_PATHS } from '../../../configs/api';
import { User, UserFilter } from '../../../models/user';
import { AppState } from '../../../redux/reducer';
import { fetchThunk } from '../../common/redux/thunk';
import UsersFooter from '../components/UsersFooter';
import UsersFilter from '../components/UsersFilter';
import UsersTable from '../components/UsersTable';
import TableSkeleton from '../components/TableSkeleton';
import LayoutForm from '../../layout/components/LayoutForm';

const ProductsListPage = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [tableData, setTableData] = useState<User[]>();
  const [filterValue, setFilterValue] = useState<UserFilter>();
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    itemPerPage: 25,
  });
  const [totalItem, setTotalItem] = useState(1000);

  const handleFilter = (data: UserFilter) => {
    setFilterValue(data);
  };

  const fetchProductData = useCallback(async () => {
    const resp = await dispatch(
      fetchThunk(API_PATHS.getUsers, 'post', { ...filterValue, page: pageInfo.page, count: pageInfo.itemPerPage }),
    );
    console.log(resp);
    if (resp.data && resp.success) {
      setTableData(
        resp.data.map((item: User) => {
          return { ...item, checked: false };
        }),
      );
      setTotalItem(resp.recordsFiltered);
      return;
    }

    console.log('error');

    return;
  }, [dispatch, pageInfo.itemPerPage, pageInfo.page, filterValue]);

  const handleChangePage = useCallback(
    (e: React.ChangeEvent<unknown>, num: number) => {
      setPageInfo({ ...pageInfo, page: num });
    },
    [pageInfo],
  );

  const handleChangItemPerPage = useCallback(
    (num: number) => {
      setPageInfo({ ...pageInfo, itemPerPage: num });
    },
    [pageInfo],
  );

  const handleCheckAll = useCallback((check: boolean) => {
    setTableData((prev) => {
      return prev?.map((item) => {
        return { ...item, checked: check };
      });
    });
  }, []);

  const handleCheckBox = useCallback((id: string) => {
    setTableData((prev) => {
      return prev?.map((item) => {
        if (item.profile_id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
    });
  }, []);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  return (
    <LayoutForm>
      <CssBaseline />
      <div style={{ width: '100%', backgroundColor: '#1b1b38', display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth="lg" sx={{ padding: '16px' }}>
          <Typography variant='h4' sx={{ color: 'white' }}>Search for users</Typography>
          <UsersFilter handleFilter={handleFilter} />
          <div style={{ height: '40px', margin: '20px 0px' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#b18aff',
                '&: hover': {
                  backgroundColor: '#b18aff',
                  color: 'black',
                },
              }}
            >
              Add User
            </Button>
          </div>
          {tableData ? (
            <UsersTable tableData={tableData} handleCheckBox={handleCheckBox} handleCheckAll={handleCheckAll} />
          ) : (
            <TableSkeleton />
          )}

          <UsersFooter
            currPage={pageInfo.page}
            itemPerPage={pageInfo.itemPerPage}
            totalItem={totalItem}
            handleChangePage={handleChangePage}
            handleChangItemPerPage={handleChangItemPerPage}
          />
        </Container>
      </div>
    </LayoutForm>
  );
};

export default ProductsListPage;
