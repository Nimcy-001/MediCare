import './welcome1.css'
import { Link } from "react-router-dom"

function Welcome() {
      return (
        <div>
          <div className="container_">
            <nav>
              <ul>
                <li><Link to ='/login'>Login</Link> </li>
                <li><Link to ='/signup'>Sign Up</Link> </li>
              </ul>
            </nav>
            <div className="text-box">
              <p>Welcome to</p>
              <h1>MEDICARE</h1>
              <h3>Your Health, Our Priority!</h3>
            </div>
          </div>
        </div>
      );
    }
export default Welcome;