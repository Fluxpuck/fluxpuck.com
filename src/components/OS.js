//import styling and assets
// import images from './public/images'
import '../style/OS.css';

//import app-elements
import OSnavigation from './navigation';

function OperationSystem() {
  return (
    <div className="OS">
      <header className="OS-header">

        <div className='OS-logo'></div>

        <OSnavigation />

      </header>

      <main className="OS-main">

        <section className='App-content' id='frontPage'>
          <p>frontpage</p>
        </section>

        <section className='App-content' id='aboutMe'>
          <p>about me</p>
        </section>

        <section className='App-content' id='projects'>
          <p>projects</p>
        </section>

        <section className='App-content' id='contact'>
          <p>contact</p>
        </section>

        <section className='App-content' id='credits'>
          <p>credits (game)</p>
        </section>
      </main>
    </div>
  );
}

export default OperationSystem;
