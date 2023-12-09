import PageMain from "../components/PageMain";
import ButtonApp from "../components/ButtonApp"
import InputField from "../components/InputField"

export default function TodayPage() {
  return(
    <>
    <PageMain/>
    
    {/* Work with divs and position it absolutely on the page. 
    Make sure to use em to stay consistent over breakpoints. */}
    
    <div style={{position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}>
    Hello from Today
    </div>
    </>
  ) 
  
}
