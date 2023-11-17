import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import {BrowserRouter as Router} from 'react-router-dom'
import DivH2 from "../components/DivH2";

describe("<DivH2/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <DivH2/>
            </Router>
        )

        let divH2Role = screen.getByRole("divH2")

        expect(divH2Role).toBeInTheDocument()
    })
    
})