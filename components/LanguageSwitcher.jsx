// import { useEffect, useState } from "react";
// import { parseCookies, setCookie } from "nookies";

// const COOKIE_NAME = "googtrans";

// const LanguageSwitcher = () => {
//   const [currentLanguage, setCurrentLanguage] = useState();
//   const [languageConfig, setLanguageConfig] = useState();

//   useEffect(() => {
//     const cookies = parseCookies();
//     const existingLanguageCookieValue = cookies[COOKIE_NAME];

//     let languageValue;
//     if (existingLanguageCookieValue) {
//       const sp = existingLanguageCookieValue.split("/");
//       if (sp.length > 2) {
//         languageValue = sp[2];
//       }
//     }
//     if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
//       languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
//     }
//     if (languageValue) {
//       setCurrentLanguage(languageValue);
//     }
//     if (global.__GOOGLE_TRANSLATION_CONFIG__) {
//       setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
//     }
//   }, []);

//   if (!currentLanguage || !languageConfig) {
//     return null;
//   }

//   const switchLanguage = (lang) => {
//     setCookie(null, COOKIE_NAME, "/auto/" + lang);
//     window.location.reload();
//   };

//   return (
//     <div className="text-center notranslate">
//       <select
//         value={currentLanguage}
//         onChange={(e) => switchLanguage(e.target.value)}
//         className="px-8 py-2 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         {languageConfig.languages.map((ld) => (
//           <option key={`lang_${ld.name}`} value={ld.name}>
//             {ld.title}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export { LanguageSwitcher, COOKIE_NAME };

import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

const COOKIE_NAME = "googtrans";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState();
  const [languageConfig, setLanguageConfig] = useState();

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      setCurrentLanguage(languageValue);
    }
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang) => () => {
    setCookie(null, COOKIE_NAME, "/auto/" + lang);
    window.location.reload();
  };

  return (
    <div className="text-center notranslate">
      {languageConfig.languages.map((ld, i) => (
        <>
          {currentLanguage === ld.name ||
          (currentLanguage === "auto" &&
            languageConfig.defaultLanguage === ld) ? (
            <span key={`l_s_${ld}`} className="mx-3 text-orange-300">
              {ld.title}
            </span>
          ) : (
            <a
              key={`l_s_${ld}`}
              onClick={switchLanguage(ld.name)}
              className="mx-3 text-blue-300 cursor-pointer hover:underline"
            >
              {ld.title}
            </a>
          )}
        </>
      ))}
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };