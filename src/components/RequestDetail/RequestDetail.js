import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { Grid, Stack } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import './RequestDetail.css';

//import './UserProfile.css';


import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));


  const itemData = [
        {
        img: 'http://bitly.ws/sDBC',
        title: 'Breakfast',
        }
    ];

export default function RequestDetail(props) {

    
    let params = useParams();

    // async function getData(){
        
    //     //console.log(props.userId);

    //     console.log(params.userId);
    //     let userIdObj = {
    //         username: params.userId
    //     };

    //     let url = 'http://localhost:8080/users/profile';
    //     let options = {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(userIdObj)
    //     }
    //     //console.log("fetch scheduled");
    //     let res = await fetch(url, options);
    //     let data = await res.json();
    //     console.log(data);
    //     if(data.status === 'success'){
    //         setProfileData({flag: true, proData: data.userdetail});
    //     }
    //     else{
    //         console.log("some error in getting profile data");
    //     }
    //     //setPostsData({flag: true, posData: data});
        
    // }

    // React.useEffect(() => {
    //     //console.log("useEff Called");
    //     getData();
    // },[]);

  return (
    <div >

        { true &&
        <div>

            {/* <Card style={{backgroundColor: "#FFDEDE"}} variant = "shadow-box-example z-depth-5" sx={{ maxWidth: 345, margin: 10 }}>
            <CardContent >
                <Typography variant="h5" component="div">
                Username: {params.reqId}
                </Typography>
                <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Contact: 99999 88888
                </Typography>
                <Typography variant="body2">
                <br />
                My Bioo
                </Typography>
            </CardContent>
            <CardActions>
                
                    <Button style={{backgroundColor: "#EB4747" , color: "#ABC9FF"}} size="small">See Posts</Button>
                
            </CardActions>
            </Card> */}
            <Box display= "flex" justifyContent="center" alignItems="center">
                <Typography alignItems="center" variant="h4" component="div">
                    <i>User Details</i>
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <Stack sx={{ marginLeft: 2, marginTop: 4 }} spacing={2} direction="column">
                    <Paper sx={{backgroundColor: "#E7F6F2"}}>
                        <Typography sx={{margin: 1}} variant="h5" component="div">
                            Username: {params.reqId}
                        </Typography>
                    </Paper>
                    <Paper sx={{backgroundColor: "#E7F6F2"}}>
                        <Typography  sx={{ fontSize: 15, margin: 1 }} gutterBottom>
                            Contact: 99999 88888
                        </Typography>
                    </Paper>
                    <Paper sx={{backgroundColor: "#E7F6F2"}}>
                        <Typography sx={{margin: 1}} variant="body">
                            Email: abc@gmail.com
                        </Typography>
                    </Paper>
                    <Paper sx={{backgroundColor: "#E7F6F2"}}>
                        <Typography sx={{margin: 1}} variant="body">
                            Address: xyz
                        </Typography>
                    </Paper>
                    <Paper sx={{backgroundColor: "#E7F6F2"}}>
                        <Typography sx={{margin: 1}} variant="body">
                            Occupation
                        </Typography>
                    </Paper>
                </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Box  sx={{marginTop: 3, marginLeft: 8 }}>
                        <img className='image-border' src = "http://bitly.ws/sDBC" height="250" width="300"></img>
                    </Box>
                {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList> */}
                </Grid>
                
            </Grid>

            <Box margin={2} display= "flex" justifyContent="center" alignItems="center">
                <Typography alignItems="center" variant="h4" component="div">
                    <i>Vehicle Details</i>
                </Typography>
            </Box>

            <Grid container spacing={2}>

                <Grid item xs={6}>
                    <Box  sx={{ marginTop: 4, marginLeft: 6 }}>
                        <img className='scooter-border' src = "http://bitly.ws/sTtK" height="150" width="200"></img>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                <Stack sx={{ marginTop: 2, marginRight: 2, marginBottom: 3 }} spacing={2} direction="column">
                    <Paper sx={{backgroundColor: "#FFF9D7"}}>
                        <Typography sx={{margin: 1}} variant="h5" component="div">
                            Username: {params.reqId}
                        </Typography>
                    </Paper>
                    <Paper sx={{backgroundColor: "#FFF9D7"}}>
                        <Typography  sx={{ fontSize: 15, margin: 1 }} gutterBottom>
                            Contact: 99999 88888
                        </Typography>
                    </Paper>
                    <Paper sx={{backgroundColor: "#FFF9D7"}}>
                        <Typography sx={{margin: 1}} variant="body">
                            Email: abc@gmail.com
                        </Typography>
                    </Paper>
                    <Paper sx={{backgroundColor: "#FFF9D7"}}>
                        <Typography sx={{margin: 1}} variant="body">
                            Address: xyz
                        </Typography>
                    </Paper>
                    <Paper sx={{backgroundColor: "#FFF9D7"}}>
                        <Typography sx={{margin: 1}} variant="body">
                            Occupation
                        </Typography>
                    </Paper>
                </Stack>
                </Grid>
            </Grid>

            <Grid>

            </Grid>


            


        </div>
        }
    </div>
  );
}
