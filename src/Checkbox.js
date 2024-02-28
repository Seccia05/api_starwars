import React, {useState, useEffect} from 'react';
import App from './App';

function Checkbox() {
    const [options, setOptions] = useState([]);
    const [key, setKey] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urls = Array.from({length: 82}, (_, i) => `https://swapi.dev/api/people/${i + 1}/`);
                const responses = await Promise.all(urls.map(url => fetch(url)));
                const data = await Promise.all(responses.map(response => response.json()));
                const attributes = data.map(item => item.name);
                setOptions(attributes);
            } catch (error) {
                console.error('Errore durante il recupero dei dati:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedKey = selectedIndex + 1;
        setKey(selectedKey);
    };


    return (
        <div>
            <br/>
            <h1 className="text-3xl font-extrabold dark:text-white">Seleziona un personaggio</h1>
            <br/>
            <select
                id="personaggi"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <br/>
            <App n={key}/>
        </div>
    );
}

export default Checkbox;
