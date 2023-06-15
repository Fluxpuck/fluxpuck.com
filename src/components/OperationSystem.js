//import styling and assets
// import images from './public/images'
import '../style/Navigation.css';
import '../style/Application.css';

//import app-elements
import OSnavigation from './Navigation';
import Application from './Applications';

function OperationSystem() {
  return (
    <div className="OS">
      <header className="OS-header">

        <div className='OS-logo'></div>

        <OSnavigation />

      </header>

      <main className="OS-main">

        <Application />

      </main>
    </div>
  );
}

export default OperationSystem;
