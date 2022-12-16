
// -------------------------------------------------------------------------------------------------------------------------------------------------------
// 1. Нужно реализовать агрегацию массивов в один, ниже описан output, который ожидается от вас
// Input
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net"
  }
];

const posts = [
  {
    userId: 1,
    id: 1,
    title: "Cooking pancakes",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 2,
    id: 2,
    title: "3 ways to say no",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 3,
    id: 3,
    title: "Moose flew into Space",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
];

const comments = [
  {
    postId: 1, // userId
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    body:
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    postId: 1, // userId
    id: 2,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    body:
      "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    postId: 2, // userId
    id: 3,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    body:
      "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  }
];

/* Output
  [{  id: 1,
      title: "Cooking pancakes",
      userName: "Leanne Graham",
      comentsCount: 2,
  }]
*/

// Solution:
const mergeArrays = (users, posts, comments) => {
  return posts.map( (post) => {
    const userName = users.find( (item) => item.id === post.userId).name;
    const commentsCount = comments.filter( (item) => item.postId === post.id).length;
    return {
      id: post.id,
      title: post.title,
      userName,
      commentsCount,
    };
  });
};
console.log(mergeArrays(users, posts, comments));



// -------------------------------------------------------------------------------------------------------------------------------------------------------
// 2. Пятеро друзей купили билеты на концерт Моргенштерна. 
// Мы собрали их данные в массив, где у каждого пользователя есть свойство age — возраст. 
// Посчитайте средний возраст целевой аудитории артиста. Ответ должен быть округлён к ближайшему целому.
const data = [
  {
    name: "Саша",
    age: 19,
    info: {
        city: "Moscow",
        tel: "8-999-444-3312",
        quantityReposts: {
            vk: 21,
            dzen: 3,
            telegram: 1,
        },
    },
  },
  {
    name: "Катя",
    age: 21,
    info: {
        city: "Ryzan",
        tel: "8-939-144-1322",
        quantityReposts: {
            vk: 1,
            dzen: 4,
            telegram: 0,
        },
    },
  },
  {
    name: "Миша",
    age: 17,
    info: {
        city: "Omsk",
        tel: "8-993-321-9833",
        quantityReposts: {
            vk: 0,
            dzen: 1,
            telegram: 8,
        },
    },
  },
  {
    name: "Федя",
    age: 23,
    info: {
        city: "Moscow",
        tel: "8-992-121-2233",
        quantityReposts: {
            vk: 3,
            dzen: 2,
            telegram: 1,
        },
    },
  },
  {
    name: "Клава",
    age: 22,
    info: {
        city: "Saint Petersburg",
        tel: "8-931-221-2243",
        quantityReposts: {
            vk: 2,
            dzen: 1,
            telegram: 0,
        },
    },
  },
];

/* Output
    20
*/

// Solution:
function calculateAverageAge(data) {
  let result = data.map((i) => i.age);
  result = result.reduce((sum, e) => sum + e) / result.length;
  return Math.round(result);
}
console.log(calculateAverageAge(data));

