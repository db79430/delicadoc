import React, {useState} from "react";
import './Winprizes.css'
import {CustomSliderFive} from "../../common/slider/CustomSliderFive";
import rectlange from "../winprizes/img/reclange.svg"
import CustomButton from "../../common/button/Button";


const CustomShape = () => (
    <div className="shape-container">
        <div className="shape"></div>
    </div>
);
export const WinPrizes = () => {
    return (
        <div className="promo-block">
            <h1 className="how-prizes-text">Как выиграть призы?</h1>
            <div>
                <div className="steps">
                    <div className="step">
                        <img src={rectlange} className="rectlange-img"/>
                            <p className="step-number">1.</p>
                            <p className="step-text">ПОКУПАЙТЕ</p>
                            <p className="step-name">Delicados Nachos</p>
                    </div>
                    <div className="step">
                        <img src={rectlange} className="rectlange-img"/>
                        <p className="step-number">2.</p>
                        <p className="step-text">РЕГИСТРИРУЙТЕ</p>
                        <p className="step-name">чеки с 15.05.2024 по 15.07.2024</p>
                    </div>
                    <div className="step">
                        <img src={rectlange} className="rectlange-img"/>
                        <p className="step-number">3.</p>
                        <p className="step-text">ПОЛУЧАЙТЕ</p>
                        <p className="step-name">гарантированные призы</p>
                    </div>
                    <div className="step">
                        <img src={rectlange} className="rectlange-img"/>
                        <p className="step-number">4.</p>
                        <p className="step-text">ВЫИГРЫВАЙТЕ</p>
                        <p className="step-name">ценные призы</p>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <CustomButton textColor="white" size="md"
                              color="green"
                              text={'Пятерочка'}
                />
                <CustomButton size="md" color="border" text={'Перекресток'}/>
            </div>
            <div className="slider-container">
                <CustomSliderFive/>
            </div>
        </div>
)

}