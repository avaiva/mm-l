import PageSub from "../components/PageSub";
import ButtonApp from "../components/ButtonApp";
export default function AccountPage() {
  return (
    <>
      <PageSub /> 

    {/* Work with divs and position it absolutely on the page. 
    Make sure to use em to stay consistent over breakpoints. */}
      <div style={{position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}>
        Hello from Account
       </div>
    </>
  );
}
