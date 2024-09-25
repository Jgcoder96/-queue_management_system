export class incorrectPassword extends Error {
  constructor(
    public readonly message: string = 'incorrect password',
    public readonly statusCode: number = 401,
    public readonly status: boolean = false,
  ) {
    super(message);
    this.stack = '';
  }
}
