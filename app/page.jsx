
import Link from 'next/link';
import {FaArrowLeft} from 'react-icons/fa'
const MainPage = () => {
  return (
    <div>
      <section>
      <h2>HI! I'M ASHIK,
        DEVELOPER & IT STUDENT</h2>
      <p className="playfair-font">from Dhaka, Bangladesh</p>
        <div className="flex"><button>Learn More</button> <button className='text-white'>Contact  </button></div>
        <div className='flex'>
          <h2>ABOUT ME</h2>
          <p>Hello there! I'm Sheikh Ashikuzzaman, an Web Developer and IT Student. I enjoy building impactful web experiences and tinkering with code. As both a student and a developer, I am able to envision a product from the early stages, as just a prototype, to finished product.
          </p>
<p>
As a freelance developer, I have created brand identities and site solutions for organisations and start ups, mostly in the business industry.
          </p>
          <button>Work Experience</button>
        </div>
      </section>
      {/* Projects */}
      <section>
       
        <div className='card'>
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
      <section>
      <h2>CONTACT EMOJI</h2>
      <p>Let's create something awesome together!</p>
      <p>Whether you want to hire me, work with me on a project or just simply want to say hey, feel free to drop me a line. I'd love to chat.</p>
      <button>Say Hey!</button>
      </section>
    </div>
  );
};

export default MainPage;