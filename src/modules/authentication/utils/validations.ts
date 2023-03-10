import {
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
  ValidateIf,
} from "class-validator";

export class LoginValidator {
  @IsEmail({}, { message: "Invalid email address" })
  email!: string;

  @MinLength(6)
  password!: string;
}

export class ForgotPasswordValidator {
  @IsEmail({}, { message: "Invalid email address" })
  email!: string;
}

export class RegisterValidator {
  @MinLength(3)
  @IsString()
  firstName!: string;

  @MinLength(3)
  @IsString()
  lastName!: string;

  @IsEmail({}, { message: "Invalid email address" })
  email!: string;

  @IsEmail({}, { message: "Invalid email address" })
  confirmEmail!: string;

  @MinLength(6)
  password!: string;

  @MinLength(6)
  confirmPassword!: string;

  // @IsString()
  // phone!: string;
}

export class CreatePasswordValidator {
  @MinLength(6)
  password!: string;

  @MinLength(6)
  confirmPassword!: string;
}

export class EditAccountValidator {
  @IsOptional()
  @ValidateIf((o) => o.password.length)
  @MinLength(6)
  password!: string;

  @IsOptional()
  @ValidateIf((o) => o.password.length)
  @MinLength(6)
  confirmPassword!: string;

  // @IsString()
  // phone!: string;
}
