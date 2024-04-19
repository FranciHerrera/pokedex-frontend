export type DataProps = {
    email: string,
    passwd: string,
    showData: boolean
}
function Data({email, passwd, showData}: DataProps){
    return(
        <section className="dataContainer">
        {
            showData && (
                <>
                    <p>Email: {email}</p>
                    <p>Contraseña: {passwd}</p>
                </>
            )
        }
        </section>
    )
}

export default Data;