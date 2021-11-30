const Loading = ({ text }) => {

    return (
        <div className="d-flex mx-3 align-items-center justify-content-center">
            <main role="main">
                <ul role="progressbar" aria-busy="true" aria-label="Loading domino shop">
                    <li role="presentation"></li>
                    <li role="presentation"></li>
                    <li role="presentation"></li>
                    <li role="presentation"></li>
                    <li role="presentation"></li>
                    <li role="presentation"></li>
                    <li role="presentation"></li>
                </ul>
            </main>
            <p className="mx-2">{text}</p>
        </div>
    )

}

export default Loading