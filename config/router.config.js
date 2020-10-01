export default [
    // user
    {
        path: "/user",
        component: "../layouts/UserLayout",
        routes: [
            {path: "/user/login", name: "login", component: "./User/Login"},
            {
                path: "/user/register",
                name: "register",
                component: "./User/Register"
            },
            {
                path: "/user/register-result",
                name: "register.result",
                component: "./User/RegisterResult"
            },
            {
                component: "404"
            }
        ]
    },

    {
        path: "/",
        component: "../layouts/BasicLayout",
        routes: [
            // dashboard
            {path: "/", redirect: "/user/login"},
            {
                path: "/dashboardlite",
                avantHeadline: "Feature",
                name: "Dashboard",
                icon: "laptop",
                routes: [
                    // profile
                    {
                        path: "/dashboardlite",
                        initials: "A",
                        name: "Analytics",
                        component: "./DashboardLite/DashboardLite"
                    }
                ]
            },
            // App
            // {
            //     path: "/App",
            //     icon: "scan",
            //     name: "App",
            //     routes: [
            //         {
            //             path: "/app/email",
            //             name: "Email",
            //             initials: "E",
            //             number: "12",
            //             tagColor: "#00B8D9",
            //             component: "./App/MailPage"
            //         },
            //         {
            //             path: "/app/kanban",
            //             initials: "KB",
            //             name: "Kanban Board",
            //             component: "./App/KanbanPage"
            //         },
            //         {
            //             path: "/app/chat-page",
            //             name: "Chat",
            //             initials: "C",
            //             number: "New 89",
            //             tagColor: "#6554C0",
            //             component: "./App/ChatPage"
            //         }
            //     ]
            // },

            // icons
            // {
            //     path: "/icon",
            //     icon: "bulb",
            //     name: "Icon",
            //     number: "9.635",
            //     tagColor: "#FFAB00",
            //     component: "./UiElement/IconElement"
            // },
            {
                path: "/doctor-view",
                // icon: "bulb",
                // name: "Icon",
                // number: "9.635",
                // tagColor: "#FFAB00",
                component: "./Doctors/DoctorView"
            },
            //Doctor table

          {
            path: "/doctors",
            icon: "user",
            name: "Doctors",
            // number: "9.635",
            tagColor: "#FFAB00",
            component: "./Doctors/DoctorsList"
          },


            // layout
            // {
            //     path: "/Layout",
            //     icon: "layout",
            //     name: "Layout",
            //     routes: [
            //         {
            //             path: "/layout/GridElement",
            //             name: "Grid",
            //             initials: "G",
            //             component: "./Layout/GridElement"
            //         },
            //         {
            //             path: "/layout/LayoutElement",
            //             name: "Layout",
            //             initials: "L",
            //             component: "./Layout/LayoutElement"
            //         }
            //     ]
            // },
            // forms
            // {
            //     path: "/form",
            //     icon: "file-zip",
            //     avantHeadline: "GENERAL",
            //     name: "Form Entry",
            //     routes: [
            //         {
            //             path: "/form/basic-form",
            //             name: "Basic Form",
            //             initials: "BF",
            //             component: "./Forms/BasicForm"
            //         },
            //         {
            //             path: "/form/step-form",
            //             name: "Step Form",
            //             initials: "SF",
            //             component: "./Forms/StepForm",
            //             hideChildrenInMenu: true,
            //             routes: [
            //                 {
            //                     path: "/form/step-form",
            //                     redirect: "/form/step-form/confirm"
            //                 },
            //                 {
            //                     path: "/form/step-form/info",
            //                     name: "info",
            //                     component: "./Forms/StepForm/Step1"
            //                 },
            //                 {
            //                     path: "/form/step-form/confirm",
            //                     name: "confirm",
            //                     component: "./Forms/StepForm/Step2"
            //                 },
            //                 {
            //                     path: "/form/step-form/result",
            //                     name: "result",
            //                     component: "./Forms/StepForm/Step3"
            //                 }
            //             ]
            //         },
            //         {
            //             path: "/form/advanced-form",
            //             name: "Advanced Form",
            //             initials: "AF",
            //             component: "./Forms/AdvancedForm"
            //         },
            //         {
            //             path: "/form/upload-form",
            //             name: "Upload",
            //             initials: "U",
            //             component: "./Forms/UploadForm"
            //         }
            //     ]
            // },

            // UI Element
            // {
            //     path: "/UiElement",
            //     icon: "save",
            //     name: "Data Display",
            //     routes: [
            //         {
            //             path: "/uiElement/button",
            //             name: "Button",
            //             initials: "B",
            //             component: "./UiElement/ButtonElement"
            //         },
            //         {
            //             path: "/uiElement/avatar",
            //             name: "Avatar Comment",
            //             initials: "AC",
            //             component: "./UiElement/AvatarElement"
            //         },
            //         {
            //             path: "/uiElement/carousel",
            //             name: "Carousel",
            //             initials: "C",
            //             component: "./UiElement/CarouselElement"
            //         },
            //         {
            //             path: "/uiElement/timeline",
            //             name: "Timeline",
            //             initials: "T",
            //             component: "./UiElement/TimelineElement"
            //         },
            //         {
            //             path: "/uiElement/slider",
            //             name: "Slider",
            //             initials: "S",
            //             component: "./UiElement/SliderElement"
            //         },
            //         {
            //             path: "/uiElement/map",
            //             name: "Map",
            //             initials: "M",
            //             component: "./UiElement/MapElement"
            //         }
            //     ]
            // },
            // feedback
            // {
            //     path: "/Feedback",
            //     icon: "alert",
            //     name: "Feedback",
            //     routes: [
            //         {
            //             path: "/feedback/alert",
            //             name: "Alert",
            //             initials: "A",
            //             component: "./Feedback/AlertElement"
            //         },
            //         {
            //             path: "/feedback/modal",
            //             name: "Modal",
            //             initials: "M",
            //             component: "./Feedback/ModalElement"
            //         }
            //     ]
            // },

            // list
            // {
            //     path: "/table",
            //     icon: "table",
            //     name: "Table",
            //     routes: [
            //         {
            //             path: "/table/basic-table",
            //             name: "Basic Table",
            //             initials: "BT",
            //             component: "./Table/BasicTable"
            //         },
            //         {
            //             path: "/table/dynamic-table",
            //             name: "Dynamic Table",
            //             initials: "DT",
            //             component: "./Table/DynamicTable"
            //         }
            //     ]
            // },

            // {
            //     name: "Exception",
            //     icon: "experiment",
            //     avantHeadline: "SPECIAL PAGE",
            //     path: "/exception",
            //     routes: [
            //         // exception
            //         {
            //             path: "/user/login",
            //             name: "Login",
            //             initials: "L1",
            //             component: "./User/Login"
            //         },
            //         {
            //             path: "/user/register",
            //             name: "Register",
            //             initials: "R5",
            //             component: "./User/Register"
            //         },
            //         {
            //             path: "/user/register-result",
            //             name: "Register Result",
            //             initials: "RR",
            //             component: "./User/RegisterResult"
            //         },
            //         {
            //             path: "/exception/403",
            //             name: "Not Permission",
            //             initials: "NT",
            //             component: "./Exception/403"
            //         },
            //         {
            //             path: "/exception/404",
            //             name: "Not Find",
            //             initials: "Nn",
            //             component: "./Exception/404"
            //         },
            //         {
            //             path: "/exception/500",
            //             name: "Server Error",
            //             initials: "SE",
            //             component: "./Exception/500"
            //         },
            //         {
            //             path: "/exception/trigger",
            //             name: "trigger",
            //             hideInMenu: true,
            //             component: "./Exception/TriggerException"
            //         }
            //     ]
            // },
            // {
            //     path: "/menu-level",
            //     icon: "bars",
            //     avantHeadline: "OTHERS",
            //     name: "Menu Level",
            //     routes: [
            //         {
            //             path: "/menu-level-one",
            //             initials: "01",
            //             name: "Level One"
            //         },
            //         {
            //             path: "/menu-level-two",
            //             name: "Level Two",
            //             routes: [
            //                 {
            //                     path: "menu-level-three",
            //                     name: "Level Three"
            //                 },
            //                 {
            //                     path: "menu-level-three",
            //                     name: "Level Three"
            //                 }
            //             ]
            //         }
            //     ]
            // },
            {
                component: "404"
            }
        ]
    }
];
