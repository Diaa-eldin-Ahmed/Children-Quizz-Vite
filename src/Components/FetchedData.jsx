import axios from "axios";

export const FetchedData = async () => {
    console.log("fetching in progress...");
    const response = await axios.get("http://localhost:3001/words");
    const questions = response.data;
    console.log(questions);
    return questions;
};
