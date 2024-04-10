import { AppDataSource } from "../../data-source";
import { Supporters } from "../../entities/supporters.entity";
import { User } from "../../entities/user.entity";

import { ISupportersRequest } from "../../interfaces/supporters";

const supportersCreateService = async (
  supportersData: ISupportersRequest,
  userId: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const supportersRepository = AppDataSource.getRepository(Supporters);
  const findUser = await userRepository.findOneBy({ id: userId });

  const supporters = new Supporters();
  supporters.firstName = supportersData.firstName;
  supporters.lastName = supportersData.lastName;
  supporters.email = supportersData.email;
  supporters.phone = supportersData.phone;
  supporters.created_at = new Date();
  supporters.updated_at = new Date();
  supporters.user = findUser!;

  supportersRepository.create(supporters);
  await supportersRepository.save(supporters);

  const { user, ...allInfo } = supporters;

  const { id, ...rest } = user;

  const newSupporters = { ...allInfo, user: id };

  return newSupporters;
};

export default supportersCreateService;
