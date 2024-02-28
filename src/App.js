import React, {useState, useEffect} from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.ipify.org/?format=json");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <br/>
            <h1 className="text-3xl font-extrabold dark:text-white">Il tuo indirizzo IP: <small
                className="ms-2 font-semibold text-gray-500 dark:text-gray-400">{data && data.ip}</small></h1>
        </div>
    );
}

export default App;
