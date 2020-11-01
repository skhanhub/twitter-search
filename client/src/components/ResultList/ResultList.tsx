import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import Card from "@material-ui/core/Card";
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TablePagination from '@material-ui/core/TablePagination';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";
import { setPageNumber, setRowsPerPage } from "../../store/actions"
import { IUserThin } from "../../store/reducers/getData"


function ResultList() {

  const dispatch = useDispatch();
  const page = useSelector((state: any) => state.formControl.page)
  const rowsPerPage = useSelector((state: any) => state.formControl.rowsPerPage)

  const loading = useSelector((state: any) => state.getData.loading)
  const users = useSelector((state: any) => state.getData.users)
  const history = useHistory();

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(setPageNumber(0));
  };

  return (
    <Card >
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {loading?
        <CircularProgress style={{ margin: 'auto' }}/>:
        <List  component="nav" aria-label="main mailbox folders">
          {users&&users.map((user: IUserThin)=>{
            return (
              <ListItem 
                button 
                key={user.id}
                onClick={event=>history.push(`/UserProfile/${user.screen_name}`)}
              >
                <ListItemText primary={user.screen_name} secondary={user.name} />
              </ListItem>
            )
          })}  
        </List>
        }
        </div>
      <TablePagination
        component="div"
        count={1000}
        page={page}
        onChangePage={(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number)=>dispatch(setPageNumber(newPage))}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10]}
      />
    </Card>
  );
}

export default ResultList;