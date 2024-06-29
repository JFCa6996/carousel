
import React, { useState, createContext, useContext } from 'react';
import enTranslations from '../translations/en';
import frTranslations from '../translations/fr';
import esTranslations from '../translations/es';
import arUAETranslations from '../translations/ar_UAE';

const LanguageContext = createContext();

const translationsMap = {
    en: enTranslations,
    fr: frTranslations,
    es: esTranslations,
    ar_UAE: arUAETranslations,
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState(translationsMap['en']);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        setTranslations(translationsMap[newLanguage]);
    };

    return (
        <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
