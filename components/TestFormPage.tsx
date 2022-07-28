import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

type Props = {};

const TestFormPage = (props: Props) => {
  // Sets state of questions
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const router = useRouter();

  // Function to submit user input to Strapi
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const reqBody = {
      data: {
        question1: question1,
        question2: question2,
        question3: question3,
      },
    };
    const res = await axios.post(
      // Endpoint for all forms
      "https://tranquil-journey-42623.herokuapp.com/api/test-evaluation-forms",
      reqBody
    );
    if (res.statusText === "OK") {
      //Refreshes page (if on index),
      router.push("/");
      alert("Form submitted! Heck ya!");
    }
  };
  return (
    <div className="text-center bg-slate-100">
      <div>
        <h1>Test Form</h1>
        <p>Test test test</p>
      </div>

      <div className="m-3">
        <form onSubmit={(e) => handleSubmit(e)}>
          <p>
            Do you currently carry products from this producer at your place of
            work?
          </p>
          <input
            type="text"
            className="outline"
            onChange={(e) => setQuestion1(e.target.value)}
            name="Name"
            required
          />
          <p>
            If so, which products? Be sure to note if you sell this specific
            product.
          </p>
          <div className="d-flex align-items-center">
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion2(e.target.value)}
              required
            />
            <br />
            {/* <button className="bg-slate-400" type="submit">
              Send
            </button> */}
          </div>

          <div className="flex flex-col m-3">
            <label>
              Do you currently carry products from this producer at your place
              of work?
            </label>
            <div className="m-2">
              {/* <div onChange={(e) => setQuestion1(e.target.value)}> */}
              <input
                onChange={(e) => setQuestion3(e.target.value)}
                className="mr-2"
                type="radio"
                value="Yes"
                name="gender"
              />{" "}
              Yes
              <input
                onChange={(e) => setQuestion3(e.target.value)}
                className="m-2"
                type="radio"
                value="No"
                name="gender"
              />{" "}
              No
              {/* </div> */}
            </div>
          </div>

          <button className="bg-slate-400 p-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestFormPage;
