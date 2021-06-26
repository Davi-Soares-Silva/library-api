import { UpdateBook } from "@/domain/usecases/update-book";
import { UpdateBookRepository } from "../protocols/db";

export class DbUpdateBook implements UpdateBook {
  constructor(private readonly updateBook: UpdateBookRepository) {}

  async update(params: UpdateBook.Params): UpdateBook.Result { 
    await this.updateBook.update(params);
  }
}