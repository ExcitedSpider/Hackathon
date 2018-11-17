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

- app-content和app-card:一人，根据服务接口生成card-view，提供marked-content的跳转接口

- app-title和app-input：一人，获取输入传递给服务接口

- NetworkService:一人，提供两个接口：输入url接口，输出tokens接口，输出xpath定位接口，使用EventEmitter规范实现

- marked-content:一人，标记后的协议html（比如关键句子标红），接收app-card的event跳转到指定行

# 接口

用eventemitter来标准化实现