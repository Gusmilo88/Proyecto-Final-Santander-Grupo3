import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import {BrowserRouter as Router} from 'react-router-dom'
import Button from "../components/Button";

describe("<Button/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <Button/>
            </Router>
        )

        let buttonRole = screen.getAllByRole("button")

        expect(buttonRole).toBeInTheDocument()
    })
    
})