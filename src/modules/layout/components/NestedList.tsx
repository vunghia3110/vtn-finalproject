import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Divider from '@mui/material/Divider';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box } from '@mui/system';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

interface Props {
  onChangeRoute(text: string): void
}
export default function NestedList(props: Props) {
  const { onChangeRoute } = props;
  const [open, setOpen] = React.useState(false);
  const [openList, setOpenList] = React.useState([
    {
      id: 0,
      name: 'Catalog',
      open: false,
      icon: <LocalOfferOutlinedIcon />,
      children: [
        {
          id: 1,
          name: 'Product',
          open: false,
        },
      ],
    },
    {
      id: 1,
      name: 'User',
      open: false,
      icon: <GroupOutlinedIcon />,
      children: [
        {
          id: 1,
          name: 'User List',
          open: false,
        },
      ],
    },
  ]);
  
  const handleClick = (index: number) => {
    setOpenList(openList.map((item) => {
      console.log(item.id, index)
      return (item.id === index && item.open === false) ? {...item, open: true} : {...item, open: false}
    }))
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: '#323259' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {openList.map((item, index) => {
        return (
          <Box key={index}>
            <ListItemButton onClick={() => {handleClick(index)}}>
              <ListItemIcon sx={{color: '#fff'}}>{item.icon}</ListItemIcon>
              <ListItemText sx={{color: '#fff'}} primary={item.name} />
              {item.open ? <ExpandMore sx={{color: '#fff'}} /> : <KeyboardArrowLeftOutlinedIcon sx={{color: '#fff'}} />}
            </ListItemButton>
            <Collapse in={item.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.children.map((childItem, index) => {
                  return (
                    <ListItemButton sx={{ pl: 9 }} key={index}>
                      <ListItemText sx={{color: '#fff'}} primary={childItem.name} onClick={(e) => {onChangeRoute(e.currentTarget.innerText)}} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
          </Box>
        );
      })}
    </List>
  );
}
