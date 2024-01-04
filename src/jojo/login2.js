import './login2.css'
import { Link } from "react-router-dom"
function Login() {
      return (
        <div>
          <section>
            <div className="blob1">
              <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                <g transform="translate(-160, -260)">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#4fa4f4'}} />
                      <stop offset="100%" style={{stopColor: '#8dccf5'}} />
                    </linearGradient>
                  </defs>
                  <path fill="url(#gradient)">
                    <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M445.5,315Q453,380,389.5,398.5Q326,417,275,425.5Q224,434,166,424Q108,414,88.5,358.5Q69,303,54,245.5Q39,188,70.5,133.5Q102,79,158,41Q214,3,272.5,38Q331,73,393.5,95.5Q456,118,447,184Q438,250,445.5,315Z;
                      M420,315.5Q454,381,392,403Q330,425,280.5,403Q231,381,198.5,363.5Q166,346,121.5,323.5Q77,301,85,252.5Q93,204,115.5,162.5Q138,121,183,108.5Q228,96,281,81.5Q334,67,382,100.5Q430,134,408,192Q386,250,420,315.5Z;
                      M417,307.5Q429,365,382,400Q335,435,280.5,426Q226,417,175.5,405.5Q125,394,115,343.5Q105,293,91,246Q77,199,120.5,174.5Q164,150,196.5,126Q229,102,271,107.5Q313,113,335.5,146.5Q358,180,381.5,215Q405,250,417,307.5Z;
                      M459.5,310Q436,370,393,419.5Q350,469,287.5,447Q225,425,186,397Q147,369,86.5,342.5Q26,316,61.5,260.5Q97,205,105.5,149Q114,93,165,53.5Q216,14,280.5,27.5Q345,41,377,94.5Q409,148,446,199Q483,250,459.5,310Z;
                      M445.5,315Q453,380,389.5,398.5Q326,417,275,425.5Q224,434,166,424Q108,414,88.5,358.5Q69,303,54,245.5Q39,188,70.5,133.5Q102,79,158,41Q214,3,272.5,38Q331,73,393.5,95.5Q456,118,447,184Q438,250,445.5,315Z" />
                  </path>
                </g>
              </svg>
            </div>
            <div className="blob2">
              <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                <g transform="translate(411, 270)">
                  <defs>
                    <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                      <stop offset="100%" style={{stopColor: '#8dccf5'}} />
                      <stop offset="0%" style={{stopColor: '#4fa4f4'}} />
                    </linearGradient>
                  </defs>
                  <path fill="url(#gradient)">
                    <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M421.5,284.5Q358,319,337,357Q316,395,270,413.5Q224,432,191.5,393.5Q159,355,121.5,327Q84,299,115,259Q146,219,123,148Q100,77,158,46.5Q216,16,282.5,24.5Q349,33,398.5,78Q448,123,466.5,186.5Q485,250,421.5,284.5Z;
                  M424,305.5Q423,361,376.5,393.5Q330,426,276.5,431Q223,436,167,423Q111,410,99,354Q87,298,76.5,247Q66,196,83,136.5Q100,77,167,109Q234,141,277,118.5Q320,96,377.5,113.5Q435,131,430,190.5Q425,250,424,305.5Z;
                  M448,299Q402,348,371.5,398Q341,448,287,408Q233,368,169.5,392Q106,416,65.5,366Q25,316,86.5,268Q148,220,159,189Q170,158,197,115Q224,72,258.5,114.5Q293,157,345.5,156Q398,155,446,202.5Q494,250,448,299Z;
                  M461.5,314Q448,378,375.5,372.5Q303,367,260.5,420.5Q218,474,154,454Q90,434,51,377Q12,320,75.5,268.5Q139,217,136,165.5Q133,114,176,76Q219,38,270.5,65.5Q322,93,382,110Q442,127,458.5,188.5Q475,250,461.5,314Z;
                  M421.5,284.5Q358,319,337,357Q316,395,270,413.5Q224,432,191.5,393.5Q159,355,121.5,327Q84,299,115,259Q146,219,123,148Q100,77,158,46.5Q216,16,282.5,24.5Q349,33,398.5,78Q448,123,466.5,186.5Q485,250,421.5,284.5Z" />
                  </path>
                </g>
              </svg>
            </div>
            <div className="box1">
              <div className="container1">
                <div className="form1">
                  <h2>Login</h2>
                  <form>
                    <div className="inputBox1">
                      <input type="email" placeholder="Email ID" required/>
                    </div>
                    <div className="inputBox1">
                      <input type="Password" placeholder="Password" required/>
                    </div>
                    <div className="inputBox1">
                      <input type="submit" defaultValue="Login" required/>
                    </div>
                    <p className="forget1"><a href="#">Forgot Password?</a></p>
                    <p className="forget1">Don't have an account? <Link to ='/signup'>Sign Up</Link></p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
export default Login;