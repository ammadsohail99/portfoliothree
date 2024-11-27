import React, { FunctionComponent } from "react";

interface Props {
  logo: string; // Path to the institution's logo
  degree: string;
  institution: string;
  highlights?: string[]; // List of highlights/accomplishments
}

const EducationCard: FunctionComponent<Props> = ({
  logo,
  degree,
  institution,
  highlights,
}) => {
  return (
    <div className="w-full shadow-cardShadow flex flex-col items-center justify-center gap-6 py-12 bg-gray-800 rounded-lg">
      {/* Logo */}
      <div className="w-30 h-30 flex items-center justify-center">
        <img
          src={logo}
          alt={`${institution} logo`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      {/* Degree */}
      <h1 className="text-xl font-bold text-gray-100 uppercase tracking-[6px] text-center">
        {degree}
      </h1>
      {/* Institution */}
      <h2 className="text-xl font-medium text-gray-300 text-center">
        {institution}
      </h2>
      {/* Highlights/Accomplishments */}
      {highlights && highlights.length > 0 && (
        <ul className="text-gray-300 text-center space-y-2 mt-4">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="text-sm text-gray-200 leading-relaxed"
            >
              - {highlight}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EducationCard;
