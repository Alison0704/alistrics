import ExpBox from './ExpBox';
function Experiences () {
  const academic0 = ['2012 - 2019','GMD Atchia State College - Cambridge International AS & A Levels - Science Side - Port-Louis, Mauritius','Completed my secondary education at GMD Atchia State College. I studied the Cambridge International AS & A Levels in the Science side. Pursed my A level courses: Physics, Mathematics, Computer Science and my AS level courses: Art and design, General Paper[English]'];
  const academic1 = ['2020 - 2026','University of Ottawa - BASc Electrical Engineering and BSc Computing Technology - Ottawa, ON','Currently pursuing a double degree in Electrical Engineering and Computing Technology at the University of Ottawa. I am passionate about technology and I am always looking for new opportunities to learn and grow.'];
  const work1 = ['Sept 2024 - Dec 2024','Teaching Assistant – GNG 1106 – University of Ottawa - Ottawa, ON','Assisted students in understanding the course material, provided feedback on assignments, and helped students with their projects.'];
  const work2 = ['Jan 2024 - Apr 2024','Teaching Assistant – ITI 1500 – University of Ottawa - Ottawa, ON','Assisted students in understanding the course material, provided feedback on assignments, and helped students with their projects.'];
  const work3 = ['May 2023 - Current','Project Clerk, Pension and Benefits Assistant – University of Ottawa - Ottawa, ON','Assisted the Pension and Benefits team with their daily tasks. Responsible for updating the pension and benefits database, and also helped with the preparation of the pension and benefits reports.'];
  return (

    <section id="experience" className="relative">
      <p className="text-mainColor10 text-8xl flex justify-center pb-7">Experience</p>

      <p className="text-mainColor10 text-5xl flex pt-6">Academics</p>
      <ExpBox  date={academic0[0]} title={academic0[1]} description={academic0[2]}/>
      <ExpBox  date={academic1[0]} title={academic1[1]} description={academic1[2]}/>
      <p className="text-mainColor10 text-5xl flex pt-6">Work</p>
      <ExpBox  date={work1[0]} title={work1[1]} description={work1[2]}/>
      <ExpBox  date={work2[0]} title={work2[1]} description={work2[2]}/>
      <ExpBox  date={work3[0]} title={work3[1]} description={work3[2]}/>
    </section>
  );
}
export default Experiences;