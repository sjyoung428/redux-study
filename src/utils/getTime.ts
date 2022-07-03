export const getTime = (timestamp: number | string) => {
  return new Date(timestamp).toLocaleString("ko-KR");
};
