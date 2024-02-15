let Carincrease = 0;
let Bikeincrease = 0;
let Scootyincrease = 0;
let Bicycleincrease = 0;

const handleCarIncrese = () => {
    Carincrease += 1;
    rootElement.render(<App />);
};

const handleBikeIncrese = () => {
    Bikeincrease += 1;
    rootElement.render(<App />);
};

const handleScootyIncrese = () => {
    Scootyincrease += 1;
    rootElement.render(<App />);
};

const handleBicycleIncrese = () => {
    Bicycleincrease += 1;
    rootElement.render(<App />);
};

const handleCarDecrease = () => {
    if (Carincrease > 0) {
        Carincrease -= 1;
        rootElement.render(<App />);
    }
};

const handleBikeDecrease = () => {
    if (Bikeincrease > 0) {
        Bikeincrease -= 1;
        rootElement.render(<App />);
    }
};

const handleScootyDecrease = () => {
    if (Scootyincrease > 0) {
        Scootyincrease -= 1;
        rootElement.render(<App />);
    }
};

const handleBicycleDecrease = () => {
    if (Bicycleincrease > 0) {
        Bicycleincrease -= 1;
        rootElement.render(<App />);
    }
};


const App = () => (
    <>
        <p>List of all the vehicles count in the parking.</p>
        <ol>
            <li>
                <p>
                    <b>Car:{Carincrease}</b> &emsp;
                    <button onClick={handleCarIncrese}>Increase</button>
                    <button onClick={handleCarDecrease}>Decrease</button>
                </p>
            </li>
            <li>
                <p>
                    <b>Bike: {Bikeincrease}</b> &emsp;
                    <button onClick={handleBikeIncrese}>Increase</button>
                    <button onClick={handleBikeDecrease}>Decrease</button>
                </p>
            </li>
            <li>
                <p>
                    <b>Scooty: {Scootyincrease}</b> &emsp;
                    <button onClick={handleScootyIncrese}>Increase</button>
                    <button onClick={handleScootyDecrease}>Decrease</button>
                </p>
            </li>
            <li>
                <p>
                    <b>Bicycle:{Bicycleincrease}</b> &emsp;
                    <button onClick={handleBicycleIncrese}>Increase</button>
                    <button onClick={handleBicycleDecrease}>Decrease</button>
                </p>
            </li>
        </ol>
    </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
