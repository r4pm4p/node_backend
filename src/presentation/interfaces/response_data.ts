export interface ResponseData<T> {
  messageCode: string;
  body: Partial<T>;
}
