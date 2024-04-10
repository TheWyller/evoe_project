import { AppDataSource } from "../../data-source";
import { Supporters } from "../../entities/supporters.entity";
import { ISupportersUpdate } from "../../interfaces/supporters";

const supportersUpdateServices = async (
  { firstName, lastName, email, phone }: ISupportersUpdate,
  id: string
) => {
  const supportersRepository = AppDataSource.getRepository(Supporters);
  const supporters = await supportersRepository.findOneBy({ id });

  if (!supporters) {
    throw new Error("This id not exists");
  }

  if (firstName !== undefined) {
    await supportersRepository.update(supporters.id, { firstName: firstName });
  }
  if (lastName !== undefined) {
    await supportersRepository.update(supporters.id, { lastName: lastName });
  }

  if (email !== undefined) {
    await supportersRepository.update(supporters.id, { email: email });
  }
  if (phone !== undefined) {
    await supportersRepository.update(supporters.id, { phone: phone });
  }
  await supportersRepository.update(supporters.id, { updated_at: new Date() });
  const updatedsupportersRepository = AppDataSource.getRepository(Supporters);
  const updatedsupporters = await updatedsupportersRepository.findOneBy({ id });

  return updatedsupporters;
};

export default supportersUpdateServices;
