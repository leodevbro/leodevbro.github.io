import React, { ReactNode } from 'react';

// import mainPhotoBuildPath from "./images/photo-leo.jpg";
import mainPhoto2BuildPath from './images/Levan Katsadze_pic_2023-07-25_e-small.jpg';
import gtuCoatOfArmsBuildPath from './images/gtu.png';
import ugLogoBuildPath from './images/ug.png';
import lupiLogoBuildPath from './images/lupi.png';
// import exactproLogoBuildPath from "./images/exactpro.png";
import blockmanIconBuildPath from './images/blockman-icon.png';
import blockmanReactIconBuildPath from './images/blockman-react-icon.png';
// import musicRankIconBuildPath from "./images/music-rank-logo-draft.png";
// import musicRankSheetsIconBuildPath from "./images/music-rank-sheets.png";
import emojiIconBuildPath from './images/emoji.png';
import ticTacToeIconBuildPath from './images/tic-tac-toe.png';
// import numberSumIconBuildPath from "./images/number-sum.png";
import roadCrossingIconBuildPath from './images/road-crossing.png';
import lingswapIconBuildPath from './images/lingswap-icon.png';
import fireartIconBuildPath from './images/fireart-logo.png';
import momentickIconBuildPath from './images/momentick-logo-small.png';
import reSoftLogoBuildPath from './images/re-soft-logo_2.png';
import miniDiaryIconBuildPath from './images/mini-diary-icon.png';
// import around25IconPath from "./images/around25-logo.jpg";
import triviaIconPath from './images/trivia-i.png';
import toptalIconPath from './images/toptal-logo.png';
import calorieIconPath from './images/calories-icon.jpg';

import { ReactComponent as MyLocationIcon } from './images/location.svg';
// import { ReactComponent as MyFacebookIcon } from "./images/facebook-icon.svg";
import { ReactComponent as MyMailIcon } from './images/mail.svg';
import { ReactComponent as ToptalIconSvg } from './images/toptal-logo-vector.svg';
import { ReactComponent as MyGitIcon } from './images/git.svg';
import { ReactComponent as MyLinkedinIcon } from './images/linkedin.svg';
import './App.scss';

const BasicInfo = () => {
  return (
    <div className={'basicInfo'}>
      <div className={'i1'}>
        <div className={'name'}>Levan Katsadze</div>
        <div className={'nameGeo'}>ლევან კაცაძე</div>
        <div className={'prof'}>Software Developer</div>
        <div className={'birth'}>1995-03-03</div>
      </div>

      <div className={'i2'}>
        <div className={'toptal i2child'}>
          <span className={'span'}>
            <ToptalIconSvg className={'toptalIcon icon'} />
          </span>
          <span className={'span'}>
            <a
              href="https://www.toptal.com/resume/levan-katsadze"
              target="_blank"
              rel="noreferrer"
            >
              toptal.com/resume/levan-katsadze
            </a>
          </span>
        </div>
        <div className={'mail i2child'}>
          <span className={'span'}>
            <MyMailIcon className={'mailIcon icon'} />
          </span>
          <span className={'span'}>leodevbro@gmail.com</span>
        </div>
        <div className={'github i2child'}>
          <span className={'span'}>
            <MyGitIcon className={'gitIcon icon'} />
          </span>
          <span className={'span'}>
            <a
              href="https://github.com/leodevbro"
              target="_blank"
              rel="noreferrer"
            >
              github.com/leodevbro
            </a>
          </span>
        </div>
        <div className={'github i2child'}>
          <span className={'span'}>
            <MyLinkedinIcon className={'linkedinIcon icon'} />
          </span>
          <span className={'span'}>
            <a
              href="https://www.linkedin.com/in/leodevbro/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/leodevbro
            </a>
          </span>
        </div>

        {/* <div className={"facebook i2child"}>
          <span className={"span"}>
            <MyFacebookIcon className={"facebookIcon icon"} />
          </span>
          <span className={"span"}>
            <a
              href="https://www.facebook.com/leodevbro"
              target="_blank"
              rel="noreferrer"
            >
              facebook.com/leodevbro
            </a>
          </span>
        </div> */}

        <div className={'location i2child'}>
          <span className={'span'}>
            <MyLocationIcon className={'locationIcon icon'} />
          </span>
          <span className={'span'}>Tbilisi, Georgia</span>
        </div>
      </div>
    </div>
  );
};

const BriefBar = () => {
  return (
    <div className={'briefBar'}>
      <div className={'skillBox bbItem'}>
        <div className={'skillsHead hea'}>SKILLS</div>
        <hr className={'hr'} />
        <div className={'skillsBody'}>
          <span className={'skill'}>React.js</span>
          <span className={'skill'}>TypeScript</span>
          <span className={'skill'}>JavaScript</span>
          <span className={'skill'}>Next.js</span>
          <span className={'skill'}>Styled Components</span>
          <span className={'skill'}>CSS/SCSS</span>
          <span className={'skill'}>Redux Toolkit</span>
          <span className={'skill'}>Node (NestJS)</span>
          <span className={'skill'}>TypeORM</span>
          <span className={'skill'}>React Router</span>
          <span className={'skill'}>Git</span>
          <span className={'skill'}>Tailwind CSS</span>
          <span className={'skill'}>React Table (v7)</span>
          <span className={'skill'}>Algorithms</span>
          <span className={'skill'}>Data Structures</span>
          <span className={'skill'}>Math</span>
        </div>
      </div>
      <div className={'langBox bbItem'}>
        <div className={'langHead hea'}>LANGUAGE</div>
        <hr className={'hr'} />
        <div className={'langBody'}>
          <div className={'lang'}>
            <div className={'langName'}>English</div>
            <div className={'langStatus'}>
              Advanced Professional Proficiency
            </div>
          </div>
          <div className={'lang'}>
            <div className={'langName'}>Georgian</div>
            <div className={'langStatus'}>Native</div>
          </div>
        </div>
      </div>
      <div className={'interestsBox bbItem'}>
        <div className={'interestsHead hea'}>INTERESTS</div>
        <hr className={'hr'} />
        <div className={'interestsBody'}>
          <span className={'interest'}>CGI</span>
          <span className={'interest'}>Chess</span>
          <span className={'interest'}>Movies</span>
          <span className={'interest'}>Art</span>
          <span className={'interest'}>Math</span>
          <span className={'interest'}>Problem Solving</span>
          <span className={'interest'}>AI, ML</span>
          <span className={'interest'}>Quantum Physics</span>
          <span className={'interest'}>Video Games</span>
          <span className={'interest'}>Table Tennis</span>
          <span className={'interest'}>Philosophy</span>
        </div>
      </div>
    </div>
  );
};

const BlockmanStat: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <a
      href="https://marketplace.visualstudio.com/items?itemName=leodevbro.blockman"
      target="_blank"
      rel="noreferrer noopener nofollow"
      className="blockmanStatA"
    >
      <img
        src="https://img.shields.io/visual-studio-marketplace/i/leodevbro.blockman"
        alt="Blockman stats"
      />
    </a>
  );
};

const NanoItem: React.FC<{
  className?: string;
  imgSrc: string;
  title: ReactNode;
  titleMode?: 'super';
  info1: string;
  mainLink: string;
  info2?: ReactNode;
  info3_stack?: ReactNode;
  info4_period?: ReactNode;
  showStat?: boolean;
  seLink?: string;
}> = ({
  className,
  imgSrc,
  title,
  titleMode,
  info1,
  info3_stack,
  info4_period,
  mainLink,
  info2,
  showStat,
  seLink,
}) => {
  return (
    <div className={`nanoItem ${className}`}>
      <div className={'imgBox'}>
        <img className={'logo img'} src={imgSrc} alt="nano logo" />
      </div>
      <div className={'infoBox'}>
        <div className={'nanoTitle'}>
          <span>{title}</span> <span>{showStat && <BlockmanStat />}</span>
        </div>
        <div className={'nanoLinkBox'}>
          {mainLink ? (
            <a href={mainLink} target={'_blank'} rel={'noreferrer'}>
              {info1}
            </a>
          ) : (
            info1
          )}
        </div>
        <div className={'nanoLinkBox seLink'}>
          {seLink ? (
            <a href={seLink} target={'_blank'} rel={'noreferrer'}>
              {'Video Demo'}
            </a>
          ) : (
            ''
          )}
        </div>
        {info2 && <div className={'nanoInfo2'}>{info2}</div>}
        {info3_stack && (
          <div
            style={{
              fontStyle: 'normal',
              color: 'rgb(80 2 189 / 0.8)',
              fontSize: '15px',
              fontWeight: 450,
            }}
            className={'nanoInfo2'}
          >
            {info3_stack}
          </div>
        )}
        {info4_period && <div className={'nanoInfo2'}>{info4_period}</div>}
      </div>
    </div>
  );
};

const StoryBar = () => {
  return (
    <div className={'storyBar'}>
      <div className="wrapOfToptalNano">
        <NanoItem
          className={'toptalNano'}
          imgSrc={toptalIconPath}
          title={
            <a
              className="superLinkTitle"
              target={'_blank'}
              rel={'noreferrer'}
              href={'https://www.toptal.com/resume/levan-katsadze'}
            >
              Toptal Resume
            </a>
          }
          // info1={"Member since September 23, 2022."}
          info1={''}
          mainLink={'https://www.toptal.com/resume/levan-katsadze'}
          info2={
            <a
              className="superLinkTitle"
              target={'_blank'}
              rel={'noreferrer'}
              href={'https://www.toptal.com/resume/levan-katsadze'}
            >
              toptal.com/resume/levan-katsadze
            </a>
          }
        />
      </div>

      <div className={'bigProjects'}>
        <div className={'bpHead hea'}>LARGE SOLO PROJECTS</div>
        <hr className={'hr'} />
        <div className={'bpBody'}>
          <NanoItem
            imgSrc={blockmanIconBuildPath}
            title={
              <a
                target={'_blank'}
                rel={'noreferrer'}
                href={
                  'https://marketplace.visualstudio.com/items?itemName=leodevbro.blockman'
                }
              >
                Blockman
              </a>
            }
            showStat={true}
            info1={'VSCode Extension To Highlight Nested Code Blocks'}
            mainLink={
              ''
              // "https://marketplace.visualstudio.com/items?itemName=leodevbro.blockman"
            }
            info2={
              "Really wanted to find such feature in code editors, couldn't find anywhere, so I dedicated about 6 months to create it myself."
            }
          />

          <NanoItem
            imgSrc={calorieIconPath}
            title={'Calorie Tracking App With React And Firebase Auth/DB'}
            info1={'Live App'}
            mainLink={
              'https://calorie-tracker-frontend-react-firebase.vercel.app'
            }
            info2={
              <a
                style={{ fontWeight: 'bold', color: 'rgb(255, 167, 52)' }}
                href={
                  'https://drive.google.com/file/d/1vJoygfWOv5I5kUVRYKlcDi7_QrftXAYE/view'
                }
                target={'_blank'}
                rel={'noreferrer'}
              >
                {'Video Instruction'}
              </a>
            }
            info3_stack={
              <a
                target={'_blank'}
                rel={'noreferrer'}
                href={
                  'https://github.com/leodevbro/calorie-tracker-frontend-react-firebase'
                }
              >
                Github Repo
              </a>
            }
          />

          <NanoItem
            imgSrc={`https://secure.img1-fg.wfcdn.com/im/27735505/resize-h600-w600%5Ecompr-r85/6303/63037324/Floor+Tiles+%26+Wall+Tiles.jpg`}
            title={'Landing With React, TS, SCSS, Scroll-Driven Video Playback'}
            info1={'Live Preview'}
            mainLink={'https://react-app-apogee.vercel.app/'}
            info2={`React app, responsive (mobile/tablet/desktop) with smooth sliders, sticky table and scroll-driven video playback.`}
            info3_stack={
              <a
                target={'_blank'}
                rel={'noreferrer'}
                href={'https://github.com/leodevbro/react-app-apogee'}
              >
                Github Repo
              </a>
            }
          />
        </div>
      </div>

      <div className={'jobs'}>
        <div className={'jobsHead hea'}>WORK EXPERIENCE</div>
        <hr className={'hr'} />
        <div className={'jobsBody'}>
          <NanoItem
            imgSrc={momentickIconBuildPath}
            title={'Frontend Developer (React/NextJS, TypeScript)'}
            info1={'Momentick'}
            mainLink={'https://www.momentick.com/'}
            info2={
              'Developed a wep app that monitors greenhouse gas emission measurements across the entire globe. It is designed to have many registered users. The web app has integrated MapBox map with MapBox API and the users can see all their interest areas on the map with chart and measurements.'
            }
            info3_stack={
              'Stack: React.js (Next.js), TypeScript, JavaScript, Redux Toolkit, Styled Components, CSS, MapBox, Recharts, Formik, REST API.'
            }
            info4_period={'2023-03 => Present'}
            seLink={
              'https://www.youtube.com/watch?v=hmbX68QABxA&list=PL-YmJSpphBa5h4tnMSlJkKkVz9KTQlq66&index=7'
            }
          />

          <NanoItem
            imgSrc={reSoftLogoBuildPath}
            title={'Fullstack Developer (Next.js, NestJS, TypeScript)'}
            info1={'Re:Soft'}
            mainLink={'https://www.resoft.space/'}
            info2={
              'Building educational software project with multiple user roles. Optimizing React.js rendering, working with SQL database with the help of TypeORM. Implementing new features, fixing bugs and maintaining maximum type safety with TypeScript.'
            }
            info3_stack={
              'Stack: React (Next.js), Node (NestJS), TypeScript, JavaScript, TypeORM, Redux Toolkit, CSS, SCSS, Tailwind, Styled Components.'
            }
            info4_period={'2023-01 => 2023-06'}
          />

          <NanoItem
            imgSrc={fireartIconBuildPath}
            title={'Frontend Developer (React, TypeScript)'}
            info1={'Fireart'}
            mainLink={'https://fireart.studio'}
            info2={
              'Developed a responsive (mobile/tablet/desktop) web app for tiles and stones product sales with multiple user roles. Built two landing pages for tiles and stones product sales from Figma visuals, maintaining a pixel-perfect match with dynamic, responsive styles and advanced functionalities, like smooth sliders and scroll-driven video playback.'
            }
            info3_stack={
              'Stack: React.js, TypeScript, JavaScript, Redux Toolkit, CSS, SCSS, React Table.'
            }
            info4_period={'2021-11 => 2022-08'}
            seLink={
              'https://www.youtube.com/watch?v=K6k5jTGA2AA&list=PL-YmJSpphBa5JkwwtICmHP5Uz23PQIYBy&index=6'
            }
          />

          {/* <NanoItem
            imgSrc={around25IconPath}
            title={"Frontend Developer (React, TypeScript)"}
            info1={"Around25"}
            mainLink={"https://around25.com"}
            info2={"2021-07 => 2021-10"}
          /> */}

          <NanoItem
            imgSrc={lingswapIconBuildPath}
            title={'Frontend Developer (React, TypeScript)'}
            info1={'LingSwap project by Iain Watt'}
            mainLink={'https://www.linkedin.com/in/iainjameswatt'}
            info2={
              'Developed a web app as a platform for a language-learning service. Provided some new ideas about how a language-learning website would work better and what kind of data structures would be more efficient.'
            }
            info3_stack={
              'Stack: React, TypeScript, JavaScript, Git, CSS, SCSS.'
            }
            info4_period={'2021-06 => 2021-10'}
          />

          <NanoItem
            imgSrc={lupiLogoBuildPath}
            title={'Frontend Developer (React, TypeScript)'}
            info1={'Lupi AI - ლუპი აი (Tbilisi, Georgia)'}
            mainLink={'https://www.tvschool.ge'}
            info2={
              'Developed a remote schooling web app (www.tvschool.ge) for teachers and students to manage grades, tasks, communication, and so on. Solved bugs and managed the entire production system with thousands of users from hundreds of schools in Georgia.'
            }
            info3_stack={
              'Stack: React, TypeScript, JavaScript, CSS, LESS, NestJS.'
            }
            info4_period={'2020-10 => 2021-05'}
            seLink={
              'https://www.youtube.com/watch?v=viqJmaeFP-g&list=PL-YmJSpphBa5mCQKeRTK5m3Bijc6_jB1s&index=20'
            }
          />

          {/* <NanoItem
            imgSrc={exactproLogoBuildPath}
            title={"Software Tester (QA Of Stock Exchanges)"}
            info1={"Exactpro Systems (Tbilisi, Georgia)"}
            mainLink={"https://www.linkedin.com/company/exactpro-systems-llc/"}
            info2={
              "Exactpro ert e dfh d fgfdhfghfg fhfghfg fhgf hfg hfgh fgh fgh fgh gf hfgh ggfh "
            }
            info3_stack={"2020-02 => 2020-09"}
          /> */}
        </div>
      </div>

      <div className={'miniProjects'}>
        <div className={'mpHead hea'}>SMALL PROJECTS</div>
        <hr className={'hr'} />
        <div className={'mpBody'}>
          <NanoItem
            imgSrc={triviaIconPath}
            title={'Trivia Game Web App'}
            info1={'Codesandbox Demo'}
            mainLink={
              'https://codesandbox.io/s/small-cache-lwfxe?file=/src/App.tsx'
            }
            info2={`A React-based minigame where users have to answer several true or false questions. The game is built with React, TypeScript, and SCSS.`}
          />

          <NanoItem
            imgSrc={blockmanReactIconBuildPath}
            title={'Blockman (React.js playground)'}
            info1={'Video Guide and Codesandbox Demo'}
            mainLink={'https://youtu.be/PIie9KKUHEA?t=82'}
            info2={`This is the first generation of my "Blockman" idea. It was the visual testing project before attempting to write the extension for VSCode.`}
          />
          {/* <NanoItem
                        imgSrc={musicRankIconBuildPath}
                        title={"Music Rank Initial Structure with React.js"}
                        info1={"Live Demo and Source Code"}
                        mainLink={
                            "https://codesandbox.io/s/thirsty-butter%EF%AC%82y-u1hvc"
                        }
                        info2={
                            "The idea is from Youtube playlists, but with more freedom."
                        }
                    /> */}
          {/* <NanoItem
                        imgSrc={musicRankSheetsIconBuildPath}
                        title={
                            "Music Rank using Google Sheets and Google Apps Script"
                        }
                        info1={"Video guide"}
                        mainLink={"https://youtu.be/hOx34e08UbY?t=3m0s"}
                        info2={
                            "Google Sheets playground for personal music rank"
                        }
                    /> */}
          <NanoItem
            imgSrc={miniDiaryIconBuildPath}
            title={'Mini Diary (Next.js, TypeScript, Styled Components)'}
            info1={'Source code'}
            mainLink={'https://github.com/leodevbro/simple-mini-diary'}
            info2={'Simple mini web diary which uses localStorage as a DB.'}
            seLink={'https://www.youtube.com/watch?v=pUbThsX-ExE'}
          />

          <NanoItem
            imgSrc={ticTacToeIconBuildPath}
            title={'Tic-tac-toe game with React.js'}
            info1={'Live Demo and Source Code'}
            mainLink={'https://codesandbox.io/s/sad-firefly-jbunr'}
            info2={'This was a prehire task from Lupi AI.'}
          />
          <NanoItem
            imgSrc={roadCrossingIconBuildPath}
            title={'Road Crossing Math Problem And Solution'}
            info1={'Repository link'}
            mainLink={'https://github.com/leodevbro/road-crossing-math-problem'}
            info2={
              'I got an idea of creating a math problem when I was crossing the road as a pedestrian, trying to find optimal route to cross the street with minimal risk of car accident.'
            }
          />

          <NanoItem
            imgSrc={emojiIconBuildPath}
            title={'Sento'}
            info1={'Live Demo and Source Code'}
            mainLink={'https://codesandbox.io/s/purple-dawn-1bycg'}
            info2={'Input text box with emoji GIFs from joypixels.com website.'}
          />
          {/* <NanoItem
                        imgSrc={numberSumIconBuildPath}
                        title={"Number Sum Game with React.js"}
                        info1={"Live Demo and Source Code"}
                        mainLink={
                            "https://codesandbox.io/s/busy-cache-34l1e?file=/src/components/App.js"
                        }
                        info2={
                            "This was a part of React.js cource of PluralSight."
                        }
                    /> */}
        </div>
      </div>

      <div className={'edu'}>
        <div className={'eduHead hea'}>EDUCATION</div>
        <hr className={'hr'} />
        <div className={'eduBody'}>
          <NanoItem
            imgSrc={gtuCoatOfArmsBuildPath}
            title={"Web Technologies (Master's Degree)"}
            info1={'Georgian Technical University (Tbilisi, Georgia)'}
            mainLink={'https://www.facebook.com/gtu.ge'}
            info2={'2019-10 => 2021-08'}
          />

          <NanoItem
            imgSrc={ugLogoBuildPath}
            title={"Informatics (Bachelor's Degree)"}
            info1={'The University of Georgia (Tbilisi, Georgia)'}
            mainLink={'https://www.facebook.com/TheUniversityofGeorgia'}
            info2={'2014-09 => 2019-09'}
          />
        </div>
      </div>

      <div className={'achievements'}>
        <div className={'achHead hea'}>ACHIEVEMENTS</div>
        <hr className={'hr'} />
        <div className={'achBody'}>
          <ul>
            <li>
              <div className="achTitle">
                TBC x Datathon{' '}
                <a
                  href="https://www.helloblog.ge/story/Datathon-2019"
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  2019
                </a>{' '}
                (Tbilisi, Georgia)
              </div>
              <div className={'achInfo'}>
                Won TBC x Datathon 2019 as a team "Skynet" with my 2 collegues.
                Analyzed and visualized real estate data 350,000+ records and
                found correlation between prices and other features like area,
                district, rooms... Also found out a pattern of pricing with
                "Random Forest" algorithm and created backend API + mobile app
                that returned best real estate deals.
              </div>
            </li>
            <li>
              <div className="achTitle">
                HackerRank Badge: 5 stars in{' '}
                <a
                  href="https://www.hackerrank.com/leodevbro"
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  Problem Solving
                </a>
              </div>
              <div className={'achInfo'}>
                I have solved more than 100 problems in HackerRank with Python
                algorithms.
              </div>
            </li>
            <li>
              <div className="achTitle">
                Academic Road (School and universities)
              </div>
              <div className={'achInfo'}>
                I have participated in many Math and Physics Olympiads during my
                school years with fairly big success. I have obtained 100%
                financial grants on both bachelor and master's degree study
                after successfully passing the entrance exams.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className={'fotmats'}>
        <a
          className={'webpage'}
          href="https://leodevbro.github.io"
          target={'_blank'}
          rel={'noreferrer'}
        >
          Webpage
        </a>
        <a
          className={'pdf'}
          href="https://drive.google.com/file/d/1EdADabTOz1ut0peTXuHOGp0BrRdLlr1b/view?usp=sharing"
          target={'_blank'}
          rel={'noreferrer'}
        >
          PDF
        </a>
      </div>
      <div>
        <header className="header">
          <img className={'img'} src={mainPhoto2BuildPath} alt="main" />
          <BasicInfo />
        </header>

        <div className={'appBody'}>
          <BriefBar />
          <StoryBar />
        </div>
      </div>
    </div>
  );
}

export default App;
