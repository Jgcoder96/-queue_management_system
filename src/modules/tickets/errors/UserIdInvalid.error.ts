export class UserIdInvalid extends Error {
  constructor(
    public readonly message: string = 'user id invalid',
    public readonly statusCode: number = 400,
    public readonly status: boolean = false,
  ) {
    super();
    this.stack = '';
  }
}
