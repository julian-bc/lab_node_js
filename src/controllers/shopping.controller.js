import { memoryDatabase } from "../../server.js"

export const getAll = (req, res) => {
  res.send(memoryDatabase);
}

export const getById = (req, res) => {
  const id = req.params.id;
  const product = memoryDatabase.find(product => product.id == id);

  if (!product) {
    res.status(404).send({ message: "Product not found!" });
  }

  res.send(product);
}

export const save = (req, res) => {
  let newProduct = req.body;
  const idGenerated = Number(memoryDatabase.length + 1);

  newProduct = { id: idGenerated, ...newProduct };

  memoryDatabase.push(newProduct);

  res.send(newProduct);
}

export const update = (req, res) => {
  const id = req.params.id;

  const index = memoryDatabase.findIndex(product => product.id == id);

  if (index === -1) {
    res.status(404).send({ message: "Product not found!" });
  }

  const savedProduct = { id: id, ...req.body };

  memoryDatabase[index] = savedProduct;

  res.send(savedProduct);
}

export const deleteById = (req, res) => {
  const id = req.params.id;
  
  const index = memoryDatabase.findIndex(product => product.id == id);

  if (index === -1) {
    res.status(404).send({ message: "Product not found!" });
  }
  
  memoryDatabase.splice(index, 1);
  res.send({ message: `Product with ${id} is deleted!` });
}
