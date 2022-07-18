import React ,{useState} from 'react';
import axios from 'axios';
import MapUser from '../MapUser/MapUser';

export default function MappedUsers(){
    const animals=["cat","dog","Cow","Lion","Tiger"];
    // const [data, setData] = useState({ hits: [] });
    const [data, setData] = useState([]);

    // async function fetchData() {
    //     try {
    //       const result = await axios.get("https://randomuser.me/api/");
    //       console.log(result.data);
    //       setData(result.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    
    // const fetchData = () => {
    //     return axios.get("https://randomuser.me/api/")
    //           .then((response) => console.log(response.data.results[0]));
            
    //         }


    const fetchData = () => {
        return axios.get("https://reqres.in/api/users?page=2")
              .then((response) => {
                        console.log(response.data.data);
                        // setData1(response.data);
                        // setData(response.data.data)
                        // console.log(data);

              }
              );
            //   console.log(data);
            }
              
      fetchData();

    return(
        <div>
           
            <MapUser/>
            {/* <ul>
            {data.hits.map(item => (
            <li key={item.id}>
                <a href={item.email}>{item.gender}</a>
            </li>
            ))}
        </ul> */}

        </div>
    )
}