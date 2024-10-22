import React from 'react'

function ProjectPageSelBox({callToAction, image}) {
    return (
        <div className="overflow-hidden">
            <p className="flex justify-center text-white">
                {callToAction}</p>
            {/* Hardware section */}
            {callToAction === "Hardware Projects" && (
                <div className="flex flex-col cursor-pointer justify-center h-full w-full p-6 opacity-60 hover:opacity-100 transition-opacity"><img src={image}/>
                </div>
            )}
        </div>
        
    )
}

export default ProjectPageSelBox;
