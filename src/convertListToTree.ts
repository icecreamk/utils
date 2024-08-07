/**
 * 将列表转换为树结构
 *
 * @param list - 需要转换的列表数据
 * @param options - 配置对象，包含 id、parentId 和 children 字段的键名
 * @returns 转换后的树结构
 */

export const convertListToTree = (
  list: any,
  {
    id = "id",
    parentId = "pid",
    children = "children",
    isParentValue = "0",
  } = {}
) => {
  const tree: any = [];
  const map = new Map();

  // 首先遍历列表，创建一个 id 到对象的映射
  list.forEach((item: any) => {
    map.set(item[id], { ...item, [children]: [] });
  });

  // 再次遍历列表，根据 parentId 连接父子节点
  list.forEach((item: any) => {
    const node = map.get(item[id]);
    if (item[parentId] === isParentValue) {
      // 假设 parentId 为 0 表示根节点
      tree.push(node);
    } else {
      const parent = map.get(item[parentId]);
      if (parent) {
        parent[children].push(node);
      }
    }
  });
  return tree;
};

convertListToTree;
