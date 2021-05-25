import React from "react";

// import mainPhoto from "./images/photo-leo.jpg";
// import gtuCoatOfArms from "./images/gtu.png";
// import ugLogo from "./images/ug.png";
import lupiLogo from "./images/lupi.png";
import exactproLogo from "./images/exactpro.png";
import { ReactComponent as MyLocationIcon } from "./images/location.svg";
import { ReactComponent as MyPhoneIcon } from "./images/phone.svg";
import { ReactComponent as MyMailIcon } from "./images/mail.svg";
import { ReactComponent as MyGitIcon } from "./images/git.svg";
import { ReactComponent as MyLinkedinIcon } from "./images/linkedin.svg";
import "./App.scss";

const BasicInfo = () => {
    return (
        <div className={"basicInfo"}>
            <div className={"i1"}>
                <div className={"name"}>Levan Katsadze</div>
                <div className={"prof"}>Frontend Developer</div>
                <div className={"birth"}>1995-03-03</div>
            </div>

            <div className={"i2"}>
                <div className={"mail i2child"}>
                    <span className={"span"}>
                        <MyMailIcon className={"mailIcon icon"} />
                    </span>
                    <span className={"span"}>leodevbro@gmail.com</span>
                </div>
                <div className={"github i2child"}>
                    <span className={"span"}>
                        <MyGitIcon className={"gitIcon icon"} />
                    </span>
                    <span className={"span"}>
                        <a
                            href="https://github.com/leodevbro"
                            target="_blank"
                            rel="noreferrer"
                        >
                            github.com/leodevbro
                        </a>
                    </span>
                </div>
                <div className={"github i2child"}>
                    <span className={"span"}>
                        <MyLinkedinIcon className={"linkedinIcon icon"} />
                    </span>
                    <span className={"span"}>
                        <a
                            href="https://www.linkedin.com/in/leodevbro/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            linkedin.com/in/leodevbro
                        </a>
                    </span>
                </div>
                <div className={"phone i2child"}>
                    <span className={"span"}>
                        <MyPhoneIcon className={"phoneIcon icon"} />
                    </span>
                    <span className={"span"}>+995 598776645</span>
                </div>
                <div className={"location i2child"}>
                    <span className={"span"}>
                        <MyLocationIcon className={"locationIcon icon"} />
                    </span>
                    <span className={"span"}>Tbilisi, Georgia</span>
                </div>
            </div>
        </div>
    );
};

const BriefBar = () => {
    return (
        <div className={"briefBar"}>
            <div className={"skillBox bbItem"}>
                <div className={"skillsHead hea"}>SKILLS</div>
                <hr className={"hr"} />
                <div className={"skillsBody"}>
                    <span className={"skill"}>React</span>
                    <span className={"skill"}>TypeScript</span>
                    <span className={"skill"}>JavaScript (ES6)</span>
                    <span className={"skill"}>Advanced English</span>
                    <span className={"skill"}>Math</span>
                    <span className={"skill"}>Basics of SQL</span>
                    <span className={"skill"}>Basics of Python</span>
                </div>
            </div>
            <div className={"langBox bbItem"}>
                <div className={"langHead hea"}>LANGUAGE</div>
                <hr className={"hr"} />
                <div className={"langBody"}>
                    <div className={"lang"}>
                        <div className={"langName"}>English</div>
                        <div className={"langStatus"}>
                            Advanced Professional Proficiency
                        </div>
                    </div>
                    <div className={"lang"}>
                        <div className={"langName"}>Georgian</div>
                        <div className={"langStatus"}>Native</div>
                    </div>
                </div>
            </div>
            <div className={"interestsBox bbItem"}>
                <div className={"interestsHead hea"}>INTERESTS</div>
                <hr className={"hr"} />
                <div className={"interestsBody"}>
                    <span className={"interest"}>CGI</span>
                    <span className={"interest"}>Chess</span>
                    <span className={"interest"}>Movies</span>
                    <span className={"interest"}>Art</span>
                    <span className={"interest"}>Math</span>
                    <span className={"interest"}>Problem Solving</span>
                    <span className={"interest"}>AI, ML</span>
                    <span className={"interest"}>Quantum Physics</span>
                    <span className={"interest"}>Video Games</span>
                    <span className={"interest"}>Table Tennis</span>
                    <span className={"interest"}>Philosophy</span>
                </div>
            </div>
        </div>
    );
};

const NanoItem: React.FC<{
    imgSrc: string;
    title: string;
    org: string;
    orgHref: string;
    time: string;
}> = ({ imgSrc, title, org, orgHref, time }) => {
    return (
        <div className={"nanoItem"}>
            <div className={"imgBox"}>
                <img className={"logo img"} src={imgSrc} alt="nano logo" />
            </div>
            <div className={"infoBox"}>
                <div className={"nanoTitle"}>{title}</div>
                <div className={"nanoOrg"}>
                    <a href={orgHref} target={"_blank"} rel={"noreferrer"}>
                        {org}
                    </a>
                </div>
                <div className={"nanoTime"}>{time}</div>
            </div>
        </div>
    );
};

const StoryBar = () => {
    return (
        <div className={"storyBar"}>
            <div className={"edu"}>
                <div className={"eduHead hea"}>EDUCATION</div>
                <hr className={"hr"} />
                <div className={"eduBody"}>
                    {/* <NanoItem
                        imgSrc={"gtuCoatOfArms"}
                        title={"Web Technologies (Master's Degree)"}
                        org={"Georgian Technical University (Tbilisi, Georgia)"}
                        orgHref={"https://www.facebook.com/gtu.ge"}
                        time={"10/2019 - Present"}
                    /> */}

                    {/* <NanoItem
                        imgSrc={ugLogo}
                        title={"Informatics (Bachelor's Degree)"}
                        org={"The University of Georgia (Tbilisi, Georgia)"}
                        orgHref={
                            "https://www.facebook.com/TheUniversityofGeorgia"
                        }
                        time={"09/2014 - 09/2019"}
                    /> */}
                </div>
            </div>
            <div className={"bigProjects"}>
                <div className={"bpHead hea"}>Personal Large Project(s)</div>
                <hr className={"hr"} />
                <div className={"bpBody"}>
                    <div className={"bpItem"}>11</div>
                    <div className={"bpItem"}>11</div>
                    <div className={"bpItem"}>33</div>
                </div>
            </div>
            <div className={"jobs"}>
                <div className={"jobsHead hea"}>Work Experience</div>
                <hr className={"hr"} />
                <div className={"jobsBody"}>
                    <NanoItem
                        imgSrc={lupiLogo}
                        title={"Frontend Developer"}
                        org={"Lupi AI - ლუპი აი (Tbilisi, Georgia)"}
                        orgHref={"https://www.facebook.com/lupiapp"}
                        time={"10/2020 - 05/2021"}
                    />

                    <NanoItem
                        imgSrc={exactproLogo}
                        title={"Software Tester"}
                        org={"Exactpro Systems (Tbilisi, Georgia)"}
                        orgHref={
                            "https://www.linkedin.com/company/exactpro-systems-llc/"
                        }
                        time={"02/2020 - 09/2020"}
                    />
                </div>
            </div>

            <div className={"miniProjects"}>
                <div className={"mpHead hea"}>Personal Small Projects</div>
                <hr className={"hr"} />
                <div className={"mpBody"}>
                    <div className={"mpItem"}>11</div>
                    <div className={"mpItem"}>11</div>
                    <div className={"mpItem"}>33</div>
                </div>
            </div>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <header className="header">
                {/* <img className={"img"} src={mainPhoto} alt="main" /> */}
                <BasicInfo />
            </header>

            <div className={"appBody"}>
                <BriefBar />
                <StoryBar />
            </div>
        </div>
    );
}

export default App;
