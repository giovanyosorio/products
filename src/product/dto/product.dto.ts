//que se va estar enviando entre cliente y servidor
//DAta transfer object
export class CreateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly price: number;
  readonly createdAt?: Date;
}
