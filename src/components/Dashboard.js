import React from "react";
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

export default function Dashboard() {
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
                <Link to="/record">
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
              <div
                class="grid__row dashboard-intro"
                style={{
                  textAlign: "left",
                }}
              >
                <div class="grid__col grid__col--margin grid__col--padding bg-white">
                  <div class="grid__row">
                    <div class="grid__col grid__col--margin grid__col--12">
                      <div class="dashboard-intro__title">
                        Good morning, <span>Joseph</span>
                      </div>
                      <div class="dashboard-intro__subtitle">
                        Here is your dashboard where you can see data on your
                        latest exam as well as report and submit any new data.
                      </div>
                    </div>
                  </div>
                  <div class="grid__row">
                    <div class="grid__col grid__col--margin grid__col--45">
                      <div class="patient-info">
                        <div class="patient-info__thumb">
                          <img src={Avatar} alt="" title="" />
                        </div>
                        <div class="patient-info__details">
                          <div class="patient-info__title">Joseph Orlando</div>
                          <div class="patient-info__row">
                            <div class="patient-info__col">
                              <span>Birth:</span> 05 May 1999 (21 y.o)
                            </div>
                            <div class="patient-info__col">
                              <span>Gender:</span> Male
                            </div>
                            <div class="patient-info__col">
                              <span>Address:</span> 555 East Romero Drive
                            </div>
                          </div>
                          <div class="patient-info__row">
                            <div class="patient-info__col">
                              <span>Email:</span>{" "}
                              <a href="#">contact@josephorlando.dev</a>
                            </div>
                            <div class="patient-info__col">
                              <span>Phone:</span>{" "}
                              <a href="tel:123">386 555 5555</a>
                            </div>
                            <div class="patient-info__col">
                              <span>Languages:</span> English
                            </div>
                          </div>
                          <div class="patient-info__row">
                            <div class="patient-info__col">
                              <span>Blood type:</span> 0+
                            </div>
                            <div class="patient-info__col">
                              <span>Allergies:</span> Penicilin, honey, some
                              peanuts
                            </div>
                            <div class="patient-info__col">
                              <span>Diseases:</span> Coronary Artery Disease
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid__col grid__col--margin grid__col--15 d-flex justify-fe aligns-fs">
                      <span
                        class="show-more show-more--select show-more--select-gray has-dropdown"
                        data-dropdown="moreoptions"
                      >
                        Edit your profile
                      </span>
                    </div>
                    <nav
                      class="dropdown-menu dropdown-menu--content"
                      id="moreoptions"
                    >
                      <ul>
                        <li>
                          <a href="#">Upload photo</a>
                        </li>
                        <li>
                          <a href="#">Edit info</a>
                        </li>
                        <li>
                          <a href="#">Edit settings</a>
                        </li>
                        <li>
                          <a href="#">+ Add widget</a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div class="grid__row">
                    <div class="grid__col grid__col--14 grid__col--margin grid__col--padding bg-gray10 mb0">
                      <div class="grid__row justify-sb">
                        <div class="grid__col grid__col--mb-12">
                          <h3 class="grid__col-title">Blood Pressure</h3>
                          <span class="grid__col-subinfo gradient-blue gradient-text">
                            120/80
                          </span>
                          <span class="grid__col-subtitle">NORMAL (mm/Hg)</span>
                        </div>
                        <div class="grid__col grid__col--mb-12 d-flex justify-fe">
                          <span
                            class="show-more show-more--plus bg-white color-gray600 has-dropdown"
                            data-dropdown="tasksdropdown"
                          >
                            +
                          </span>
                        </div>
                      </div>

                      <nav
                        class="dropdown-menu dropdown-menu--content"
                        id="tasksdropdown"
                      >
                        <ul>
                          <li>
                            <a href="#">More Details</a>
                          </li>
                          <li>
                            <a href="#">View Activity</a>
                          </li>
                          <li>
                            <a href="#">Edit Settings</a>
                          </li>
                          <li>
                            <a href="#">+ Edit widget</a>
                          </li>
                        </ul>
                      </nav>
                      <BPChart style={{ width: "100%", height: "20" }} />
                    </div>
                    <div class="grid__col grid__col--14 grid__col--margin grid__col--padding bg-gray10 mb0">
                      <div class="grid__row justify-sb">
                        <div class="grid__col grid__col--mb-12">
                          <h3 class="grid__col-title">Heart Rate</h3>
                          <span class="grid__col-subinfo gradient-lightblue gradient-text">
                            80
                          </span>
                          <span class="grid__col-subtitle">NORMAL (bpm)</span>
                        </div>
                        <div class="grid__col grid__col--mb-12 d-flex justify-fe">
                          <span
                            class="show-more show-more--plus bg-white color-gray600 has-dropdown"
                            data-dropdown="newpatientsdropdown"
                          >
                            +
                          </span>
                        </div>
                      </div>
                      <nav
                        class="dropdown-menu dropdown-menu--content"
                        id="newpatientsdropdown"
                      >
                        <ul>
                          <li>
                            <a href="#">More Details</a>
                          </li>
                          <li>
                            <a href="#">View Patients</a>
                          </li>
                          <li>
                            <a href="#">Edit Settings</a>
                          </li>
                          <li>
                            <a href="#">+ Edit widget</a>
                          </li>
                        </ul>
                      </nav>
                      <HeartRateChart style={{ width: "100%", height: "20" }} />
                    </div>
                    <div class="grid__col grid__col--14 grid__col--margin grid__col--padding bg-gray10 mb0">
                      <div class="grid__row justify-sb">
                        <div class="grid__col grid__col--mb-12">
                          <h3 class="grid__col-title">Glucose</h3>
                          <span class="grid__col-subinfo gradient-pink gradient-text">
                            92
                          </span>
                          <span class="grid__col-subtitle">HIGH (mg/dl)</span>
                        </div>
                        <div class="grid__col grid__col--mb-12 d-flex justify-fe">
                          <span
                            class="show-more show-more--plus bg-white color-gray600 has-dropdown"
                            data-dropdown="alertdropdown"
                          >
                            +
                          </span>
                        </div>
                      </div>
                      <nav
                        class="dropdown-menu dropdown-menu--content"
                        id="alertdropdown"
                      >
                        <ul>
                          <li>
                            <a href="#">More Details</a>
                          </li>
                          <li>
                            <a href="#">View Alerts</a>
                          </li>
                          <li>
                            <a href="#">Edit Settings</a>
                          </li>
                          <li>
                            <a href="#">+ Edit widget</a>
                          </li>
                        </ul>
                      </nav>
                      <GlucoseChart style={{ width: "100%", height: "20" }} />
                    </div>
                    <div class="grid__col grid__col--14 grid__col--margin grid__col--padding bg-gray10 mb0">
                      <div class="grid__row justify-sb">
                        <div class="grid__col grid__col--mb-12">
                          <h3 class="grid__col-title">Cholesterol</h3>
                          <span class="grid__col-subinfo">120</span>
                          <span class="grid__col-subtitle">HIGH (mg/dl)</span>
                        </div>
                        <div class="grid__col grid__col--mb-12 d-flex justify-fe">
                          <span
                            class="show-more show-more--plus bg-white color-gray600 has-dropdown"
                            data-dropdown="alertdropdown"
                          >
                            +
                          </span>
                        </div>
                      </div>
                      <nav
                        class="dropdown-menu dropdown-menu--content"
                        id="alertdropdown"
                      >
                        <ul>
                          <li>
                            <a href="#">More Details</a>
                          </li>
                          <li>
                            <a href="#">View Alerts</a>
                          </li>
                          <li>
                            <a href="#">Edit Settings</a>
                          </li>
                          <li>
                            <a href="#">+ Edit widget</a>
                          </li>
                        </ul>
                      </nav>
                      <CholesterolChart
                        style={{ width: "100%", height: "20" }}
                      />
                    </div>
                  </div>
                  <div class="grid__row">
                    <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding gradient-blue widget-icon selected">
                      <Link
                        to="/record"
                        style={{ padding: "1px", color: "white" }}
                      >
                        {" "}
                        <img src={Stethoscope} alt="" title="" />
                        <h5>Record New Symptom</h5>
                      </Link>
                    </div>

                    <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding gradient-lightblue widget-icon selected">
                      <Link
                        to="/login"
                        style={{ padding: "1px", color: "white" }}
                      >
                        {" "}
                        <span class="widget-icon__badge">3 NEW</span>
                        <img src={Results} alt="" title="" />
                        <h5>Results</h5>
                      </Link>
                    </div>
                    <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding gradient-pink widget-icon selected">
                      <Link
                        to="/login"
                        style={{ padding: "1px", color: "white" }}
                      >
                        <span class="widget-icon__badge">2 NEW</span>
                        <img src={Doctor} alt="" title="" />
                        <h5>Find a Doctor</h5>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
