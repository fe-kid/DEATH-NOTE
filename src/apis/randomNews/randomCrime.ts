enum crimeType {
  MURDER = 'murder',
  KIDNAPPING = 'kidnapping',
  ROBBERY = 'robbery',
}

const crimeList = [crimeType.MURDER, crimeType.KIDNAPPING, crimeType.ROBBERY];

const randomNumberGenerator = (start: number, length: number) => {
  return start + Math.floor(Math.random() * length);
};

const randomMurderGenerator = () => {
  const quantity = randomNumberGenerator(5, 10);

  const targetArray = [
    'farmers',
    'carpenters',
    'librarians',
    'football referees',
    'software developers',
    'pharmacists',
    'firefighters',
  ];
  const target = targetArray[randomNumberGenerator(0, targetArray.length)];

  return `killed ${quantity} ${target} for no reason...`;
};

const randomKidnappingGenerator = () => {
  const age = randomNumberGenerator(4, 12);

  const targetArray = ['youtuber', 'child monk', 'princess', 'genius kid'];
  const target = targetArray[randomNumberGenerator(0, targetArray.length)];

  return `kidnapped ${
    age === 8 || age === 11 ? 'an' : 'a'
  } ${age}-year-old ${target} to get people's attention...`;
};

const randomRobberyGenerator = () => {
  const quantity = randomNumberGenerator(5, 50);

  const targetArray = [
    'bank',
    'jewelry store',
    'convenience store',
    'chinese restaurant',
    'waxing shop',
    'vegan bakery',
    'laundry shop',
  ];
  const target = targetArray[randomNumberGenerator(0, targetArray.length)];

  return `robbed a ${target} for ${quantity} million dollars`;
};

const createRandomCrime = () => {
  const randomIndex = randomNumberGenerator(0, crimeList.length);

  const randomCrimeType = crimeList[randomIndex];

  switch (randomCrimeType) {
    case crimeType.MURDER:
      return randomMurderGenerator();
    case crimeType.KIDNAPPING:
      return randomKidnappingGenerator();
    case crimeType.ROBBERY:
      return randomRobberyGenerator();

    default:
      return 'do something really bad';
  }
};

export default createRandomCrime;
