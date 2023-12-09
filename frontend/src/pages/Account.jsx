import PageSub from "../components/PageSub"
import ButtonApp from "../components/ButtonApp"
export default function AccountPage() {
  return(
    <>
    <PageSub/>
    <ButtonApp navigate={"/inner-support"} label={"my gratitude"}  />
    </>
  ) 
  }
  