import axios from "axios";

const API_URL = "https://cors-anywhere.herokuapp.com/34.83.72.245:3000/";

// Endpoint to fetch invoices list from backend
const getInvoices = () => {
  return axios.get(API_URL + "invoices");
};

// Endpoint to create invoices
const createInvoice = (
  amount,
  customer_id,
  tax_percentage,
  discount_percentage,
  payment_mode,
  items
) => {
  return axios
    .post(API_URL + "invoices", {
      amount,
      customer_id,
      tax_percentage,
      discount_percentage,
      payment_mode: "cash",
      items,
    })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    });
};

// Endpoint to fetch products list from backend
const getProducts = () => {
  return axios.get(API_URL + "products");
};

// Endpoint to create products
const createProduct = (stock, name, description, cost) => {
  return axios
    .post(API_URL + "products", {
      stock,
      name,
      description: "",
      cost,
    })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    });
};

// Endpoint to fetch customers list from backend
const getCustomers = () => {
  return axios.get(API_URL + "customers");
};

// Endpoint to create customers
const createCustomer = (email, phone_number, full_name) => {
  return axios
    .post(API_URL + "customers", {
      email,
      phone_number,
      full_name,
    })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    });
};

// Endpoint to fetch single invoice by id
const getInvoiceById = (id) => {
  return axios.get(API_URL + "invoices/" + id);
};

// Endpoint to fetch single product by id
const getProductById = (id) => {
  return axios.get(API_URL + "products/" + id);
};

// Endpoint to fetch single customer by id
const getCustomerById = (id) => {
  return axios.get(API_URL + "customers/" + id);
};

export default {
  getInvoices,
  getCustomers,
  getProducts,
  getInvoiceById,
  getCustomerById,
  getProductById,
  createInvoice,
  createCustomer,
  createProduct,
};
