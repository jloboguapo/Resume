import './App.css';
import { useState } from 'react';

function App() {
  const [isCopied, setIsCopied] = useState('');

  const handleCopyClick = async event => {
    try {
      await navigator.clipboard.writeText(event.target.value);
      event.target.value.includes(602)
        ? setIsCopied(phoneNumber)
        : setIsCopied(address);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  const phoneNumber = '602.290.5672';
  const address = '3525 W Rancho Dr. Phoenix, AZ 85019';
  const email = 'jloboguapo@gmail.com';
  const sendEmail = () => {
    window.location = `mailto: ${email}`;
  };

  return (
    <>
      <h1>JUICE (JUSTIN JEFFERY)</h1>
      <div className="card">
        <div className="contact-info">
          <button type="button" value="6022905672" onClick={handleCopyClick}>
            {isCopied === phoneNumber ? 'Copied!' : phoneNumber}
          </button>
          <button onClick={sendEmail}>{email}</button>
          <button type="button" value={address} onClick={handleCopyClick}>
            {isCopied === address ? 'Copied!' : address}
          </button>
        </div>
        <p></p>
      </div>
      <div className="experience">
        <h2>Self-employed 2019</h2>
        <h4>Developer and Doordash</h4>
        <p className="pair-of-graphs">
          Created functioning apps and websites for clients using a variety of
          solutions, including Contentful, Google Cloud, and Hubspot. Worked
          with various teams, including project managers, marketers, and
          developers to coordinate project deliverables. Managed efforts using a
          sprint process through project completion. <br />
          <br />
          Doordashed as well whenever necessary.
        </p>
        <h2>Astro Accelerator 2018-2019</h2>
        <h4>Director of Enrollment</h4>
        <p className="pair-of-graphs">
          Sold an average of $50,000 in online training offerings every month.
          Managed leads and closed over 11% of all incoming leads. Maintained
          relationships with clients through their training experience.
          Collaborated with executives to improve sales and closing processes.
        </p>
        <h2>One Step Beyond 2010-2014, 2017</h2>
        <h4>Direct Service Provider</h4>
        <p className="pair-of-graphs">
          Stayed overnight at a home to help special needs participants gain
          independence and work towards their goals. Remained calm and handled
          what many considered very stressful situations. Maintain an excellent
          relationship with all the participants and staff.
        </p>
        <h2>CSAA 2016</h2>
        <h4>Developer</h4>
        <p className="pair-of-graphs">
          Worked with teams on coding sprints to ensure quality delivery. Worked
          with designers on stories and bug fixes using pivotal tracker.
          Utilized paired programming and agile methodology.
        </p>
        <h2>Blattner Energy 2015</h2>
        <h4>Construction</h4>
        <p className="pair-of-graphs">
          Checked mechanical function for wind towers before displayed. Worked
          on crew to help foster a positive team culture.
        </p>
        <h2>Safeway 2008-2010, 2012-2015</h2>
        <h4>Pre-audit Billing Analyst</h4>
        <p className="pair-of-graphs">
          Reviewed contracts and billings to ensure accuracy. Saved Safeway over
          $7M dollars during tenure. Recovered over $3M in 2014. Trained every
          new addition to Safeway’s audit department. Streamlined audit process
          to ensure the rest of the team received the necessary tools and
          knowledge to improve performance.
        </p>
      </div>
      <div className="education">
        <h3>EDUCATION</h3>
        <h4>Southwestern College</h4>
        <p>
          Ministries
          <br /> 2005 to 2006
        </p>
        <h4>Glendale Community College</h4>
        <p>
          General
          <br /> 2004 to 2005{' '}
        </p>

        <h4>Recognition</h4>
        <p>
          Who’s Who of American Students
          <br /> National Honor’s Society
        </p>
      </div>
      <div className="strengths-and-skills">
        <h4>STRENGTHS AND SKILLS</h4>
        Front-end development: HTML5, CSS, Javascript, React
        <br />
        Detail-oriented
        <br />
        Can always be counted on
        <br />
        Efficiency-finder
        <br />
        Love all people
        <br />
        Loved by all people
        <br />
        Fast learner
        <br />
        High performer at all past jobs
        <br />
        Boulderer
        <br />
        Energy Drink Connoisseur
      </div>
    </>
  );
}

export default App;
