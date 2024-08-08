<template><div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/sum.js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> convertListToTree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@asfor-fun/utils"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">    pid<span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">:</span> <span class="token string">"1-1"</span><span class="token punctuation">,</span></span>
<span class="line">    pid<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token function">convertListToTree</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// [</span></span>
<span class="line"><span class="token comment">//   {</span></span>
<span class="line"><span class="token comment">//     id: "1",</span></span>
<span class="line"><span class="token comment">//     pid: "0",</span></span>
<span class="line"><span class="token comment">//     children: [</span></span>
<span class="line"><span class="token comment">//       {</span></span>
<span class="line"><span class="token comment">//         id: "1-1",</span></span>
<span class="line"><span class="token comment">//         pid: "1",</span></span>
<span class="line"><span class="token comment">//       },</span></span>
<span class="line"><span class="token comment">//     ],</span></span>
<span class="line"><span class="token comment">//   },</span></span>
<span class="line"><span class="token comment">// ];</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


