import React from "react";

const Template = ({ data }) => {
  if (!data) return null; // Return nothing if no data is passed


  const downloadCertificate = () => {
    const content = document.documentElement.outerHTML;
    const blob = new Blob([content], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "certificate.html";
    link.click();
  };

  function generateString(institutionName, birthDate) {
    // Extract the first letter of each word in the institution name
    const institutionInitials = institutionName
      .split(" ") // Split the name into words
      .map(word => word[0].toUpperCase()) // Take the first letter and capitalize
      .join(""); // Join the initials
  
    // Get the current year
    const currentYear = new Date().getFullYear();
  
    // Format the birth date as 'DD-MM' (assumes 'birthDate' is in 'YYYY-MM-DD' format)
    const birthDay = new Date(birthDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit"
    });
  
    // Combine all parts into a single string
    return `${institutionInitials}${currentYear}${birthDay}`;
  }
  
  // Example usage
  const institutionName = "Aryan InfoTech (I)";
  const birthDate = data.date; // Format: YYYY-MM-DD
  const registration = generateString(institutionName, birthDate);
  
  console.log(registration); // Output: "AI202425-12"
  

  return (
    <div style={{ padding: "60px" }}>
      <div style={{ border: "20px solid #690a0a" }} className="container">
        <div style={{ border: "20px solid #fff" }} className="inner">
          <div style={{ border: "10px solid #690a0a" }} className="main">
            <div id="logo-heading" style={{ marginTop: "100px" }}>
              <img
                src="logo.png"
                alt="Logo"
                id="logo"
                width="100"
                height="100"
                style={{ marginLeft: "180px", marginRight: "100px" }}
              />
              <span id="heading" style={{ fontSize: "90px" }}>
                Aryan InfoTech (I)
              </span>
            </div>
            <div id="content" style={{ textAlign: "center" }}>
              <h1 style={{ color: "red" }}>An Institute of Management & Technology</h1>
              <h5>
                &emsp;&emsp;&emsp;<span style={{ color: "red", textDecoration: "underline" }}>Collaboration:</span>{" "}
                ALMA(Under Ministry of Information & Technology, Govt. of India)
              </h5>
              <h5>&emsp13;&emsp;&emsp;HKCL-Promoted by Govt. of Haryana.</h5>
              <h5>&emsp13;&emsp;&emsp;Member of All Indian IT Association(AIITA)</h5>
              <h5>&emsp13;&emsp;Regd. Under Department of Labour (Govt. of Haryana)</h5>
              <h5>&emsp13;&emsp;&emsp;An ISO 9001:2015 Certified Organisation</h5>
            </div>
            <h1 className="CERTIFICATE" style={{ fontSize: "90px", color: "rgb(59, 89, 186)", textAlign: "center" }}>
              CERTIFICATE
            </h1>
            <h2 style={{ textAlign: "center" }}>EXAMINATION 2024</h2>
            <div
              id="details"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <div id="details1" style={{ width: "400px", height: "100px", marginLeft: "150px" }}>
                <p>Serial No. : {data.Serial}</p>
                <p>Batch Start On :{data.started}</p>
                <p>Batch End On : {data.ended}</p>
              </div>
              <div id="details1" style={{ width: "400px", height: "100px", marginRight: "30px" }}>
                <p>Regd. No. : {registration}</p>
                <p>Exam. Ctr. : Kurukshetra</p>
                <p>Study Ctr : Aryan Computers kkr</p>
              </div>
            </div>
            <div id="cradits" style={{ textAlign: "center" }}>
              <h2>This Certificate is awarded to</h2>
              <h1>
                <b>Mr. {data.name} S/O Mr. {data.fname}</b>
              </h1>
              <h2>who has successfully completed computer course</h2>
              <h1>
                <b>Certificate in Programming in C & C++</b>
              </h1>
            </div>
            <h4 style={{ textAlign: "center" }}>
              Covering Program Development Tools Procedural Programming, Object-Oriented Programming using C and C++
            </h4>
            <h2 style={{ textAlign: "center" }}>under ACS Digital India Vocational Training Programme</h2>
            <div
              id="grades"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <div id="grades1" style={{ width: "400px", height: "400px", marginLeft: "80px" }}>
                <p>Grade: A+</p>
                <br />
                <p>Marks Obtained : 91/100</p>
                <br />
                <p>Duration : 3 Months</p>
                <br />
                <p>
                  Date of Issue : 15-01-2022 &emsp13;Course Coordinator
                </p>
                <br />
              </div>
              <div id="grades1" style={{ width: "400px", height: "400px", marginRight: "80px" }}>
                <p>
                  Please verify your Certificate at <br />
                  www.aryaninfotechedu.in
                </p>
                <br />
                <br />
                <img src="" alt="Director's signature" />
                <br />
                <p>Director</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <button onClick={downloadCertificate} style={{textAlign:"center"}}>Download Certificate</button>
    </div>
  );
};

export default Template;
