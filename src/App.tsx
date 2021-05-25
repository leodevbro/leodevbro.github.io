import React from "react";

import mainPhotoBuildPath from "./images/photo-leo.jpg";
import gtuCoatOfArmsBuildPath from "./images/gtu.png";
import ugLogoBuildPath from "./images/ug.png";
import lupiLogoBuildPath from "./images/lupi.png";
import exactproLogoBuildPath from "./images/exactpro.png";
import blockmanIconBuildPath from "./images/blockman-icon.png";
import musicRankIconBuildPath from "./images/music-rank-logo-draft.png";
import musicRankSheetsIconBuildPath from "./images/music-rank-sheets.png";
import emojiIconBuildPath from "./images/emoji.png";
import ticTacToeIconBuildPath from "./images/tic-tac-toe.png";
import numberSumIconBuildPath from "./images/number-sum.png";

import { ReactComponent as MyLocationIcon } from "./images/location.svg";
import { ReactComponent as MyPhoneIcon } from "./images/phone.svg";
import { ReactComponent as MyMailIcon } from "./images/mail.svg";
import { ReactComponent as MyGitIcon } from "./images/git.svg";
import { ReactComponent as MyLinkedinIcon } from "./images/linkedin.svg";
import "./App.scss";

console.log("mainPhoto:", mainPhotoBuildPath);

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
    info1: string;
    mainLink: string;
    info2: string;
}> = ({ imgSrc, title, info1, mainLink, info2 }) => {
    return (
        <div className={"nanoItem"}>
            <div className={"imgBox"}>
                <img className={"logo img"} src={imgSrc} alt="nano logo" />
            </div>
            <div className={"infoBox"}>
                <div className={"nanoTitle"}>{title}</div>
                <div className={"nanoLinkBox"}>
                    <a href={mainLink} target={"_blank"} rel={"noreferrer"}>
                        {info1}
                    </a>
                </div>
                <div className={"nanoInfo2"}>{info2}</div>
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
                    <NanoItem
                        imgSrc={gtuCoatOfArmsBuildPath}
                        title={"Web Technologies (Master's Degree)"}
                        info1={
                            "Georgian Technical University (Tbilisi, Georgia)"
                        }
                        mainLink={"https://www.facebook.com/gtu.ge"}
                        info2={"10/2019 - Present"}
                    />

                    <NanoItem
                        imgSrc={ugLogoBuildPath}
                        title={"Informatics (Bachelor's Degree)"}
                        info1={"The University of Georgia (Tbilisi, Georgia)"}
                        mainLink={
                            "https://www.facebook.com/TheUniversityofGeorgia"
                        }
                        info2={"09/2014 - 09/2019"}
                    />
                </div>
            </div>
            <div className={"bigProjects"}>
                <div className={"bpHead hea"}>Personal Large Project(s)</div>
                <hr className={"hr"} />
                <div className={"bpBody"}>
                    <NanoItem
                        imgSrc={blockmanIconBuildPath}
                        title={"Blockman"}
                        info1={
                            "VSCode Extension To Highlight Nested Code Blocks"
                        }
                        mainLink={
                            "https://github.com/leodevbro/vscode-blockman"
                        }
                        info2={
                            "Really wanted to find such feature in code editors, couldn't find anywhere, so I dedicated about 6 months to create it myself."
                        }
                    />
                </div>
            </div>
            <div className={"jobs"}>
                <div className={"jobsHead hea"}>Work Experience</div>
                <hr className={"hr"} />
                <div className={"jobsBody"}>
                    <NanoItem
                        imgSrc={lupiLogoBuildPath}
                        title={"Frontend Developer"}
                        info1={"Lupi AI - ლუპი აი (Tbilisi, Georgia)"}
                        mainLink={"https://www.facebook.com/lupiapp"}
                        info2={"10/2020 - 05/2021"}
                    />

                    <NanoItem
                        imgSrc={exactproLogoBuildPath}
                        title={"Software Tester"}
                        info1={"Exactpro Systems (Tbilisi, Georgia)"}
                        mainLink={
                            "https://www.linkedin.com/company/exactpro-systems-llc/"
                        }
                        info2={"02/2020 - 09/2020"}
                    />
                </div>
            </div>

            <div className={"miniProjects"}>
                <div className={"mpHead hea"}>Personal Small Projects</div>
                <hr className={"hr"} />
                <div className={"mpBody"}>
                    <NanoItem
                        imgSrc={ticTacToeIconBuildPath}
                        title={"Tic-tac-toe game with React.js"}
                        info1={"Live Demo and Source Code"}
                        mainLink={"https://codesandbox.io/s/sad-firefly-jbunr"}
                        info2={"This was a prehire task from Lupi AI."}
                    />
                    <NanoItem
                        imgSrc={musicRankIconBuildPath}
                        title={"Music Rank Initial Structure with React.js"}
                        info1={"Live Demo and Source Code"}
                        mainLink={
                            "https://codesandbox.io/s/thirsty-butter%EF%AC%82y-u1hvc"
                        }
                        info2={
                            "The idea is from Youtube playlists, but with more freedom."
                        }
                    />
                    <NanoItem
                        imgSrc={musicRankSheetsIconBuildPath}
                        title={
                            "Music Rank using Google Sheets and Google Apps Script"
                        }
                        info1={"Video guide"}
                        mainLink={"https://youtu.be/hOx34e08UbY?t=3m0s"}
                        info2={
                            "Google Sheets playground for personal music rank"
                        }
                    />

                    <NanoItem
                        imgSrc={emojiIconBuildPath}
                        title={"Sento"}
                        info1={"Live Demo and Source Code"}
                        mainLink={"https://codesandbox.io/s/purple-dawn-1bycg"}
                        info2={
                            "Input text box with emoji GIFs from joypixels.com website."
                        }
                    />
                    <NanoItem
                        imgSrc={numberSumIconBuildPath}
                        title={"Number Sum Game with React.js"}
                        info1={"Live Demo and Source Code"}
                        mainLink={
                            "https://codesandbox.io/s/summer-moon-ghyqk?file=/src/components/App.js"
                        }
                        info2={
                            "Input text box with emoji GIFs from joypixels.com website."
                        }
                    />
                </div>
            </div>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <header className="header">
                <img className={"img"} src={mainPhotoBuildPath} alt="main" />
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
