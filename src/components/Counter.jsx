function Counter({count, setCount}){
    function increaseCount(){
        setCount(count +1);

    }
    function decreaseCount(){
        setCount(count -1);

    }
    return (
        <div className="container">
            <p>{count}</p>
            <button onClick={increaseCount} className="btn">Increase</button>
            <button onClick={decreaseCount} className="btn">Decrease</button>
        </div>
    )
}
export default Counter;