import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { EvaluationFormCheese } from '../generated';

// Input for forms to change
// const [show, setShow] = useState(false);

//  const [input, setInput] = useState('');

// const [tags, SetTags] = useState([])

//  const showScores = () => { if (show === false) { setShow(true); } else { setShow(false); }; }
//  const handleInputChange = (event) => { setInput(event.target.value); }
//  const handleSubmit = (event) => { event.preventDefault(); SetTags([...tags, input]) setInput(''); }

// <form onSubmit={props.handleSubmit}>

//  <input className="tag-bar" type="text" placeholder='Add a tag' value={props.input} onChange={props.handleInputChange}></input>

// </form>

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
  const [question12, setQuestion12] = useState('');
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
  const [question21, setQuestion21] = useState('');
  const [question22, setQuestion22] = useState('');
  const [question22b, setQuestion22b] = useState('');
  const [question23, setQuestion23] = useState('');
  const [question24, setQuestion24] = useState('');
  const [question25, setQuestion25] = useState('');
  const [question26, setQuestion26] = useState('');
  const [question27, setQuestion27] = useState('');
  const [question28, setQuestion28] = useState('');
  const [question29, setQuestion29] = useState('');
  const [question29b, setQuestion29b] = useState('');
  const [question30, setQuestion30] = useState('');
  const [question31, setQuestion31] = useState('');
  const [question32, setQuestion32] = useState('');
  const [question33, setQuestion33] = useState('');
  const [question34, setQuestion34] = useState('');
  const [question35, setQuestion35] = useState('');
  const [question36, setQuestion36] = useState('');
  const [question37, setQuestion37] = useState('');
  const [question38, setQuestion38] = useState('');
  const [question39, setQuestion39] = useState('');
  const [question40, setQuestion40] = useState('');
  const [question41, setQuestion41] = useState('');
  const [question42, setQuestion42] = useState('');
  const [question43, setQuestion43] = useState('');
  const [question44, setQuestion44] = useState('');
  const [question45, setQuestion45] = useState('');

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
        question12: question12,
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
        question21: question21,
        question22: question22,
        question22b: question22b,
        question23: question23,
        question24: question24,
        question25: question25,
        question26: question26,
        question27: question27,
        question28: question28,
        question29: question29,
        question29b: question29b,
        question30: question30,
        question31: question31,
        question32: question32,
        question33: question33,
        question34: question34,
        question35: question35,
        question36: question36,
        question37: question37,
        question38: question38,
        question39: question39,
        question40: question40,
        question41: question41,
        question42: question42,
        question43: question43,
        question44: question44,
        question45: question45,
      },
    };
    const res = await axios.post(
      // Endpoint for all forms
      'https://tranquil-journey-42623.herokuapp.com/api/test-evaluation-forms',
      reqBody
    );
    if (res.statusText === 'OK') {
      //Refreshes page (if on index),
      router.push('/');
      alert('Form submitted! Heck ya!');
    }
  };

  return (
    <div className="grid grid-cols-8 grid-rows-4 h-screen w-100">
      <div className="grid col-span-4 col-start-3 justify-center mt-10">
        <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="text-center mb-3 text-2xl font-bold">
            Producer Registration
          </h1>

          <div className="inline-flex mb-3">
            <label className="w-12">Name:</label>
            <input
              type="text"
              className="outline"
              value="First Name, Last Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label>
              Do you currently carry products from this producer at your place
              of work?
            </label>
            {/* <div onChange={(e) => setQuestion1(e.target.value)}> */}
            <input type="radio" value="Yes" name="gender" /> Yes
            <input type="radio" value="No" name="gender" /> No
            {/* </div> */}
          </div>

          <div className="flex flex-col mb-3">
            <label>
              If so, which products? Be sure to note if you sell this specific
              product.
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion2(e.target.value)}
              required
            />
          </div>

          <div className="inline-flex mb-3">
            <label className="mr-2 w-28">Email Address</label>
            <input className="border-2 w-25" type="text" name="email"></input>
          </div>

          <div className="inline-flex mb-3">
            <label className="mr-2 w-28">Phone Number</label>
            <input className="border-2 w-25" type="text" name="phone"></input>
          </div>

          <h1 className="mb-3 font-semibold">Business Details</h1>

          <div className="inline-flex mb-3">
            <label className="mr-2 w-28">Business Name</label>
            <input className="border-2 2-25" type="text"></input>
          </div>

          <div className="inline-flex mb-3">
            <label className="mr-2">Year Company Established</label>
            <input
              className="border-2 w-25"
              type="text"
              name="established"
            ></input>
          </div>

          <div className="flex flex-col mb-3">
            <label>
              What type(s) of products do you sell? Select all that apply
            </label>
            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="products"
                value="cheese"
              />
              <label>Cheese</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="products"
                value="salumi"
              />
              <label>Salumi (raw, cooked, and cured meats)</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="products"
                value="pickled"
              />
              <label>Pickled goods</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="products"
                value="chocolate"
              />
              <label>Chocolate</label>
            </div>

            <div>
              <input
                className="mr-2"
                type="checkbox"
                name="products"
                value="fish"
              />
              <label>Preserved fish and seafood</label>
            </div>

            <div>
              <input
                className="mr-2"
                type="checkbox"
                name="products"
                value="pantry"
              />
              <label>Small-batch pantry items</label>
            </div>

            <div>
              <input
                className="mr-2"
                type="checkbox"
                name="products"
                value="other"
              />
              <label>Other</label>
            </div>
          </div>

          <div className="inline-flex mb-3 display-flex flex-col">
            <label className="mr-2">Product Description</label>
            <textarea className="border-2" name="pdescription"></textarea>
          </div>

          <div className="inline-flex mb-3 display-flex flex-col">
            <h1>Address</h1>
            <label className="mr-2">Street Address</label>
            <input className="border-2" name="street"></input>
            <label className="mr-2">City</label>
            <input className="border-2" name="city"></input>
            <label className="mr-2">State</label>
            <input className="border-2" name="state"></input>
            <label className="mr-2">Zip</label>
            <input className="border-2" name="zip"></input>
          </div>

          <div className="inline-flex mb-3">
            <label className="mr-2 w-18">Facebook</label>
            <input
              className="border-2 w-25"
              type="text"
              name="facebook"
            ></input>
          </div>

          <div className="inline-flex mb-3">
            <label className="mr-2 w-18">Instagram</label>
            <input
              className="border-2 w-25"
              type="text"
              name="instagram"
            ></input>
          </div>

          <div className="inline-flex mb-3">
            <label className="mr-2 w-18">Twitter</label>
            <input className="border-2 w-25" type="text" name="twitter"></input>
          </div>

          <div className="inline-flex mb-3">
            <label className="mr-2 w-18">TikTok</label>
            <input className="border-2 w-25" type="text" name="tiktok"></input>
          </div>

          <div className="inline-flex mb-3">
            <label className="mr-2 w-18">Other Social Media</label>
            <input
              className="border-2 w-25"
              type="text"
              name="socialmedia"
            ></input>
          </div>

          <h1 className="mb-3 font-semibold">Business Values</h1>
          <p className="mb-3">
            Feedback exists to specifically support producers who contribute to
            an ethical, equitable, and environmentally sustainable food system.
            Our team will evaluate your certifications and written responses for
            approval. We may reach out for an interview if needed.
          </p>

          <div className="inline-flex mb-3">
            <label className="mr-2">
              Company Structure: i.e. Farmstead, B Corp, etc.
            </label>
            <input
              className="border-2"
              type="text"
              name="companystructure"
            ></input>
          </div>

          <div className="flex flex-col mb-3">
            <label>
              Which of the following traits apply to the products you sell?
              Select all that apply
            </label>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="traits"
                value="organic"
              />
              <label>Organic (certified)</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="traits"
                value="awa"
              />
              <label>Animal Welfare Approved (AWA) (certified)</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="traits"
                value="humane"
              />
              <label>Certified Humane (certified)</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="traits"
                value="dbc"
              />
              <label>Demeter Biodynamic Certification</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="traits"
                value="grassfed"
              />
              <label>American Grassfed (certified)</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="traits"
                value="fairlabor"
              />
              <label>
                Fair Labor Practices and Community Benefits (certified)
              </label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="traits"
                value="other"
              />
              <label>Other</label>
            </div>
          </div>

          <div className="inline-flex mb-3 display-flex flex-col">
            <label className="mr-2">
              Are there any practices you have that are not certified but
              contribute to an ethical, equitable, and/or environmentally
              sustainable food system? Please share here.
            </label>
            <textarea className="border-2" name="practices"></textarea>
          </div>

          <div className="inline-flex mb-3 display-flex flex-col">
            <label className="mr-2">
              In the small, values-based food production economy, certain groups
              are underrepresented, in terms of race, ethnicity, gender
              identity, sexual orientation, physical ability, and/or immigration
              status. Are you a member of an underrepresented group?
            </label>
            <textarea className="border-2" name="representation"></textarea>
          </div>

          <h1 className="mb-3 font-semibold">Values Communication</h1>

          <div className="inline-flex mb-3 display-flex flex-col">
            <label className="mr-2">
              Do you currently communicate the values (e.g. organic, fair labor)
              of your business to general consumers? Yes or no. If yes, in what
              way?
            </label>
            <textarea className="border-2" name="values1"></textarea>
          </div>

          <div className="inline-flex mb-3 display-flex flex-col">
            <label className="mr-2">
              Do you currently communicate the above values of your business to
              buyers? Yes or no. If yes, in what way?
            </label>
            <textarea className="border-2" name="values2"></textarea>
          </div>

          <h1 className="mb-3 font-semibold">How Did You Find Us?</h1>
          <div className="flex flex-col mb-3">
            <label>
              How did you hear about Feedback? Select all that apply
            </label>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="ref"
                value="friend"
              />
              <label>A friend told me</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="ref"
                value="socialmedia"
              />
              <label>A shared social media post</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="ref"
                value="instagrampost"
              />
              <label>Instagram post by Ruminate</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="ref"
                value="instagramad"
              />
              <label>Instagram ad</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="ref"
                value="facebookad"
              />
              <label>Facebook ad</label>
            </div>

            <div className="inline-flex">
              <input className="mr-2" type="checkbox" name="ref" value="acs" />
              <label>ACS</label>
            </div>

            <div className="inline-flex">
              <input className="mr-2" type="checkbox" name="ref" value="gff" />
              <label>Good Food Foundation</label>
            </div>

            <div className="inline-flex">
              <input
                className="mr-2"
                type="checkbox"
                name="ref"
                value="other"
              />
              <label>Other</label>
            </div>
          </div>

          <div className="inline-flex mb-3 display-flex flex-col">
            <label className="mr-2">Please describe</label>
            <textarea className="border-2" name="refdes"></textarea>
          </div>

          <div className="inline-flex mb-3 display-flex flex-col">
            <label className="mr-2">
              Why are you interested in giving Feedback?
            </label>
            <textarea className="border-2" name="interest"></textarea>
          </div>

          <button className="border-2 w-1/6" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EvaluationFormCheese;
