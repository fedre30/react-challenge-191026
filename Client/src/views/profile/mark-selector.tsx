import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { InputRadio } from "styles/atoms";

const InputContainer = styled.div`
  display: block;
  position: relative;
  width: ${rem(530)};
  ul {
    display: flex;
    align-items: center;
    form {
      display: flex;
      list-style: none;
    }

    li {
      color: #aaaaaa;
      display: block;
      position: relative;
      width: 100%;
      height: 60px;
      input[type="radio"] {
        position: absolute;
        visibility: hidden;
      }
      label {
        display: block;
        position: relative;
        font-weight: 300;
        font-size: 1.35em;
        padding: 25px 25px 25px 25px;
        margin: 10px auto;
        height: 30px;
        z-index: 9;
        cursor: pointer;
      }
    }
  }
`;

const MARK_MAP = [
  { id: "a", color: "#19A882" },
  { id: "b", color: "#2EDB87" },
  { id: "c", color: "#A1FCA7" },
  { id: "d", color: "#FDDC86" },
  { id: "e", color: "#FFB986" },
  { id: "f", color: "#F24646" }
];
const PRINCIPAL_SKILL = ["UI design", "Ux design"];

export const MarkSelector = () => {
  return (
    <InputContainer>
      {PRINCIPAL_SKILL.map((v, i) => {
        return (
          <ul key={i}>
            <p>{v}</p>
            <form>
              {MARK_MAP.map(mark => (
                <li key={mark.id}>
                  <InputRadio
                    color={mark.color}
                    htmlFor={`${mark.id}-option-${i}`}
                    onChange={() => {}}
                  />
                </li>
              ))}
            </form>
          </ul>
        );
      })}
    </InputContainer>
  );
};
