import profile from "../Assets/images/profile.jpg"

function HomePage() {
    return (
        <section className="bg-light m-auto">
            <div className="container-lg d-flex flex-column m-auto p-3">
            <h2>About Me</h2>
            <img
                className="profile-photo m-auto m-lg-3 p-1"
                src={profile}
                alt="Profile - Matt Tingley"
            />
            <p className="p-3">
                Matthew Tingley has been running Black Cat Soltuions since 2003.
                Matthew is a Chartered Professional Accountant and Certified
                Management Accountant since 2011 and he posseses degrees in Computer
                Science and Business. He is a specialist in Data Analytics
                leaveraging his IT skills in database management and application
                development to bring important information forward for corporate
                consumption and action. Matthew is currently upgrading his skills to
                offer website development as a service to his clients.
            </p>
            </div>
        </section>
    );
}

export default HomePage;