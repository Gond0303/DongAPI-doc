<template><div><h3 id="接口信息" tabindex="-1"><a class="header-anchor" href="#接口信息"><span>接口信息</span></a></h3>
<ul>
<li>接口状态 ： <Badge text="正常"/></li>
<li>请求方式 ：<code v-pre>GET</code></li>
<li>返回格式 ：<code v-pre>JSON</code></li>
<li>扣除积分数 ：<code v-pre>10</code></li>
</ul>
<h3 id="请求地址" tabindex="-1"><a class="header-anchor" href="#请求地址"><span>请求地址</span></a></h3>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">https://gateway.dckeji.top/api/wyMusic</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数"><span>请求参数</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:center">参数名</th>
<th style="text-align:center">必选</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">type</td>
<td style="text-align:center">是</td>
<td style="text-align:center">string</td>
<td style="text-align:center">输入json</td>
</tr>
</tbody>
</table>
<h3 id="响应参数" tabindex="-1"><a class="header-anchor" href="#响应参数"><span>响应参数</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:center">参数名称</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">code</td>
<td style="text-align:center">int</td>
<td style="text-align:center">响应码</td>
</tr>
<tr>
<td style="text-align:center">data.info.name</td>
<td style="text-align:center">string</td>
<td style="text-align:center">歌曲名称</td>
</tr>
<tr>
<td style="text-align:center">data.info.auther</td>
<td style="text-align:center">string</td>
<td style="text-align:center">歌曲作者</td>
</tr>
<tr>
<td style="text-align:center">data.info.pic_url</td>
<td style="text-align:center">string</td>
<td style="text-align:center">歌曲封面图地址</td>
</tr>
<tr>
<td style="text-align:center">data.info.url</td>
<td style="text-align:center">string</td>
<td style="text-align:center">歌曲在线播放地址</td>
</tr>
<tr>
<td style="text-align:center">message</td>
<td style="text-align:center">string</td>
<td style="text-align:center">返回信息描述</td>
</tr>
</tbody>
</table>
<h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">注意 🔔️</p>
<p>没有开发者调用凭证无法调用接口哦！！！ <a href="https://api.dckeji.top/account/center" target="_blank" rel="noopener noreferrer">前往获取开发者凭证</a></p>
</div>
<p><strong>注入Service</strong></p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Resource</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">private</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ApiService</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> apiService</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例一 ：推荐👍</strong></li>
</ul>
<p><strong>通过yml配置开发者调用凭证</strong></p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">GetMapping</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/loveTalk</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> LoveResponse </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getLoveTalk</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    LoveResponse</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> loveResponse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    try</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        loveResponse </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> apiService</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">randomLoveTalk</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">ApiException </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        throw</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> BusinessException</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getCode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(),</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getMessage</span><span style="--shiki-light:#999999;--shiki-dark:#666666">());</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> loveResponse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>响应示例：</strong></p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">value</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://music.163.com/song/media/outer/url?id=529668356</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例二：推荐👍</strong></li>
</ul>
<p><strong>搭配<a href="https://github.com/qimu666/EasyWeb" target="_blank" rel="noopener noreferrer">EasyWeb</a>快速开发Web项目</strong></p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">GetMapping</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/loveTalk/easyWeb</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> BaseResponse</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">LoveResponse</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> getLoveTalkEasyWeb</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    LoveResponse</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> loveResponse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    try</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        loveResponse </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> apiService</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">randomLoveTalk</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">ApiException </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        throw</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> BusinessException</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getCode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(),</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getMessage</span><span style="--shiki-light:#999999;--shiki-dark:#666666">());</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ResultUtils</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">success</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">loveResponse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>响应示例：</strong></p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">code</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">data</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">info</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">id</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 5.29668356E8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">name</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">你要的全拿走</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">auther</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">胡彦斌</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pic_url</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://p2.music.126.net/um599QnnJiNQhZgWLtgmXw==/109951168111322942.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">url</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://music.163.com/song/media/outer/url?id=529668356</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">update_time</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1022</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">message</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ok</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例三：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">GetMapping</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/loveTalk/setKey</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> LoveResponse </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getLoveTalkSetKey</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    LoveResponse</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> loveResponse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    try</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        QiApiClient</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> qiApiClient</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> QiApiClient</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">7052a8594339a519e0ba5eb04a267a60</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">d8d6df60ab209385a09ac796f1dfe3e1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        loveResponse </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> apiService</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">randomLoveTalk</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">qiApiClient</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">ApiException </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        throw</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> BusinessException</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getCode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(),</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getMessage</span><span style="--shiki-light:#999999;--shiki-dark:#666666">());</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> loveResponse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更多示例详见-dong-api-sdk-demo-示例项目" tabindex="-1"><a class="header-anchor" href="#更多示例详见-dong-api-sdk-demo-示例项目"><span><strong>更多示例详见：<a href="https://github.com/Gond0303/DongAPI-Backend/blob/main/src/main/java/com/dong/project/controller/Demo.java" target="_blank" rel="noopener noreferrer">Dong-API-SDK-Demo 示例项目</a></strong></span></a></h3>
</div></template>


