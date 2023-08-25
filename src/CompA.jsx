import CompB from "./CompB"

const CompA = () => {
    return(
        <>
        <div style={{backgroundColor: "green"}}>
            CompA will be here
        </div>
        <CompB />
        </>
    )
}

export default CompA