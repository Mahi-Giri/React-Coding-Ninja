const IMAGES = [
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557549/assets/yannis-zaugg--7TB_r-NuMo-unsplash_tdmglm.jpg",
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/lino-C2SzUyg3PPQ-unsplash_s8a4tg.jpg",
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/curioso-photography-QfOhOcrDmvk-unsplash_vgbb3t.jpg",
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674620718/assets/pexels-garvin-st-villier-3311574_ds8wrh.jpg",
];

const Login = () => (
    <div>
        <h1>Hello Guest!</h1>
        <h3>Login to Continue</h3>
        <form>
            <input placeholder="email" />
            <input placeholder="password" />
            <button>Login</button>
        </form>
    </div>
);

const Home = () => {
    return (
        <div>
            <h1>Hello Mahi!</h1>
            <PremiumAccount />
            <h3>Welcome to home!</h3>
            <h5>Enjoy this catalog of pictures</h5>
            {IMAGES.map((i) => (
                <img key={i} src={i} />
            ))}
        </div>
    );
};

// create premium account component here to render the button
const PremiumAccount = () => (
    <div>
        <button>Buy Premium</button>
    </div>
);

const App = () => {
    const isLoggedIn = true;
    return <>{isLoggedIn ? <Home /> : <Login />}</>;
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
