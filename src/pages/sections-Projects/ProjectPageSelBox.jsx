import React from 'react';

function ProjectPageSelBox({ callToAction, image, setCurrentPage1 }) {
  const handleClick = () => {
    if (callToAction === "Hardware Projects") {
      setCurrentPage1('hardware');
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