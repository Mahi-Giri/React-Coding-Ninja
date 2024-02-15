let score = 0;
let wicket = 0;
let overScore = [];
let hit = 0;
let ref = React.createRef();

const addScore = (run) => {
    hit = run;
    rootElement.render(<App />);
};

const addWicket = () => {
    hit = "Wicket";
    rootElement.render(<App />);
};

const Score = () => {
    return (
        <div className="score">
            <h1>Select your score : </h1>
            <h3>
                <button onClick={() => addScore(0)}>0</button>
                <button onClick={() => addScore(1)}>1</button>
                <button onClick={() => addScore(2)}>2</button>
                <button onClick={() => addScore(3)}>3</button>
                <button onClick={() => addScore(4)}>4</button>
                <button onClick={() => addScore(5)}>5</button>
                <button onClick={() => addScore(6)}>6</button>
                <button onClick={addWicket}>Wicket</button>
            </h3>
        </div>
    );
};

const Result = () => {
    return (
        <div>
            {overScore.map((ball, index) => (
                <span>
                    {index % 6 === 0 ? <br /> : null}
                    <span key={index}>{ball === 0 ? <strong>.</strong> : ball}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </span>
            ))}
        </div>
    );
};

const handleSubmit = (event) => {
    event.preventDefault();
    if (hit === "Wicket") wicket += 1;
    else score += hit;
    overScore.unshift(
        <span>
            {hit},{ref.current.value}
        </span>
    );
    hit = 0;
    ref.current.value = "";
    rootElement.render(<App />);
};

const Form = () => {
    return (
        <form onSubmit={handleSubmit} className="form">
            <input value={hit} />
            <input placeholder="Enter Comment" ref={ref} />
            <button>Submit</button>
        </form>
    );
};

const App = () => {
    return (
        <div className="app_name">
            <h1>SCORE KEEPER</h1>
            <h3>
                SCORE: {score}/{wicket}
            </h3>
            <Score />
            <Form />
            {overScore.map((ball, index) => (
                <p key={index}>{ball}</p>
            ))}
        </div>
    );
};

const rootElement = ReactDOM.createRoot(document.getElementById("app"));
rootElement.render(<App />);
