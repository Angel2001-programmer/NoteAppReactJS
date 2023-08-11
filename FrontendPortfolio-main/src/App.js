import "./styles/App.css";
import Navigation from "./components/navigation";
import Courses from "./components/courses";
import Tools from "./components/Tools";
import HeroImage from "./components/heroImage";

function App() {
  let data = [
    {
      id: 0,
      name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      image: "https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg",
      link: "https://",
      status: "Not Complete",
    },

    {
      id: 1,
      name: "CodeFirstGirls Kickstarter Frontend Development",
      image:
        "https://codefirstgirls.com/wp-content/uploads/2021/05/Featured-image-web-1.png",
      link: "https://",
      status: "Completed",
    },
  ];

  let projects = [
    {
      id: 0,
      name: "CodeFirstGirls Music App",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      link: "https://",
      status: "Not Complete",
    },

    {
      id: 1,
      name: "Not made yet.",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      link: "#",
      status: "Not Complete",
    },
  ];

  let tools = [
    {
      id: 0,
      name: "HTML",
      image: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
    },

    {
      id: 1,
      name: "CSS",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
    },

    {
      id: 2,
      name: "Javascript",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },

    {
      id: 3,
      name: "Wordpress",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/2048px-WordPress_blue_logo.svg.png",
    },

    {
      id: 4,
      name: "ReactJS",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256",
    },

    {
      id: 5,
      name: "Bootstrap",
      image:
        "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",
    },
  ];

  return (
    <div>
      <header>
        <Navigation></Navigation>
      </header>
      <HeroImage></HeroImage>
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
        <div className='contentV'>
          <div className='courses'>
            <h1 className='title'>Courses</h1>
            <Courses props={data}></Courses>
          </div>
          <div className='technologies'>
            <h1 className='title'>Technologies</h1>
            <Tools props={tools}></Tools>
          </div>
          <div className='projects'>
            <h1 className='title'>Projects</h1>
            <Courses props={projects}></Courses>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
