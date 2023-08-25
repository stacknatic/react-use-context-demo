const PropTest = ({name, setName}) =>  {
    return(
        <div>
            <h1>PropTest</h1>
            <p>Hello name: {name}</p>
            <button onClick={() => setName("Jane")}>Change name to Jane</button>

        </div>
    )
}

export default PropTest;