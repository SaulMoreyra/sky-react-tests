import axios from "config/Axios";
import { LabelResponse } from "interfaces/LabelReponse";

const BASE_URL = "/labels";

const create = async (rate_id: number) => {
  const { data } = await axios.post<LabelResponse>(BASE_URL, {
    rate_id,
    label_format: "pdf",
  });
  return data;
};

export default { create };
