import React, { useState } from "react";
import "./BrowserHistory.css";
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: "07:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/instagram-img.png",
    title: "Instagram",
    domainUrl: "instagram.com",
  },
  {
    id: 1,
    timeAccessed: "05:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/twitter-img.png",
    title: "Twitter. It’s what’s happening / Twitter",
    domainUrl: "twitter.com",
  },
  {
    id: 2,
    timeAccessed: "04:35 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/facebook-img.png",
    title: "Facebook – log in or sign up",
    domainUrl: "facebook.com",
  },
  {
    id: 3,
    timeAccessed: "04:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/linkedin-img.png",
    title: "LinkedIn: Log In or Sign Up",
    domainUrl: "linkedin.com",
  },
  {
    id: 4,
    timeAccessed: "04:00 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/hashnode-img.png",
    title: "Hashnode: Everything you need to start blogging as a developer!",
    domainUrl: "hashnode.com",
  },
  {
    id: 5,
    timeAccessed: "03:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/github-img.png",
    title: "GitHub: Where the world builds software · GitHub",
    domainUrl: "github.com",
  },

  {
    id: 6,
    timeAccessed: "02:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/react-img.png",
    title: "React – A JavaScript library for building user interfaces",
    domainUrl: "reactjs.org",
  },
  {
    id: 7,
    timeAccessed: "01:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png",
    title: "Stack Overflow - Where Developers Learn, Share, & Build Careers",
    domainUrl: "stackoverflow.com",
  },

  {
    id: 8,
    timeAccessed: "09:25 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/gmail-img.png",
    title: "Gmail",
    domainUrl: "mail.google.com",
  },
  {
    id: 9,
    timeAccessed: "09:00 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/google-img.png",
    title: "Google",
    domainUrl: "google.com",
  },
];

const BrowserHistory = () => {
  const [intial, setintial] = useState(initialHistoryList);

  const Delfunction = (id) => {
    let filtered = intial.filter((each) => {
      return id !== each.id;
    });
 
    setintial(filtered);
  };
  const clickingFunction = (e) => {
    console.log(intial, "fjhghhkkj");
    console.log(e.target.value);
    if (e.target.value == "") {
      setintial(initialHistoryList);
    } else {
      let filteredData = intial.filter((each) =>
        each.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // setintial(filteredData);
      console.log(filteredData);
      console.log(setintial, "hiii");
      setintial(filteredData);
    }
  };
  return (
    <>
      <div className="entireContainer">
        <div className="headerContainer">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="historyStyles"
            />
          </div>

          <div className="styles">
            <div className="searchStyles">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="image1"
              />
            </div>
            <div>
              <input
                type="text"
                className="inputStyles"
                onChange={clickingFunction}
              />
            </div>
          </div>
        </div>
        <div className="ddddd">
          <div className="appNameContainer">
            {intial.map((each) => {
              return (
                <div className="eachApp">
                  <div className="styles">{each.timeAccessed}</div>

                  <div className="fff">
                    <div className="sss">
                      <div>
                        <img src={each.logoUrl} className="appStyles" />
                      </div>
                      <div className="styles1">{each.title}</div>
                      <div className="styles">{each.domainUrl}</div>
                    </div>
                    <div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
                        className="deleteStyles"
                        onClick={() => {
                          Delfunction(each.id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowserHistory;
