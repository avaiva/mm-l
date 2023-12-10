import PageMain from "../components/PageMain"
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function TimelinePage() {
  const [timelineList, setTimelineList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  console.log(timelineList[0])


  useEffect(()=> {
    const token = localStorage.getItem('token');
    console.log(token)
    axios.get("http://localhost:5005/api/timeline", {headers: {authorization: `${token}`}})
    .then((response) => setTimelineList(response.data))
    .catch((error) => setError(error))
    .finally(()=> setLoading(false))
  }, []);

  if(error) {
    // return <ErrorPage/>
    return <> Error...</>
  }

  if(loading) {
    // return <LoadingSpinner/>
    return <> Loading...</>
  }

  console.log(timelineList[0])

  return(
    <>
    <PageMain/>
    
    {/* Work with divs and position it absolutely on the page. 
    Make sure to use em to stay consistent over breakpoints. */}
    
    <div style={{position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}>
    Hello from Timeline
    </div>
    <div style={{position: "fixed",top: "3em"}}>
      that is my second div
    </div>
    </>
  ) 
}
