let clicked = false;
function setShow() {
    clicked = !clicked;
    rootElement.render(<App />);
}

const App = () => (
    <>
        <h1>Coding Ninjas</h1>
        <button onClick={setShow}>{clicked ? "Hide Element Below" : "show Element Below"}</button>
        {clicked && <p>Hello ninjas, I am here. </p>}
    </>
);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
