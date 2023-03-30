import React, { useState } from "react";
import Output from "../Output/Output";

function ResumeForm() {
  const [resume, setResume] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [currentKeyword, setCurrentKeyword] = useState("");

  const handleResumeChange = (event) => {
    setResume(event.target.value);
  };

  const handleKeywordChange = (event) => {
    if (event.key === "Enter") {
      setKeywords([...keywords, currentKeyword]);
      setCurrentKeyword("");
    } else {
      setCurrentKeyword(event.target.value);
    }
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const dataCollect = (resume, keywords, company, role) => {
    return `Can you create a cover letter using my resume: ${resume}.Highlighting these keywords: ${keywords}. With this company: ${company}. With this role: ${role}`;
  };

  let newData = "";
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataCollect(resume, keywords, company, role));
    newData = dataCollect(resume, keywords, company, role);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>
          <strong>letterCovered</strong>
        </h1>
        <h3>Your Friendly Neighborhood AI Powered Cover Letter Creator</h3>
        <br />
        <label>
          Attach Resume:
          <input type="file" name="resume" onChange={handleResumeChange} />
        </label>
        <br />
        <br />
        <label>
          Keywords (Skills You Want to Highlight):
          <br />
          <input
            type="text"
            name="keywords"
            value={currentKeyword}
            onChange={handleKeywordChange}
            onKeyDown={handleKeywordChange}
          />
          {keywords.map((keyword, index) => (
            <p key={index}>{keyword}</p>
          ))}
          {/* <ul>
            {keywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul> */}
        </label>
        <br />
        <label>
          Target Company:
          <input type="text" name="company" onChange={handleCompanyChange} />
        </label>
        <br />
        <br />
        <label>
          Target Role:
          <input type="text" name="role" onChange={handleRoleChange} />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>
      <Output outText={newData} />
    </div>
  );
}

export default ResumeForm;
