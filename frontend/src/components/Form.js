import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

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

const Label = styled.label``;

const InputName = styled.input`
  width: 300px;
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
  width: 300px;
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

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.setor.value = onEdit.setor;
      user.desc_produto.value = onEdit.desc_produto;
      user.data_lanc.value = onEdit.data_lanc;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.setor.value ||
      !user.desc_produto.value ||
      !user.data_lanc.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:3000/" + onEdit.id, {
          nome: user.nome.value,
          setor: user.setor.value,
          desc_produto: user.desc_produto.value,
          data_lanc: user.data_lanc.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:3000", {
          nome: user.nome.value,
          setor: user.setor.value,
          desc_produto: user.desc_produto.value,
          data_lanc: user.data_lanc.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.setor.value = "";
    user.desc_produto.value = "";
    user.data_lanc.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <InputName name="nome" />
      </InputArea>

      <InputArea>
        <Label>Setor</Label>
        <InputSector name="setor"  />
      </InputArea>

      <InputArea>
        <Label>Descrição do Produto</Label>
        <InputDesc name="desc_produto" />
      </InputArea>
      
      <InputArea>
        <Label>Data de Lnaçamento</Label>
        <InputDate name="data_lanc" type="date" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
