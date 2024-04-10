import { AppDataSource } from "../../data-source";
import { Supporters } from "../../entities/supporters.entity";

const supportersDeleteSelfServices = async (id: string) => {
  const supportersRepository = AppDataSource.getRepository(Supporters);

  const supporters = await supportersRepository.findOneBy({ id: id });

  if (!supporters) {
    throw new Error("This id not exists");
  }

  await supportersRepository
    .createQueryBuilder()
    .softDelete()
    .where("id = :id", { id })
    .execute();

  return { message: "Supporters removed" };
};

export default supportersDeleteSelfServices;
