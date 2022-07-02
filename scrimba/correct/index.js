
// ReactDOM.render(
//     <h1>Correct</h1>,
//     document.getElementById("root")
// )


const page = (
    <div>
        <h1>Great React Page</h1>
        <h3>Reasons why I need to learn React</h3>
        <ol>
            <li>It's something</li>
            <li>It's something else </li>
            <li>It's something not else</li>
        </ol>
    </div>
)

document.getElementById("root").append(JSON.stringify(page))