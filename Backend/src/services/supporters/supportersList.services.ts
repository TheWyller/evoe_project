import { Supporters } from "../../entities/supporters.entity";
import { AppDataSource } from "../../data-source";

interface supportersListServiceParams {
  userId: string;
  limit: number;
  offset: number;
}

const supportersListService = async ({
  userId,
  limit,
  offset,
}: supportersListServiceParams) => {
  const supportersRepository = AppDataSource.getRepository(Supporters);

  const [supporters, total] = await supportersRepository.findAndCount({
    where: { userId },
    take: limit,
    skip: limit * offset,
  });

  return { supporters, total };
};

export default supportersListService;
