import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import {BrowserRouter as Router} from 'react-router-dom'
import Nav from "../components/Nav";

describe("<Nav/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <Nav/>
            </Router>
        )

        let navRole = screen.getByRole("nav")

        expect(navRole).toBeInTheDocument()
    })
    
})