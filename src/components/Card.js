import "./card.css"
function Card({ character }) {
    return (
        <>
            <section>
                <div className="container">
                    <div className="cards">

                        {
                            character.map((title) => {
                                return (
                                    <>
                                        <div className="card">
                                            <div className="image">
                                            <img src={title.img} alt="image"></img>
                                            </div>
                                            <div className="content">
                                            <h2 >Name : {title.name}</h2>
                                            <h3>Nickname :  {title.nickname}</h3>
                                            <h4>D.O.B : {title.birthday}</h4>
                                            <h4>status : {title.status}</h4>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default Card;