import axios from 'axios';

// Base URL của JSON‑Server
const BASE_URL = 'http://localhost:3001';

/**
 * Lấy dữ liệu Overview từ 3 endpoint:
 *  - /Turnover
 *  - /Profit
 *  - /New_customer
 * Trả về object gộp: { turnover, profit, newCustomer }
 */
export async function getOverview() {
  try {
    const [turnoverRes, profitRes, newCustRes] = await Promise.all([
      axios.get(`${BASE_URL}/Turnover`),
      axios.get(`${BASE_URL}/Profit`),
      axios.get(`${BASE_URL}/New_customer`)
    ]);

    return {
      turnover: {
        amount: turnoverRes.data.amount,
        changePercentage: turnoverRes.data.changePercentage,
        changeDirection: turnoverRes.data.changeDirection,
        period: turnoverRes.data.period
      },
      profit: {
        amount: profitRes.data.amount,
        changePercentage: profitRes.data.changePercentage,
        changeDirection: profitRes.data.changeDirection,
        period: profitRes.data.period
      },
      newCustomer: {
        count: newCustRes.data.count,
        changePercentage: newCustRes.data.changePercentage,
        changeDirection: newCustRes.data.changeDirection,
        period: newCustRes.data.period
      }
    };
  } catch (error) {
    console.error('Error fetching overview:', error);
    throw error;
  }
}

/**
 * Lấy danh sách Orders từ endpoint /Orders
 * Trả về mảng orders
 */
export async function getOrders() {
  try {
    const res = await axios.get(`${BASE_URL}/Orders`);
    return res.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
}

export async function getOrderById(id) {
  const res = await axios.get(`${BASE_URL}/Orders/${id}`);
  return res.data;
}

export async function updateOrder(order) {
  const res = await axios.put(`${BASE_URL}/Orders/${order.id}`, order);
  return res.data;
}

export async function createOrder(order) {
  const res = await axios.post(`${BASE_URL}/Orders`, order);
  return res.data;
}
