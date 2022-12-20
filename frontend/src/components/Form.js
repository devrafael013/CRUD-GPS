import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  width: 1200px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

// Formulario

const Label = styled.label``;

const InputName = styled.input`
    width: 270px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const InputSector = styled.input`
    width: 270px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const InputDesc = styled.input`
    width: 270px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const InputDate = styled.input`
    width: 200px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;

`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({onEdit}) => {
    const ref = useRef();

    return (
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Nome</Label>
                <InputName name="nome"/>
            </InputArea>

            <InputArea>
                <Label>Setor</Label>
                <InputSector name="email" type="email"/>
            </InputArea>

            <InputArea>
                <Label>Descrição do Produto</Label>
                <InputDesc name="desc_produto"/>
            </InputArea>

            <InputArea>
                <Label>Data de Nascimento</Label>
                <InputDate name="data_lanc" type="date"/>
            </InputArea>
            
            <Button type="submit">SALVAR</Button>
        </FormContainer>

    );
};

export default Form;