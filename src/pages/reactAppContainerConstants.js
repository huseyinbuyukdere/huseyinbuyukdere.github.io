
export const MarkDownForDemo = `
## Available Props

| Prop                      | Default      | Type     | Description                                                                                                                                                                                                                                                                         |
| ------------------------- | ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| designConfig| {} | [Design Config](#design-config)| Design Configurations for Container                                                                                                                                                                                                                                                |
| routes               | []         | Array<[ContainerRoute](#container-route)>| Routes Configuration in Container for React Router           
| children|          | Object| Content of the container when routes are empty or null


{: id="foo"}
## Design Config 


| Prop                      | Default      | Type     | Description                                                                                                                                                                                                                                                                         |
| ------------------------- | ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|
| headerMenu| []           | Array<[MenuItem](#menu-item)>   | List of menu shown in header|
| sideBarMenu| []           | Array<[MenuItem](#menu-item)> | List of menu shown in sidebar                                                                                                                                                                                                |
| sideBarHeaderContent |            | Object   | Content for left top of container ( Logo vs)                                                                                                                                                                                            |
| sideBarFooterContent |            | Object    | Content for left bottom of container                                                                                                                                                                                                                                                         |
| headerLeftContent |     | Object| Content for left side of header|
| headerRightContent |   | Object| Content for right side of header|         


## Menu Item
| Prop                      | Default      | Type     | Description                                                                                                                                                                                                                                                                         |
| ------------------------- | ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|
| label| | String | Label for menu item                                                                                                                                                                                                                                                          |
| routeKey|   | String | Key for connect the menu with the router. When click the menu item, if this key is not empty, the container link to route which has the routeKey in the [Routes](#container-route) config .                                                                                                                                                                                                                 |
| iconName|   | String  | Name of one the predefined icons (, 'api', 'apps' , 'code', 'dashboard', 'expand_less', 'expand_more', 'home', 'info', 'language', 'list', 'mail', 'mediation', 'message', 'perm_idenity', 'post_add', 'radio_button_checked', 'room', 'settings').                                                                                                                                                                                                                                                                |
| iconComp|   | Object  | Custom icon component for menu item|
| customComp|   | Object  | Custom whole menu item component |
| onClick|   | function  | Event when click menu item|
| subMenuItemList|   | Array<[MenuItem](#menu-item)> | Sub menu list of menu item|

                         

## Container Route
| Prop                      | Default      | Type     | Description                                                                                                                                                                                                                                                                         |
| ------------------------- | ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|
| path | | String | Route path of your page (Example : '/home' , '/' , '/settings')                                                                                                                                                                                                                                                           |
| key|   | String | Key for connect the menu with the router. This key will be use in the [MenuItem](#menu-item) for routing.                                                                                                                                                                                                                                                                         |
| label |   | String  | Label for show on left side of header                                                                                                                                                                                                                                                                |
| component|   | Object  | Your page or content which will show when the route active.|
                         
                                                                                                  
`;                        
                               