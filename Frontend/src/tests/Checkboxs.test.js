import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import {BrowserRouter as Router} from 'react-router-dom'
import Checkboxs from "../components/Checkboxs";

describe("<Checkboxs/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <Checkboxs/>
            </Router>
        )

        let checkboxsRole = screen.getByRole("checkboxs")

        expect(checkboxsRole).toBeInTheDocument()
    })
    
})