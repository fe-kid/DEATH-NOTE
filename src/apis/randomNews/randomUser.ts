const getRandomUser = async () => {
  const res = await fetch(
    'https://randomuser.me/api/?inc=name,location,picture'
  );
  const data = await res.json();

  const randomUser = data.results[0];

  return {
    address: `${randomUser.location.city}, ${randomUser.location.state}`,
    name: `${randomUser.name.first} ${randomUser.name.last}`,
    img: randomUser.picture.large,
  };
};

export default getRandomUser;
