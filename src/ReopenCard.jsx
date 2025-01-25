

export default function ReopenCard({img1,cardTitle,cardContent,classname,contentId,titleId,imgId}){
    return(
        <div className={classname}>
         <img src={img1} id={imgId}/>
         <h2 id={titleId}>{cardTitle}</h2>
         <p id={contentId}>{cardContent}</p>
        </div>
    )
}