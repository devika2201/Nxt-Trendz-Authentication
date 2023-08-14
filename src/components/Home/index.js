import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="body-container">
      <div className="content-container">
        <h1 className="heading">Clothes that get YOU noticed</h1>
        <div className="image-container1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="image-size "
          />
        </div>
        <p className="para">Fashion is part of the daily air</p>
        <button type="button" className="button">
          Shop Now
        </button>
      </div>
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="image-size "
        />
      </div>
    </div>
  </div>
)

export default Home
