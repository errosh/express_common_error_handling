const data = [
  {
    module_name: "Company",
    module_id: 1,
    checked: false,
    permisssion: {
      add: false,
      edit: false,
      delete: false,
    },
  },
  {
    module_name: "Purchase",
    module_id: 2,
    checked: false,
    sub_module: [
      {
        module_name: "Entry",
        module_id: 3,
        checked: false,
        permisssion: {
          add: false,
          edit: false,
          delete: false,
        },
      },
      {
        module_name: "Report",
        module_id: 4,
        sub_module: [
          {
            module_name: "Report1",
            module_id: 5,
            checked: false,
            permisssion: {
              add: false,
              edit: false,
              delete: false,
            },
          },
          {
            module_name: "Report2",
            module_id: 6,
            checked: false,
            permisssion: {
              add: false,
              edit: false,
              delete: false,
            },
          },
        ],
      },
    ],
  },
];

