import PageMain from '../components/PageMain';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Button } from 'react-bootstrap';

export default function TodayPage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <>
      {isLoggedIn && (
        <div>
          <Button onClick={logOutUser}>Logout</Button>
        </div>
      )}

      {/* <div style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>Hello from Today</div> */}
      <PageMain />
    </>
  );
}
