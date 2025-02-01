const buildResponse = (questions) => {
  const response = {};

  questions?.forEach((question) => {
    response[question?.id] = {
      question: question?.description,
      answer: question?.detailed_solution,
      correctOption: question?.options?.find((option) => option?.is_correct)
        ?.id,
      selectedOption: -1,
      options: [
        {
          id: question?.options?.[0]?.id,
          description: question?.options?.[0]?.description,
        },
        {
          id: question?.options?.[1]?.id,
          description: question?.options?.[1]?.description,
        },
        {
          id: question?.options?.[2]?.id,
          description: question?.options?.[2]?.description,
        },
        {
          id: question?.options?.[3]?.id,
          description: question?.options?.[3]?.description,
        },
      ],
    };
  });

  return response;
};

export default buildResponse;
