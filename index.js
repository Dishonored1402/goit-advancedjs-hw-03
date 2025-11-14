/* empty css                      */import{S as g,i as o}from"./assets/vendor-BrddEoy-.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",m="53252560-1c4ffe9c456d309b0775dfd67";function y(t){const a=new URLSearchParams({key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${d}?${a.toString()}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function p(t){return t.map(({webformatURL:a,largeImageURL:s,tags:i,likes:e,views:r,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${a}"
              alt="${i}"
              loading="lazy"
            />
          </a>
          <div class="gallery-info">
            <div class="gallery-info-item">
              <span class="gallery-info-label">Likes</span>
              <span class="gallery-info-value">${e}</span>
            </div>
            <div class="gallery-info-item">
              <span class="gallery-info-label">Views</span>
              <span class="gallery-info-value">${r}</span>
            </div>
            <div class="gallery-info-item">
              <span class="gallery-info-label">Comments</span>
              <span class="gallery-info-value">${l}</span>
            </div>
            <div class="gallery-info-item">
              <span class="gallery-info-label">Downloads</span>
              <span class="gallery-info-value">${u}</span>
            </div>
          </div>
        </li>`).join("")}function h(t){t&&(t.innerHTML="")}const c=document.querySelector(".search-form"),f=document.querySelector(".gallery"),n=document.querySelector(".loader-wrapper"),v=new g(".gallery a",{captionsData:"alt",captionDelay:250});c==null||c.addEventListener("submit",L);function L(t){t.preventDefault();const s=t.currentTarget.elements.searchQuery.value.trim();if(!s){o.warning({title:"Warning",message:"Please fill the search field before searching.",position:"topRight"});return}h(f),b(),y(s).then(i=>{if(!i.hits||i.hits.length===0){o.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const e=p(i.hits);f.innerHTML=e,v.refresh()}).catch(i=>{o.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{S()})}function b(){n==null||n.classList.remove("is-hidden")}function S(){n==null||n.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
