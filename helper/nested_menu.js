import "./styles.css";

const Menu = [
  {
    id: "1",
    module_name: "Purchase",
    submenu: [
      {
        id: "1_1",
        module_name: "Purchase Invoice",
        permission: {
          add: false,
          edit: false
        }
      },
      {
        id: "1_2",
        module_name: "Report",
        submenu: [
          {
            id: "1_2_1",
            module_name: "Report 1",
            permission: {
              add: false,
              edit: false,
              delete: false
            }
          },
          {
            id: "1_2_2",
            module_name: "Report 2",
            permission: {
              add: false,
              edit: false,
              delete: false
            }
          },
          {
            id: "1_2_3",
            module_name: "Report 3",
            permission: {
              add: false,
              edit: false,
              delete: false
            }
          }
        ]
      }
    ]
  }
];

const access_menus = [
  { id: "1_1", permission: [1] },
  { id: "1_2_2", permission: [1, 2, 3] }
];

const NewMenu = Menu.map((menu) => {
  return getSubmenu(menu);
});

function getSubmenu(menu) {
  if (menu.hasOwnProperty("submenu")) {
    menu.submenu.map((submenu) => {
      access_menus.map((access_menu) => {
        if (submenu.id === access_menu.id) {
          if (access_menu.permission.includes(1)) {
            submenu.permission.add = true;
          } else {
            submenu.permission.add = false;
          }
          if (access_menu.permission.includes(2)) {
            submenu.permission.edit = true;
          } else {
            submenu.permission.edit = false;
          }
        }
      });
      if (submenu.hasOwnProperty("submenu")) {
        getSubmenu(submenu);
      }
    });
    return menu;
  }
}

const submenu=  [
  {
    id: "1_2_1",
    module_name: "Report 1",
    permission: {
      add: false,
      edit: false,
      delete: false
    }
  },
  {
    id: "1_2_2",
    module_name: "Report 2",
    permission: {
      add: false,
      edit: false,
      delete: false
    }
  },
  {
    id: "1_2_3",
    module_name: "Report 3",
    permission: {
      add: false,
      edit: false,
      delete: false
    }
  }
];

const ids = access_menus.map((access_menu) => {
  return access_menu.id;
});

function subMenuFilter(SubMenu) {
  return SubMenu.filter((submenu) => {
     return ids.includes(submenu.id);
  });
}

console.log(subMenuFilter(submenu))

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
