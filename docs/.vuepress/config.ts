/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
// @ts-ignore
import dayjs from 'dayjs'


// const DOMAIN_NAME = 'vblog.qjjstudy.asia' // 域名 (不带https)
// const WEB_SITE = `https:// ${DOMAIN_NAME}` // 网址

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Blog",
      description: '学习文档',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https:// foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  // base: '/vblog/',

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: '前端文章',
            items: [
                { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
            ],
          },
          {
            text: '学习笔记',
            items: [
              {text: '《Vue》', link: '/note/vue/' },
              {text: '《Git》', link: '/note/git/',},
            ],
          },
        ],
      },
      {
        text: '技术',
        link: '/technology/',
        items: [
          { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
          { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
          { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
        ],
      },
      //个人学习笔记
      {
        text: '个人学习笔记',
        link: '/pages/a31ae1/',
        items: [
          {
            text: 'Docker' ,
            items :[
              { text: 'Docker',link: '/pages/ba54ad/'}
            ]
          },
          {
            text: 'Redis',
            items: [
              {text: 'Redis' ,link: '/pages/bb03b7/'},
              {text: 'Redis-Docker' ,link: '/pages/1aa945/'},
            ]
          },
          {
            text: 'Mq',
            items: [
              {text: 'RocketMq' ,link: '/pages/1ef249/'},
              {text: 'RabbitMq' ,link: '/pages/633ffb/'},
            ]
          }
        ]
      },



      //  个人记录内容
      { text: '技术笔记', link: '/pages/0ff885/' },

        //问题总结
      {text: '问题总结',link: '/pages/aefe68/'},


      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },


      {
        text: '更多',
        link: '/more/',
        items: [
          { text: '友情链接', link: '/friends/' },
        ],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: '#', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: '编辑',



    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: '船到桥头沉', // 必需
      link: '', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: '#',
      name: '船到桥头沉',
      slogan: '==========',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https:// doc.xugaoyi.com/pages/a20ce8/#social)
    // social: {
    //   // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。
    //   // 阿里图片库：https: //www.iconfont.cn/
    //   icons: [
    //     {
    //       iconClass: 'icon-youjian',
    //       title: '发邮件',
    //       link: '',
    //     },
    //     {
    //       iconClass: 'icon-github',
    //       title: 'GitHub',
    //       link: '',
    //     },
    //     {
    //       iconClass: 'icon-erji',
    //       title: '听音乐',
    //       link: '',
    //     },
    //   ],
    // },

    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo:
        '船到桥头沉 | <a href="https://github.com/NewStudyAccount/vblog/blob/main/LICENSE" target="_blank">MIT License</a>',
      // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: '船到桥头沉',
        link: '#'
      }
    },

  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '个人技术博客',
      },
    ],
    // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ],


  // 插件配置
  plugins: <UserPlugins>[


    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    // 'fulltext-search',
    // [
    //   "sitemap", // 网站地图
    //   {
    //     hostname: WEB_SITE,
    //   },
    // ],


    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],

    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
