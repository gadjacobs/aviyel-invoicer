import axios from "axios";

const API_URL = "http://547c3707ead8.ngrok.io/"

// Endpoint to fetch invoices list from backend
const getInvoices = () => {
    return axios.get(API_URL + "invoices")
};

// Endpoint to create invoices
const createInvoice = (amount, customer_id, tax_percentage, discount_percentage, items) => {
    return axios.post(API_URL + "invoices", {
        amount, customer_id, tax_percentage, discount_percentage, items
    })
    .then((response) => {
        if (response.data) {
            return response.data;
        }
    })
}

export default {
    getInvoices, createInvoice
};