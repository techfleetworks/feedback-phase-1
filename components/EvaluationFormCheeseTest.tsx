import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
type Props = {};

const EvaluationFormCheese = (props: Props) => {
  // Sets state of questions
  const [name, setName] = useState('');
  const [question1, setQuestion1] = useState('');
  const [question1b, setQuestion1b] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setQuestion4] = useState('');
  const [question5, setQuestion5] = useState('');
  const [question6, setQuestion6] = useState('');
  const [question6b, setQuestion6b] = useState('');
  const [question7, setQuestion7] = useState('');
  const [question8, setQuestion8] = useState('');
  const [question9, setQuestion9] = useState('');
  const [question10, setQuestion10] = useState('');
  const [question11, setQuestion11] = useState('');
  const [question11b, setQuestion11b] = useState('');
  const [question13, setQuestion13] = useState('');
  const [question14, setQuestion14] = useState('');
  const [question15, setQuestion15] = useState('');
  const [question16, setQuestion16] = useState('');
  const [question17, setQuestion17] = useState('');
  const [question17b, setQuestion17b] = useState('');
  const [question18, setQuestion18] = useState('');
  const [question19, setQuestion19] = useState('');
  const [question19b, setQuestion19b] = useState('');
  const [question20, setQuestion20] = useState('');

  const router = useRouter();

  // Function to submit user input to Strapi
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const reqBody = {
      data: {
        name: name,
        question1: question1,
        question1b: question1b,
        question2: question2,
        question3: question3,
        question4: question4,
        question5: question5,
        question6: question6,
        question6b: question6b,
        question7: question7,
        question8: question8,
        question9: question9,
        question10: question10,
        question11: question11,
        question11b: question11b,
        // question12: question12,
        question13: question13,
        question14: question14,
        question15: question15,
        question16: question16,
        question17b: question17b,
        question17: question17,
        question18: question18,
        question19: question19,
        question19b: question19b,
        question20: question20,
      },
    };
    const res = await axios.post(
      // Endpoint for all forms
      'https://tranquil-journey-42623.herokuapp.com/api/evaluation-form-cheese-tests',
      reqBody
    );
    if (res.statusText === 'OK') {
      //Refreshes page (if on index),
      router.push('/');
      alert('Form submitted! Heck ya!');
    }
  };

  return (
    <>
      <div className="grid grid-cols-8 w-100">
        <div className="grid col-span-4 col-start-3 justify-center mt-10">
          <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="text-center mb-3 text-2xl font-bold">
              Cheese Evaluation Form
            </h1>
            {/* QUESTION: NAME */}
            <div className="inline-flex mb-3">
              <label className="w-12">Name:</label>
              <input
                type="text"
                name="name"
                className="outline"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            {/* QUESTION 1 */}
            <div className="flex flex-col mb-3">
              <label>
                Do you currently carry products from this producer at your place
                of work?
              </label>
              <div>
                <input
                  type="radio"
                  value="Yes"
                  onChange={(e) => setQuestion1(e.target.value)}
                  name="question1"
                />{' '}
                Yes
                <input
                  type="radio"
                  value="No"
                  onChange={(e) => setQuestion1(e.target.value)}
                  name="question1"
                />{' '}
                No
              </div>
            </div>
            {/* QUESTION 1b */}
            {question1 === 'Yes' ? (
              <div className="flex flex-col mb-3">
                <label>
                  If so, which products? Be sure to note if you sell this
                  specific product.
                </label>
                <input
                  type="text"
                  className="outline"
                  onChange={(e) => setQuestion1b(e.target.value)}
                  name="question1b"
                />
              </div>
            ) : (
              <div></div>
            )}
            <br />
            <p>
              <b>Initial Observations—Unboxing:</b> In this section, you will
              review the initial presentation as well as the packaging and
              branding of the product &#40;if relevant&#41;. Please make sure
              you hold onto the packaging and cheese label for this portion of
              the evaluation. You will be asked a set of questions before
              viewing the product.
            </p>
            {/* QUESTION 2 */}
            <div className="flex flex-col mb-3">
              <label>
                What are your immediate thoughts about the packaging of the
                product?
              </label>
              <input
                type="text"
                className="outline"
                onChange={(e) => setQuestion2(e.target.value)}
                required
              />
            </div>
            {/* QUESTION 3 */}
            <div className="flex flex-col mb-3">
              <label>How would you describe the label of the product?</label>
              <input
                type="text"
                className="outline"
                onChange={(e) => setQuestion3(e.target.value)}
                required
              />
            </div>
            {/* QUESTION 4 */}
            <div className="flex flex-col mb-3">
              <label>Does the label connect you to the product?</label>
              <div className="m-2">
                <input
                  onChange={(e) => setQuestion4(e.target.value)}
                  className="mr-2"
                  type="radio"
                  value="Yes"
                  name="question4"
                />
                <label>Yes</label>
                <input
                  onChange={(e) => setQuestion4(e.target.value)}
                  className="m-2"
                  type="radio"
                  value="No"
                  name="question4"
                />
                <label>No</label>
              </div>
            </div>
            {/* QUESTION 5 */}
            <div className="flex flex-col mb-3">
              <label>Does the label connect you to the maker?</label>
              <div className="m-2">
                <input
                  onChange={(e) => setQuestion5(e.target.value)}
                  className="mr-2"
                  type="radio"
                  value="Yes"
                  name="question5"
                />
                <label>Yes</label>
                <input
                  onChange={(e) => setQuestion5(e.target.value)}
                  className="m-2"
                  type="radio"
                  value="No"
                  name="question5"
                />
                <label>No</label>
              </div>
            </div>
            {/* QUESTION 6 */}
            <div className="flex flex-col mb-3">
              <label>
                Would you like to see any additional details on the label?
              </label>
              <div className="m-2">
                <input
                  onChange={(e) => setQuestion6(e.target.value)}
                  className="mr-2"
                  type="radio"
                  value="Yes"
                  name="question6"
                />
                <label>Yes</label>
                <input
                  onChange={(e) => setQuestion6(e.target.value)}
                  className="m-2"
                  type="radio"
                  value="No"
                  name="question6"
                />
                <label>No</label>
              </div>
            </div>

            {/* QUESTION 6b */}
            {question6 === 'Yes' ? (
              <div className="flex flex-col mb-3">
                <label>
                  What are these details that you would like to be included on
                  the label?
                </label>
                <input
                  type="text"
                  className="outline"
                  onChange={(e) => setQuestion6b(e.target.value)}
                />
              </div>
            ) : (
              <div></div>
            )}

            {/* QUESTION 7 */}
            <div className="flex flex-col mb-3">
              <label>
                Do the colors on the packaging work for the product?
              </label>
              <input
                type="text"
                className="outline"
                onChange={(e) => setQuestion7(e.target.value)}
                required
              />
            </div>
            {/* QUESTION 8 */}
            <div className="flex flex-col mb-3">
              <label>Does the font used work for the product?</label>
              <input
                type="text"
                className="outline"
                onChange={(e) => setQuestion8(e.target.value)}
                required
              />
            </div>
            {/* QUESTION 9 */}
            <div className="flex flex-col mb-3">
              <label>
                Do you think the packaging would work well in your case from a
                utility standpoint? If not, what would you change that would
                make it more functional for you as a monger?
              </label>
              <input
                type="text"
                className="outline"
                onChange={(e) => setQuestion9(e.target.value)}
                required
              />
            </div>
            {/* QUESTION 10 */}
            <div className="flex flex-col mb-3">
              <label>
                What challenges do you foresee with storage of the product in
                your place of work?
              </label>
              <input
                type="text"
                className="outline"
                onChange={(e) => setQuestion10(e.target.value)}
                required
              />
            </div>
            {/* QUESTION 11 */}
            <div className="flex flex-col mb-3">
              <label>
                Did care instructions come with your product, either in shipment
                or on the packaging?
              </label>
              <div className="m-2">
                <input
                  onChange={(e) => setQuestion11(e.target.value)}
                  className="mr-2"
                  type="radio"
                  value="Yes"
                  name="question11"
                />
                <label>Yes</label>
                <input
                  onChange={(e) => setQuestion11(e.target.value)}
                  className="m-2"
                  type="radio"
                  value="No"
                  name="question11"
                />
                <label>No</label>
              </div>
            </div>
            {/* QUESTION 11b */}
            {question11 === 'Yes' ? (
              <div className="flex flex-col mb-3">
                <label>
                  Was the care information helpful? Is there anything that
                  should be added or removed?
                </label>
                <input
                  type="text"
                  className="outline"
                  onChange={(e) => setQuestion11b(e.target.value)}
                />
              </div>
            ) : (
              <div></div>
            )}
            {/* QUESTION 12 */}
            {/* <div className="flex flex-col mb-3">
            <label>
              Before you begin evaluating the product itself, please upload a
              photograph of the opened product. This helps producers know if the
              product was altered in any way during shipment.
            </label> */}
            {/* upload photo */}
            {/* <input type="" className="outline" required />
          </div> */}
            <br />
            <p>
              <b>Product Details—Visual &#38; Aroma:</b> This section addresses
              the product&apos;s physical appearance and smell. Be sure to set
              the cheese out for the recommended time that has been provided by
              the producer before completing this section.
            </p>
            {/* QUESTION 13 */}
            <div className="flex flex-col mb-3">
              <label>
                What are the first three words that come to mind for this
                product?
              </label>
              <input
                type="text"
                className="outline"
                onChange={(e) => setQuestion13(e.target.value)}
                required
              />
            </div>
            {/* QUESTION 14 */}
            <div className="flex flex-col mb-3">
              <label>
                What are the distinguishing features of this product?
              </label>
              <input
                type="text"
                className="outline"
                onChange={(e) => setQuestion14(e.target.value)}
                required
              />
            </div>
            {/* QUESTION 15 */}
            <div className="flex flex-col mb-3">
              <label>How would you describe the smell of the product?</label>
              <input
                type="text"
                className="outline"
                onChange={(e) => setQuestion15(e.target.value)}
                required
              />
            </div>
            {/* QUESTION 16 */}
            <div className="flex flex-col mb-3">
              <label>
                Are the aromas of the product familiar? If so, please describe.
              </label>
              <input
                type="text"
                className="outline"
                onChange={(e) => setQuestion16(e.target.value)}
                required
              />
            </div>
            {/* QUESTION 17 */}
            <div className="flex flex-col mb-3">
              <label>
                Do you have any negative or unpleasant associations with the
                aromas?
              </label>
              <div className="m-2">
                <input
                  onChange={(e) => setQuestion17(e.target.value)}
                  className="mr-2"
                  type="radio"
                  value="Yes"
                  name="question17"
                />
                <label>Yes</label>
                <input
                  onChange={(e) => setQuestion17(e.target.value)}
                  className="m-2"
                  type="radio"
                  value="No"
                  name="question17"
                />
                <label>No</label>
              </div>
            </div>
            {/* QUESTION 17B */}
            {question17 === 'Yes' ? (
              <div className="flex flex-col mb-3">
                <label>What are they? Please describe.</label>
                <input
                  type="text"
                  className="outline"
                  onChange={(e) => setQuestion17b(e.target.value)}
                />
              </div>
            ) : (
              <div></div>
            )}
            {/* QUESTION 18 */}
            <div className="flex flex-col mb-3">
              <label>
                How would you describe the visuals of the product as a whole and
                once cut into?
              </label>
              <input
                type="text"
                className="outline"
                onChange={(e) => setQuestion18(e.target.value)}
                required
              />
            </div>
            {/* QUESTION 19 */}
            <div className="flex flex-col mb-3">
              <label>Are there any defects or negative qualities?</label>
              <div className="m-2">
                <input
                  onChange={(e) => setQuestion19(e.target.value)}
                  className="mr-2"
                  type="radio"
                  value="Yes"
                  name="question19"
                />
                <label>Yes</label>
                <input
                  onChange={(e) => setQuestion19(e.target.value)}
                  className="m-2"
                  type="radio"
                  value="No"
                  name="question119"
                />
                <label>No</label>
              </div>
            </div>
            {/* QUESTION 19b */}
            {question19 === 'Yes' ? (
              <div className="flex flex-col mb-3">
                <label>What are they? Please describe.</label>
                <input
                  type="text"
                  className="outline"
                  onChange={(e) => setQuestion19b(e.target.value)}
                />
              </div>
            ) : (
              <div></div>
            )}
            {/* QUESTION 20 */}
            <div className="flex flex-col mb-3">
              <label>Is the size/format suitable for the product?</label>
              <div className="m-2">
                <input
                  onChange={(e) => setQuestion20(e.target.value)}
                  className="mr-2"
                  type="radio"
                  value="Yes"
                  name="question20"
                />
                <label>Yes</label>
                <input
                  onChange={(e) => setQuestion20(e.target.value)}
                  className="m-2"
                  type="radio"
                  value="No"
                  name="question20"
                />
                <label>No</label>
              </div>
            </div>

            <button className="border-2 w-1/6" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EvaluationFormCheese;
