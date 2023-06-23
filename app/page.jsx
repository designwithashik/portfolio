
import Link from 'next/link';
import {FaArrowLeft} from 'react-icons/fa'
const MainPage = () => {
  return (
    <div>
      <section>
      <h2 className='font-bold text-5xl'>HI! I'M ASHIK,
        DEVELOPER & IT STUDENT</h2>
      <p className="playfair-font text-2xl my-5">from Dhaka, Bangladesh</p>
        <div className="flex gap-5"><button className='px-5 py-3 bg-blue-500 rounded-full '>Learn More</button> <button className='text-blue-500 px-5 py-3 bg-slate-300 rounded-full'><a href="mailto:ashikuzzaman099@gmail.com">Contact</a> </button></div>
        <div className='flex flex-col text-3xl gap-5 my-28'>
          <h2>ABOUT ME</h2>
          <p>Hello there! I'm Sheikh Ashikuzzaman, an Web Developer and IT Student. I enjoy building impactful web experiences and tinkering with code. As both a student and a developer, I am able to envision a product from the early stages, as just a prototype, to finished product.
          </p>
<p>
As a freelance developer, I have created brand identities and site solutions for organisations and start ups, mostly in the business industry.
          </p>
        
        </div>
      </section>
      {/* Projects */}
      <section>
      <h3 className="text-3xl mb-5">PROJECTS</h3>

       
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>

       
          <div className="bg-slate-700 p-7 rounded-md border-white border-t-2 border-l-2">
          <p className="text-xl  font-semibold mb-3">
              Edu Toys
              <span><a className='text-blue-500 mx-5' href="https://edu-toys.web.app/" target='_blank'>Live Site</a></span>
              <span><a className=' mr-5 text-blue-500' href="https://edu-toys.web.app/" target='_blank'>Github Client</a></span>
              <span><a className='text-blue-500' href="https://edu-toys.web.app/" target='_blank'>Github Server</a></span>
          </p>
          <p>Discover and explore a vibrant Educational and Learning Toys website with a colorful user interface.
              Select from a wide range of toys categorized within sorted tabs.</p>
            
          </div>
          <div className="bg-slate-700 p-7 rounded-md border-white border-t-2 border-l-2">
          <p className="text-xl  font-semibold mb-3">
              SmashJobs
              <span><a className='text-blue-500 mx-5' href="https://edu-toys.web.app/" target='_blank'>Live Site</a></span>
              <span><a className=' mr-5 text-blue-500' href="https://edu-toys.web.app/" target='_blank'>Github Client</a></span>
              <span><a className='text-blue-500' href="https://edu-toys.web.app/" target='_blank'>Github Server</a></span>
          </p>
          <p>Seamlessly apply to job listings and store application details using local storage. Easily track and
manage your applied jobs, filter between onsite and remote positions on the Applied Jobs Page.</p>
            
          </div>
          <div className="bg-slate-700 p-7 rounded-md border-white border-t-2 border-l-2">
          <p className="text-xl  font-semibold mb-3">
          Nippon Resutoran
              <span><a className='text-blue-500 mx-5' href="https://edu-toys.web.app/" target='_blank'>Live Site</a></span>
              <span><a className=' mr-5 text-blue-500' href="https://edu-toys.web.app/" target='_blank'>Github Client</a></span>
              <span><a className='text-blue-500' href="https://edu-toys.web.app/" target='_blank'>Github Server</a></span>
          </p>
          <p>Japanese cuisine-based site featuring skilled chefs showcasing their famous recipes. Signing in is
required to access chef recipes, ensuring a secure and personalized culinary journey.</p>
            
          </div>
          <div className="bg-slate-700 p-7 rounded-md border-white border-t-2 border-l-2">
          <p className="text-xl  font-semibold mb-3">
          Lingos
              <span><a className='text-blue-500 mx-5' href="https://edu-toys.web.app/" target='_blank'>Live Site</a></span>
              <span><a className=' mr-5 text-blue-500' href="https://edu-toys.web.app/" target='_blank'>Github Client</a></span>
              <span><a className='text-blue-500' href="https://edu-toys.web.app/" target='_blank'>Github Server</a></span>
          </p>
          <p>Lingos is an educational tech platform delivering quality language learning worldwide through a
beautiful user interface. It offers top classes, secure access control, instructor collaboration,
seamless payment integration, and automated seat management for an optimal learning experience.</p>
            
          </div>
            {/* {/* <Link>
            <img src="" alt="" />
          </Link>
          <h3>EDU TOYS</h3>
           <p></p>
          </div>
        <div className='card'>
            <Link>
            <img src="" alt="" />
          </Link>
          <h3>EDU TOYS</h3>
           <p></p>
          </div>
        <div className='card'>
            <Link>
            <img src="" alt="" />
          </Link>
          <h3>EDU TOYS</h3>
           <p></p>
          </div>
        <div className='card'>
            <Link>
            <img src="" alt="" />
          </Link>
          <h3>EDU TOYS</h3>
           <p></p> */}
          </div> 
        
      </section>

      {/* Contact  */}
      <section className='text-xl my-28'>
      <h2 className='text-2xl mb-4'>CONTACT EMOJI</h2>
      <p className='mb-5'>Let's create something awesome together!</p>
      <p>Whether you want to hire me, work with me on a project or just simply want to say hey, feel free to drop me a line. I'd love to chat.</p>
      <button className='px-5 py-3 bg-blue-500 rounded-full mt-5 '  ><a href="mailto:ashikuzzaman099@gmail.com">Say Hey! 👋</a></button>
      </section>
    </div>
  );
};

export default MainPage;