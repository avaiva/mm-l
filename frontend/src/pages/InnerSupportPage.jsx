import PageMain from "../components/PageMain"

export default function InnerSupportPage() {
  return(
    <>
    <PageMain/>

     {/* Work with divs and position it absolutely on the page. 
    Make sure to use em to stay consistent over breakpoints. */}
    
    <div style={{position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}>
    Hello from InnerSupport
    </div>
    </>
  ) 
  }
  