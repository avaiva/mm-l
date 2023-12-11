import axios from 'axios';
import PageMain from '../components/PageMain';

export default function TimelinePage() {
  const storedToken = localStorage.getItem('token');

  axios
    .get('http://localhost:5006/timeline', { headers: { Authorization: `Bearer ${storedToken}` } })
    .then()
    .catch((error) => console.log(error));

  return (
    <>
      <PageMain />

      <div style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>Hello from Timeline</div>
    </>
  );
}
