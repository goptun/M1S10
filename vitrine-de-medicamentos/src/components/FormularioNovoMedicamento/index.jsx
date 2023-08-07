import "./style.css";

function FormularioNovoMedicamento() {
  return (
    <>
      <h2>Formulário de Cadastro de Medicamentos</h2>
      <form>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="Laboratório"
          value={laboratorio}
          onChange={(e) => setLaboratorio(e.target.value)}
        />

        <input
          type="text"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}

export default FormularioNovoMedicamento;
