export default interface RSAA<T> {
  fetching: boolean;
  data: T | null;
  error: any;
}
