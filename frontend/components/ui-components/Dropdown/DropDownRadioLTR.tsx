import React, { useState, useRef, useEffect } from "react";
import RadioButton from "../RadioButton/RadioButton";
import Dropdown from "./DropDown";

type Props = {
  register: any;
  letterCheckbox: boolean;
};

export default function DropDownRadioLTR({ register, letterCheckbox }: Props) {
  return (
    <div className="relative">
      {!letterCheckbox && (
        <Dropdown
          title="maximum number of letters"
          p="Do not exceed this character count."
          register={register}
          type="letters"
        />
      )}
      {letterCheckbox && (
        <Dropdown
          title="maximum number of letters"
          p="Do not exceed this character count."
          register={register}
          type="letters"
          letterCheckbox={letterCheckbox}
        />
      )}
      <div className="mt-6 md:mt-0 md:absolute md:bottom-2 md:right-20">
        <RadioButton
          title={"I dont have a preference"}
          type="no_letters"
          register={register}
        />
      </div>
    </div>
  );
}
