import React from "react";
import './ProfilTrenera.css';


const profilTrenera = () => {
    return (

            <form
            onSubmit={(e) => {
            window.location.reload();
            }}
        >
            <div className="FormContainer">
                <h1>Profil Trenera</h1>
                <label className="FormLabel">Imie: </label>
                <input className="FormElement" type='text' id='imie'/>
                <label className="FormLabel">Nazwisko: </label>
                <input className="FormElement" type='text' id='nazwisko'/>
                <label className="FormLabel">Numer telefonu: </label>
                <input className="FormElement" type='text' id='numerTelefonu'/>
                <button className="FormButton">Potwierdź zmiany</button>
            </div>
            </form>

    );
}

export default profilTrenera;