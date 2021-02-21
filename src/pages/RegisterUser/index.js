import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import apiService from "../../services/api";
import "./styles.css";
import ImageUploading from "react-images-uploading";

export default function RegisterUser() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [foto, setFoto] = useState("");
  const [email, setEmail] = useState("");
  const [sobre, setSobre] = useState("");
  const [telefone, setTelefone] = useState("");
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const [formValido, setformValido] = useState(true);
  const [images, setImages] = React.useState([]);
  const [imagesvalida, setImagesvalida] = React.useState(true);
  const [usernameErro, setUsernameErro] = useState(false);
  const maxNumber = 1;

  const onChangeImage = (imageList, addUpdateIndex) => {
    if (imageList[0] !== undefined) {
      // console.log(imageList, addUpdateIndex);
      // console.log(imageList[0].file.size / 1024 / 1024, "MB");
      if (imageList[0].file.size / 1024 / 1024 < 1) {
        setImagesvalida(true);
        setImages(imageList);
        setFoto(`${imageList[0].data_url}`);
      } else {
        setImagesvalida(false);
        // console.log(imageList[0].file.size / 1024 / 1024, "maior que 1MB");
      }
    }
  };
  const onImageRemove = () => {
    setImages([]);
    setFoto([]);
  };

  async function SendData() {
    const role = 1;
    const credito = 0;
    setLoad(true);
    const data = {
      username,
      password,
      role,
      user: {
        name,
        foto,
        email,
        telefone,
        sobre,
        credito,
      },
    };
    setformValido(true);
    setUsernameErro(false);
    apiService
      .post("auth/new", data)
      .then((response) => {
        console.log("Cadastro realizado com sucesso", response.status);
        history.push("/");
        setLoad(false);
      })
      .catch((err) => {
        if (
          err.response.data.message &&
          err.response.data.message === "usuário já cadastrado"
        ) {
          setUsernameErro(true);
        } else {
          setformValido(false);
        }
        setLoad(false);
        console.log("Erro no cadastro tente novamente: ", err.response.data);
      });
  }

  return (
    <div className="row">
      <div className="caixaRegistro col s12 m8 offset-m2 l6 offset-l3 xl4 offset-xl4">
        <section className="col s12 sectionbox">
          <div className="col s2">
            <Link className=".back-link" to="/">
              <button className="waves-effect waves-light btn voltarbtn">
                Voltar
              </button>
            </Link>
          </div>
          <div className="col s12 m6 offset-m1">
            <h5 id="adotei">Faça cadastro no Adotei e ajude os bichinhos</h5>
          </div>
        </section>
        <form className="col s6 offset-s3">
          <input
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {!usernameErro ? (
            <div></div>
          ) : (
            <span id="erro">Usuário já existe</span>
          )}
          <input
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsename(e.target.value)}
          />
          <input
            placeholder="senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
            type="url"
            placeholder="Coloque o link da imagem aqui!"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
          {formValido ? <div></div> : <span id="erro">campo obrigatório</span>} */}
          <div className="App">
            {imagesvalida ? (
              <span></span>
            ) : (
              <span id="erro">Imagem maior que 1MB</span>
            )}

            <ImageUploading
              multiple
              value={images}
              onChange={onChangeImage}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({ imageList, onImageUpload, isDragging, dragProps }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <a
                    className="waves-effect waves-light btn"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Adicione uma foto
                  </a>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        {/* <button
                          className="waves-effect waves-light btn"
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </button> */}
                        <button
                          className="waves-effect waves-light btn"
                          onClick={() => onImageRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            placeholder="Descrição"
            type="text"
            value={sobre}
            onChange={(e) => setSobre(e.target.value)}
          />
          {formValido ? (
            <div></div>
          ) : (
            <span id="erro">Preencha todos os campos</span>
          )}

          {load ? (
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          ) : (
            <button
              onClick={() => SendData()}
              className="button btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Cadastrar
            </button>
          )}
        </form>
      </div>
    </div>
  );

  /*
                        <div className="input-group">
                        <input placeholder="Endereço"
                     value={adress}
                     onChange={e => setAdress(e.target.value)}                         
                        />
                        <input placeholder="Cidade"
                    value={city}
                    onChange={e => setCity(e.target.value)}                          
                        />
                        <input placeholder="UF" style={{whidth:80}}
                    value={state}
                    onChange={e => setstate(e.target.value)}                          
                        />
                    </div>
    
    
    */
}
