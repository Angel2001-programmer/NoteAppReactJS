import "./App.css";
import Modal from "./UI/Modal/modal";
import Portfolio from "./components/Portfolio/portfolio";
import { Fragment } from "react";

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
    <Fragment>
      <Modal/>
      <Portfolio 
      data={data} 
      projects={projects} 
      tools={tools}
      />
    </Fragment>
  );
}

export default App;
