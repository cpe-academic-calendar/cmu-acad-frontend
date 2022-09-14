import React, { useState } from "react";
import { Calendar } from "react-calendar";
import { DraftContainer } from "./Draft.styled";

export default function Draft() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className='absolute bottom-0 left-0'>
        <DraftContainer>
          <Calendar onChange={onChange} value={value} />
          <Calendar onChange={onChange} value={value} />
          <Calendar onChange={onChange} value={value} />
          <Calendar onChange={onChange} value={value} />
          <Calendar onChange={onChange} value={value} />
          <Calendar onChange={onChange} value={value} />
          <Calendar onChange={onChange} value={value} />
          <Calendar onChange={onChange} value={value} />
          <Calendar onChange={onChange} value={value} />
          <Calendar onChange={onChange} value={value} />
          <Calendar onChange={onChange} value={value} />
          <Calendar onChange={onChange} value={value} />
        </DraftContainer>
      </div>
    </div>
  );
}
