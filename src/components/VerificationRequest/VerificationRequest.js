import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea} from '@mui/material';
// import { makeStyles } from '@mui/styles';
import './VerificationRequest.css';

import { useNavigate } from "react-router-dom";



export default function VerificationRequest(props) {

  const navigate = useNavigate();

  //const classes = useStyles();
  

  const handleButtonClick = (event) => {
    console.log("Button clicked");
    console.log(event.target.attributes.idd.value);
    let requestId = event.target.attributes.idd.value;
    navigate(`/requestdetail/${requestId}`);
  }

  return (
    <div>
      <Card className='inline-display' sx={{ marginLeft: 2,marginBottom: 2 ,maxWidth: 345 }}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="140"
            image="http://bitly.ws/sRh3"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Request by {props.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              some caption of user
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button idd={props.username} onClick={handleButtonClick} sx={{margin: 2,backgroundColor: '#A0D995', color: 'black',
          '&:hover': {backgroundColor: '#A0D995',
                      opacity: [0.9,0.8,0.7]
                     },
                    }} 
           variant="outlined">
            See Details
            </Button>
      </Card>
    </div>
  );
}
