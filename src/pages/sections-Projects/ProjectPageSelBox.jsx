import React from 'react';

function ProjectPageSelBox({ callToAction, image, setCurrentPage1 }) {
  const handleClick = () => {
    if (callToAction === "Hardware Projects") {
      setCurrentPage1('hardware');
    } else if (callToAction === "Software Projects") {
      setCurrentPage1('software');
    }
    else if (callToAction === "Character Portfolio") {
      setCurrentPage1('character');
    }
    else if (callToAction === "Music Portfolio") {
      setCurrentPage1('music');
    }
  };

  return (
    <div className="overflow-hidden cursor-pointer" onClick={handleClick}>
      <p className="flex justify-center text-white">{callToAction}</p>
      <div className="flex flex-col justify-center h-full w-full p-6 opacity-60 hover:opacity-100 transition-opacity">
        <img src={image} alt={callToAction} />
      </div>
    </div>
  );
}

export default ProjectPageSelBox;