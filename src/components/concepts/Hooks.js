import React, {useState, useEffect} from 'react';

const Hooks = () =>{
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({});

    const fetcher = () => {
        fetch(`https://swapi.co/api/people/${query}`)
        .then(res => res.json())
        .then(json => {setResults(json); console.log(json)})
    }

    return (
        <div className="main">
            <div className="mainDiv">
                <label>Enter your Star Wars character number!</label>
                <br/>
                <input value={query} onChange={e=> setQuery(e.target.value)}/>
                <br/>
                <br/>
                <button onClick={() => fetcher()}>Click for Character!</button>
                <br/>
                {results ? <h2>{results.name}, {results.gender}, {results.homeworld}</h2> : <div></div>}
            </div>
        </div>
    )
}

const Hooks2 = () => {
    const [results, queryNum, setQueryNum] = useNumHook('')
    const [clicks, setClicks] = useClicks(0);

    return(
        <div className ="main">
            <div className = "mainDiv">
                <h3>Enter a number below to see a number fact</h3>
                <button onClick={()=> setClicks(clicks + 1)}>Click to update document title</button>
                <input value={queryNum} onChange={e=> setQueryNum(e.target.value)} placeholder="enter a number"/>
                {results ? <h2>{results}</h2> : <div></div>}
            </div>
        </div>
    )
}

export default Hooks2;

const useNumHook = (num) => {
    const [queryNum, setQueryNum] = useState(num);
    const [results, setResults] = useState('');

    useEffect(() => {
        if(queryNum !== ''){
            fetch(`http://numbersapi.com/${queryNum}`)
            .then(res => res.text())
            .then(json => {
                setResults(json);
                console.log(json)
            })
        }
    }, [queryNum])

    return [results, queryNum, setQueryNum];
}

const useClicks = (start) => {
    const [clicks, setClicks] = useState(start);

    useEffect(() =>{
        document.title = `${clicks}`;
    }, [clicks])
    return[clicks, setClicks];
}