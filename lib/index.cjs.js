"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

typeof SuppressedError === "function"
  ? SuppressedError
  : function (error, suppressed, message) {
      var e = new Error(message);
      return (
        (e.name = "SuppressedError"),
        (e.error = error),
        (e.suppressed = suppressed),
        e
      );
    };

/**
 * 将列表转换为树结构
 *
 * @param list - 需要转换的列表数据
 * @param options - 配置对象，包含 id、parentId 和 children 字段的键名
 * @returns 转换后的树结构
 */
var convertListToTree = function (list, _a) {
  var _b = _a === void 0 ? {} : _a,
    _c = _b.id,
    id = _c === void 0 ? "id" : _c,
    _d = _b.parentId,
    parentId = _d === void 0 ? "pid" : _d,
    _e = _b.children,
    children = _e === void 0 ? "children" : _e,
    _f = _b.isParentValue,
    isParentValue = _f === void 0 ? "0" : _f;
  var tree = [];
  var map = new Map();
  // 首先遍历列表，创建一个 id 到对象的映射
  list.forEach(function (item) {
    var _a;
    map.set(
      item[id],
      __assign(__assign({}, item), ((_a = {}), (_a[children] = []), _a)),
    );
  });
  // 再次遍历列表，根据 parentId 连接父子节点
  list.forEach(function (item) {
    var node = map.get(item[id]);
    if (item[parentId] === isParentValue) {
      // 假设 parentId 为 0 表示根节点
      tree.push(node);
    } else {
      var parent_1 = map.get(item[parentId]);
      if (parent_1) {
        parent_1[children].push(node);
      }
    }
  });
  return tree;
};

var sum = function (a, b) {
  return a + b;
};

exports.convertListToTree = convertListToTree;
exports.sum = sum;
