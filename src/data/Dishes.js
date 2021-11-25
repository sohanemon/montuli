import React from "react";

const Dishes = [
  {
    id: 0,
    name: "Pangas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7HSiT8OUhvXBAjD3UuOycxn9wLOSJZpWVg&usqp=CAU",
    category: "meal",
    label: "hot",
    price: 40,
    description:
      "Once upon a time in montuli cafe. I went there to find some dishes. Unfortunately I got none and everything was empty. Then I think I should go back to the hostle.",
    comments: [
      {
        id: 0,
        rating: 5,
        comment: "So So good",
        author: "Rahim",
        date: "2015-1-12",
      },
      {
        id: 1,
        rating: 5,
        comment: "So good and Crispy",
        author: "Kahim",
        date: "2015-3-12",
      },
      {
        id: 2,
        rating: 5,
        comment: "So good",
        author: "Salam",
        date: "2015-6-1",
      },
      {
        id: 3,
        rating: 5,
        comment: "Awesome",
        author: "Selim",
        date: "2015-3-21",
      },
    ],
  },
  {
    id: 1,
    name: "Rice",
    image:
      "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg",
    category: "meal",
    label: "hot",
    price: 10,
    description:
      "Once upon a time in montuli cafe. I went there to find some dishes. Unfortunately I got none and everything was empty. Then I think I should go back to the hostle.",
    comments: [
      {
        id: 0,
        rating: 5,
        comment: "So So good",
        author: "Rahim",
        date: "2015-1-12",
      },
      {
        id: 1,
        rating: 5,
        comment: "So good and Crispy",
        author: "Kahim",
        date: "2015-3-12",
      },
      {
        id: 2,
        rating: 5,
        comment: "So good",
        author: "Salam",
        date: "2015-6-1",
      },
      {
        id: 3,
        rating: 5,
        comment: "Awesome",
        author: "Selim",
        date: "2015-3-21",
      },
    ],
  },
  {
    id: 2,
    name: "Catla",
    image: "https://i.ytimg.com/vi/i_Q6AXG-968/hqdefault.jpg",
    category: "meal",
    label: "hot",
    price: 60,
    description:
      "Once upon a time in montuli cafe. I went there to find some dishes. Unfortunately I got none and everything was empty. Then I think I should go back to the hostle.",
    comments: [
      {
        id: 0,
        rating: 5,
        comment: "So So good",
        author: "Rahim",
        date: "2015-1-12",
      },
      {
        id: 1,
        rating: 5,
        comment: "So good and Crispy",
        author: "Kahim",
        date: "2015-3-12",
      },
      {
        id: 2,
        rating: 5,
        comment: "So good",
        author: "Salam",
        date: "2015-6-1",
      },
      {
        id: 3,
        rating: 5,
        comment: "Awesome",
        author: "Selim",
        date: "2015-3-21",
      },
    ],
  },
  {
    id: 3,
    name: "Egg",
    image: "https://i.ytimg.com/vi/1LleIUXgGkQ/maxresdefault.jpg",
    category: "meal",
    label: "hot",
    price: 20,
    description:
      "Once upon a time in montuli cafe. I went there to find some dishes. Unfortunately I got none and everything was empty. Then I think I should go back to the hostle.",
    comments: [
      {
        id: 0,
        rating: 5,
        comment: "So So good",
        author: "Rahim",
        date: "2015-1-12",
      },
      {
        id: 1,
        rating: 5,
        comment: "So good and Crispy",
        author: "Kahim",
        date: "2015-3-12",
      },
      {
        id: 2,
        rating: 5,
        comment: "So good",
        author: "Salam",
        date: "2015-6-1",
      },
      {
        id: 3,
        rating: 5,
        comment: "Awesome",
        author: "Selim",
        date: "2015-3-21",
      },
    ],
  },
  {
    id: 4,
    name: "Vegitable",
    image:
      "https://d3j4nopn8wm92b.cloudfront.net/sites/default/files/styles/recipe_main/public/mix%20bhujia.jpg?itok=rqPoLB58",
    category: "meal",
    label: "hot",
    price: 10,
    description:
      "Once upon a time in montuli cafe. I went there to find some dishes. Unfortunately I got none and everything was empty. Then I think I should go back to the hostle.",
    comments: [
      {
        id: 0,
        rating: 5,
        comment: "So So good",
        author: "Rahim",
        date: "2015-1-12",
      },
      {
        id: 1,
        rating: 5,
        comment: "So good and Crispy",
        author: "Kahim",
        date: "2015-3-12",
      },
      {
        id: 2,
        rating: 5,
        comment: "So good",
        author: "Salam",
        date: "2015-6-1",
      },
      {
        id: 3,
        rating: 5,
        comment: "Awesome",
        author: "Selim",
        date: "2015-3-21",
      },
    ],
  },
  {
    id: 5,
    name: "Chicken",
    image: "http://notoutofthebox.in/wp-content/uploads/2013/12/rc2.jpg",
    category: "meal",
    label: "hot",
    description:
      "Once upon a time in montuli cafe. I went there to find some dishes. Unfortunately I got none and everything was empty. Then I think I should go back to the hostle.",
    price: 80,
    comments: [
      {
        id: 0,
        rating: 5,
        comment: "So So good",
        author: "Rahim",
        date: "2015-1-12",
      },
      {
        id: 1,
        rating: 5,
        comment: "So good and Crispy",
        author: "Kahim",
        date: "2015-3-12",
      },
      {
        id: 2,
        rating: 5,
        comment: "So good",
        author: "Salam",
        date: "2015-6-1",
      },
      {
        id: 3,
        rating: 5,
        comment: "Awesome",
        author: "Selim",
        date: "2015-3-21",
      },
    ],
  },
];
export default Dishes;
