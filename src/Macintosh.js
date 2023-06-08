//import styling and assets
// import images from './public/images'
import './style/Macintosh.css';

//import app-elements
import OperationSystem from './components/OS';

function Macintosh() {
  return (

    <div className='macintosh'>

      <main className='macintosh-computer'>
        {/* Macintosh → Body */}
        <section className='mac-body'>
          <div className='mac-body-outerscreen'>
            <div className='mac-body-innerscreen'>
              <OperationSystem />
            </div>
          </div>
        </section>

        <section className='mac-disk'>
          <div className='mac-disk-floppy'></div>
          <div className='mac-disk-button'></div>
        </section>

        <section className='mac-footer'>
          <div className='mac-footer-logo'>
            <object id='macintosh-logo' aria-labelledby='logo_span' data='./images/Apple_Computer_Logo_rainbow.svg' width="30" height="30" alt="Apple Logo"></object>
            <h4>Fluxpuck</h4>
          </div>
        </section>
      </main>

    </div>

  );
}

export default Macintosh;
