export default function AcheivementCard({ medal, acheiveId }) {
    return (
        <>
        <div className="container my-4 about-us">
            <div className="row">
                <div className="col acheiveCard">
                    <div className="d-flex align-items-center">
                        <img src={medal} alt="medal img" id={acheiveId} />
                        <h4 id="competition" className="ms-3">Technology Competition</h4>
                    </div>
                </div>
            </div>
        </div>                    
    </>
    )
}