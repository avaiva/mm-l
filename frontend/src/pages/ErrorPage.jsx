import './ErrorPage.css'
import {useState, useEffect} from 'react'


export default function ErrorPage({ error }) {
    
const [displayError, setDisplayError] = useState(null)

useEffect(() => {
    setDisplayError(error)
}, [error])

return(
    <>
    Oops sth went wrong
    {displayError}
    </>
)

}