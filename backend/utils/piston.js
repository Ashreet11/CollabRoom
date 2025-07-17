import axios from "axios";

export const executeCode = async ({ code, language, version, input }) => {
  const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
    language,
    version,
    files: [{ content: code }],
    stdin: input,
  });
  return response.data;
};
