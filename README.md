# 组件

```html
<app-root>
    <app-title>
        <router-outlet></router-outlet>
    <app-title>
</app-root>
```

routerpath = '\main'

```html
<app-root>
    <app-title>
        <app-search>
        </app-search>
        <app-content>
            <app-card>
            </app-card>
        </app-content>
    </app-title>
<app-root>
```

routerpath='\marked_content'

```html
<app-root>
    <app-title>
        <marked-content>
    <app-title>
</app-root>
```

- app-content和app-card 一人
- NetworkService 一人
- marked-content,app-input,app-title 一人
- 后端一人

# 接口

用eventemitter来标准化实现

后端接口json

