const { useState } = React

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>Counter from {count}</div>
            <button onClick={() => setCount(count + 1)}> +1 </button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));