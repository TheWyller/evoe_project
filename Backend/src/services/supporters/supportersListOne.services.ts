import { AppDataSource } from "../../data-source";
import { Supporters } from "../../entities/supporters.entity";

const supportersListOneServices = async (id: string) => {
  const supportersRepository = AppDataSource.getRepository(Supporters);
  const supporters = await supportersRepository.findOneBy({ id });
  if (!supporters) {
    throw new Error("This id not exists");
  }
  return supporters;
};

export default supportersListOneServices;
