import PageLanding from "../components/PageLanding"

export default function LoginPage() {
    return(
        <>
        <PageLanding/>

        {/* Work with divs and position it absolutely on the page. 
        Make sure to use em to stay consistent over breakpoints. */}
        <div style={{position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}>
            Hello from Login Page
        </div>
        </>
    )
}