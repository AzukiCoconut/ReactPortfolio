import Project from '../Components/UI/Project';

// Handles the display of the portfolio page, makes use of the Project UI component
function Portfolio() {
    return (
        <section class="bg-light">
        <div class="container">
          <div class="row g-3 mt-1">
            <div class="col-12 col-md-6 d-flex justify-content-center">
                <Project src="../src/Assets/images/ProjectImages/Project1.png" alt="Horiseon Marketing" projectLink="https://azukicoconut.github.io/HoriseonMarketing/" projectTitle="Horiseon Marketing" gitHubLink="https://github.com/AzukiCoconut/HoriseonMarketing"/>
            </div>
            <div class="col-12 col-md-6 d-flex justify-content-center">
                <Project src="../src/Assets/images/ProjectImages/PortfolioWebsiteScreenshot.png" alt="First Portfolio Site" projectLink="https://azukicoconut.github.io/PortfolioSite_MT/" projectTitle="First Portfolio Site" gitHubLink="https://github.com/AzukiCoconut/PortfolioSite_MT"/>
          </div>
          </div>
          <div class="row g-3 mt-1">
            <div class="col-12 col-md-6 d-flex justify-content-center">
                <Project src="../src/Assets/images/ProjectImages/azukicoconut.github.io_PasswordGenerator_.png" alt="Password Generator" projectLink="https://azukicoconut.github.io/PasswordGenerator/" projectTitle="Password Generator" gitHubLink="https://github.com/AzukiCoconut/PasswordGenerator"/>
            </div>
            <div class="col-12 col-md-6 d-flex justify-content-center">
                <Project src="..\src\Assets\images\ProjectImages\azukicoconut.github.io_CodeQuiz_.png" alt="Code Quiz" projectLink="https://azukicoconut.github.io/CodeQuiz/" projectTitle="Code Quiz" gitHubLink="https://github.com/AzukiCoconut/CodeQuiz"/>
            </div>
          </div>
          <div class="row g-3 mt-1 mb-3">
            <div class="col-12 col-md-6 d-flex justify-content-center">
                <Project src="..\src\Assets\images\ProjectImages\Final_Screen_Shot_WorkDayAgenda.png" alt="Work Day Agenda" projectLink="https://azukicoconut.github.io/WorkDayAgenda/" projectTitle="Work Day Agenda" gitHubLink="https://github.com/AzukiCoconut/WorkDayAgenda"/>
            </div>
            <div class="col-12 col-md-6 d-flex justify-content-center">
                <Project src="..\src\Assets\images\ProjectImages\ScreenShot_WeatherForecast.png" alt="Weather Forecast" projectLink="https://azukicoconut.github.io/WeatherForecast/" projectTitle="Weather Forecast" gitHubLink="https://github.com/AzukiCoconut/WeatherForecast"/>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Portfolio;