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
    '역사학자',
    '중식 요리사',
    '도서관 사서',
    '골프 캐디',
    '데이터 사이언티스트',
    '한의사',
    '소방관',
    '인권변호사',
  ];
  const target = targetArray[randomNumberGenerator(0, targetArray.length)];

  return `무고한 ${target} ${quantity}명을 이유도 없이 죽였습니다...`;
};

const randomKidnappingGenerator = () => {
  const age = randomNumberGenerator(4, 12);

  const targetArray = ['유튜브 크리에이터', '동자승', '미술 천재'];
  const target = targetArray[randomNumberGenerator(0, targetArray.length)];

  return `사람들의 관심을 끌기 위해 ${age}세 ${target}(을)를 납치했습니다...`;
};

const randomRobberyGenerator = () => {
  const quantity = randomNumberGenerator(5, 50);

  const targetArray = [
    '신한은행',
    '티파니앤코 매장',
    '용산 드래곤힐 스파',
    '양꼬치 전문점',
    '왁싱샵',
    '비건 베이커리',
    '코인노래방',
  ];
  const target = targetArray[randomNumberGenerator(0, targetArray.length)];

  return `${target}에서 ${quantity}억원을 훔쳐 달아났습니다...`;
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
      return '매우 나쁜 일을 저질렀습니다...';
  }
};

export default createRandomCrime;
