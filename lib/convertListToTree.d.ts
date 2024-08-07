/**
 * 将列表转换为树结构
 *
 * @param list - 需要转换的列表数据
 * @param options - 配置对象，包含 id、parentId 和 children 字段的键名
 * @returns 转换后的树结构
 */
export declare const convertListToTree: (list: any, { id, parentId, children, isParentValue, }?: {
    id?: string | undefined;
    parentId?: string | undefined;
    children?: string | undefined;
    isParentValue?: string | undefined;
}) => any;
