import axios from "axios";

export const FetchedData = async () => {
    console.log("fetching in progress...");
    const response = await axios.get(
        "https://backend-child-quizz.vercel.app/words"
    );
    const questions = response.data;
    console.log(questions);
    return questions;
};
