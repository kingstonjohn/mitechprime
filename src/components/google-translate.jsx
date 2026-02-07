/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { cn } from '../utils/cn';

const GoogleTranslate = ({ className }) => {
  useEffect(() => {
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.type = 'text/javascript';
    googleTranslateScript.async = true;
    googleTranslateScript.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    document.body.appendChild(googleTranslateScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <div className={cn("flex justify-end", className)}>
      <div id="google_translate_element" className='w-[210px] h-[28px] overflow-hidden'></div>
    </div>
  );
};

export default GoogleTranslate;
