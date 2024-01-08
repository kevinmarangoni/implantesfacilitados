import PT from "./base/pt-BR.json";
import EN from "./base/en-US.json";
import ES from "./base/es-ES.json";

import { useCallback, useState } from 'react'

export type TranslationObject = typeof PT

const useTranslation = () => {

    const langList = [PT, EN, ES]

    const [t, setLang] = useState<TranslationObject>(langList[0])

    const setLanguage = (lang: 0 | 1 | 2) => {
        try{
            if (lang >= 0 && lang < 3) setLang(langList[lang])
        }
        catch(e){
            setLang(langList[0])
        }

   }
   
    useCallback(setLanguage, [setLanguage]) 


  return {t, setLanguage}
}

export default useTranslation