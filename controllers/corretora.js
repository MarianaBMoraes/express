const db = [];

let proxId = 1;

const model = (body, id = proxId++) => {
  if (body.nome != "") {
    return {
      id,
      nome: body.nome,
    };
  }

  console.log("Dados inválidos");
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    db.push(novo);
  }
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (body, id) => {
  const indice = db.findIndex((el) => el.id == id);

  if (indice != -1) {
    const novo = model(body, id);

    if (novo) {
      db[indice] = novo;
    }
  }
};

const destroy = (id) => {
  const indice = db.findIndex((el) => el.id == id);

  if (indice != -1) {
    db.splice(indice, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
