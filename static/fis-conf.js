/**
 * Created by menghua.sun on 2015/03/16.
 */

 // fis release --file fis-conf.js --dest local -D --pack --md5 --optimize

//开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
fis.config.set('modules.postpackager', 'simple');

//通过pack设置干预自动合并结果，将公用资源合并成一个文件，更加利于页面间的共用
// fis.config.set('pack', {
//     'pkg/lib.js': [
//         '/lib/mod.js',
//         '/modules/underscore/**.js',
//         '/modules/backbone/**.js',
//         '/modules/jquery/**.js',
//         '/modules/vendor/**.js',
//         '/modules/common/**.js'
//     ]
// });

//设置项目源码文件include过滤器
fis.config.set('project.include', /^\/(?:html|js|css|img)\/.*\.(?:html|js|css|swf|mp4|jpg|png|gif|ico|cur)$/i);

//追加图片类二进制文件后缀列表
fis.config.set('project.fileType.image', 'ico');

//开启simple对零散资源的自动合并
// fis.config.set('settings.postpackager.simple.autoCombine', true);

fis.config.set('roadmap', {
    //静态资源文件域名设置
    domain: '',
    //定制项目文件属性
    path: [{
        reg: /\/html\/(.*\.html)/,
        release : '/$1'
    }, {
        reg: /\/html\/(.*\.(?:jpg|jpeg|png))/i,
        release: '/assets/img/$1',
    }, {
        reg: /\/html\/(.*\.css)/i,
        release: '/assets/css/$1',
    }, {
        reg: /\/html\/(.*\.js)/i,
        release: '/assets/js/$1',
    }, {
        reg: /\/img\/(.*\.(:?jpg|jpeg|png))/i,
        release: '/assets/img/$1',
    }, {
        reg: /\/css\/(.*\.css)/i,
        release : '/assets/css/$1',
        useHash: false
    }, {
        reg: /\/js\/(.*\.(?:js|map))/i,
        release : '/assets/js/$1',
        useHash: false
    }, {
        reg : /.*/,
        release : false
    }]
});

fis.config.set('settings.spriter.csssprites', {
    //图之间的边距
    margin: 10,
    //使用矩阵排列方式
    layout: 'matrix',
    //开启模板内联css处理
    htmlUseSprite: true,
    //默认<style></style>标签的匹配正则
    styleReg: /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig
});

//使用fis release --dest local来使用这个配置
fis.config.set('deploy.local', {
        to : '../',
        exclude : /(?:\/(?:include|src|demo|example|data|test)\/.+\.(?:html|js|css))|(?:\/_[-_\w\d]+\.html)|(?:\/.+\.md)/i
});
