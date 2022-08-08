
import Header from "../UI/Header";
import Project from "../UI/Project";
import Skill from "../UI/Skill";
import Work from "../UI/Work";
import Footer from "../UI/Footer";
function Index() {
  return (
    <>
      <div className="body-part">
          

            <section id="about">
              <Header />
            </section>
         
            <section id="project">
              <Project />
            </section>
          
          
            <section id="skill">
              <Skill />
            </section>
          
      
            <section id="work">
              <Work />
            </section>
          
       
            <section id="contact">
              <Footer />
            </section>
          
          
        
      </div>
    </>
  );
}

export default Index;
