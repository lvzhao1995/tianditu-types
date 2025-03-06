declare namespace T {
    class ContextMenu {
        /**
         * 创建一个右键菜单实例
         */
        constructor(opts: ContextMenuOptions);

        /** 添加菜单项 */
        addItem(item: MenuItem): void;

        /** 返回指定索引位置的菜单项，第一个菜单项的索引为0 */
        getItem(index: number): MenuItem;

        /** 移除菜单项 */
        removeItem(item: MenuItem): void;

        /** 添加分隔符 */
        addSeparator(): void;

        /** 移除指定索引位置的分隔符，第一个分隔符的索引为0 */
        removeSeparator(index: number): void;

        /** 返回所有的菜单项 */
        getItems(): MenuItem[];

        /** 返回所有分隔符 */
        getAllSeparator(): MenuItem[];

        /** 添加事件监听 */
        addEventListener<E extends keyof ContextMenuEvents>(event: E, handler: MapEvents[E]): void;

        /** 移除事件监听 */
        removeEventListener<E extends keyof ContextMenuEvents>(event: E, handler: MapEvents[E]): void;
    }

    interface ContextMenuOptions {
        /** 菜单宽度 */
        width?: number;
    }

    interface ContextMenuEvents {
        /** 左键单击地图时触发此事件 */
        open(e: ContextMenuEvent & { point: Point }): void;

        /** 鼠标双击地图时会触发此事件 */
        close(e: ContextMenuEvent): void;
    }

    interface ContextMenuEvent {
        /** 事件类型 */
        type: string;
        /** 地图对象 */
        target: ContextMenu;
    }

    class MenuItem {
        readonly isable: boolean
        readonly text: string

        /**
         * 创建一个右键菜单实例
         * @param text 菜单项显示的文本
         * @param callback 菜单项点击时的回调函数
         */
        constructor(text: string, callback: () => void);

        /** 设置菜单项显示的文本 */
        setText(text: string): void;

        /** 启用菜单项 */
        enable(): void;

        /** 禁用菜单项 */
        disable(): void;
    }
}
