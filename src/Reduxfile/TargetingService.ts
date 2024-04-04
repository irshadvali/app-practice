import http from "../http-common";
import { AxiosResponse } from "axios";

interface Targeting {
  id: number;
  title: string;
  description: string;
}

const getAll = (): Promise<AxiosResponse<Targeting[]>> => {
  return http.get("/posts");
};

const get = (id: number): Promise<AxiosResponse<Targeting>> => {
  return http.get(`/posts/${id}`);
};

const create = (data: Targeting): Promise<AxiosResponse<Targeting>> => {
  return http.post("/tutorials", data);
};

const update = (id: number, data: Targeting): Promise<AxiosResponse<Targeting>> => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = (id: number): Promise<AxiosResponse<void>> => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = (): Promise<AxiosResponse<void>> => {
  return http.delete(`/tutorials`);
};

const findByTitle = (title: string): Promise<AxiosResponse<Targeting[]>> => {
  return http.get(`/tutorials?title=${title}`);
};

const TargetingService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TargetingService;
