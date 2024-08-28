function SkillsBox({title,description,skills,btnName}) {
    return (
        <div className="flex flex-col bg-mainColor30 bg-opacity-15 rounded-3xl h-96 p-4 m-10 gap-4">
            <p className="text-mainColor30 text-3xl flex justify-center">{title}</p>
            {description && (<p className="text-mainColor30 flex p-2 text-opacity-70">{description}</p>)}
            <ol className="text-mainColor30 pl-6">
                {skills.map((skill, index) => (
                    <p><li className="text-mainColor30 pl-4 text-opacity-70" key={index}>{"-> " + skill}</li></p>
                ))}
            </ol>
            {btnName && (
                <button className="flex justify-center bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl p-2">{btnName}</button>
            )}
        </div>
    );
}
export default SkillsBox;
