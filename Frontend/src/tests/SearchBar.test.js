import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import {BrowserRouter as Router} from 'react-router-dom'
import SearchBar from "../components/SearchBar";

describe("<SearchBar/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <SearchBar setEventosFiltrados={setEventosFiltrados}/>
            </Router>
        )

        let searchBarRole = screen.getByRole("searchBar")

        expect(searchBarRole).toBeInTheDocument()
    })
    
})