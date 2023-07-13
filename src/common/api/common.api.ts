import axios from "axios"

const settings = {
  withCredentials: true,
  headers: {
    "API-KEY": "46b63e5a-3617-4795-b158-8f82fffd20f6",
  },
}
export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  ...settings,
})