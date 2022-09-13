

const App = () => {
    const [quotes, setQuotes] =React.useState([]);
    const [randomQuote,setRandomQuote]= React.useState([]);
    React.useEffect(()=>{
        async function fetchData(){
            const response= await fetch("https://type.fit/api/quotes")
            const data=await response.jason();
            setQuotes(data);
            let randIndex=Math.floor(Math.random()*data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    },[])
    console.log(data);
    return ( <div> Hello{quotes.map(quote=>(
             <div>{quote.text}</div>
            ))}
            </div>
    );
//export default App;
ReactDOM.render(<App/>,document.getElementById("app"))