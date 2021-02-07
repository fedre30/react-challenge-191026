import React, { useState } from "react";
import styled from "styled-components";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Input, Container } from "styles/atoms";
import { space, font } from "styles/const";
import Slider from "@material-ui/core/Slider";

const BasicInformations = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin: ${space.md} auto;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.h3`
  width: 20%;
  font-weight: ${font.weight.bold};
  margin: 1rem 0;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
`;

export const Form = () => {
  const [design, setDesign] = useState<number | number[]>(1);
  const [front, setFront] = useState<number | number[]>(1);
  const [management, setManagement] = useState<number | number[]>(1);
  const [back, setBack] = useState<number | number[]>(1);

  const marks = [
    {
      value: 1,
      label: "A"
    },
    {
      value: 2,
      label: "B"
    },
    {
      value: 3,
      label: "C"
    },
    {
      value: 4,
      label: "D"
    },
    {
      value: 5,
      label: "E"
    },
    {
      value: 6,
      label: "F"
    }
  ];

  return (
    <>
      <Container>
        <BasicInformations>
          <Input label="Nom" placeholder="exemple : Te" required />
          <Input label="Prénom" placeholder="exemple : Marie" required />
          <Input
            label="Adresse e-mail"
            placeholder="exemple : exemple@mail.com"
            required
            type="email"
          />
        </BasicInformations>
        <BasicInformations>
          <InputContainer>
            <Label>Votre cursus</Label>
            <TextareaAutosize
              style={{ width: "60%" }}
              rows={9}
              rowsMax={9}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Décrivez votre cursus en quelques lignes..."
            />
          </InputContainer>
          <Input label="Promotion" placeholder="W1" required type="text" />
        </BasicInformations>
        <BasicInformations>
          <InputContainer>
            <Label>Compétences Principales</Label>
            <SliderContainer>
              <Label>UI Design</Label>
              <Slider
                defaultValue={1}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                max={6}
                min={1}
                marks={marks}
                style={{ marginLeft: "3rem" }}
                onChangeCommitted={(_, value) => setDesign(value)}
                value={design}
              />
            </SliderContainer>
            <SliderContainer>
              <Label>Gestion de projet</Label>
              <Slider
                defaultValue={1}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                max={6}
                min={1}
                marks={marks}
                style={{ marginLeft: "3rem" }}
                onChangeCommitted={(_, value) => setManagement(value)}
                value={management}
              />
            </SliderContainer>
            <SliderContainer>
              <Label>Développement Front</Label>
              <Slider
                defaultValue={1}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                max={6}
                min={1}
                marks={marks}
                style={{ marginLeft: "3rem" }}
                onChangeCommitted={(_, value) => setFront(value)}
                value={front}
              />
            </SliderContainer>
            <SliderContainer>
              <Label>Développement Back</Label>
              <Slider
                defaultValue={1}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                max={6}
                min={1}
                marks={marks}
                style={{ marginLeft: "3rem" }}
                onChangeCommitted={(_, value) => setBack(value)}
                value={back}
              />
            </SliderContainer>
          </InputContainer>
        </BasicInformations>
      </Container>
    </>
  );
};
