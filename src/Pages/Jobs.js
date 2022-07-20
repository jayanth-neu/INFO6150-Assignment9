import React from "react";
import Map from "./Map";
import Card from "./Card";

const data = [

    { id: 1, name: "Pet Keeper: Take care of pet schedule at the store" },
    { id: 2, name: "Salesmen: Take care of billing at the counter" },
    { id: 3, name: "Drivers: Riders to deliver the pet food to customers" },


];
function Jobs() {
    return (
        <div>
            <div className="main">
                <div className="heading"><h1>Paw Express Boston</h1><h2>Below are current job openings. Please reach out to us using contact form.</h2></div>
                    <React.Fragment>
                        <br></br>
                        <div className="joblist"><br></br>
                            {data.map((item) => {
                                return <Map id={item.id} key={item.id} name={item.name} />;
                            })}
                        </div>
                    </React.Fragment>
            </div>
            <Card color={"rgb(97, 219, 251)"} title="This page has all the job openings and is created using HTML, CSS & React. The map() function has been leveraged for creating dynamic jobs." />
            <div class="navbar">
                <h3 >Copyright &copy; 2022 Jayanth</h3>
            </div>
        </div>
    );
}

export default Jobs