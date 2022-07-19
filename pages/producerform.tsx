type Props = {};

const producerform = (props: Props) => {
  return (
    <div className="grid grid-cols-8 grid-rows-4 h-screen w-100">
      <div className="grid col-span-4 col-start-3 justify-center mt-10">
        <form className="flex flex-col">
          <h1 className="text-center mb-3 text-2xl font-bold">
            Producer Registration
          </h1>

          <h1 className="mb-3 font-semibold">Personal Information</h1>

          <div className="inline-flex mb-3">
            <label className="w-12">Name</label>
            <input className="border-2 w-25" type="text" name="name"></input>
          </div>

          <div className="flex flex-col mb-3">
            <label>Preferred Pronouns</label>
            <select className="border-2" name="pronouns">
              <option value="they">They/Them</option>
              <option value="she">She/Her</option>
              <option value="he">He/Him</option>
              <option value="noresponse">Prefer Not to Say</option>
            </select>
          </div>

          <div className="inline-flex mb-3">
            <label className="w-12">Title</label>
            <input className="w-25 border-2" type="text" name="title"></input>
          </div>

          <div className="flex flex-col mb-3">
            <label>Years in Industry</label>
            <select className="border-2" name="experience">
              <option value="2">&#60;2</option>
              <option value="2-4">2-4</option>
              <option value="5-10">5-10</option>
              <option value="10-20">10-20</option>
              <option value="20">20&#43;</option>
            </select>
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

export default producerform;
