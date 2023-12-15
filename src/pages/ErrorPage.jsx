import { useRouteError } from 'react-router-dom';

// displays the error page when something doesnt work
function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;