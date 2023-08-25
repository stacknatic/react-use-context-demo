import { useState } from "react";

const NameCheckTest = (props) => {
    const {name} = props;
    const [changedName, setChangedName] = useState(name);

    return (
        <div style={{backgroundColor: "lightblue"}}> 
            <h1>NameCheckTest</h1>
            <p>Hello name: </p>
            <input type="text" 
                   value={changedName}
                   onChange={(e) => setChangedName(e.target.value)}
                   placeholder="Enter your name"
            />
            <p>Hello name: {changedName}</p>
        </div>
    )
}

export default NameCheckTest;