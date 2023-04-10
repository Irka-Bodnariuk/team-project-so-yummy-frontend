const getCategoryList = async () => {

  const optimizationObject = (obj) => {
    return {
      title: obj.title,
      preview: obj.preview
    }
  }

  const optimizationMiddleWare = (category) => {
    const newFirstFour = category.firstFour.map(recipe => optimizationObject(recipe));
    const newObj = {
      id: category._id,
      firstFour: newFirstFour
    }
    return newObj
  }

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzFhZGI1YjMzM2I1ZGFmZGJmYTI3NiIsImlhdCI6MTY4MTE1NTE1OCwiZXhwIjoxNjgxMjM3OTU4fQ.oq1TsFK7KWzdzlbuXsLhy0EkPqyB8gXGb8zrs1Ei4L0';
  const list = await fetch('https://team-project-so-yummy-backend.onrender.com/api/recipes/main-page', {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  const listToReceived = await list.json();
  const adaptedList = listToReceived.result.map(x => optimizationMiddleWare(x))
  return adaptedList;
}

export default getCategoryList;