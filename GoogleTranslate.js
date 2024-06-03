import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  const googleTranslateElementInit = () => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          
        },
        "google_translate_element"
      );
    }
  };

  useEffect(() => {
    const id = document.getElementById("google_translate_element");
    if (id) {
        const addScript = document.createElement("script");
        addScript.setAttribute(
          "src",
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

      } else {
        googleTranslateElementInit();
      }
  }, []);

  const translateScript = document.querySelector("script[src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit']")
  useEffect(() => {
      if (translateScript !== null) {
        window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, [translateScript]);


  return (
    <div className='google_translate_main'>
      <div id="google_translate_element"></div>
    </div>
  );
}

export default GoogleTranslate;   

