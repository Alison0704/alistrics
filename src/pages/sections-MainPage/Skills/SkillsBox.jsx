import React, { Component } from 'react';


function SkillsBox({title,description,skills,btnName,pdfLink}) {
    const onResumeClick = () => {
        window.open(pdfLink);
    };
    return (
        <div className="flex flex-col bg-mainColor30 bg-opacity-5 rounded-3xl p-8 m-2 gap-4">
            <p className="text-mainColor10 text-5xl font-bold flex justify-center">{title}</p>
            {description && (<p className="text-mainColor30 flex p-2 text-opacity-70">{description}</p>)}
            <ol className="h-4/5 text-mainColor30 pl-6">
                {skills.map((skill, index) => (
                    <p><li className="text-mainColor30 pl-4" key={index}>{"-> " + skill}</li></p>
                ))}
            </ol>
            {btnName && pdfLink && (
                <a className="flex justify-center cursor-pointer bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl text-xl p-2" onClick={onResumeClick}> <button>{btnName}</button></a>
               
            )}
        </div>
    );
}
export default SkillsBox;
