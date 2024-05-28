import React, {useState} from "react";
import { Nav, Navbar} from 'react-bootstrap';
import logo from './img/logo-vk.svg'
import delicados from './img/Delicados.svg'
import './Navigation.css'
import {RegistrationPopup} from "../../common/registration/popup-registration";
import CustomButton from "../../common/button/Button";
import Button from "react-bootstrap/Button";



export const Navigation = () => {
    const [openPopup, setOpenPopup] = useState(false);

    const handleButtonClick = () => {
        console.log('Button clicked');
            setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    return (
        <Navbar className="img-navbar">
            <Navbar.Brand href="#home">
                <img
                    src={delicados}
                    width="128"
                    height="54"
                    className="logo-delicados"
                />
                <img
                    src={logo}
                    width="54"
                    height="54"
                    className="logo-burgerking"
                />
            </Navbar.Brand>
            <Nav.Item className="menu-word" href="#prizes">Призы</Nav.Item>
            <Nav.Item className="menu-word"  href="#winners">Победители</Nav.Item>
            <Nav.Item className="menu-word"  href="#buy">Где купить</Nav.Item>
            <Nav.Item className="menu-word"  href="#question">Вопрос-ответ</Nav.Item>
            <Nav.Item className="menu-word"  href="#contact">Обратная связь</Nav.Item>
            <Nav.Item className="button-word">
                <CustomButton textColor="green" size="sm" color="primary" text={"Играть"}/>
            </Nav.Item>
            <Nav.Item className="button-word">
                    {/*<CustomButton*/}
                    {/*    textColor="white"*/}
                    {/*    size="sm"*/}
                    {/*    color="green"*/}
                    {/*    text={"Войти"}*/}
                    {/*    onClick={handleButtonClick}*/}
                    {/*/>*/}
                    <Button onClick={handleButtonClick}>
                        Войти
                    </Button>
                    <RegistrationPopup open={openPopup} onClose={handleClosePopup} />
            </Nav.Item>
        </Navbar>
    )

}