function SkillsBox({title,description,skills,btnName}) {
    return (
        <div className="flex flex-col bg-mainColor30 bg-opacity-15 rounded-3xl p-4 m-2 gap-4">
            <p className="text-mainColor30 text-2xl font-bold flex justify-center">{title}</p>
            {description && (<p className="text-mainColor30 flex text-sm p-2 text-opacity-70">{description}</p>)}
            <ol className="text-mainColor30 pl-6 overflow-y-scroll">
                {skills.map((skill, index) => (
                    <p><li className="text-mainColor30 pl-4  text-sm text-opacity-70" key={index}>{"-> " + skill}</li></p>
                ))}
            </ol>
            {btnName && (
                <button className="flex justify-center bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl p-2">{btnName}</button>
            )}
        </div>
    );
}
export default SkillsBox;
