// import {curriculamDetails} from './cardDetails'
import './styles/acedemic.css'

function CurriculamOverview({ head, curriculamDetail }) {
    return (
        <div className='m-5'>
            <h5 className='text-center' data-aos="fade-up"><b>{head}</b></h5>
            <div className="curriculam-card-container">
                <div className="row g-3">
                    {curriculamDetail.map((item, index) => (
                        <CreateCard key={index} heading={item.heading} content={item.content}
                            age={item.ageRequirement} evalution={item.evaluationRequired} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function CreateCard({ heading, content, year, yesOrNo, age, evalution }) {
    return (
        <div className="col-xl-6 col-md-6 col-sm-12 curiculam-whole-card col-12" data-aos="fade-up">
            <div className="card p-3 curriculam-card">
                <h5 className="text-center web-color curriculam-head"><b>{heading}</b></h5>
                <div className="card-header mt-3">
                    <p className=" curriculam-text">{content}</p>
                    {/* <div> */}
                </div>
                <div className="card-body body-card-style">

                </div>
                <div className="card-footer footer-card-style">
                    <div className="container curriculam-small-text-container">
                        <div className="row curriculam-row">
                            <CreateYearAndEvalution value={age} value2={'Age'} />
                            <CreateYearAndEvalution value={evalution} value2={'Evalution'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CreateYearAndEvalution({ value, value2 }) {
    return (
        <>
            <div className="col-6 col-xl-6 col-sm-6 col-md-6 curriculam-small-text-column">
                <h6 className='web-color curriculam-sub-head'><b>{value}</b></h6>
                <p>{value2}</p>
            </div>
        </>
    )
}
export default CurriculamOverview;