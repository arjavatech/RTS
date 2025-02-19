import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { formatDateToOrdinal2 } from './ReadMorePage';

function CardWithContentDetails({ heading, checkTrue,cardtype,Details }) {
    const [events, setEvents] = useState([]);
    
    let sheetname = cardtype=="Events"?"Events":"LatestNews"; 
    useEffect(() => {
        fetch(`https://script.google.com/macros/s/AKfycby0RsNTM3YdU95YeTr0UlG-hfEnB8f6g3MFnZV9f0Ci1R7oIudYFoI4-P7cWKuIUHSu/exec?sheet=${sheetname}`)
            .then(response => response.json())
            .then(data => {
                console.log(`Data from ${sheetname}:`, data);
                
                // Sort the data by date (assuming the date format is "YYYY-MM-DD")
                const sortedEvents = data.sort((a, b) => new Date(b.Date) - new Date(a.Date));
               
                // Get the last 3 events
                const limitedEvents = sortedEvents.slice(0,3);
                setEvents(limitedEvents);
            })
            .catch(error => console.error("Error fetching events:", error));
    }, []);
    

    return (
        <>
          
            <h2 className={`${checkTrue ? 'left-align' : 'right-alignment'}   heads mb-4 mt-5`}>
                <p>
                   
                    <Link to={'/Blog'} className="web-color " style={{ textDecoration: 'underline' }}
                    ><p>{heading}</p></Link>
                </p>
            </h2>
            <div className="row">
  {cardtype === "Events"
    ? events.map((item, index) => (
        <CreatenumberWithTexts
          key={index}
          date={item.Date}
          head={item.Title}
          organizer={item.EventOrganizer}
          text={item.DetailDescription}
          num={1}
          changeSide={checkTrue}
        />
      ))
    : events.map((item, index) => (
        <CreatenumberWithTexts
          key={index}
          date={item.Date}
          head={item.Title}
          text={item.DetailDescription}
          num={index}
          changeSide={checkTrue}
        />
      ))}
</div>

        </>
    );
}

function CreatenumberWithTexts({ date, head, text, num, changeSide, organizer }) {
    const result = formatDateToOrdinal(date);
    return (
        <>
            {changeSide ? (
                <>
                    <div className="col-sm-2 ">
                        <p
                            className="num-circle rounded-circle mt-5 text-white d-flex justify-content-center align-items-center"
                            style={{
                                width: '75px',
                                height: '75px',
                                margin: '0',
                                fontSize: '0.9rem'
                            }}
                        >
                            {result.dayWithSuffix}<br></br>
                            {result.monthShort}

                        </p>
                    </div>
                    <div className="col-sm-10">
                        <p className="apply-gray">{organizer}</p>
                        <h5 className="fs-5 fw-6 text-uppercase font-weight-bolder heads "><b>{head}</b></h5>
                        <p className="apply-gray-p"> {truncateText(text,false)}</p>
                    </div>
                </>
            ) : (
                <div className='latestNews-items'>
                <div className="col-sm-11 right-alignment">
                        <p className="apply-gray">{formatDateToOrdinal2(date)}</p>
                        <h5 className="fs-5 fw-6 text-uppercase font-weight-bolder heads "><b>{head}</b></h5>
                        <p className="apply-gray-p">{truncateText(text,false)}</p>
                    </div>
                    <div className="col-sm-1 circle-space">
                        <p
                            className="num-circle  rounded-circle mt-5 text-white d-flex justify-content-center align-items-center"
                            style={{
                                width: '75px',
                                height: '75px',
                                margin: '0',
                                fontSize: '33.9px'
                            }}
                        >
                            {num+1}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

function formatDateToOrdinal(dateString) {
    const date = new Date(dateString); // Date object from the date string
    const day = date.getDate(); // Get day in local time zone
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase(); // Get the month name

    // Function to add ordinal suffix
    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return "th"; // Covers 11th-13th
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;
    const monthShort = month;

    return { dayWithSuffix, monthShort };
}

export default CardWithContentDetails;
// getting the shorter description
export function truncateText(text,isblog) {
    const plainText = text.replace(/<[^>]*>/g, ''); // Remove HTML tags
    const words = plainText.split(' ');

    if (words.length > 20 ) {
        if(isblog==false)
        {
            return (
            
                <span>
                {words.slice(0, 20).join(' ')}...
                <Link to="/Blog" className="web-color fs-6" style={{ textDecoration: 'none', marginLeft: '5px' }}>
                    Read More
                </Link>
            </span>
            
           
        );
        }
        else{
            return (
            
                <span>
                {words.slice(0, 20).join(' ')}...
               
            </span>
            
           
        );

        }
       
    }
    else if(isblog==false)
    {
        return <span>{plainText}<Link to="/Blog" className="web-color fs-6" style={{ textDecoration: 'none', marginLeft: '5px' }}>
        Read More
    </Link></span>;  
    }
    return <span>{plainText}</span>
   
}