import { IsAlpha, IsNotEmpty, IsString, MaxLength } from 'class-validator';

/**
 * Data Transfer Object for creating a Customer.
 * Contains validation rules for the properties.
 */
export class CustomerCreateDto {
  /**
   * The name of the customer.
   */
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  name!: string;

  /**
   * The address of the customer.
   */
  @IsString()
  address!: string;
}
