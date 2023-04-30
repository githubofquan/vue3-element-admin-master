import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { MenuQuery, MenuVO, MenuForm } from './types';
import { RouteRecordRaw } from "vue-router";

/**
 * get route list
 */
export function listRoutes() {
  return Promise.resolve(
    {
      data: [
        {
          "path": "/system",
          "component": "Layout",
          "redirect": "/system/user",
          "meta": {
            "title": "System Me",
            "icon": "system",
            "hidden": false,
            "roles": [
              "ADMIN"
            ],
            "keepAlive": true
          },
          "children": [
            {
              "path": "user",
              "component": "system/user/index",
              "name": "user",
              "meta": {
                "title": "User Management",
                "icon": "user",
                "hidden": false,
                "roles": [
                  "ADMIN"
                ],
                "keepAlive": true
              }
            },
            {
              "path": "role",
              "component": "system/role/index",
              "name": "role",
              "meta": {
                "title": "Role management",
                "icon": "role",
                "hidden": false,
                "roles": [
                  "ADMIN"
                ],
                "keepAlive": true
              }
            },
            {
              "path": "cmenu",
              "component": "system/menu/index",
              "name": "cmenu",
              "meta": {
                "title": "Menu management",
                "icon": "menu",
                "hidden": false,
                "roles": [
                  "ADMIN"
                ],
                "keepAlive": true
              }
            },
            {
              "path": "dept",
              "component": "system/dept/index",
              "name": "dept",
              "meta": {
                "title": "Department management",
                "icon": "tree",
                "hidden": false,
                "roles": [
                  "ADMIN"
                ],
                "keepAlive": true
              }
            },
            {
              "path": "dict",
              "component": "system/dict/index",
              "name": "dict",
              "meta": {
                "title": "Dictionary management",
                "icon": "dict",
                "hidden": false,
                "roles": [
                  "ADMIN"
                ],
                "keepAlive": true
              }
            }
          ]
        },
        {
          "path": "/api",
          "component": "Layout",
          "meta": {
            "title": "interface",
            "icon": "api",
            "hidden": false,
            "roles": [
              "ADMIN"
            ],
            "keepAlive": true
          },
          "children": [
            {
              "path": "apidoc",
              "component": "demo/apidoc",
              "name": "apidoc",
              "meta": {
                "title": "Interface document",
                "icon": "api",
                "hidden": false,
                "roles": [
                  "ADMIN"
                ],
                "keepAlive": true
              }
            }
          ]
        },
        {
          "path": "/external-link",
          "component": "Layout",
          "redirect": "noredirect",
          "meta": {
            "title": "external link",
            "icon": "link",
            "hidden": false,
            "roles": [
              "ADMIN"
            ],
            "keepAlive": true
          },
          "children": [
            {
              "path": "https://www.cnblogs.com/haoxianrui/p/17331952.html",
              "meta": {
                "title": "document",
                "icon": "document",
                "hidden": false,
                "roles": [
                  "ADMIN"
                ],
                "keepAlive": true
              }
            }
          ]
        },
        {
          "path": "/multi-level-menu",
          "component": "Layout",
          "redirect": "/nested/level1/level2",
          "meta": {
            "title": "Multi - level menu",
            "icon": "multi_level",
            "hidden": false,
            "roles": [
              "ADMIN"
            ],
            "keepAlive": true
          },
          "children": [
            {
              "path": "nested_level1_index",
              "component": "nested/level1/index",
              "redirect": "/nested/level1/level2",
              "meta": {
                "title": "Menu",
                "icon": "",
                "hidden": false,
                "roles": [
                  "ADMIN"
                ],
                "keepAlive": true
              },
              "children": [
                {
                  "path": "nested_level1_level2_index",
                  "component": "nested/level1/level2/index",
                  "redirect": "/nested/level1/level2/level3",
                  "meta": {
                    "title": "Menu",
                    "icon": "",
                    "hidden": false,
                    "roles": [
                      "ADMIN"
                    ],
                    "keepAlive": true
                  },
                  "children": [
                    {
                      "path": "nested_level1_level2_level3_index1",
                      "component": "nested/level1/level2/level3/index1",
                      "name": "nested_level1_level2_level3_index1",
                      "meta": {
                        "title": "Menu three-1",
                        "icon": "",
                        "hidden": false,
                        "roles": [
                          "ADMIN"
                        ],
                        "keepAlive": true
                      }
                    },
                    {
                      "path": "nested_level1_level2_level3_index2",
                      "component": "nested/level1/level2/level3/index2",
                      "name": "nested_level1_level2_level3_index2",
                      "meta": {
                        "title": "Menu Level 3-2",
                        "icon": "",
                        "hidden": false,
                        "roles": [
                          "ADMIN"
                        ],
                        "keepAlive": true
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "path": "/demo",
          "component": "Layout",
          "meta": {
            "title": "Component pack",
            "icon": "menu",
            "hidden": false,
            "roles": [
              "ADMIN"
            ],
            "keepAlive": true
          },
          "children": [
            {
              "path": "wangEditor",
              "component": "demo/wangEditor",
              "name": "wangEditor",
              "meta": {
                "title": "Rich text editor",
                "icon": "",
                "hidden": false,
                "roles": [
                  "ADMIN"
                ],
                "keepAlive": true
              }
            },
            {
              "path": "uploader",
              "component": "demo/uploader",
              "name": "uploader",
              "meta": {
                "title": "uploadComponent",
                "icon": "",
                "hidden": false,
                "roles": [
                  "ADMIN"
                ],
                "keepAlive": true
              }
            },
            {
              "path": "IconSelector",
              "component": "demo/IconSelector",
              "name": "IconSelector",
              "meta": {
                "title": "Icon selector",
                "icon": "",
                "hidden": false,
                "roles": [
                  "ADMIN"
                ],
                "keepAlive": true
              }
            }
          ]
        }
      ] as unknown as RouteRecordRaw[]
    }
  )

}

/**
 * Get the menu tree shape list
 *
 * @param queryParams
 */
export function listMenus(queryParams: MenuQuery): AxiosPromise<MenuVO[]> {
  return request({
    url: '/api/v1/menus',
    method: 'get',
    params: queryParams
  });
}

/**
 * Get the menu pull down tree list list
 */
export function listMenuOptions(): AxiosPromise<OptionType[]> {
  return request({
    url: '/api/v1/menus/options',
    method: 'get'
  });
}

/**
 * Get the menu form data
 *
 * @param id
 */
export function getMenuForm(id: number): AxiosPromise<MenuForm> {
  return request({
    url: '/api/v1/menus/' + id + '/form',
    method: 'get'
  });
}

/**
 * Add menu
 *
 * @param data
 */
export function addMenu(data: MenuForm) {
  return request({
    url: '/api/v1/menus',
    method: 'post',
    data: data
  });
}

/**
 * Modify the menu
 *
 * @param id
 * @param data
 */
export function updateMenu(id: string, data: MenuForm) {
  return request({
    url: '/api/v1/menus/' + id,
    method: 'put',
    data: data
  });
}

/**
 * Delete menute menute menu
 *
 * @param id 
 */
export function deleteMenu(id: number) {
  return request({
    url: '/api/v1/menus/' + id,
    method: 'delete'
  });
}
