import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import {BrowserRouter as Router} from 'react-router-dom'
import EventInfo from "../components/EventInfo";

describe("<EventInfo/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <EventInfo/>
            </Router>
        )

        let eventInfoRole = screen.getByRole("eventInfo")

        expect(eventInfoRole).toBeInTheDocument()
    })
    
})