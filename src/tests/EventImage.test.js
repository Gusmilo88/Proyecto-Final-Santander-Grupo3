import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import {BrowserRouter as Router} from 'react-router-dom'
import EventImage from "../components/EventImage";

describe("<EventImage/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <EventImage/>
            </Router>
        )

        let eventImageRole = screen.getByRole("eventImage")

        expect(eventImageRole).toBeInTheDocument()
    })
    
})