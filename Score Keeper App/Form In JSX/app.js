let refname = React.createRef();
let refmark = React.createRef();
let refArray = [];

const handleSubmit = (event) => {
    event.preventDefault();
    refArray.push(refname.current.value + "," + refmark.current.value);
    refname.current.value = "";
    refmark.current.value = null;
    rootElement.render(<App />);
};

const Form = () => {
    return (
        <form onSubmit={handleSubmit}>
            <h1>Student Form</h1>
            <input placeholder="Name" ref={refname} />
            <input type="number" min="0" step="1" placeholder="Marks" ref={refmark} />
            <button>Submit</button>
        </form>
    );
};

const Result = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Student's Name</th>
                    <th>Marks</th>
                </tr>
            </thead>
            <tbody>
                {refArray.map((name, index) => (
                    <tr key={index}>
                        <td>{name.split(",")[0]}</td>
                        <td>{name.split(",")[1]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const App = () => (
    <>
        <Form />
        <Result />
    </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
