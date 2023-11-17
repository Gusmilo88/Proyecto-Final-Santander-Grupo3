import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import VistaSelector from '../components/VistaSelector'
import {BrowserRouter as Router} from 'react-router-dom'

describe("<VistaSelector/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <VistaSelector title={"vistaSelector"} />
            </Router>
        )

        let vistaSelectorText = screen.getByText("vistaSelector")

        expect(vistaSelectorText).toBeInTheDocument()
    })
    
})