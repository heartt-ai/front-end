import React, { useEffect } from "react";
import "../styles/dashboard.min.css";
import "../styles/daterangepicker.css";
import "../styles/ion.rangeSlider.min.css";
import "../styles/jquery.scrollbar.css";
import "../styles/select2.css";
import "../styles/swiper.css";
import Submenu from "../images/icons/icons-24-gray/submenu.png";
import Notiification from "../images/icons/icons-24-gray/notifications.png";
import BPChart from "./BPChart";
import GlucoseChart from "./GlucoseChart";
import HeartRateChart from "./HeartRateChart";
import CholesterolChart from "./CholesterolChart";
import Avatar from "../images/avatar-2.JPG";
import Results from "../images/icons/icons-64-white/flask.png";
import Stethoscope from "../images/icons/icons-64-white/stethoscope.png";
import Doctor from "../images/icons/icons-64-white/doctor.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import AudioAnalyser from "./AudioAnalyser";

// We'll store the value of te bars we want to draw in here
const bars = [];

// An instance of AudioContext
const audioContext = new AudioContext();

// This will become our input MediaStreamSourceNode
let input = null;

// This will become our AnalyserNode
let analyser = null;

// This will become our ScriptProcessorNode
let scriptProcessor = null;

// Canvas related variables
const barWidth = 2;
const barGutter = 2;
const barColor = "#49F1D5";

let canvas = null;
let canvasContext = null;
let width = 0;
let height = 0;
let halfHeight = 0;
let drawing = false;

// const canvasRef = useRef(null);
// const contextRef = useRef(null);

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
    };
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
  }

  async getMicrophone() {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    this.setState({ audio });
  }

  stopMicrophone() {
    this.state.audio.getTracks().forEach((track) => track.stop());
    this.setState({ audio: null });
  }

  toggleMicrophone() {
    if (this.state.audio) {
      this.stopMicrophone();
    } else {
      this.getMicrophone();
    }
  }

  render() {
    return (
      <div
        style={{
          height: "100%",
        }}
      >
        <body
          style={{
            height: "100%",
          }}
        >
          <div
            class="dashboard-wrap"
            style={{
              height: "100%",
            }}
          >
            <header class="sidebar-header">
              <h1 class="sidebar-header__logo">
                <span>
                  heart<strong>.ai</strong>
                </span>
              </h1>
            </header>

            <div
              class="section section--sidebar"
              id="sidebar"
              style={{
                height: "927px",
              }}
            >
              <nav class="sidebar-menu">
                <ul>
                  <Link to="/dashboard">
                    <li class="dashboard">
                      <a href="dashboard.html">
                        <b>Dashboard</b>
                      </a>
                    </li>
                  </Link>
                  <Link to="/login">
                    <li class="appointment">
                      <a href="dashboard__appointments.html">
                        <b>Record</b>
                      </a>
                    </li>
                  </Link>
                  <Link to="/login">
                    <li class="doctors has-submenu">
                      <a href="#">
                        <b>Doctors</b>
                      </a>
                    </li>
                  </Link>
                  <Link to="/login">
                    <li class="settings">
                      <a href="#">
                        <b>Settings</b>
                      </a>
                    </li>
                  </Link>
                </ul>
              </nav>
            </div>

            <div class="section section--content" id="content">
              <div class="grid grid--margin">
                <header class="content-header">
                  <div class="sidebar-resize"></div>
                  <div class="mobile-menu">
                    <div class="st-burger-icon st-burger-icon--medium">
                      <span></span>
                    </div>
                  </div>

                  <div class="content-header__user content-header__dropdown">
                    <div
                      class="content-header__user-avatar content-header__dropdown-activate"
                      data-dropdown="userdropdown"
                    >
                      <div class="content-header__user-thumb">
                        <img src={Avatar} alt="" title="" />
                      </div>
                      <span class="content-header__user-name">
                        Joseph Orlando
                      </span>
                    </div>
                    <nav
                      class="dropdown-menu dropdown-menu--header dropdown-menu--user-menu "
                      id="userdropdown"
                    >
                      <h3 class="dropdown-menu__subtitle">User menu</h3>
                    </nav>
                  </div>

                  <div class="content-header__notifications content-header__dropdown">
                    <div
                      class="content-header__notifications-icon content-header__icon content-header__dropdown-activate"
                      data-dropdown="notificationsdropdown"
                    >
                      <img src={Notiification} alt="" title="" />
                      <span class="content-header__icon-bubble">0</span>
                    </div>
                  </div>

                  <div class="content-header__quicklinks content-header__dropdown">
                    <div
                      class="content-header__quicklinks-icon content-header__icon content-header__dropdown-activate"
                      data-dropdown="quicklinksdropdown"
                    >
                      <img src={Submenu} alt="" title="" />
                    </div>
                  </div>
                </header>
              </div>
              <div
                class="grid grid--margin bg-white"
                style={{
                  textAlign: "left",
                }}
              >
                <div class="grid__row">
                  <div class="grid__col grid__col--padding">
                    <h3 class="grid__col-title">Record Your Symptoms</h3>
                  </div>
                </div>

                <div class="grid__row grid__row--margin">
                  <div class="grid__col grid__col--37 grid__col--margin">
                    <label class="form__label">KNOWN DISEASES</label>
                    <select class="custom-select" name="kdiseases">
                      <option value="Patient Name">Type 1 Diabetes</option>
                      <option value="Patient Name">Multiple Sclerosis</option>
                      <option value="Patient Name">Rheumatoid Arthritis</option>
                      <option value="Patient Name">Allergies & Asthma</option>
                      <option value="Patient Name">Celiac Disease</option>
                      <option value="Patient Name">Cancer</option>
                      <option value="Patient Name">Catarrh</option>
                      <option value="Patient Name">Conjunctivitis</option>
                      <option value="Patient Name">Liver Disease</option>
                      <option value="Patient Name">Heart Disease</option>
                      <option value="Patient Name">Epilepsy </option>
                      <option value="Patient Name">Flatulence </option>
                      <option value="Patient Name">Gastroenteritis</option>
                    </select>
                  </div>
                  <div class="grid__col grid__col--37 grid__col--margin">
                    <label class="form__label">Date</label>
                    <input
                      name="adress"
                      id="dates"
                      class="form__input required"
                      type="text"
                    />
                  </div>
                </div>
                <div class="grid__row grid__row--margin">
                  <div class="grid__col grid__col--37 grid__col--margin">
                    <label class="form__label">Blood Pressure</label>
                    <input
                      name="adress"
                      id="bloodPressure"
                      class="form__input required"
                      type="text"
                    />
                  </div>
                  <div class="grid__col grid__col--37 grid__col--margin">
                    <label class="form__label">Temperature</label>
                    <input
                      name="adress"
                      id="temperature"
                      class="form__input required"
                      type="text"
                    />
                  </div>
                </div>
                <div class="grid__row grid__row--margin">
                  <div class="grid__col grid__col--margin">
                    <label class="form__label">NOTES</label>
                    <input
                      name="adress"
                      id="notes"
                      class="form__input required"
                      type="text"
                    />
                  </div>
                </div>
                <div class="grid__row grid__row--margin">
                  <div class="grid__col grid__col--margin">
                    <input
                      type="submit"
                      name="submit"
                      class="button button--submit button--blue-bg"
                      id="submit"
                      value="SAVE"
                    />
                  </div>
                </div>
                <iframe
                  allowusermedia
                  title="help"
                  src="https://webaudiodemos.appspot.com/AudioRecorder/index.html"
                  allow="camera *;microphone *"
                  style={{ width: " 1600px", height: "500px" }}
                />
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Record;
