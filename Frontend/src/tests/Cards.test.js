import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import {BrowserRouter as Router} from 'react-router-dom'
import Cards from "../components/Cards";

describe("<Cards/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <Cards/>
            </Router>
        )

        let cardsRole = screen.getByRole("cards")

        expect(cardsRole).toBeInTheDocument()
    })
    
})