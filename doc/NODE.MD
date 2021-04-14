#### 设置淘宝镜像 
    npm config set registry https://registry.npm.taobao.org
    或者
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    cnpm install

#### 设置显示npm安装进度
    npm config set loglevel=http

#### 设置显示npm安装进度
    npm config set loglevel=http

#### 安装和卸载
    npm install [模块名]       # 本地安装
    npm install [模块名] -g    # 全局安装
    npm uninstall [模块名]     # 卸载模块

#### 查看某个模块的版本号
    npm list [模块名]
    
#### 查看包的安装路径
    npm root [模块名]
    
#### 管理npm的配置路径
    npm config
    npm config list
    npm config set registry https://registry.npm.taobao.org
    npm config get registry

#### 查看模块版本
    npm version
    
    