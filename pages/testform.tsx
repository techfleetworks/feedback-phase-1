import React, { useState, useEffect } from "react";

type Props = {};

import { TestAPIService } from "../services/TestAPI";

const Testform = (props: Props) => {
  const [name, setName] = useState("");

  const handleSendMessage = async (e: any) => {
    e.preventDefault();

    // if (!user) {
    //   alert("Please add your username");
    //   return;gi
    // }

    await TestAPIService.create({
      data: {
        name: name,
      },
    });

    await setName("");
  };

  return (
    <div>
      <div className="inline-flex mb-3">
        <label className="w-12">Name</label>
        <input className="border-2 w-25" type="text" name="name"></input>
      </div>

      <div>
        <label>Boolean</label>
        <select>
          <option>True</option>
          <option>False</option>
        </select>
      </div>
    </div>
  );
};

export default Testform;
