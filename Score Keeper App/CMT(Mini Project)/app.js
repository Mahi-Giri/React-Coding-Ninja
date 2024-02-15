let customers = [];
const capacity = 25;
let seatsLeft = 25;

const App = () => {
    const [guestCount, setGuestCount] = React.useState("");
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [status, setStatus] = React.useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newGuestCount = parseInt(guestCount);
        const existingCustomer = customers.find((customer) => customer.name === name);

        if (existingCustomer) {
            alert("Customer already exists");
            return;
        }

        if (newGuestCount > seatsLeft) {
            alert("Guest count exceeds capacity.");
            return;
        }

        const newCustomer = {
            count: newGuestCount,
            name: name,
            phone: phone,
            checkIn: new Date().toLocaleTimeString(),
            checkOut: "",
            status: "Click to Checkout",
        };

        customers.unshift(newCustomer);
        seatsLeft -= newGuestCount;
        setGuestCount("");
        setName("");
        setPhone("");
        setStatus("");
    };

    const handleCheckout = (index) => {
        const currentTime = new Date().toLocaleTimeString();
        customers[index].checkOut = currentTime;
        customers[index].status = "Checked Out";
        seatsLeft += customers[index].count;
    };

    const handleDelete = (index) => {
        if (customers[index].status !== "Checked Out") {
            seatsLeft += customers[index].count;
        }
        customers.splice(index, 1);
    };

    return (
        <div className="App" style={{ textAlign: "center" }}>
            <div>
                <h2>Total Capacity: {capacity}</h2>
                <h2>Seats Left: {seatsLeft}</h2>
            </div>

            <form onSubmit={handleFormSubmit}>
                <input type="number" placeholder="Guest Count" value={guestCount} onChange={(e) => setGuestCount(e.target.value)} />
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            <table border="1px" style={{ margin: "auto" }}>
                <thead>
                    <tr>
                        <th>Count</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Status</th>
                        <th>Remove Entry</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.count}</td>
                            <td>{customer.name}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.checkIn}</td>
                            <td>{customer.checkOut}</td>
                            <td>
                                {customer.status === "Click to Checkout" && <button onClick={() => handleCheckout(index)}>{customer.status}</button>}
                                {customer.status === "Checked Out" && customer.status}
                            </td>
                            <td>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
