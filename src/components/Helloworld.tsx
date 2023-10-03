import "./style.css";

interface IHelloWorld {
  text: string;
}

const Helloworld = ({ text }: IHelloWorld) => {
  return <div className="text">This is test text: {text}</div>;
};

export default Helloworld;
