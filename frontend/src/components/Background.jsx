

export default function Background(props) {

  return (
    <div style={{height: '100vh', width: '100vw', backgroundColor: 'yellow'}} >
        {props.children}
    </div>
  );
}