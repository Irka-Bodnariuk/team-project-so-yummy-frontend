const getCategoryList = async () => {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzFhZGI1YjMzM2I1ZGFmZGJmYTI3NiIsImlhdCI6MTY4MTA0ODY2MywiZXhwIjoxNjgxMTMxNDYzfQ.ICHmkU7cYhpJQbEWgPjQ7nglrXcxlJIONGHqpGdV7h0';

  const list = await fetch('https://team-project-so-yummy-backend.onrender.com/api/recipes/category-list', {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  const listToReturn = await list.json();

  return listToReturn;
}

export default getCategoryList;