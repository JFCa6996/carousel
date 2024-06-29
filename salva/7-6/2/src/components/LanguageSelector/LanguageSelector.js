import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSelector.css'

const LanguageSelector = () => {
    const { changeLanguage, translations } = useLanguage();

    const handleChange = (event) => {
        changeLanguage(event.target.value);
    };

    return (
        <div className="language-selector-cont">
            <select className="language-selector" onChange={handleChange}>
                <option className="language-option" value="en">English</option>
                <option className="language-option" value="fr">Français</option>
                <option className="language-option" value="ar_UAE">العربية</option>
                <option className="language-option" value="es">Espanol</option>
            </select>
            <button className="language-button" onClick={() => changeLanguage('en')}></button> {/*{translations.toggleLanguage}*/}
        </div>
    );
};

export default LanguageSelector;

