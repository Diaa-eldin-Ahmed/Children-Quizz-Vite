import React from "react";
import { Button } from "react-bootstrap";
import { BsArrowClockwise } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Rank({ rankNum }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    return (
        <div>
            <h2>Your Rank is : {rankNum.rank} %</h2>
            <div>
                <Button
                    variant="outline-warning"
                    className="my-4 mx-1"
                    onClick={handleClick}
                >
                    <BsArrowClockwise /> Wanna Try again
                </Button>
            </div>
        </div>
    );
}
