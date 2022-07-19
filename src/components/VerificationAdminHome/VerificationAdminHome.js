import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import './VerificationAdminHome.css'
import VerificationRequest from "../VerificationRequest/VerificationRequest.js";
import { Grid } from "@mui/material";

//import './Posts.css'
//import { useNavigate } from "react-router-dom";


export default function VerificationAdminHome(props) {
    //const navigate = useNavigate();

    const [requestsData, setRequestsData] = useState({ flag: false, reqData: null });

    async function getData() {

        console.log("Verification Admin Home Page");

        let userName = props.userId;
        let userObj = {
            id: userName
        }

    }


    //the call back function cannot be async, thus we make a new async function inside it
    useEffect(() => {
        //console.log("useEff Called");
        getData();
    }, []);

    return (
        <div className="request-background">
            <h1 className="post-heading">Verification Admin Home</h1>
            
            <div>
                     <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <VerificationRequest username = "Atul"></VerificationRequest>
                        </Grid>
                        <Grid item xs={6}>
                            <VerificationRequest username = "John"></VerificationRequest>
                        </Grid>
                        <Grid item xs={6}>
                            <VerificationRequest username = "Oliver"></VerificationRequest>
                        </Grid>
                    </Grid>      
                
                
                {/* <VerificationRequest username = "Oliver"></VerificationRequest>
                <VerificationRequest username = "Oliver"></VerificationRequest>
                <VerificationRequest username = "Oliver"></VerificationRequest>
                <VerificationRequest username = "Oliver"></VerificationRequest>
                <VerificationRequest username = "Oliver"></VerificationRequest> */}
            </div>

            {/* <div className="flex-container">

                        { requestsData.flag &&
                            <div>
                            {requestsData.reqData.map((post) => {



                                //return <li className="list-margin list-group-item list-group-item-action list-group-item-danger" key={post.postId} idd={post.postId}>{post.postId + " -> " + post.postTitle + " => "} <Link to={`/posts/${post.postId}`}><i>click for details</i></Link></li>
                            
                            return (<VerificationRequest key={post.posts.postid} postTime={post.posts.date} postSender={post.userdetails.username} caption={post.posts.caption}  imgSrc={post.posts.postdata} />)
                            
                            
                            })}
                            </div>
                        }
            </div> */}



        </div>
    );
}