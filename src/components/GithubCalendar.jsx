import React from "react";
import "./GithubCalendarStyle.css";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <div className="main">
      <div>
        <h1>github stats</h1>
      </div>

      <div className="githubStat">
        <div className="al">
          <p>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=lipan1437&show_icons=true&locale=en&layout=compact"
              alt="lipan1437"
            />
          </p>
        </div>

        <div className="al">
          <p>
            &nbsp;
            <img
              src="https://github-readme-stats.vercel.app/api?username=lipan1437&show_icons=true&locale=en"
              alt="lipan1437"
            />
          </p>
        </div>

        <div className="al">
          <p>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=lipan1437&theme=default"
              alt="lipan1437"
            />
          </p>
        </div>
      </div>

      <div>
        <h1>github calender</h1>
      </div>

      <div className="githubCalendar">
        <GitHubCalendar
          username="lipan1437"
          blockSize={15}
          blockMargin={5}
          frontSize={16}
          color="#13d799"
        />
      </div>
    </div>
  );
};

export default GithubCalendar;
