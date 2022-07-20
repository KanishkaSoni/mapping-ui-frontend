import react from "react";
import './MapUser.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ElectricScooterIcon from '@mui/icons-material/ElectricScooter';

export default function MapUser(){
    return(
        <div>
        
            {/* <h2>Users who got the vehicles</h2> */}
            

            <div className='user-list'>
                <div className='user-list-head'>
                    <span className="head-span"><strong>User Details</strong></span>
                    <span className="head-span"><strong>Contact Details</strong></span>
                    <span className="head-span"><strong>Vehicle Mapped</strong></span>
                </div>

                <div className="user-list-details">
                <div className="user-info">
                        <span className="user-box">
                            <div className="name-details">
                                <div className="user-name"><strong>Alex Ramen</strong></div>
                                <div className="user-loc"><LocationOnIcon/><small>Menlo park, CA</small></div>
                            </div>
                        </span>
                        <span className="user-box">
                        <div className="user-contact">
                            <div className="user-phone"><PhoneIcon/>9871236789</div>
                            <div className="user-mail"><EmailIcon/>alex@gmail.com</div>
                        </div>
                        </span>
                        <span className="user-box">
                        <div className="user-vehicle">
                            <div className="vehicle-name"><ElectricScooterIcon/>Ola S1 Pro</div>
                            <div className="vehicle-id"><small className="small-text">Id: OL12A678S</small></div>
                        </div>
                        </span>
                    </div>

                    <div className="user-info">
                        <span className="user-box">
                            <div className="name-details">
                                <div className="user-name"><strong>Alex Ramen</strong></div>
                                <div className="user-loc"><LocationOnIcon/><small>Menlo park, CA</small></div>
                            </div>
                        </span>
                        <span className="user-box">
                        <div className="user-contact">
                            <div className="user-phone"><PhoneIcon/>9871236789</div>
                            <div className="user-mail"><EmailIcon/>alex@gmail.com</div>
                        </div>
                        </span>
                        <span className="user-box">
                        <div className="user-vehicle">
                            <div className="vehicle-name"><ElectricScooterIcon/>Ola S1 Pro</div>
                            <div className="vehicle-id"><small className="small-text">Id: OL12A678S</small></div>
                        </div>
                        </span>
                    </div>

                    <div className="user-info">
                        <span className="user-box">
                            <div className="name-details">
                                <div className="user-name"><strong>Alex Ramen</strong></div>
                                <div className="user-loc"><LocationOnIcon/><small>Menlo park, CA</small></div>
                            </div>
                        </span>
                        <span className="user-box">
                        <div className="user-contact">
                            <div className="user-phone"><PhoneIcon/>9871236789</div>
                            <div className="user-mail"><EmailIcon/>alex@gmail.com</div>
                        </div>
                        </span>
                        <span className="user-box">
                        <div className="user-vehicle">
                            <div className="vehicle-name"><ElectricScooterIcon/>Ola S1</div>
                            <div className="vehicle-id"><small className="small-text">Id: OL12A678S</small></div>
                        </div>
                        </span>
                    </div>

                    <div className="user-info">
                        <span className="user-box">
                            <div className="name-details">
                                <div className="user-name"><strong>Alex Ramen</strong></div>
                                <div className="user-loc"><LocationOnIcon/><small>Menlo park, CA</small></div>
                            </div>
                        </span>
                        <span className="user-box">
                        <div className="user-contact">
                            <div className="user-phone"><PhoneIcon/>9871236789</div>
                            <div className="user-mail"><EmailIcon/>alex@gmail.com</div>
                        </div>
                        </span>
                        <span className="user-box">
                        <div className="user-vehicle">
                            <div className="vehicle-name"><ElectricScooterIcon/>Ola S1 Pro</div>
                            <div className="vehicle-id"><small className="small-text">Id: OL12A678S</small></div>
                        </div>
                        </span>
                    </div>


                    <div className="user-info">
                        <span className="user-box">
                            <div className="name-details">
                                <div className="user-name"><strong>Alex Ramen</strong></div>
                                <div className="user-loc"><LocationOnIcon/><small>Menlo park, CA</small></div>
                            </div>
                        </span>
                        <span className="user-box">
                        <div className="user-contact">
                            <div className="user-phone"><PhoneIcon/>9871236789</div>
                            <div className="user-mail"><EmailIcon/>alex@gmail.com</div>
                        </div>
                        </span>
                        <span className="user-box">
                        <div className="user-vehicle">
                            <div className="vehicle-name"><ElectricScooterIcon/>Ola S1 Pro</div>
                            <div className="vehicle-id"><small className="small-text">Id: OL12A678S</small></div>
                        </div>
                        </span>
                    </div>


                    <div className="user-info">
                        <span className="user-box">
                            <div className="name-details">
                                <div className="user-name"><strong>Alex Ramen</strong></div>
                                <div className="user-loc"><LocationOnIcon/><small>Menlo park, CA</small></div>
                            </div>
                        </span>
                        <span className="user-box">
                        <div className="user-contact">
                            <div className="user-phone"><PhoneIcon/>9871236789</div>
                            <div className="user-mail"><EmailIcon/>alex@gmail.com</div>
                        </div>
                        </span>
                        <span className="user-box">
                        <div className="user-vehicle">
                            <div className="vehicle-name"><ElectricScooterIcon/>Ola S1</div>
                            <div className="vehicle-id"><small className="small-text">Id: OL12A678S</small></div>
                        </div>
                        </span>
                    </div>



                   {/* <ul>
                 {
                    animals.map((animal)=>{
                        <li>{animal}</li>
                    })
                } 
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
                <li>User 5</li>
                <li>User 5</li>
            </ul>
                    */}
                </div>
            </div>
        </div>
    )
}