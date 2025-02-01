const getResult = (response) => {
  const result = {
    correct: 0,
    incorrect: 0,
    total: 0,
    correctAnswers: [],
    incorrectAnswers: [],
  };

  for (const [key, value] of Object.entries(response)) {
    result.total += 1;
    if (value.selectedOption === value.correctOption) {
      result.correct += 1;
      result.correctAnswers.push(key);
    } else {
      result.incorrect += 1;
      result.incorrectAnswers.push(key);
    }
  }

  return result;
};

export default getResult;
