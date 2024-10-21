import ProjectPageSelBox from './ProjectPageSelBox';
import hardImage from './images/hardware.jpg';

function MainProjectsSel() {
    return (
        <div className="flex justify-center flex-col h-screen p-20">
          <div className="grid grid-cols-4 gap-4 h-full">          <ProjectPageSelBox callToAction={"Hardware Projects"} image={hardImage}/>
            <ProjectPageSelBox callToAction={"Software Projects"} image={hardImage}/>
            <ProjectPageSelBox callToAction={"Character Portfolio"} image={hardImage}/>
            <ProjectPageSelBox callToAction={"Music Portfolio"} image=
            {hardImage}/>
          </div>
          <button
            className="bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl text-xl p-2 mt-4"
            type="button"
            onClick={() => setCurrentPage('main')}>
            Go back to Main Page
          </button>
        </div>
      );
}