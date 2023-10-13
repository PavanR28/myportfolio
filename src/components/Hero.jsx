import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { pinfo } from "../constants";


import { github, gmail, linkedin } from "../assets";




const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Pavan</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-stack Python developer skilled in ML, cloud computing, and Finance <br className='sm:block hidden' />
          </p>

          <div className="absolute flex items-center">  

              <div
                onClick={() => window.open(pinfo[0], "_blank")}
                className='w-15 h-20 rounded-full flex justify-center items-center cursor-pointer'
                
              >
                <img
                  src={github}
                  alt='source code'
                  className="icons-element object-contain"
  
                />
              </div>

              <div
                onClick={() => window.open(pinfo[1], "_blank")}
                className='w-15 h-20 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={linkedin}
                  alt='linkedin'
                  className="icons-element object-contain"
                  
                />
              </div>

              <div
              onClick={() => window.open("mailto:"+pinfo[2], "_blank")}
              className='w-15 h-20 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={gmail}
                alt='email'
                className='icons-element object-contain'
              />
              </div>

          </div>
          
           <div className="absolute mt-20 flex items-center">
            <p>
            <div
              onClick={() => window.open(pinfo[3], "_blank")}
              className='blue-gradient w-30 h-10 rounded mb-1 justify-center items-center cursor-pointer'
            >
              <button className='w-40 h-10 object-contain'>
                See my resume  
              </button>
            </div>
            <br className='sm:block hidden' />
            <div className='blue-gradient w-30 h-10 rounded  justify-center items-center cursor-pointer'> 
              <a href='#contact'>
                  <button className='w-40 h-10 object-contain'>
                    Contact Me 
                  </button>
              </a>
              </div>
              </p>
              </div>
              
        </div>
        
      </div>

      
      
      {/* <ComputersCanvas/> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
            
          </div>
        </a>
      </div>
      
    </section>
  );
};

export default Hero;
