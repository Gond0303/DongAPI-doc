<template><div><p>本文讲解了<code v-pre>Dong-API-SDK</code>在使用过程中的配置选项</p>
<h2 id="🚀-使用方式" tabindex="-1"><a class="header-anchor" href="#🚀-使用方式"><span>🚀 使用方式</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意⚠️</p>
<ul>
<li><strong>JDK 8+</strong></li>
<li><strong>Maven or Gradle</strong></li>
</ul>
</div>
<h2 id="springboot" tabindex="-1"><a class="header-anchor" href="#springboot"><span>SpringBoot</span></a></h2>
<h3 id="🍊maven" tabindex="-1"><a class="header-anchor" href="#🍊maven"><span>🍊Maven</span></a></h3>
<p>在项目的pom.xml的dependencies中加入以下内容:</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">com.dong</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">dongapi-client-sdk</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">0.0.1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🍐gradle" tabindex="-1"><a class="header-anchor" href="#🍐gradle"><span>🍐Gradle</span></a></h3>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>implementation group: 'icu.qimuu', name: 'qi-api-sdk', version: '0.0.4'</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="access-key、secret-key" tabindex="-1"><a class="header-anchor" href="#access-key、secret-key"><span><code v-pre> access-key、secret-key</code></span></a></h3>
<p>是使用Qi-API平台和Qi-API-SDK开发者工具必须要有的，可以前往<a href="https://api.dckeji.top/account/center" target="_blank" rel="noopener noreferrer">Dong-API平台获取开发者调用凭证</a></p>
</div></template>


