import React from "react";

const DefinitionCard = ({ result }) => {
  const { definition, partOfSpeech } = result;
  return (
    <div className="definitioncard">
      <p></p>
      <p>
        <i>{partOfSpeech}</i> - {definition}
      </p>
    </div>
  );
};

export default DefinitionCard;
