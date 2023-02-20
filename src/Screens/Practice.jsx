import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useCallback, useState } from "react";
import { FetchedData } from "../Components/FetchedData";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import quiz from "../assets/quiz-removebg-preview.png";

export const Practice = ({ setChildRank }) => {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);

    let options = ["adjective", "noun", "verb", "adverb"];

    const { isLoading, data, error } = useQuery(["data"], FetchedData, {
        staleTime: 10000,
    });

    const PostRank = async () => {
        console.log("PostRank in progress...");
        const response = await axios.post("http://localhost:3001/rank", {
            score: score,
        });
        const childRank = response.data;
        setChildRank(childRank);
        return childRank;
    };
    const mutation = useMutation({
        mutationFn: PostRank,
    });

    const navigate = useNavigate();

    const handleClick = useCallback(
        (e) => {
            setCurrent((c) => c + 1);
            if (e.target.value === data[current]?.pos) {
                setScore((s) => s + 10);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Amazing 🤩!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Nope 😭",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
            if (current === 9) {
                mutation.mutate({ score: score });
                navigate("/rank");
            }
        },
        [current, data, mutation, navigate, score]
    );

    if (isLoading) return <h3>Loading...</h3>;

    if (error) return "An error has occurred: " + error.message;

    console.log(score);

    return (
        <>
            <div className="ms-5">
                <div>
                    <img src={quiz} alt="Logo" />
                    <h4>
                        What is a Part of Speech for the word{" "}
                        <span className="questionWord">
                            {data[current]?.word.toUpperCase()}
                        </span>
                    </h4>
                </div>
                <div className="ms-5">
                    {options.map((answer, index) => (
                        <Button
                            variant="outline-danger"
                            className="my-4 mx-1"
                            value={answer}
                            key={index}
                            onClick={handleClick}
                        >
                            {answer}
                        </Button>
                    ))}
                </div>
            </div>
        </>
    );
};
