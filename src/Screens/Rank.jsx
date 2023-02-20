import React from "react";
import { Button } from "react-bootstrap";
import { BsArrowClockwise } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import thankYou from "../assets/thankYou.gif";

export default function Rank({ rankNum }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    return (
        <div className="ms-5 my-auto">
            <h2>Your Rank is : {rankNum.rank} %</h2>
            <div>
                <Button
                    variant="info"
                    className="my-4 mx-1 ms-5"
                    onClick={handleClick}
                >
                    <BsArrowClockwise /> Wanna Try again
                </Button>
            </div>
            <img src={thankYou} alt="thank you" style={{ width: "20%" }} />
        </div>
    );
}
