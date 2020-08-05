import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias,setCategorias] = useState([])
  
  const valoresIniciais={
    nome:'',
    descricao: '',
    cor:'#000'
  }
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosEvento){
    setValue(
      infosEvento.target.getAttribute('name'),
      infosEvento.target.value
    )
  }


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form style={{background:values.cor}} onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        
        setCategorias([
          //espalha as categorias cadastradas
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
        
      }}>

      <FormField
        label='Nome da Categoria'
        type="text"
        name='nome'
        value={values.nome}
        onChange={handleChange}
      />

      <div>
        <label>
          Descrição:
          <textarea
            type="text"
            value={values.descricao}
            name="descricao"
            onChange={handleChange}
          />
        </label>
      </div>
        

      <div>
        <label>
          Cor:
          <input
            type="color"
            value={values.cor}
            name="cor"
            onChange={handleChange}
          />
        </label>
      </div>
        
        

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria,index)=>{
          return(
            <li key={`${categoria}+${index}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;