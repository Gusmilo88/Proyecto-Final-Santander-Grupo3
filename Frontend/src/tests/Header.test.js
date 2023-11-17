import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import Header from '../components/Header'
import {BrowserRouter as Router} from 'react-router-dom'

describe("<Header/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <Header/>
            </Router>
        )

        let headerRole = screen.getByRole("header")

        expect(headerRole).toBeInTheDocument()
    })
    
})