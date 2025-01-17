import React from 'react';

function ProjectPageSelBox({ callToAction, image, setCurrentPageProject}) {
  const handleClick = () => {
    if (callToAction === "Hardware Projects") {
      setCurrentPageProject('hardware');
    } else if (callToAction === "Software Projects") {
      setCurrentPageProject('software');
    }
    else if (callToAction === "Character Portfolio") {
      setCurrentPageProject('character');
    }
    else if (callToAction === "Music Portfolio") {
      setCurrentPageProject('music');
    }
  };

  return (
    <div className="overflow-hidden cursor-pointer" onClick={handleClick}>
      <div className="flex flex-col justify-center h-full w-full p-6 opacity-60 hover:opacity-100 transition-opacity">
        <img src={image} alt={callToAction} title={callToAction} />
        <p className="text-center mt-2 text-mainColor30">{callToAction}</p>
      </div>
    </div>
  );
}

export default ProjectPageSelBox;