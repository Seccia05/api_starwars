import React, {useState, useEffect} from 'react';
import {Card} from 'flowbite-react';

function App(params) {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/people/${params.n}/`);
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.error('Errore durante il recupero dei dati del personaggio:', error);
            }
        };

        fetchCharacter();
    }, [params.n]);



    return (
        <div>
            <br/>
            <Card>
                {character && (
                    <div>
                        <h1 className="text-2xl font-bold dark:text-white">{character.name}</h1>
                        <p className="text-gray-500 dark:text-gray-400">Altezza: {character.height} cm</p>
                        <p className="text-gray-500 dark:text-gray-400">Peso: {character.mass} kg</p>
                        <p className="text-gray-500 dark:text-gray-400">Colore Capelli: {character.hair_color}</p>
                        <p className="text-gray-500 dark:text-gray-400">Colore Pelle: {character.skin_color}</p>
                        <p className="text-gray-500 dark:text-gray-400">Colori Occhi: {character.eye_color}</p>
                        <p className="text-gray-500 dark:text-gray-400">Anno Nascita: {character.birth_year}</p>
                        <p className="text-gray-500 dark:text-gray-400">Sesso: {character.gender}</p>
                    </div>
                )}
            </Card>
        </div>
    );
}

export default App;
