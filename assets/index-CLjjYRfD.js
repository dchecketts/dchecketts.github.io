/* empty css             */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function c(){const i=document.querySelector("header"),r=document.querySelector("footer");function s(){return`
        <header class="bg-green-900 p-5 flex justify-between items-center">
            <h1 class="font-bold text-white text-5xl"><a href="/">Daniel Checketts</a></h1>
            <ul class="flex gap-3">
                <li><a href="/" class="text-white font-semibold border-white border-2 rounded-full p-2 pl-4 pr-4 text-2xl hover:text-gray-300 hover:border-gray-300">Home</a></li>
                <li><a href="/about/" class="text-white font-semibold border-white border-2 rounded-full p-2 pl-4 pr-4 text-2xl hover:text-gray-300 hover:border-gray-300">About</a></li>
                <li><a href="/now/" class="text-white font-semibold border-white border-2 rounded-full p-2 pl-4 pr-4 text-2xl hover:text-gray-300 hover:border-gray-300">Now</a></li>
            </ul>
        </header>`}function o(){return`
    <footer class="bg-gray-200 text-center p-5 flex flex-col items-center dark:bg-gray-700 dark:text-white">
      <p>&copy; 2026 Daniel Checketts</p>
      <div class="flex items-center pt-2 gap-1">
        <a href="https://github.com/dchecketts/"><img src="/images/icons/github-icon.svg" alt="Github" class="min-w-5 max-w-5"></a>
        <a href="www.linkedin.com/in/daniel-checketts"><img src="/images/icons/linkedin-icon.png" alt="LinkedIn" class="min-w-5 max-w-5"></a>
        <a href="mailto:danielkchecketts@gmail.com"><img src="/images/icons/mail-icon.svg" alt="Contact" class="min-w-5 max-w-5"></a>
      </div>
    </footer>`}i&&(i.outerHTML=s()),r&&(r.outerHTML=o())}c();
