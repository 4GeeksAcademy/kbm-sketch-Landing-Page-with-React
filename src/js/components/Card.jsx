import React from "react";


const DynamicComponent = () => {
    return (
        <div className="col">
            <div className="card" style={{ width: 260 }}>
                <img src="https://placehold.co/500x325" className="card-img-top" alt="placeholder" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit.
                        Totam perspiciatis soluta quasi!
                        Molestias dolorem aut delectus.
                    </p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}

const Card = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-2 mb-4">

                {[1, 2, 3, 4].map((index) => (
                    <DynamicComponent key={index} />
                ))}
            </div>
        </div>

    );
};












export default Card;