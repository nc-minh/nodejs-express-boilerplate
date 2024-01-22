export default interface FormatResponsePayload<T> {
  result: T;
  time: number;
  message?: string;
  total?: number;
  currentPage?: number;
  pageSize?: number;
}
