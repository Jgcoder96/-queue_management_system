export class RecordAlreadyExists extends Error {
  constructor(
    public readonly message: string = 'record already exists',
    public readonly statusCode: number = 409,
    public readonly status: boolean = false,
  ) {
    super();
    this.stack = '';
  }
}
