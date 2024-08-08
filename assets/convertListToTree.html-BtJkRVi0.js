import{_ as n,c as s,o as a,b as e}from"./app-CEKMcJX4.js";const t={},p=e(`<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/sum.js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> convertListToTree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@asfor-fun/utils&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    pid<span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">:</span> <span class="token string">&quot;1-1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    pid<span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token function">convertListToTree</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// [</span></span>
<span class="line"><span class="token comment">//   {</span></span>
<span class="line"><span class="token comment">//     id: &quot;1&quot;,</span></span>
<span class="line"><span class="token comment">//     pid: &quot;0&quot;,</span></span>
<span class="line"><span class="token comment">//     children: [</span></span>
<span class="line"><span class="token comment">//       {</span></span>
<span class="line"><span class="token comment">//         id: &quot;1-1&quot;,</span></span>
<span class="line"><span class="token comment">//         pid: &quot;1&quot;,</span></span>
<span class="line"><span class="token comment">//       },</span></span>
<span class="line"><span class="token comment">//     ],</span></span>
<span class="line"><span class="token comment">//   },</span></span>
<span class="line"><span class="token comment">// ];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[p];function l(c,o){return a(),s("div",null,i)}const u=n(t,[["render",l],["__file","convertListToTree.html.vue"]]),d=JSON.parse('{"path":"/array/convertListToTree.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1723105747000,"contributors":[{"name":"fflinkexin","email":"fflinkexin@chinatelecom.cn","commits":1}]},"filePathRelative":"array/convertListToTree.md"}');export{u as comp,d as data};
