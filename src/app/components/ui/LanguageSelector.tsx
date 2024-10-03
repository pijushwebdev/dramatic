'use client'
import React, { useState } from 'react';
import { CiGlobe } from 'react-icons/ci';
import { RiArrowDownSLine } from "react-icons/ri";

const languages = [
  { value: 'english', label: 'English', icon: <CiGlobe className="inline mr-1" /> , icon2: <RiArrowDownSLine className="inline ml-1" /> },
  { value: 'france', label: 'France', icon: <CiGlobe className="inline mr-1" />, icon2: <RiArrowDownSLine className="inline ml-1" /> },
  { value: 'bangla', label: 'Bangla', icon: <CiGlobe className="inline mr-1" />, icon2: <RiArrowDownSLine className="inline ml-1" /> },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (language:any) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Header */}
      <div
        onClick={toggleDropdown}
        className="flex items-center cursor-pointer bg-grey_tone4 text-white py-1 px-2 rounded-md "
      >
        {selectedLanguage.icon}
        <span className="ml-2">{selectedLanguage.label}</span>
        {selectedLanguage.icon2}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-full">
          {languages.map((language) => (
            <li
              key={language.value}
              onClick={() => handleSelect(language)}
              className={`flex items-center cursor-pointer px-4 py-2 hover:bg-gray-200 ${
                language.value === selectedLanguage.value ? 'bg-gray-100 font-bold' : ''
              }`}
            >
             
              <span className="ml-2">{language.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
