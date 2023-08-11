import Navigation from "../Navigation/navigation"
import HeroImage from "../HeroImage/heroImage";
import Content from "../Content/content";
import Courses from "../Courses/courses";
import Tools from "../Tools/Tools";

const portfolio = props => {

  const clickHandler = () => {
    console.log('Clicked');
  }


return(
    <div className="web">
      <Navigation></Navigation>
      <HeroImage></HeroImage>
      <Content>
      <div className='content'>
        <div className='summary'>
          <h1 className='title'>Brief Summary</h1>
          <p>
            A little bit about me, Hi I am Angel Im 22 years old, studying
            ReactJS through Udemy.com. I am also studying a kick-starter course
            provided by Code First Girls about frontend development. I have
            always had a passion for tech since a little kid, computers has
            always fascinated me about how they function, 22 years later and I
            still love computers.
          </p>
          <p>Please explore my Portfolio to find out more about me!</p>
        </div>
        </div>
      </Content>
      
      <Content>
        <div className='contentV'>
          <div className='courses'>
            <h1 className='title'>Courses</h1>
            <Courses onClick={clickHandler} data={props.data}></Courses>
          </div>

          <div className='technologies'>
            <h1 className='title'>Technologies</h1>
            <Tools tools={props.tools}></Tools>
          </div>

          <div className='projects'>
            <h1 className='title'>Projects</h1>
            <Courses onClick={clickHandler} data={props.projects}></Courses>
          </div>
        </div>
        </Content>
      </div>
)
}

export default portfolio;