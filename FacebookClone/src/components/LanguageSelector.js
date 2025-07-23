import React, { useState } from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ selectedLanguage, setSelectedLanguage }) => {
  const [showMore, setShowMore] = useState(false);

  const languages = [
    'English (US)',
    'Español',
    'Français (France)',
    '中文(简体)',
    'العربية',
    'Português (Brasil)',
    'Italiano',
    '한국어',
    'Deutsch',
    'हिन्दी',
    '日本語'
  ];

  const moreLanguages = [
    'Русский',
    'Türkçe',
    'Polski',
    'Nederlands',
    'Svenska',
    'Norsk',
    'Dansk',
    'Suomi',
    'Čeština',
    'Magyar',
    'Română',
    'Български',
    'Українська',
    'Lietuvių',
    'Latviešu',
    'Eesti',
    'Slovenčina',
    'Slovenščina',
    'Hrvatski',
    'Српски'
  ];

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="language-selector">
      <div className="language-list">
        {languages.map((language, index) => (
          <button
            key={index}
            className={`language-item ${selectedLanguage === language ? 'selected' : ''}`}
            onClick={() => handleLanguageClick(language)}
          >
            {language}
          </button>
        ))}
        <button className="show-more-btn" onClick={toggleShowMore}>
          {showMore ? '−' : '+'}
        </button>
      </div>
      
      {showMore && (
        <div className="more-languages">
          {moreLanguages.map((language, index) => (
            <button
              key={index}
              className="language-item"
              onClick={() => handleLanguageClick(language)}
            >
              {language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
