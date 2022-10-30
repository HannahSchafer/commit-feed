import translationList from "../translations";
import { ITranslation, ITranslations } from "../types/types";

const getCopy = (key: string) => {
  const language = window.navigator.language;
  const cleanedLanguage: string = language.replace(/[^a-zA-Z]/g, "");
  const languageFile = translationList[cleanedLanguage as keyof ITranslations];
  return languageFile[key as keyof ITranslation];
};

export default getCopy;
