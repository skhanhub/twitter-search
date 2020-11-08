import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { searchUsers, setSearchText } from "../../store/actions";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function TwitterForm() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const search = useSelector((state: any) => state.formControl.search)
  const page = useSelector((state: any) => state.formControl.page)
  const rowsPerPage = useSelector((state: any) => state.formControl.rowsPerPage)


  useEffect(()=>{
    dispatch(searchUsers(search, page, rowsPerPage));
  }, [page, rowsPerPage])
  
  const handleSearchUser = (event: any)=>{
    event.preventDefault();
    dispatch(searchUsers(search, page, rowsPerPage));
  }

  return (
    <Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CardContent>
        <form 
          onSubmit={handleSearchUser} 
          className={classes.root} 
          noValidate 
          autoComplete="off"
        >
          <TextField 
            variant="outlined" 
            value={search}
            placeholder="search"
            onChange={(event)=>{
              event.preventDefault(); 
              dispatch(setSearchText(event.target.value));
            }}
          />
          <Button 
            style={{margin: '0.5rem 1rem'}}
            variant="contained" 
            color="primary"
            data-testid="searchButton"
            onClick={handleSearchUser}
          >
            Search
          </Button>
        </form>

      </CardContent>
    </Card>
  );
}

export default TwitterForm;