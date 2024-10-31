import React, { Component } from 'react';


function SkillsBox({title,description,skills,btnName,pdfLink}) {
    const onResumeClick = () => {
        window.open(pdfLink);
    };
    const [currentSkillIndex, setCurrentSkillIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [skills.length]);

    return (
        <div className="flex flex-col bg-mainColor30 bg-opacity-5 rounded-3xl p-8 m-2 gap-4">
            <p className="text-mainColor10 text-5xl font-bold flex justify-center">{title}</p>
            {description && (<p className="text-mainColor30 flex p-2 text-opacity-70">{description}</p>)}
            <p className="text-mainColor30" >These skills are:</p>
            <div className="h-4/5 border-opacity-30 border-mainColor30 border-dashed border-2 flex justify-center align-middle text-mainColor30 pl-6">
                <span className="text-2xl text-mainColor10 opacity-100 animate-pulse">{skills[currentSkillIndex]}</span>
            </div>
            {btnName && pdfLink && (
                <a className="buttons flex justify-center cursor-pointer bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl text-xl p-2" onClick={onResumeClick}><button>{btnName}</button></a>
            )}

        </div>
    );
}
export default SkillsBox;
