import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "styles/atoms";
import { color } from "styles/const";
import { Table } from "styles/organisms";
import { Student } from "types";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: ${color.background};
`;

export const List = () => {
  const headers = [
    { label: "Nom Prénom", id: "name" },
    { label: "Promotion", id: "promotion" },
    { label: "Adresse Email", id: "email" },
    { label: "Compétences", id: "skills" }
  ];
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    setStudents([
      {
        name: "Test",
        promotion: "P2020",
        email: "test@gmail.com",
        skills: ["UX", "Dev"]
      },
      {
        name: "Test",
        promotion: "P2020",
        email: "test@gmail.com",
        skills: ["UX", "Dev"]
      },
      {
        name: "Test",
        promotion: "P2020",
        email: "test@gmail.com",
        skills: ["UX", "Dev"]
      }
    ]);
  }, []);

  return (
    <Background>
      <Container>
        <Table headers={headers} data={students} />
      </Container>
    </Background>
  );
};
