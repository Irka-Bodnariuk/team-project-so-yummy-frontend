const getCategoryList = async (token) => {

  const optimizationObject = (obj) => {
    return {
      id: obj._id,
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