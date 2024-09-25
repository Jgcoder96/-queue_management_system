export class RecordNotFound extends Error {
  constructor(
    public readonly message: string = 'record not found',
    public readonly statusCode: number = 404,
    public readonly status: boolean = false,
  ) {
    super();
    this.stack = '';
  }
}
