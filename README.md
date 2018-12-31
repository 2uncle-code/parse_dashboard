# 为什么要使用Parse DashBoard
	1. 因为dashboard类似mysql的phpmyadmin。
	2. 在开发前期我们需要不断调试，直接通过dashboard增减字段。
	3. 有任何debug问题，我们可以通过dashboard log查看。
	4. 写好cloud function可以通过api console调试。
	5. 更多就不一一举例了...
  
## 修改配置文件  
1. cmd/shell进入根目录	
  ```
  cp example.servers.js servers.js
  cp example.env .env
  ```
   打开.env,这里几个有最基本到配置项。
  ```
	MountPath=/dashboard  
	port=8099			  
	admin=2uncle		  	
	pwd=123456			  
  ```
参数解析：
* MountPath:挂载路径
* port:挂载端口
* admin:用户名
* pwd:密码
2. 打开servers.js
```
  const apps = [{
    serverURL: 'http://yourUri.2u/parse',  
    appId: 'your ID',
    masterKey: 'your Key',
    appName: 'Parse Blog'
}]
```
参数解析：
* serverURL：parse server 服务地址 （必须和真实地址一致）
* appId	   ：parse server 定义到App Id （必须和真实地址一致）
* masterKey: parse server的masterKey	 （必须和真实地址一致）
* appName  : parse server 名称，这里可以随便写。

## 管理多个Parse Server
	打开servers.js我们可以看到apps参数是一个，对象数组。
	我们只需要按照格式，在数组里再添加一个对象即可。比如像这样：
```
	  const apps = [{
	    serverURL: 'http://yourUri.2u/parse',  
	    appId: 'your ID',
	    masterKey: 'your Key',
	    appName: 'Parse Blog'
	},
	{
		serverURL: 'http://yourUri2.2u/parse',  
		appId: 'your ID2',
		masterKey: 'your Key2',
		appName: 'Parse Blog2'
	}]
```
	
## 关于安全
	笔者建议，大家不要把dashboard挂到外网上。直接在本地就可以管理所有的Parse Server程序了。
	或者搭建一台局域网主机来使用dashboard。
		