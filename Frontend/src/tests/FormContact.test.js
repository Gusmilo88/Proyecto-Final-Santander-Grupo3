import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import {BrowserRouter as Router} from 'react-router-dom'
import FormContact from "../components/FormContact";

describe("<FormContact/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <FormContact/>
            </Router>
        )

        let formContactRole = screen.getByRole("formContact")

        expect(formContactRole).toBeInTheDocument()
    })
    
})