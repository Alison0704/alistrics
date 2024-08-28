import SkillsBox from './SkillsBox';
function Skills(){
    const hardwareSkills = [
        'VHDL',
        'Verilog',
        'MATLAB',
        'HSPICE/LTSPICE',
        'Digital Systems',
        'CMOS Transistors - VLSI',
        'CPU Architecture',
        'Quartus II'
    ];
    const softwareSkills = [
        'C/C++',
        'C# for Unity',
        'VB.net',
        'HTML/CSS/Javascript',
        'Vite/React/Tailwind',
        'Java',
        'Python',
        'Perl'
    ]; 
    const softSkills = [
        'Attention to detail',
        'Problem-Solving',
        'Teamwork',
        'Adaptability',
        'Continuous Learning',
        'Self-Motivation',
   
    ];
    const hobbySkills = [
        'Clip Studio Paint - Digital Art',
        'Clip Studio Paint - Digital Animation',
        'Concept Character Design',
        'Musescore',
        'Unity'
    ];
    return (
        <section id="skills">
            <p className="text-mainColor30 text-7xl flex justify-center">Skills</p>
            <div className="grid grid-cols-2 grid-rows-2">
                <SkillsBox title={"Hardware"} description={""} skills={hardwareSkills} btnName={"Hardware Resume"} />
                <SkillsBox title={"Software"} description={""} skills={softwareSkills} btnName={"Software Resume"} />
                <SkillsBox title={"Soft Skills"} description={"These skills enable individuals to approach tasks with precision, efficiency, and a systematic approach preventing errors and ultimately lead to better outcomes."} skills={softSkills} />
                <SkillsBox title={"Hobby Stills"} description={"These activities foster imagination, experimentation, and a playful approach to challenges while developing innovative solutions and learn to tackle complex problems with a sense of joy and accomplishment."} skills={hobbySkills}/>
            </div>
        </section>
    );
}

export default Skills;