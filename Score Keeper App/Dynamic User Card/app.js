let name;
let email;
let about;

const handleNameChange = (event) => {
    name = event.target.value;
    rootElement.render(<App />);
};
const handleEmailChange = (event) => {
    email = event.target.value;
    rootElement.render(<App />);
};
const handleAboutChange = (event) => {
    about = event.target.value;
    rootElement.render(<App />);
};

const Card = () => (
    <div className="card">
        <h3>Name: {name}</h3>
        <p>Email: {email}</p>
        <p>About: {about}</p>
    </div>
);

const App = () => (
    <div className="App">
        <Card />
        <div className="inputs">
            <input placeholder="Name" onChange={handleNameChange} />
            <input type="email" placeholder="Email" onChange={handleEmailChange} />
            <textarea placeholder="About" onChange={handleAboutChange}></textarea>
        </div>
    </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
