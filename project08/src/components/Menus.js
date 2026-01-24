const Menus = [
  {
    id: 1,
    name: "Root",
    type: "folder",
    children: [
      {
        id: 2,
        name: "src",
        type: "folder",
        children: [
          {
            id: 3,
            name: "components",
            type: "folder",
            children: [
              {
                id: 4,
                name: "Navbar.jsx",
                type: "file",
              },
              {
                id: 5,
                name: "Footer.jsx",
                type: "file",
              },
            ],
          },
          {
            id: 6,
            name: "pages",
            type: "folder",
            children: [
              {
                id: 7,
                name: "Home.jsx",
                type: "file",
              },
              {
                id: 8,
                name: "About.jsx",
                type: "file",
              },
            ],
          },
          {
            id: 9,
            name: "App.jsx",
            type: "file",
          },
        ],
      },
      {
        id: 10,
        name: "public",
        type: "folder",
        children: [
          {
            id: 11,
            name: "index.html",
            type: "file",
          },
        ],
      },
      {
        id: 12,
        name: "package.json",
        type: "file",
      },
    ],
  },
];

export default Menus;
