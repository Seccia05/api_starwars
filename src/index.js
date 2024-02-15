import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Scuola from './Scuola';
import {DarkThemeToggle} from "flowbite-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div>
            <br/>
            <div><DarkThemeToggle/></div>
            <Scuola nomescuola="ITIS Galileo Galilei" urlimg="https://www.itisarezzo.edu.it/wp-content/uploads/2022/09/itis-fronte-scaled.jpg" txt1="Benvenuti nella nostra scuola tecnica, un'istituzione all'avanguardia che offre una vasta gamma di indirizzi specialistici per preparare gli studenti al mondo del lavoro e alla continua evoluzione della società contemporanea. La nostra scuola è sinonimo di eccellenza accademica, innovazione e impegno per il successo degli studenti."
                    txt2="Con una solida base educativa e una stretta collaborazione con le industrie e le aziende del settore, siamo in grado di offrire programmi formativi all'avanguardia nell'ambito dell'informatica, della chimica, della sanità, dell'ambiente, della meccanica, dell'elettronica e dell'automazione. I nostri studenti hanno accesso a laboratori moderni e attrezzature all'avanguardia, nonché a docenti altamente qualificati e esperti nel settore."></Scuola>
        </div>
    </React.StrictMode>
);
