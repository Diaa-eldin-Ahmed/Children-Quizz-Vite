import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { VscDebugStart } from "react-icons/vsc";

export const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/practice");
    };
    return (
        <div className="containerHomeImg d-flex justify-content-center align-items-center">
            <Button
                onClick={handleClick}
                className=" homeBtn"
                variant="warning"
            >
                <VscDebugStart
                    style={{ fontSize: "1.2rem" }}
                    className="mb-1"
                />{" "}
                Start Quiz
            </Button>
        </div>
    );
};
