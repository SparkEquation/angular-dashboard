export const ROUTES = {
    "/dashboard/home": {
        path: "home",
        title: "Home",
        icon: "dashboard",
        children: null
    },
    "/dashboard/profile": {
        path: "profile",
        title: "User Profile",
        icon: "person",
        children: null
    },
    "/dashboard/table": {
        path: "table",
        title: "Table List",
        icon: "content_paste",
        children: null
    },
    "/dashboard/component": {
        path: "#component",
        id: "component",
        title: "Component",
        icon: "apps",
        children: {
            "/dashboard/component/price-table ": {
                path: "components/price-table",
                title: "Price Table",
                icon: "PT"
            },
            "/dashboard/component/panels": {
                path: "components/panels",
                title: "Panels",
                icon: "P"
            },
            "/dashboard/component/wizard": {
                path: "components/wizard",
                title: "Wizard",
                icon: "W"
            }
        }
    },
    "/dashboard/notification": {
        path: "notification",
        title: "Notification",
        icon: "notifications",
        children: null
    },
    "/dashboard/alert": {
        path: "alert",
        title: "Sweet Alert",
        icon: "warning",
        children: null
    },
    "/dashboard/settings": {
        path: "settings",
        title: "Settings",
        icon: "settings",
        children: null
    }
};
