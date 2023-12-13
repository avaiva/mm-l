import PageSub from "../components/PageSub"

export default function EditDiaryPage() {

  const { entryID } = useParams();

  const [diaryText, setDiaryText] = useState({});
  const [dateDiaryText, setDateDiaryText] = useState("")
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
    .get(`${BACKEND}/api/gratitude/entries/${entryID}`, {
      headers: { authorization: `${token}` },
    })
      .then((response) => {
        console.log(response.data)
        console.log(response.data.createdAt)
        setDateDiaryText(response.data.createdAt)
        setDiaryText(response.data.gratitudeText)})
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
      }, [entryID]);
      
      if (error) {
        // return <ErrorPage/>
        return <> Error...</>;
      }
      
      if (loading) {
        // return <LoadingSpinner/>
        return <> Loading...</>;
      }


  return(
    <>
    <PageSub/>
    {/* Work with divs and position it absolutely on the page. 
    Make sure to use em to stay consistent over breakpoints. */}
    
    <div style={{position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}>
    Hello from Edit Diary
    </div>
    </>
  ) 
}
