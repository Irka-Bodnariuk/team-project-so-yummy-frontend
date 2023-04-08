const getCategory = async request => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzFhZGI1YjMzM2I1ZGFmZGJmYTI3NiIsImlhdCI6MTY4MDk3ODM1OCwiZXhwIjoxNjgxMDYxMTU4fQ.BW2QYlLESMHnLbp-ukU1MeB3Hcg3JRZ6DifBRMnpFEw';

  const category = await fetch(
    `https://team-project-so-yummy-backend.onrender.com/api/recipes/category/${request}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const categoryToReturn = await category.json();
  return categoryToReturn;
};

export default getCategory;
