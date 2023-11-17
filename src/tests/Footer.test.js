import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from "../components/Footer";

describe("<Footer/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <Footer/>
            </Router>
        )

        let footerRole = screen.getByRole("footer")

        expect(footerRole).toBeInTheDocument()
    })
    
})