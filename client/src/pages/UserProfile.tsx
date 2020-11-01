import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getUserDetails } from "../store/actions";
import { ITweet } from "../store/reducers/getData";

const useStyles = makeStyles({
  root: {
  },
  media: {
    height: 140,
  },
});

export default function App() {
  const classes = useStyles();
  const { screen_name }: any = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.getData.userDetails)
  const loading: boolean = useSelector((state: any) => state.getData.loading)
  const history = useHistory();

  useEffect(()=>{
    if(screen_name) dispatch(getUserDetails(screen_name));
  }, [])

  return (
    <>
    {!loading && user ?
      <Card className={classes.root}>
        <CardContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div >
          {<Avatar alt="Remy Sharp" src={user.profile_image_url_https}/>}
          <Typography gutterBottom variant="h5" component="h2" >
            {user.screen_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.screen_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.followers_count}
          </Typography>
          </div>
          <List>
            {user.last_five_tweets.map((tweet: ITweet)=>
              (<ListItem key={tweet.id}>
                <ListItemText
                  primary={tweet.tweet}
                />
              </ListItem>)
            )}
          </List>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={event=>history.push('/')}>
            Go Back
          </Button>
        </CardActions>
      </Card>:
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress  /></div>
      
    }
  </>
  );
}