import axios from "axios";

const baseURL = "http://localhost:3002";
const jsonServer = "http://localhost:5000";

// Autenticação
export async function authenticate(username, password) {
  const url = `${baseURL}/auth/authenticate`;
  const params = {
    email: username,
    senha: password,
  };

  try {
    const response = await axios.post(url, params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Cardápios
export async function getMenus() {
  const url = `${baseURL}/cardapio`;
  const url_dev = `${jsonServer}/menus`

  try {
    const response = await axios.get(url_dev);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMenu(menu_id) {
  const url_dev = `${jsonServer}/menus/${menu_id}`

  try {
    const response = await axios.get(url_dev);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function registerMenu(menu_params) {
  const url = `${baseURL}/cardapio/register`;
  const url_dev = `${jsonServer}/menus`

  try {
    const response = await axios.post(url_dev, menu_params );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Clientes
export async function getClients() {
  const url = `${baseURL}/cliente`;
  const url_dev = `${jsonServer}/clients`;

  try {
    const response = await axios.get(url_dev);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function registerClient(client_params) {
  const url = `${baseURL}/cliente/register`;
  const url_dev = `${jsonServer}/clients`;

  try {
    const response = await axios.post(url_dev, client_params );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteClient(client_id) {
  const url = `${baseURL}/cliente/${client_id}`;
  const url_dev = `${jsonServer}/clients/${client_id}`;

  try {
    const response = await axios.delete(url_dev);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Pedidos
export async function getOrders() {
  const url = `${baseURL}/pedidos`;
  const url_dev = `${jsonServer}/orders`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Restaurantes
export async function createRestaurant(rest_params) {
  const url = `${baseURL}/restaurante`;
  const url_dev = `${jsonServer}/restaurants`
  try {
    const response = await axios.post(url_dev, rest_params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
