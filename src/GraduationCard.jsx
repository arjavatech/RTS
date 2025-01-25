export default function GraduationCard({graduationImg,gradImgClass,gradContainer})
{
    return(
        <div className="about-us">
        <div id="gradContainer">
        <img src={graduationImg} alt="graguationImg" className={gradImgClass} />
        <h4>What is Grauvation? Unveilling the blend of design and functional</h4>
        <p >26th December 2024 </p>
        <button id="readBtn">Read more</button>
        </div>
        </div>
    )
}