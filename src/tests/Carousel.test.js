import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" //Importamos Jest para usar sus funcionalidades (como expect)
import {BrowserRouter as Router} from 'react-router-dom'
import Carousel from "../components/Carousel";


describe("<Carousel/>", () => {


    test("Se debería comprobar si se renderiza el componente", () => {

        render(
            <Router>
                <Carousel/>
            </Router>
        )

        let carouselRole = screen.getByRole("carousel")

        expect(carouselRole).toBeInTheDocument()
    })
    
})