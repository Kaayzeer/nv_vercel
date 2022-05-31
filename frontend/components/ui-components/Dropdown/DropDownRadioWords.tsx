import React, { useState, useRef, useEffect } from "react";
import RadioButton from "../RadioButton/RadioButton";
import Dropdown from "./DropDown";

type Props = {
  register: any;
  wordCheckbox: boolean;
};

export default function DropDownRadioWords({ register, wordCheckbox }: Props) {
  return (
    <>
      <div className="relative">
        {!wordCheckbox && (
          <Dropdown
            title="maximum number of words"
            p="Do not exceed this amount of terms."
            register={register}
            type="words"
          />
        )}
        {wordCheckbox && (
          <Dropdown
            title="maximum number of words"
            p="Do not exceed this amount of terms."
            register={register}
            type="words"
            wordCheckbox={wordCheckbox}
          />
        )}
        <div className="mt-6 md:mt-0 md:absolute md:bottom-2 md:right-20">
          <RadioButton
            id={"no-word-preference"}
            htmlFor={"no-word-preference"}
            name={"no-preference-of-word"}
            title={"I dont have a preference"}
            type="no_words"
            register={register}
          />
        </div>
      </div>
    </>
  );
}

/*  <div className="relative">
        <Dropdown
          title="maximum number of words"
          p="Do not exceed this amount of terms."
          register={register}
          type="words"
          
          />
          <div className="mt-6 md:mt-0 md:absolute md:bottom-2 md:right-20">
            <RadioButton
              id={"no-word-preference"}
              htmlFor={"no-word-preference"}
              name={"no-preference-of-word"}
              title={"I dont have a preference"}
              register={register}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>
        <div className="relative">
          <Dropdown
            title="maximum number of letters"
            p="Do not exceed this character count."
            register={register}
            type="letters"
            handleChange={handleChange}
          />
          <div className="mt-6 md:mt-0 md:absolute md:bottom-2 md:right-20">
            <RadioButton
              id={"no-letter-preference"}
              htmlFor={"no-letter-preference"}
              name={"no-preference-of-letter"}
              title={"I dont have a preference"}
              register={register}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div> */
