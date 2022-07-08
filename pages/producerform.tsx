import React from "react";

type Props = {};

const producerform = (props: Props) => {
  return (
    <div className="grid grid-cols-8 grid-rows-4 h-screen w-100">
      <div className="grid col-span-4 col-start-3 justify-center">
        <form className="flex flex-col">
          <h1 className="text-center mb-3">Producer Registration</h1>

          <h1 className="mb-3">Personal Information</h1>

          <div className="inline-flex mb-3">
            <label className="mr-2">Name</label>
            <input className="border-2" type="text"></input>
          </div>

          <div className="flex flex-col mb-3">
            <label>Preferred Pronouns</label>
            <select className="border-2" name="experience">
              <option value="2">They/Them</option>
              <option value="2-4">She/Her</option>
              <option value="5-10">He/Him</option>
              <option value="10">Prefer Not to Say</option>
            </select>
          </div>

          <div className="flex flex-col mb-3">
            <label>Industry Sector</label>
            <div className="inline-flex">
              <input type="checkbox" name="industry" value="retail" />
              <label>Retail</label>
            </div>

            <div className="inline-flex">
              <input type="checkbox" name="industry" value="consulting" />
              <label>Consulting</label>
            </div>

            <div className="inline-flex">
              <input type="checkbox" name="industry" value="events" />
              <label>Events</label>
            </div>

            <div className="inline-flex">
              <input type="checkbox" name="industry" value="cheesemaking" />
              <label>Cheesemaking</label>
            </div>

            <div>
              <input type="checkbox" name="industry" value="distribution" />
              <label>Distribution</label>
            </div>

            <div>
              <input type="checkbox" name="industry" value="restaurant" />
              <label>Restaurant</label>
            </div>

            <div>
              <input type="checkbox" name="industry" value="media" />
              <label>Media &#40;blogger, food critic&#41;</label>
            </div>

            {/* <div>
              <input type="checkbox" name="industry" value="experience" />
              <label>Years in industry</label>
            </div> */}
          </div>

          <div className="inline-flex mb-3">
            <label className="mr-2">Title</label>
            <input className="border-2" type="text"></input>
          </div>

          <div className="inline-flex mb-3">
            <label className="mr-2">Current Employer</label>
            <input className="border-2" type="text"></input>
          </div>

          <div className="flex flex-col mb-3">
            <label>Years in Industry</label>
            <select className="border-2" name="experience">
              <option value="2">&#60;2</option>
              <option value="2-4">2-4</option>
              <option value="5-10">5-10</option>
              <option value="10">10&#43;</option>
            </select>
          </div>

          <div className="inline-flex mb-3">
            <label className="mr-2">Social Media</label>
            <input className="border-2" type="text"></input>
          </div>

          <div className="flex flex-col mb-3">
            <label>Region</label>
            <select className="border-2" name="experience">
              <option value="2">Northeast</option>
              <option value="2-4">Midwest</option>
              <option value="5-10">South</option>
              <option value="10">West</option>
            </select>
          </div>

          <div className="flex flex-col mb-3">
            <label>Types of cheese you have experience working with:</label>
            <div className="inline-flex">
              <input type="checkbox" name="cheese" value="Alpine-Style" />
              <label>Alpine-Style</label>
            </div>

            <div className="inline-flex">
              <input type="checkbox" name="cheese" value="Blue" />
              <label>Blue</label>
            </div>

            <div className="inline-flex">
              <input type="checkbox" name="cheese" value="Cheddar-Like" />
              <label>Cheddar-Like</label>
            </div>

            <div className="inline-flex">
              <input type="checkbox" name="cheese" value="Créme" />
              <label>Créme</label>
            </div>

            <div>
              <input type="checkbox" name="cheese" value="Gouda-Like" />
              <label>Gouda-Like</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="cheese"
                value="Grana/Grating Cheese"
              />
              <label>Grana/Grating Cheese</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="cheese"
                value="Pasta Filata (Mozzarella-Type)"
              />
              <label>Pasta Filata (Mozzarella-Type)</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="cheese"
                value="Process (cheese spreads, American cheese)"
              />
              <label>Process (cheese spreads, American cheese)</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="cheese"
                value="Soft-Ripened (Brie-Like)"
              />
              <label>Soft-Ripened (Brie-Like)</label>
            </div>

            <div>
              <input type="checkbox" name="cheese" value="Washed-Rind" />
              <label>Washed-Rind</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default producerform;
