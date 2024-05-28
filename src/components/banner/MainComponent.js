import React from "react";
import {Grid} from "@mui/material";
import chips from "../banner/img/chips.png"
import iconTg from "../banner/img/icons-tg.svg"
import vector from "../banner/img/vector-1.svg"
import logo5ka from "../banner/img/лого_5ка.svg"
import logoPerek from "../banner/img/лого_перекресток.svg"
import shadowWhite from "./img/white.svg"
import substract from "../banner/img/Subtract.svg"
import airplane from "../banner/img/airplane.svg"
import mexico from "../banner/img/Мексика.svg"
import "./MainComponent.css"
import {WinPrizes} from "../winprizes/WinPrizes";
import CustomButton from "../../common/button/Button";


export const MainComponent = () => {
    const redirectToSite = () => {
        window.location.href = 'https://delicados-promo.ru';
    };
    return (
        <div>
            <Grid container spacing={20}>
                <Grid item xs={12} md={6}>
                    <div className="image-container">
                        <img src={vector} className="image-vector"/>
                        <img src={chips} className="chips"/>
                        <img src={shadowWhite} className="shadow"/>
                        <img src={substract} className="substract"/>
                        {/*<div className="prize-text">*/}
                        {/*    Главный приз: путешествие в МЕКСИКУ на*/}
                        {/*    <a className="prize-item">500 000</a>*/}
                        {/*    рублей*/}
                        {/*</div>*/}
                        <div className="text_under">Лимитированный вкус только в «Пятёрочке» и «Перекрёстке»</div>
                        <div className="logo-container">
                            <img src={logo5ka} className="logo"/>
                            <img src={logoPerek} className="logo"/>
                        </div>
                    </div>
                    <img src={airplane} className="airoplane-img"/>
                    <img src={mexico} className="mexico-img"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="burger-container">
                        <h1>Вперед</h1>
                        <h1>c Бургер Кинг</h1>
                        <h1>к приключениям!</h1>
                        <div className="register-check">
                            <p className="register-text">РЕГИСТРИРУЙ ЧЕК</p>
                            <div className="button-web">
                                <CustomButton textColor="green"
                                              size="sm"
                                              color="primary"
                                              text={"на сайте"}
                                              onClick={redirectToSite}

                                />
                            </div>
                            <div className="icon-image">
                                <img className="tg" src={iconTg}
                                     width={40}
                                     height={40}/>
                            </div>
                        </div>
                        <div className="register-check">
                            <p className="register-text">ИГРАЙТЕ И ВЫЙГРЫВАЙТЕ ВКУСНЫЕ ПРИЗЫ</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className="winprizes-container">
                <WinPrizes/>
            </div>
        </div>

    )

}