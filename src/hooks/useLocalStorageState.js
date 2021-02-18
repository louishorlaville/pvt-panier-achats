import {useState, useEffect} from 'react';

export default function useLocalStorageState(valeurParDefaut, etiquetteLS) {
  const [etat, setEtat] = useState(
    () => {
      return JSON.parse(window.localStorage.getItem(etiquetteLS)) || valeurParDefaut;
    }
  );
  
  useEffect(() => window.localStorage.setItem(etiquetteLS, JSON.stringify(etat)), [etat]);
  
  return [etat, setEtat];
}