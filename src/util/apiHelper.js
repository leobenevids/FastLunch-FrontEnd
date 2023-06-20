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
export async function registerMenu(menu_params) {
  const url = `${baseURL}/cardapio/register`;

  try {
    const response = await axios.post(url, menu_params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMenus() {
  const url = `${baseURL}/cardapio`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRestaurantMenus(rest_id) {
  const url = `${baseURL}/cardapio/usuario/${rest_id}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMenu(menu_id) {
  const url = `${baseURL}/cardapio/${menu_id}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateMenu(menu_params, menu_id) {
  const url = `${baseURL}/cardapio/${menu_id}`;

  try {
    const response = await axios.patch(url, menu_params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteMenu(menu_id) {
  const url = `${baseURL}/cardapio/${menu_id}`;

  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Clientes
export async function registerClient(client_params) {
  const url = `${baseURL}/cliente/register`;

  try {
    const response = await axios.post(url, client_params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getClients() {
  const url = `${baseURL}/cliente`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getClient(client_id) {
  const url = `${baseURL}/cliente/${client_id}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateClient(client_params, client_id) {
  const url = `${baseURL}/cliente/${client_id}`;

  try {
    const response = await axios.patch(url, client_params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteClient(client_id) {
  const url = `${baseURL}/cliente/${client_id}`;

  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Pedidos
export async function getOrders() {
  const url_dev = `${jsonServer}/orders`;

  try {
    const response = await axios.get(url_dev);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRestaurantOrders(rest_id) {
  const url = `${baseURL}/pedidos/restaurantes/${rest_id}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getClientOrders(client_id) {
  const url = `${baseURL}/pedidos/cliente/${client_id}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getClientOrdersHistory(client_id) {
  const url = `${baseURL}/pedidos/historico/cliente/${client_id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRestaurantOrdersHistory(rest_id) {
  const url = `${baseURL}/pedidos/historico/cliente/${rest_id}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function finishOrder(order_id) {
  const url = `${baseURL}/pedidos/encerrar/${order_id}`;

  try {
    const response = await axios.patch(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Restaurantes
export async function createRestaurant(rest_params) {
  const url = `${baseURL}/auth/register`;
  try {
    const response = await axios.post(url, rest_params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRestaurants() {
  const url = `${baseURL}/auth/restaurantes`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRestaurant(rest_id) {
  const url = `${baseURL}/auth/id/${rest_id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateRestaurant(rest_params, rest_id) {
  const url = `${baseURL}/auth/restaurantes/${rest_id}`;
  try {
    const response = await axios.put(url, rest_params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteRestaurant(rest_id) {
  const url = `${baseURL}/auth/restaurantes/${rest_id}`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
