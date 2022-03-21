import React from 'react';
import dayjs from 'dayjs';

import { Checkbox, Divider, TableCell, TableRow, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { User } from '../../../models/user';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles(() => ({
  divider: {
    background: 'white',
    minHeight: '20px',
    margin: 'auto',
  },
}));

interface Props {
  data: User;
  onCheckBox(id: string): void;
}
const UserItem = (props: Props) => {
  const { data, onCheckBox } = props;

  const classes = useStyles()
  return (
    <TableRow>
      <TableCell padding="checkbox">
        <div style={{ display: 'flex', margin: 'auto', borderRight: '1px dashed white'  }}>
          <Checkbox sx={{ color: 'white' }} size="small" checked={data.checked} onChange={() => onCheckBox(data.profile_id)} />
        </div>
      </TableCell>
      <TableCell align="left" padding="normal" sx={{ color: 'white' }}>
          <Typography sx={{ fontSize: '13px', width: '100%' }} noWrap>
            {data.vendor}
          </Typography>
          <Typography sx={{ fontSize: '13px', width: '100%' }} noWrap>
            {data.storeName}
          </Typography>
      </TableCell>
      <TableCell align="left" style={{ minWidth: 190, maxWidth: 190, color: 'white' }}>
        <Typography sx={{ fontSize: '13px', width: '100%' }} noWrap>
          {data.fistName + ' ' + data.lastName}
        </Typography>
      </TableCell>
      <TableCell align="left" sx={{ color: 'white' }}>
        <Typography sx={{ fontSize: '13px' }} noWrap>
          {data.access_level}
        </Typography>
      </TableCell>
      <TableCell align="left" sx={{ color: 'white' }}>
        <Typography sx={{ fontSize: '13px' }} noWrap>
          {data.product}
        </Typography>
      </TableCell>
      <TableCell align="left" style={{ minWidth: 50, maxWidth: 50, color: 'white' }}>
        <Typography sx={{ fontSize: '13px' }} noWrap>
          {data.order.order_as_buyer_total}
        </Typography>
      </TableCell>
      <TableCell align="left" style={{ minWidth: 110, maxWidth: 110, color: 'white' }}>
        <Typography sx={{ fontSize: '13px' }} noWrap>
          {data.wishlist}
        </Typography>
      </TableCell>
      <TableCell align="left" style={{ minWidth: 20, color: 'white' }}>
        <Typography sx={{ fontSize: '13px' }} noWrap>
          {dayjs(new Date(+data.created * 1000)).format('MMM D, YYYY h:mm A')}
        </Typography>
      </TableCell>
      <TableCell align="left" style={{ minWidth: 20, color: 'white' }}>
        <Typography sx={{ fontSize: '13px' }} noWrap>
          {dayjs(new Date(+data.last_login * 1000)).format('MMM D, YYYY h:mm A')}
        </Typography>
      </TableCell>
      <TableCell align="left" style={{ minWidth: 70, maxWidth: 70, color: 'white' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ margin: 'auto', borderRight: '1px dashed white', marginRight: '8px', minHeight: '30px' }}></div>
          <div
            onClick={() => {
              onCheckBox(data.profile_id);
            }}
            style={{ padding: '2px', backgroundColor: '#e993f9', borderRadius: '5px' }}
          >
            <DeleteIcon />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default UserItem;
