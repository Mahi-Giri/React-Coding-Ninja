let nameRef = React.createRef();
let quoteRef = React.createRef();
const quotes = [];

const clearInputs = () => {
    nameRef.current.value = "";
    quoteRef.current.value = "";
};

const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        quotes.push({
            name: nameRef.current.value,
            quote: quoteRef.current.value
        });
        console.log(quotes);
        clearInputs();
        rootElement.render(<App />);
    }
};

const App = () => (
    <div className="App">
        <h2>Quotify</h2>
        <div>
            <input placeholder="Name" ref={nameRef} />
            <input onKeyPress={handleKeyPress} placeholder="Quote" ref={quoteRef} />
        </div>
        <div className="quotes">
            {quotes.map((q, i) => (
                <div key={i}>
                    <i>"{q.quote}"</i>
                    <b>~ {q.name}</b>
                </div>
            ))}
        </div>
    </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
