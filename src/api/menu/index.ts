import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { MenuQuery, MenuVO, MenuForm } from './types';
import { RouteRecordRaw } from "vue-router";

/**
 * 获取路由列表
 */
export function listRoutes() {
  return Promise.resolve(
    {data: [
      {
        "path": "/system",
        "component": "Layout",
        "redirect": "/system/user",
        "meta": {
          "title": "系统管理",
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
              "title": "用户管理",
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
              "title": "角色管理",
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
              "title": "菜单管理",
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
              "title": "部门管理",
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
              "title": "字典管理",
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
          "title": "接口",
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
              "title": "接口文档",
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
          "title": "外部链接",
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
          "title": "多级菜单",
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
              "title": "菜单一级",
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
                  "title": "菜单二级",
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
                      "title": "菜单三级-1",
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
                      "title": "菜单三级-2",
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
          "title": "组件封装",
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
              "title": "富文本编辑器",
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
              "title": "上传组件",
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
              "title": "图标选择器",
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
    ] as unknown as RouteRecordRaw[]}
  )
  // return request({
  //   url: '/api/v1/menus/routes',
  //   method: 'get'
  // });
}

/**
 * 获取菜单树形列表
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
 * 获取菜单下拉树形列表
 */
export function listMenuOptions(): AxiosPromise<OptionType[]> {
  return request({
    url: '/api/v1/menus/options',
    method: 'get'
  });
}

/**
 * 获取菜单表单数据
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
 * 添加菜单
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
 * 修改菜单
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
 * 删除菜单
 *
 * @param id 菜单ID
 */
export function deleteMenu(id: number) {
  return request({
    url: '/api/v1/menus/' + id,
    method: 'delete'
  });
}
