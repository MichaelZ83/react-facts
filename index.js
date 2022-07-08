const element = <h1 className="header">MZN REACT WEB</h1>
console.log(element)

const list = (
    <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>contact</li>
    </ul>
)


const assemble = <nav>
    {element}
    {list}
</nav>

ReactDOM.render(assemble, document.getElementById('root'))