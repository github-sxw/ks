/*
快手极速版-五一提现活动
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#快手极速版-五一提现活动
0 5 0 * * * https://github.com/JDWXX/jd_all/blob/master/ks/ksjsb_wytx.js, tag=快手极速版-五一提现活动, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 5 0 * * *" script-path=https://github.com/JDWXX/jd_all/blob/master/ks/ksjsb_wytx.js,tag=快手极速版-五一提现活动
===================================Surge================================
快手极速版-五一提现活动 = type=cron,cronexp="0 5 0 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_all/blob/master/ks/ksjsb_wytx.js
====================================小火箭=============================
快手极速版-五一提现活动 = type=cron,script-path=https://github.com/JDWXX/jd_all/blob/master/ks/ksjsb_wytx.js, cronexpr="0 5 0 * * *", timeout=3600, enable=true
 */
const $ = new Env('快手极速版-五一提现活动');
const jdCookieNode = $.isNode() ? require('./ksCookie.js') : '';
let boostId = $.isNode() ? (process.env.ksjsbBoostId ? process.env.ksjsbBoostId : "") : ($.getdata('ksjsbBoostId') ? $.getdata('ksjsbBoostId') : "")//快手助力码 boostId
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxdf045=["","\x6E\x6F\x64\x65\x2D\x66\x65\x74\x63\x68","\x31\x39\x35\x38\x39\x33\x34\x38\x34","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x64\x77\x78\x78\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x6A\x64\x5F\x6A\x6F\x62\x2F\x6B\x73\x6A\x73\x62\x2E\x6A\x73\x6F\x6E","\u6743\u9650\u67E5\u8BE2\u8BF7\u6C42\u5931\u8D25","\x70\x61\x72\x73\x65","\x63\x78\x67\x63","\x6C\x6F\x67\x45\x72\x72","\x67\x65\x74","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x72\x41\x74","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u5FEB\u624B\u8D26\u53F7\x20\x6B\x73\x6A\x73\x62\x43\x6F\x6F\x6B\x69\x65\x20\x0A\u76F4\u63A5\u4F7F\u7528\u6293\u5305\u5DE5\u5177\u6293\u5305","\x68\x74\x74\x70\x3A\x2F\x2F\x63\x78\x67\x63\x2E\x74\x6F\x70\x2F\x61\x72\x63\x68\x69\x76\x65\x73\x2F\x6B\x73\x6A\x73\x62","\x6D\x73\x67","\x0A\u5F02\u5E38\u9519\u8BEF\x2C\u8BF7\u7A0D\u5019\u91CD\u8BD5\x0A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x70\x65\x63\x69\x61\x6C\x2E\x6D\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D","\u6293\u5305\u6559\u7A0B\u5730\u5740\uFF1A\x68\x74\x74\x70\x3A\x2F\x2F\x63\x78\x67\x63\x2E\x74\x6F\x70\x2F\x61\x72\x63\x68\x69\x76\x65\x73\x2F\x6B\x73\x6A\x73\x62","\u611F\u8C22\u5927\u5BB6\u586B\u6211\u9080\u8BF7\u7801\uFF1A\x37\x39\x31\x36\x34\x32\x36\x30\x37\uFF0C\u586B\u5199\u4E86\u6211\u9080\u8BF7\u7801\u7684\u5FEB\u624B\u4E2A\u4EBA\u4E2D\u5FC3\u622A\u56FE\u95EE\u6211\u95EE\u9898","\u4EA4\u6D41\u7FA4\uFF1A\x32\x31\x32\x37\x39\x36\x36\x36\x38\u3001\x36\x38\x31\x30\x33\x30\x30\x39\x37\u3001\x37\x34\x33\x37\x34\x34\x36\x31\x34","\x40","\x73\x70\x6C\x69\x74","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x5C\x6E\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u5FEB\u624B\u8D26\u53F7","\u3011\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x5C\x6E","\x6D\x61\x74\x63\x68","\x3B","\x6B\x70\x6E\x3D\x4E\x45\x42\x55\x4C\x41\x3B\x20\x6B\x70\x66\x3D\x41\x4E\x44\x52\x4F\x49\x44\x5F\x50\x48\x4F\x4E\x45\x3B\x20\x64\x69\x64\x3D\x41\x4E\x44\x52\x4F\x49\x44\x5F","\x3B\x20\x76\x65\x72\x3D\x31\x30\x2E\x33\x3B\x20\x61\x70\x70\x76\x65\x72\x3D\x31\x30\x2E\x33\x2E\x31\x30\x2E\x33\x31\x32\x36\x3B\x20\x6C\x61\x6E\x67\x75\x61\x67\x65\x3D\x7A\x68\x2D\x63\x6E\x3B\x20\x63\x6F\x75\x6E\x74\x72\x79\x43\x6F\x64\x65\x3D\x43\x4E\x3B\x20\x73\x79\x73\x3D\x41\x4E\x44\x52\x4F\x49\x44\x5F\x31\x32\x3B\x20\x63\x6C\x69\x65\x6E\x74\x5F\x6B\x65\x79\x3D\x32\x61\x63\x32\x61\x37\x36\x64\x3B\x20","\x20\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x20\u83B7\u53D6\u52A9\u529B\u7801\x20\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x20","\x64\x61\x74\x61","\x62\x6F\x6F\x73\x74\x49\x64","\x20\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x20\u83B7\u53D6\u5230\u52A9\u529B\u7801\x20\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x20","\x20\x62\x6F\x6F\x73\x74\x49\x64\x20\x3D\x20","\x20\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x20","\x74\x68\x65\x6E","\x6A\x73\x6F\x6E","\x2F\x72\x65\x73\x74\x2F\x77\x64\x2F\x6C\x64\x32\x30\x32\x32\x2F\x6C\x6D\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2F\x70\x61\x67\x65","\x73\x70\x65\x63\x69\x61\x6C\x2E\x6D\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x2A\x2F\x2A","\x63\x6F\x6D\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x6E\x65\x62\x75\x6C\x61","\x73\x61\x6D\x65\x2D\x6F\x72\x69\x67\x69\x6E","\x63\x6F\x72\x73","\x65\x6D\x70\x74\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x70\x65\x63\x69\x61\x6C\x2E\x6D\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x6C\x64\x32\x30\x32\x32\x2F\x64\x61\x69\x6C\x79\x2D\x63\x61\x73\x68\x2F\x3F\x66\x69\x64\x3D\x32\x36\x37\x39\x35\x31\x36\x38\x37\x38\x26\x63\x63\x3D\x70\x61\x6E\x65\x6C\x50\x6F\x73\x74\x65\x72\x26\x66\x6F\x6C\x6C\x6F\x77\x52\x65\x66\x65\x72\x3D\x31\x35\x31\x26\x77\x65\x62\x76\x69\x65\x77\x5F\x62\x67\x63\x6F\x6C\x6F\x72\x3D\x25\x32\x33\x65\x62\x66\x61\x66\x35\x26\x65\x6E\x74\x72\x79\x5F\x73\x72\x63\x3D\x6B\x73\x5F\x77\x79\x5F\x30\x39\x30\x26\x73\x68\x61\x72\x65\x4D\x65\x74\x68\x6F\x64\x3D\x50\x49\x43\x54\x55\x52\x45\x26\x6B\x70\x6E\x3D\x4E\x45\x42\x55\x4C\x41\x26\x73\x75\x62\x42\x69\x7A\x3D\x4D\x41\x59\x44\x41\x59\x5F\x4D\x4F\x4E\x45\x59\x26\x73\x68\x61\x72\x65\x49\x64\x3D\x31\x36\x39\x31\x33\x37\x38\x31\x34\x33\x34\x36\x33\x30\x26\x5F\x5F\x6C\x61\x75\x6E\x63\x68\x5F\x6F\x70\x74\x69\x6F\x6E\x73\x5F\x5F\x3D\x25\x37\x42\x25\x32\x32\x65\x6E\x61\x62\x6C\x65\x4C\x6F\x61\x64\x69\x6E\x67\x25\x32\x32\x25\x33\x41\x74\x72\x75\x65\x2C\x25\x32\x32\x65\x6E\x61\x62\x6C\x65\x50\x72\x6F\x67\x72\x65\x73\x73\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x2C\x25\x32\x32\x64\x65\x66\x61\x75\x6C\x74\x4C\x6F\x61\x64\x69\x6E\x67\x43\x6F\x6C\x6F\x72\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x33\x30\x30\x36\x62\x37\x34\x25\x32\x32\x25\x37\x44\x26\x73\x68\x61\x72\x65\x4D\x6F\x64\x65\x3D\x41\x50\x50\x26\x6F\x72\x69\x67\x69\x6E\x53\x68\x61\x72\x65\x49\x64\x3D\x31\x36\x39\x31\x33\x37\x38\x31\x34\x33\x34\x36\x33\x30\x26\x6C\x61\x79\x6F\x75\x74\x54\x79\x70\x65\x3D\x34\x26\x73\x68\x61\x72\x65\x4F\x62\x6A\x65\x63\x74\x49\x64\x3D\x31\x39\x35\x38\x36\x33\x37\x35\x32\x26\x73\x68\x61\x72\x65\x55\x72\x6C\x4F\x70\x65\x6E\x65\x64\x3D\x30\x26\x68\x79\x49\x64\x3D\x77\x6F\x72\x6B\x64\x61\x79\x2D\x32\x30\x32\x32\x2D\x63\x61\x73\x68\x26\x74\x69\x6D\x65\x73\x74\x61\x6D\x70\x3D\x31\x36\x35\x31\x31\x31\x38\x34\x32\x36\x39\x39\x36","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65","\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37","\x47\x45\x54","\x77\x61\x69\x74","\x2F\x72\x65\x73\x74\x2F\x77\x64\x2F\x6C\x64\x32\x30\x32\x32\x2F\x6C\x6D\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2F\x6F\x70\x65\x6E\x50\x61\x63\x6B\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x70\x65\x63\x69\x61\x6C\x2E\x6D\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x6C\x64\x32\x30\x32\x32\x2F\x64\x61\x69\x6C\x79\x2D\x63\x61\x73\x68\x2F\x3F\x6C\x61\x79\x6F\x75\x74\x54\x79\x70\x65\x3D\x34\x26\x77\x65\x62\x76\x69\x65\x77\x5F\x62\x67\x63\x6F\x6C\x6F\x72\x3D\x25\x32\x33\x65\x62\x66\x61\x66\x35\x26\x5F\x5F\x6C\x61\x75\x6E\x63\x68\x5F\x6F\x70\x74\x69\x6F\x6E\x73\x5F\x5F\x3D\x25\x37\x42\x25\x32\x32\x65\x6E\x61\x62\x6C\x65\x4C\x6F\x61\x64\x69\x6E\x67\x25\x32\x32\x25\x33\x41\x74\x72\x75\x65\x2C\x25\x32\x32\x65\x6E\x61\x62\x6C\x65\x50\x72\x6F\x67\x72\x65\x73\x73\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x2C\x25\x32\x32\x64\x65\x66\x61\x75\x6C\x74\x4C\x6F\x61\x64\x69\x6E\x67\x43\x6F\x6C\x6F\x72\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x33\x30\x30\x36\x62\x37\x34\x25\x32\x32\x25\x37\x44\x26\x68\x79\x49\x64\x3D\x77\x6F\x72\x6B\x64\x61\x79\x2D\x32\x30\x32\x32\x2D\x63\x61\x73\x68\x26\x65\x6E\x74\x72\x79\x5F\x73\x72\x63\x3D\x6B\x73\x5F\x77\x79\x5F\x30\x38\x37","\u53BB\u52A9\u529B\x20\x2D\x3E\x20","\x2F\x72\x65\x73\x74\x2F\x77\x64\x2F\x6C\x64\x32\x30\x32\x32\x2F\x6C\x6D\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2F\x74\x61\x73\x6B\x2F\x73\x74\x61\x72\x74","\x7B\x22\x74\x61\x73\x6B\x54\x79\x70\x65\x22\x3A\x33\x2C\x22\x62\x6F\x6F\x73\x74\x49\x64\x22\x3A","\x7D","\x50\x4F\x53\x54","\x20\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x20\u52A9\u529B\u7ED3\u679C\x20\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x20","\x2F\x72\x65\x73\x74\x2F\x77\x64\x2F\x6C\x64\x32\x30\x32\x32\x2F\x6C\x6D\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2F\x62\x6F\x6F\x73\x74","\x7B\x22\x74\x79\x70\x65\x22\x3A\x33\x2C\x22\x62\x6F\x6F\x73\x74\x49\x64\x22\x3A","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[],cookie=__Oxdf045[0x0],message;const fetch=require(__Oxdf045[0x1]);let cxgc=__Oxdf045[0x2];if($[__Oxdf045[0x3]]()){Object[__Oxdf045[0x6]](jdCookieNode)[__Oxdf045[0x5]]((_0xe804x6)=>{cookiesArr[__Oxdf045[0x4]](jdCookieNode[_0xe804x6])});if(process[__Oxdf045[0x8]][__Oxdf045[0x7]]&& process[__Oxdf045[0x8]][__Oxdf045[0x7]]=== __Oxdf045[0x9]){console[__Oxdf045[0xa]]= ()=>{}}}else {cookiesArr= [$[__Oxdf045[0xd]](__Oxdf045[0xc]),$[__Oxdf045[0xd]](__Oxdf045[0xe]),...jsonParse($[__Oxdf045[0xd]](__Oxdf045[0x11])|| __Oxdf045[0x12])[__Oxdf045[0x10]]((_0xe804x6)=>{return _0xe804x6[__Oxdf045[0xf]]})][__Oxdf045[0xb]]((_0xe804x6)=>{return !!_0xe804x6})};let github=true;function gettext(){return {url:`${__Oxdf045[0x13]}`,timeout:10000}}async function getHub(){return  new Promise((_0xe804xa)=>{setTimeout(()=>{$[__Oxdf045[0x18]](gettext(),(_0xe804xb,_0xe804xc,_0xe804xd)=>{try{if(_0xe804xb){console[__Oxdf045[0xa]](__Oxdf045[0x14]);github= false}else {_0xe804xd= JSON[__Oxdf045[0x15]](_0xe804xd);cxgc= _0xe804xd[__Oxdf045[0x16]]}}catch(e){github= false;$[__Oxdf045[0x17]](e,_0xe804xc)}finally{_0xe804xa(_0xe804xd)}})})})}function random(_0xe804xf,_0xe804x10){return Math[__Oxdf045[0x1a]](Math[__Oxdf045[0x19]]()* (_0xe804x10- _0xe804xf))+ _0xe804xf}function randomString(_0xe804x12= 12){let _0xe804x13=__Oxdf045[0x1b],_0xe804x14=_0xe804x13[__Oxdf045[0x1c]],_0xe804x15=__Oxdf045[0x0];for(let _0xe804x16=0;_0xe804x16< _0xe804x12;_0xe804x16++){_0xe804x15+= _0xe804x13[__Oxdf045[0x1d]](Math[__Oxdf045[0x1a]](Math[__Oxdf045[0x19]]()* _0xe804x14))};return _0xe804x15}!(async ()=>{if(!cookiesArr[0x0]){$[__Oxdf045[0x27]]($[__Oxdf045[0x21]],__Oxdf045[0x25],__Oxdf045[0x26],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxdf045[0x26]});return}; await getHub();if(!github){console[__Oxdf045[0xa]](__Oxdf045[0x28]);return};let _0xe804x17=__Oxdf045[0x29];console[__Oxdf045[0xa]](__Oxdf045[0x2a]);console[__Oxdf045[0xa]](__Oxdf045[0x2b]);console[__Oxdf045[0xa]](__Oxdf045[0x2c]);let _0xe804x18=cxgc[__Oxdf045[0x2e]](__Oxdf045[0x2d]);for(let _0xe804x16=0;_0xe804x16< cookiesArr[__Oxdf045[0x1c]];_0xe804x16++){if(cookiesArr[_0xe804x16]){cookie= cookiesArr[_0xe804x16];$[__Oxdf045[0x2f]]= _0xe804x16+ 1;$[__Oxdf045[0x30]]= true;$[__Oxdf045[0x31]]= __Oxdf045[0x0];message= __Oxdf045[0x0];console[__Oxdf045[0xa]](`${__Oxdf045[0x32]}${$[__Oxdf045[0x2f]]}${__Oxdf045[0x33]}`);let _0xe804x19=cookie[__Oxdf045[0x34]](/(kuaishou.api_st=[\w\-]+)/)[0x1]+ __Oxdf045[0x35];let _0xe804x1a=__Oxdf045[0x36]+ randomString(16)+ __Oxdf045[0x37]+ _0xe804x19;try{if(boostId== __Oxdf045[0x0]){console[__Oxdf045[0xa]](__Oxdf045[0x38]); await fetch(_0xe804x17+ __Oxdf045[0x40],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdf045[0x41],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdf045[0x42],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdf045[0x3]]()?(process[__Oxdf045[0x8]][__Oxdf045[0x43]]?process[__Oxdf045[0x8]][__Oxdf045[0x43]]:(require(__Oxdf045[0x45])[__Oxdf045[0x44]])):($[__Oxdf045[0xd]](__Oxdf045[0x46])?$[__Oxdf045[0xd]](__Oxdf045[0x46]):__Oxdf045[0x47]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdf045[0x48],"\x41\x63\x63\x65\x70\x74":__Oxdf045[0x49],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdf045[0x4a],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdf045[0x4b],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdf045[0x4c],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdf045[0x4d],"\x52\x65\x66\x65\x72\x65\x72":__Oxdf045[0x4e],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdf045[0x4f],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdf045[0x50],"\x43\x6F\x6F\x6B\x69\x65":_0xe804x1a},"\x6D\x65\x74\x68\x6F\x64":__Oxdf045[0x51]})[__Oxdf045[0x3e]]((_0xe804x1c)=>{return _0xe804x1c[__Oxdf045[0x3f]]()})[__Oxdf045[0x3e]]((_0xe804x1b)=>{if(_0xe804x1b[__Oxdf045[0x39]]&& _0xe804x1b[__Oxdf045[0x39]][__Oxdf045[0x3a]]){boostId= _0xe804x1b[__Oxdf045[0x39]][__Oxdf045[0x3a]];console[__Oxdf045[0xa]](__Oxdf045[0x3b]);console[__Oxdf045[0xa]](__Oxdf045[0x3c]+ boostId);console[__Oxdf045[0xa]](__Oxdf045[0x3d]);_0xe804x18[__Oxdf045[0x4]](boostId);_0xe804x18[__Oxdf045[0x4]](boostId);_0xe804x18[__Oxdf045[0x4]](boostId);_0xe804x18[__Oxdf045[0x4]](boostId)}}); await $[__Oxdf045[0x52]](4000);if(boostId== __Oxdf045[0x0]){ await fetch(_0xe804x17+ __Oxdf045[0x53],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdf045[0x41],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdf045[0x42],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdf045[0x3]]()?(process[__Oxdf045[0x8]][__Oxdf045[0x43]]?process[__Oxdf045[0x8]][__Oxdf045[0x43]]:(require(__Oxdf045[0x45])[__Oxdf045[0x44]])):($[__Oxdf045[0xd]](__Oxdf045[0x46])?$[__Oxdf045[0xd]](__Oxdf045[0x46]):__Oxdf045[0x47]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdf045[0x48],"\x41\x63\x63\x65\x70\x74":__Oxdf045[0x49],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdf045[0x4a],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdf045[0x4b],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdf045[0x4c],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdf045[0x4d],"\x52\x65\x66\x65\x72\x65\x72":__Oxdf045[0x54],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdf045[0x4f],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdf045[0x50],"\x43\x6F\x6F\x6B\x69\x65":_0xe804x1a},"\x6D\x65\x74\x68\x6F\x64":__Oxdf045[0x51]})[__Oxdf045[0x3e]]((_0xe804x1c)=>{return _0xe804x1c[__Oxdf045[0x3f]]()})[__Oxdf045[0x3e]]((_0xe804x1b)=>{if(_0xe804x1b[__Oxdf045[0x39]]&& _0xe804x1b[__Oxdf045[0x39]][__Oxdf045[0x3a]]){boostId= _0xe804x1b[__Oxdf045[0x39]][__Oxdf045[0x3a]];console[__Oxdf045[0xa]](__Oxdf045[0x3b]);console[__Oxdf045[0xa]](__Oxdf045[0x3c]+ boostId);console[__Oxdf045[0xa]](__Oxdf045[0x3d]);_0xe804x18[__Oxdf045[0x4]](boostId);_0xe804x18[__Oxdf045[0x4]](boostId);_0xe804x18[__Oxdf045[0x4]](boostId);_0xe804x18[__Oxdf045[0x4]](boostId)}})}};let _0xe804x1d=_0xe804x18[random(0,_0xe804x18[__Oxdf045[0x1c]])];if(boostId!= __Oxdf045[0x0]){console[__Oxdf045[0xa]](__Oxdf045[0x55]+ boostId)}; await $[__Oxdf045[0x52]](4000); await fetch(_0xe804x17+ __Oxdf045[0x56],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdf045[0x41],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdf045[0x42],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdf045[0x3]]()?(process[__Oxdf045[0x8]][__Oxdf045[0x43]]?process[__Oxdf045[0x8]][__Oxdf045[0x43]]:(require(__Oxdf045[0x45])[__Oxdf045[0x44]])):($[__Oxdf045[0xd]](__Oxdf045[0x46])?$[__Oxdf045[0xd]](__Oxdf045[0x46]):__Oxdf045[0x47]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdf045[0x48],"\x41\x63\x63\x65\x70\x74":__Oxdf045[0x49],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdf045[0x4a],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdf045[0x4b],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdf045[0x4c],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdf045[0x4d],"\x52\x65\x66\x65\x72\x65\x72":__Oxdf045[0x4e],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdf045[0x4f],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdf045[0x50],"\x43\x6F\x6F\x6B\x69\x65":_0xe804x1a},"\x62\x6F\x64\x79":__Oxdf045[0x57]+ _0xe804x1d+ __Oxdf045[0x58],"\x6D\x65\x74\x68\x6F\x64":__Oxdf045[0x59]})[__Oxdf045[0x3e]]((_0xe804x1c)=>{return _0xe804x1c[__Oxdf045[0x3f]]()})[__Oxdf045[0x3e]]((_0xe804x1b)=>{}); await $[__Oxdf045[0x52]](4000); await fetch(_0xe804x17+ __Oxdf045[0x5b],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdf045[0x41],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdf045[0x42],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdf045[0x3]]()?(process[__Oxdf045[0x8]][__Oxdf045[0x43]]?process[__Oxdf045[0x8]][__Oxdf045[0x43]]:(require(__Oxdf045[0x45])[__Oxdf045[0x44]])):($[__Oxdf045[0xd]](__Oxdf045[0x46])?$[__Oxdf045[0xd]](__Oxdf045[0x46]):__Oxdf045[0x47]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdf045[0x48],"\x41\x63\x63\x65\x70\x74":__Oxdf045[0x49],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdf045[0x4a],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdf045[0x4b],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdf045[0x4c],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdf045[0x4d],"\x52\x65\x66\x65\x72\x65\x72":__Oxdf045[0x4e],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdf045[0x4f],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdf045[0x50],"\x43\x6F\x6F\x6B\x69\x65":_0xe804x1a},"\x62\x6F\x64\x79":__Oxdf045[0x5c]+ _0xe804x1d+ __Oxdf045[0x58],"\x6D\x65\x74\x68\x6F\x64":__Oxdf045[0x59]})[__Oxdf045[0x3e]]((_0xe804x1c)=>{return _0xe804x1c[__Oxdf045[0x3f]]()})[__Oxdf045[0x3e]]((_0xe804x1b)=>{if(boostId!= __Oxdf045[0x0]){console[__Oxdf045[0xa]](__Oxdf045[0x5a]);console[__Oxdf045[0xa]](_0xe804x1b)}})}catch(e){}; await $[__Oxdf045[0x52]](2000)}}})()[__Oxdf045[0x24]]((_0xe804x12)=>{$[__Oxdf045[0xa]](__Oxdf045[0x0],`${__Oxdf045[0x20]}${$[__Oxdf045[0x21]]}${__Oxdf045[0x22]}${_0xe804x12}${__Oxdf045[0x23]}`,__Oxdf045[0x0])})[__Oxdf045[0x1f]](()=>{$[__Oxdf045[0x1e]]()});(function(_0xe804x1e,_0xe804x1f,_0xe804x20,_0xe804x21,_0xe804x22,_0xe804x23){_0xe804x23= __Oxdf045[0x5d];_0xe804x21= function(_0xe804x24){if( typeof alert!== _0xe804x23){alert(_0xe804x24)};if( typeof console!== _0xe804x23){console[__Oxdf045[0xa]](_0xe804x24)}};_0xe804x20= function(_0xe804x14,_0xe804x1e){return _0xe804x14+ _0xe804x1e};_0xe804x22= _0xe804x20(__Oxdf045[0x5e],_0xe804x20(_0xe804x20(__Oxdf045[0x5f],__Oxdf045[0x60]),__Oxdf045[0x61]));try{_0xe804x1e= __encode;if(!( typeof _0xe804x1e!== _0xe804x23&& _0xe804x1e=== _0xe804x20(__Oxdf045[0x62],__Oxdf045[0x63]))){_0xe804x21(_0xe804x22)}}catch(e){_0xe804x21(_0xe804x22)}})({})
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
