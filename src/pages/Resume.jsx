
import resume from '../Assets/docs/Resume - Matthew R Tingley.pdf';
// A function that displays the Resume page.  Also allows for the user to download a resume.
function Resume() {
    return (
        <section class="bg-light m-auto container-sm">
        <h2>Resume</h2>
        <p>Download my <a href={resume} target="_blank">Resume</a></p>
        <h4>Front-end Proficiencies</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Handlebars</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
        <h4>Back-end Proficiencies</h4>
        <ul>
          <li>express.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>MySQL</li>
          <li>Sequelize</li>
        </ul>
      </section>
    )
}

export default Resume;