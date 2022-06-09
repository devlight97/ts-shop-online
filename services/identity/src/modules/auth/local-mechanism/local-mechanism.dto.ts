export class SignInDto {
  email: string
  password: string
}

export class SignUpDto {
  email: string
  password: string
  firstName: string
  lastName: string
  address?: string
  phoneNumber?: string
}
