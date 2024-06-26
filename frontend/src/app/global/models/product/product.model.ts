export class ProductModel {
  public _id!: string; // generated by mongoDB
  public name!: string;
  public counter!: number;
  public minimum!: number;
  public liked!: boolean;
  public createdAt!: Date; // generated by mongoDB

  constructor(model?: any) {
    Object.assign(this, model);
  }
}
