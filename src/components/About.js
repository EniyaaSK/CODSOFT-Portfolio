import AboutImg from '../Asserts/about.png'  
  
  
  export default function About() {
    return<section className='md:flex-row flex flex-col bg-primary px-5'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'id='about'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-4xl border-b-black border-b-4 mb-4 w-[170px] font-hero-font'>About Me</h1>
            <div className='py-4 text-1xl font-about-font'>
            <p className='pb-4'>Hyy Everyone!!!  Im ENIYAA SK .I'm a dynamic and skilled Full Stack Developer with a passion for crafting innovative digital solutions. With a strong foundation in both front-end and back-end technologies . </p>
            <p className='pb-4'>  </p>
            <p className=''>  My dedication to continuous learning and problem-solving fuels my ability to tackle complex challenges head-on, delivering tailored solutions that exceed client expectations </p>
            </div>
            </div>
        </div>




    </section>
};
