import hardImage from './assets/Test.png';
function ProjectPageSelBox({callToAction}){
    return (
        <div>
            <p className="flex hover:opacity-100 justify-center text-mainColor10">{callToAction}</p>
            <div className="flex flex-col align-middle h-full w-full p-6 opacity-60 hover:opacity-100 transition-opacity bg-hardImage">
                <img src={hardImage}/>
            </div>

        </div>
        
    )

}

export default ProjectPageSelBox;
