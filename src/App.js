import './App.css';
import Navbar from './components/misc/Navbar/Navbar';
import Card from './components/misc/Card/Card';
import Button from './components/misc/Button/Button';
import ContactSection from './components/misc/ContactSection/ContactSection';

function App() {

  const data = [
    {
      title: "Termomix",
      img: "https://picsum.photos/id/230/200/125",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "PS5",
      img: "https://picsum.photos/id/220/200/125",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "PS3",
      img: "https://picsum.photos/id/210/200/125",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "Mango",
      img: "https://picsum.photos/id/211/200/125",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ]

  return (
    <div className="App">
      <Navbar logo="iron-components"/>
      <div className="container">
        <div className="row">
          {data.map((product, index) => {
            return (
              <div className="col-3" key={index}>
                <Card {...product} actionMsg="Ver más detalles">
                  <div>
                    <Button type="secondary">secondary</Button>
                  </div>
                </Card>
              </div>
            )}
          )}
        </div>
        <div className="mt-5 d-flex justify-content-around">
          <Button type="secondary">CALL TO ACTION</Button>
          <Button type="primary">CALL TO ACTION</Button>
          <Button type="danger">CALL TO ACTION</Button>
          <Button type="warning">CALL TO ACTION</Button>
        </div>
        <div className="mt-5">
          <ContactSection title="Contact us please!" color="red" buttonProps={{ text: "CONTACTA", type: "warning"}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
