import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
// import { EvaluationFormCheese } from '../generated';

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
  const [name, setName] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question1b, setQuestion1b] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");
  const [question6b, setQuestion6b] = useState("");
  const [question7, setQuestion7] = useState("");
  const [question8, setQuestion8] = useState("");
  const [question9, setQuestion9] = useState("");
  const [question10, setQuestion10] = useState("");
  const [question11, setQuestion11] = useState("");
  const [question11b, setQuestion11b] = useState("");
  const [question12, setQuestion12] = useState("");
  const [question13, setQuestion13] = useState("");
  const [question14, setQuestion14] = useState("");
  const [question15, setQuestion15] = useState("");
  const [question16, setQuestion16] = useState("");
  const [question17, setQuestion17] = useState("");
  const [question17b, setQuestion17b] = useState("");
  const [question18, setQuestion18] = useState("");
  const [question19, setQuestion19] = useState("");
  const [question19b, setQuestion19b] = useState("");
  const [question20, setQuestion20] = useState("");
  const [question21, setQuestion21] = useState("");
  const [question22, setQuestion22] = useState("");
  const [question22b, setQuestion22b] = useState("");
  const [question23, setQuestion23] = useState("");
  const [question24, setQuestion24] = useState("");
  const [question25, setQuestion25] = useState("");
  const [question26, setQuestion26] = useState("");
  const [question27, setQuestion27] = useState("");
  const [question28, setQuestion28] = useState("");
  const [question29, setQuestion29] = useState("");
  const [question29b, setQuestion29b] = useState("");
  const [question30, setQuestion30] = useState("");
  const [question31, setQuestion31] = useState("");
  const [question32, setQuestion32] = useState("");
  const [question33, setQuestion33] = useState("");
  const [question34, setQuestion34] = useState("");
  const [question35, setQuestion35] = useState("");
  const [question36, setQuestion36] = useState("");
  const [question37, setQuestion37] = useState("");
  const [question38, setQuestion38] = useState("");
  const [question39, setQuestion39] = useState("");
  const [question40, setQuestion40] = useState("");
  const [question41, setQuestion41] = useState("");
  const [question42, setQuestion42] = useState("");
  const [question43, setQuestion43] = useState("");
  const [question44, setQuestion44] = useState("");
  const [question45, setQuestion45] = useState("");

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
              onChange={(e) => setQuestion1b(e.target.value)}
            />
          </div>

          <br />

          <div>
            Initial Observations—Unboxing: In this section, you will review the
            initial presentation as well as the packaging and branding of the
            product (if relevant). Please make sure you hold onto the packaging
            and cheese label for this portion of the evaluation. You will be
            asked a set of questions before viewing the product.{" "}
          </div>

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

          <div className="flex flex-col mb-3">
            <label>How would you describe the label of the product?</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion3(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label>Does the label connect you to the product?</label>
            <input
              type=""
              className="outline"
              onChange={(e) => setQuestion4(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label>Does the label connect you to the maker?</label>
            <input
              type=""
              className="outline"
              onChange={(e) => setQuestion5(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label>
              Would you like to see any additional details on the label?
            </label>
            <input
              type=""
              className="outline"
              onChange={(e) => setQuestion6(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              What are these details that you would like to be included on the
              label?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion6b(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-3">
            <label>Do the colors on the packaging work for the product?</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion7(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label>Does the font used work for the product?</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion8(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label>
              Do you think the packaging would work well in your case from a
              utility standpoint? If not, what would you change that would make
              it more functional for you as a monger?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion9(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label>
              What challenges do you foresee with storage of the product in your
              place of work?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion10(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label>
              Did care instructions come with your product, either in shipment
              or on the packaging?
            </label>
            <input
              type=""
              className="outline"
              onChange={(e) => setQuestion11(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label>
              Was the care information helpful? Is there anything that should be
              added or removed?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion11b(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Before you begin evaluating the product itself, please upload a
              photograph of the opened product. This helps producers know if the
              product was altered in any way during shipment.
            </label>
            {/* upload photo */}
            <input type="" className="outline" required />
          </div>

          <br />

          <div>
            Product Details—Visual & Aroma: This section addresses the product’s
            physical appearance and smell. Be sure to set the cheese out for the
            recommended time that has been provided by the producer before
            completing this section.{" "}
          </div>

          <div className="flex flex-col mb-3">
            <label>
              What are the first three words that come to mind for this product?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion13(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>What are the distinguishing features of this product?</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion14(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>How would you describe the smell of the product?</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion15(e.target.value)}
              required
            />
          </div>
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
          <div className="flex flex-col mb-3">
            <label>
              Do you have any negative or unpleasant associations with the
              aromas?
            </label>
            <input
              type=""
              className="outline"
              onChange={(e) => setQuestion17(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>What are they? Please describe.</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion17b(e.target.value)}
            />
          </div>
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
          <div className="flex flex-col mb-3">
            <label>Are there any defects or negative qualities?</label>
            <input
              type=""
              className="outline"
              onChange={(e) => setQuestion19(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>What are they? Please describe.</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion19b(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>Is the size/format suitable for the product?</label>
            <input
              type=""
              className="outline"
              onChange={(e) => setQuestion20(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>What makes the size suitable or not suitable?</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion21(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Would a change in size or format result in better sales in your
              market?
            </label>
            <input
              type=""
              className="outline"
              onChange={(e) => setQuestion22(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              How might the product size or format be changed to be optimized
              for your market?
            </label>
            <input
              type=""
              className="outline"
              onChange={(e) => setQuestion22b(e.target.value)}
            />
          </div>

          <br />

          <div>
            Product Details—Taste/Flavor: Now that the cheese has been tempered
            and you have a good idea of its appearance and aroma, we would like
            you to taste the cheese.{" "}
          </div>

          <div className="flex flex-col mb-3">
            <label>
              What three words would you use to describe the flavor(s) of the
              product?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion23(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>How does the paste taste?</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion24(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>How does the rind taste?</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion25(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Is there consistency with flavor between the rind, creamline (if
              present), and paste? Please explain.
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion26(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Please share your thoughts on how this product specifically ranks
              amongst these flavor wheel attributes.
              {/* flavor wheel??? */}
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion27(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>What is your physical response to the flavor?</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion28(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Do you have any adverse responses to the product’s flavors?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion29(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Are there specific flavors contributing to this response?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion29b(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Are there any details such as salt level, physical features, etc.
              that influence how this product tastes to you?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion30(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>How would you describe this product to a customer?</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion31(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              How would you describe this product to a knowledgeable person in
              your industry?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion32(e.target.value)}
              required
            />
          </div>

          <br />

          <div>
            Overall: This section will detail your assessment of this product as
            it relates to other products you sell. We encourage you to reference
            the product sheet linked at the top of this evaluation during this
            section. Please respond in hypothetical or actual terms depending on
            if you already carry this product.
          </div>

          <div className="flex flex-col mb-3">
            <label>How do you see the product fitting into your case?</label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion33(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Would this product stand out in your case to a consumer? Why or
              why not? What would you change to make it stand out more?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion34(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              How does the product relate to similar products you sell? How does
              it compare in terms of packaging/presentation and flavor?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion35(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              If you currently sell this product: When offered this product
              alongside similar products, why might a customer choose, or not
              choose to purchase this product?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion36(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Is there anything that you would specifically need to explain
              about this product to a customer?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion37(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Is there a unit size of this product that would work well for your
              case? What is the ideal retail size for this product?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion38(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              What would you, as a retailer, be willing to pay/what would be a
              fair price for this product in your area?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion39(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              If you paid this price, how might you then price the product for
              your customer and how might this impact the sale of the product?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion40(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Would this pricing fit into the majority of your customer base’s
              budget? Where would it sit?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion41(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Do you have any suggestions on how to make this product more
              marketable?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion42(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Did you solicit opinions from others during this evaluation
              process? If so, who?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion43(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Reading the producer&apos;s stated goal with the product on the
              linked product sheet--did the producer succeed with their
              intentions of the product? What specific guidance would you
              provide for them to more effectively achieve this goal?
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion44(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>
              Are there any other comments or summary thoughts you’d like to
              share with the maker? If any pairing suggestions come to mind feel
              free to share in this area.
            </label>
            <input
              type="text"
              className="outline"
              onChange={(e) => setQuestion45(e.target.value)}
              required
            />
          </div>

          {/* old form stuff (copied form stuff?) below */}
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
