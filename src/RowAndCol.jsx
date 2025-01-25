import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RowAndCol({ value, imagePath }) {
    return (
        <div className="col-sm-6 col-xl-3 col-md-4">
            <div className="card">
                <img src={imagePath} className="card-img-top" alt="..." />
                <hr />
                <div className="card-body">
                    <p><b>Details : </b>{value}</p>
                </div>
            </div>
        </div>
    );
}

export default RowAndCol;
