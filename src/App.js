import './styles/App.scss';
import { images } from "./constants"


function App() {
  return (
    <>
      <div className="container">
        <div className="mob__screen">
          <div className="header">
            <h1>hafiz</h1>
          </div>

          <div className="curousel">
            <div className="curousel__one c-size">
              <div className="prof-img">
                <img src={images.profileImg} alt="profile" />
              </div>
              <div className="prof-bio">
                <h1>Hey,<br /> I'm Hafiz</h1>
                <span>Front-end web developer</span>
              </div>
            </div>
            <div className="curousel__two c-size">
              <div className="work-bio">
                <h1>Currently I'm in</h1>
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="work-img">
                <img src={images.workImg} alt="work" />
              </div>
            </div>
            <div className="curousel__three c-size">
              <div className="bg-img">
                <img src={images.quoteImg} alt="quote" />
                <span>"I bring websites to life with clean, modern designs and intuitive functionality."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
