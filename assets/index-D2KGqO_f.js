(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Os="modulepreload",qs=function(e,t){return new URL(e,t).href},Xn={},Me=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),c=r?.nonce||r?.getAttribute("nonce");s=l(n.map(u=>{if(u=qs(u,a),u in Xn)return;Xn[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(a)for(let y=o.length-1;y>=0;y--){const E=o[y];if(E.href===u&&(!d||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${p}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Os,d||(f.as="script"),f.crossOrigin="",f.href=u,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((y,E)=>{f.addEventListener("load",y),f.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return s.then(o=>{for(const r of o||[])r.status==="rejected"&&i(r.reason);return t().catch(i)})},$a='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="11"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',Fs='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.595 24 12.297c0-6.627-5.373-12-12-12z"/></svg>',Le='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',Ds='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',gt='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.2v13.6a1 1 0 0 0 1.5.87l11-6.8a1 1 0 0 0 0-1.74l-11-6.8A1 1 0 0 0 8 5.2z"/></svg>',Ma='<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6.5" y="4.5" width="4" height="15" rx="1.4"/><rect x="13.5" y="4.5" width="4" height="15" rx="1.4"/></svg>',Us='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5 15.4 17.5"/><path d="M15.4 6.5 8.6 10.5"/></svg>',Vs='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3.5h9l4.5 4.5v12a1 1 0 0 1-1 1h-12.5a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1z"/><path d="M14 3.5V8h4.5"/><path d="M8.5 13h7"/><path d="M8.5 16.5h5"/></svg>',Ws='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="9" width="18" height="12" rx="1.5"/><line x1="12" y1="9" x2="12" y2="21"/><path d="M3 13h18"/><path d="M12 9S10.6 4.5 8.2 4.5A2.2 2.2 0 0 0 8.2 9z"/><path d="M12 9s1.4-4.5 3.8-4.5A2.2 2.2 0 0 1 15.8 9z"/></svg>',ae='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',Ks='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><rect x="9.6" y="10.2" width="4.8" height="3.6" rx="1.2"/></svg>',Gs='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5s-7.2-4.4-7.2-9.6A3.9 3.9 0 0 1 12 8.4a3.9 3.9 0 0 1 7.2 2.5c0 5.2-7.2 9.6-7.2 9.6z"/><path d="M8.4 5.2 9.6 3"/><path d="M12 4.2V2"/><path d="M15.6 5.2 14.4 3"/></svg>',_a='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.9 18.2A2 2 0 0 0 3.6 21h16.8a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13.5"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',zs='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6.6" y="2.6" width="10.8" height="18.8" rx="2.4"/><line x1="10.4" y1="5.6" x2="13.6" y2="5.6"/><line x1="3.6" y1="20.8" x2="20.4" y2="3.2"/></svg>',z=e=>`<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#${e}"/></svg>`,N={wave:`<span class="ico ico-wave" title="揮手">${z("i-wave")}</span>`,clap:`<span class="ico ico-clap" title="拍手"><span class="hand l">${z("i-hand")}</span><span class="hand r">${z("i-hand")}</span><span class="spark">${z("i-spark")}</span></span>`,mic:`<span class="ico ico-mic" title="大合唱">${z("i-mic")}</span>`,jump:`<span class="ico ico-jump" title="跳躍">${z("i-jump")}<span class="ground"></span></span>`,spin:`<span class="ico ico-spin" title="轉臂">
           <svg class="body" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-cheer"/></svg>
           <svg class="arm" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-cheer-arm"/></svg>
         </span>`};N.turn=N.spin;N.chant=N.mic;const Zn='<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-mic"/></svg>',Js='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',Ys='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',Nt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>',Pa='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 5h2v14H5z"/><path d="M19 5.6v12.8a1 1 0 0 1-1.6.8l-9.2-6.4a1 1 0 0 1 0-1.6l9.2-6.4a1 1 0 0 1 1.6.8z"/></svg>',Ra='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 5h2v14h-2z"/><path d="M5 5.6v12.8a1 1 0 0 0 1.6.8l9.2-6.4a1 1 0 0 0 0-1.6L6.6 4.8a1 1 0 0 0-1.6.8z"/></svg>',Xs='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><rect x="11" y="12" width="8" height="5" rx="1" fill="currentColor" stroke="none"/></svg>',Qn='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',Zs='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.8"/><path d="M12 2.5v2.1M12 19.4v2.1M4.7 4.7l1.5 1.5M17.8 17.8l1.5 1.5M2.5 12h2.1M19.4 12h2.1M4.7 19.3l1.5-1.5M17.8 6.2l1.5-1.5"/></svg>',Ha='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1z"/></svg>',ea=Object.freeze({jp:'<svg class="chant-version-flag chant-version-flag-jp" viewBox="0 0 24 16" role="img" aria-label="日本版"><rect x="1" y="1" width="22" height="14" rx="2" fill="#fff" stroke="currentColor" stroke-opacity=".45"/><circle cx="12" cy="8" r="4" fill="#bc002d"/></svg>',kr:'<svg class="chant-version-flag chant-version-flag-kr" viewBox="0 0 24 16" role="img" aria-label="韓國版"><rect x="1" y="1" width="22" height="14" rx="2" fill="#fff" stroke="currentColor" stroke-opacity=".45"/><path d="M12 4a4 4 0 0 1 0 8v-4a2 2 0 0 0 0-4Z" fill="#cd2e3a"/><path d="M12 12a4 4 0 0 1 0-8v4a2 2 0 0 0 0 4Z" fill="#0047a0"/><path d="M4 4h3m-3 1.5h3M17 10.5h3m-3 1.5h3" stroke="#141414" stroke-width="1" stroke-linecap="round"/></svg>'}),Qs="https://github.com/watain666/Vaundy-Taiwan-2026",ei="https://www.threads.com/@brainginger/post/DdiLWztgen9",ti="https://vaundy-seoul-2026.pages.dev/",ni="https://gall.dcinside.com/mgallery/board/view/?id=vaundy0606&no=35550";function Oa(e){return`
    <footer class="credits">
      <nav class="credits-links" aria-label="專案連結">
        <p class="credits-copy">
          <span class="credits-copy-desktop">VAUNDY ASIA ARENA TOUR 2026 &ldquo;HORO&rdquo;・TAIWAN FAN CHANT GUIDE（非官方粉絲製作）</span>
          <span class="credits-copy-mobile">VAUNDY ASIA ARENA TOUR 2026 &ldquo;HORO&rdquo;<br>TAIWAN FAN CHANT GUIDE（非官方粉絲製作）</span>
          <span class="build">${e}</span>
        </p>
        <span class="credits-origin">
          <a class="credits-link credits-repo" href="${Qs}" target="_blank" rel="noopener" aria-label="GitHub Repo" title="GitHub Repo">
            ${Fs}
          </a>
          <a class="credits-fork" href="${ti}" target="_blank" rel="noopener" aria-label="Fork from SEOUL 응원가이드">
            Fork from SEOUL 응원가이드
          </a>
        </span>
        <a class="credits-fork" href="${ni}" target="_blank" rel="noopener" aria-label="Thanks to the original Korean creator, 카쿠메.">
          Thanks to the original Korean creator, 카쿠메.
        </a>
        <span class="credits-actions">
          <a class="credits-link" href="${ei}" target="_blank" rel="noopener" aria-label="意見回饋" title="意見回饋">
            <span>意見回饋</span>
          </a>
          <button class="credits-link changelog-trigger" type="button" data-open-changelog aria-haspopup="dialog" aria-controls="changelog-view">
            更新日誌
          </button>
        </span>
      </nav>
    </footer>
  `}function ai(e,t=`<button class="theme-toggle home-theme" type="button" data-theme-toggle aria-label="切換主題">${Ha}</button>`){return`
    <section class="hero">
      ${t}
      <div class="hero-inner">
        <div class="eyebrow">ASIA ARENA TOUR 2026</div>
        <h1 class="tour-title"><span>VAUNDY</span>&ldquo;HORO&rdquo;</h1>

        <div class="countdown" id="countdown">
          <div class="cd-pill">
            <span class="cd-dday" id="cd-dday">D-00</span>
            <span class="cd-sep"></span>
            <span class="cd-clock" id="cd-clock">00:00:00</span>
          </div>
        </div>

        <div class="show-meta">
          <div class="show-row">
            <span class="show-day">10.31<span class="dow">六</span></span>
            <span class="show-time">19:00</span>
          </div>
          <div class="show-row">
            <span class="show-day">11.01<span class="dow">日</span></span>
            <span class="show-time">19:00</span>
          </div>
          <div class="show-venue">TAIPEI ARENA, TAIPEI</div>
        </div>

        <!-- 공연 당일에만 나타나는 오늘의 일정 -->
        <div class="today-card" id="today-card" hidden>
          <div class="today-head"><span class="dot"></span><span id="today-title">今日</span></div>
          <div class="today-now" id="today-now"></div>
          <ul class="today-list" id="today-list"></ul>
        </div>

        <nav class="main-menu">
          <button class="menu-btn" id="guide-btn">
            <span class="menu-btn-label">應援指南 無劇透</span>
          </button>
        </nav>

        <section class="info-section">
      <div class="menu-card">
      <div class="info-card" id="info-card">
        <button class="menu-row info-toggle" id="info-toggle" aria-expanded="false" aria-controls="info-panel">
          <span class="info-toggle-icon">${$a}</span>
          <span class="info-toggle-label">演出資訊</span>
          <span class="info-toggle-chevron">${ae}</span>
        </button>
        <div class="info-panel" id="info-panel" inert aria-hidden="true">
          <template class="info-panel-template">
          <div class="info-panel-inner">
            <div class="info-panel-title"><span class="bar">|</span> 演出概要 <span class="bar">|</span></div>
            <dl class="info-facts">
              <dt>演出名稱</dt>
              <dd>Vaundy ASIA ARENA TOUR 2026 &ldquo;HORO&rdquo; IN TAIPEI</dd>

              <dt>日期／時間</dt>
              <dd>
                <span class="em">2026.10.31（六）19:00</span> ／ <span class="em">11.01（日）19:00</span>
                <span class="sub">兩天皆 17:30 開場・時間以官方公告為準</span>
              </dd>

              <dt>地點</dt>
              <dd>
                台北小巨蛋 Taipei Arena
                <span class="sub">105037 臺北市松山區南京東路4段2號</span>
              </dd>

              <dt>入場規則</dt>
              <dd>
                全場實名制
                <span class="sub">入場請攜帶票券及填寫的有效證件正本；外籍觀眾依售票平台規定攜帶護照正本</span>
              </dd>

              <dt>票價</dt>
              <dd>
                <p class="info-price">
                  <span>NT$ 5,880</span>
                  <span>NT$ 4,880</span>
                  <span>NT$ 3,880</span>
                  <span>NT$ 2,880</span>
                  <span>NT$ 800</span>
                </p>
                <span class="sub">另收購票手續費</span>
              </dd>

              <dt>取票方式</dt>
              <dd>
                依 Ticket Plus 遠大售票平台提供
                <span class="sub">實名制資料請務必填寫正確，入場規定以售票平台公告為準</span>
              </dd>

              <dt>購票</dt>
              <dd>
                Ticket Plus 遠大售票
                <span class="sub">票務、實名制與入場問題請依售票平台最新公告確認</span>
              </dd>
            </dl>

            <a class="info-book-link" href="https://ticketplus.com.tw/activity/6c3d8c24e0f00c9c84777615c001bebe" target="_blank" rel="noopener">
              ${Le} 前往 Ticket Plus 售票頁面
            </a>

            <hr class="info-divider">

            <div class="info-panel-title"><span class="bar">|</span> 觀眾入場資訊 <span class="bar">|</span></div>
            <div class="info-table-wrap">
              <table class="info-table">
                <colgroup>
                  <col class="info-col-label">
                  <col class="info-col-day">
                  <col class="info-col-day">
                  <col class="info-col-note">
                </colgroup>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>10/31（六）</th>
                    <th>11/1（日）</th>
                    <th>備註</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="label" data-label="項目">開場／入場</td>
                    <td data-label="10/31（六）">17:30</td>
                    <td data-label="11/1（日）">17:30</td>
                    <td class="note" data-label="備註">官方已公布</td>
                  </tr>
                  <tr>
                    <td class="label" data-label="項目">正式演出</td>
                    <td data-label="10/31（六）">19:00</td>
                    <td data-label="11/1（日）">19:00</td>
                    <td class="note" data-label="備註">官方已公布</td>
                  </tr>
                  <tr>
                    <td class="label" data-label="項目">周邊／物品寄放</td>
                    <td data-label="10/31（六）">待公告</td>
                    <td data-label="11/1（日）">待公告</td>
                    <td class="note" data-label="備註">請以主辦與場館公告為準</td>
                  </tr>
                  <tr>
                    <td class="label" data-label="項目">演出結束</td>
                    <td data-label="10/31（六）">預計 21:00 左右</td>
                    <td data-label="11/1（日）">預計 21:00 左右</td>
                    <td class="note" data-label="備註">實際時間以現場為準</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="info-footnote">※ 目前官方已確認開場與開演時間；周邊販售、物品寄放與入場動線公布後會再補上。<br>※ 最新資訊請以主辦單位、Ticket Plus 與台北小巨蛋公告為準。</p>



          </div>
          </template>
        </div>
      </div>

      <div class="info-card" id="notice-card">
        <button class="menu-row info-toggle" aria-expanded="false">
          <span class="info-toggle-icon">${Vs}</span>
          <span class="info-toggle-label">公告・指南</span>
          <span class="info-toggle-chevron">${ae}</span>
        </button>
        <div class="info-panel" inert aria-hidden="true">
          <template class="info-panel-template">
          <div class="info-panel-inner">
            <p class="way-note">台北場的場館地圖、MD、身分確認等<b>官方公告</b>會在公布後補上。</p>
            <div class="notice-grid" id="notice-grid"></div>
            <p class="notice-empty" id="notice-empty" hidden>
              台北場官方公告圖片尚未公布，請先以主辦與場館公告為準。
            </p>
            <p class="info-footnote">※ 台北場官方公告圖片公布後再更新。</p>
          </div>
          </template>
        </div>
      </div>

      <div class="info-card" id="seat-card">
        <button class="menu-row info-toggle" aria-expanded="false">
          <span class="info-toggle-icon">${Ks}</span>
          <span class="info-toggle-label">座位配置圖</span>
          <span class="info-toggle-chevron">${ae}</span>
        </button>
        <div class="info-panel" inert aria-hidden="true">
          <template class="info-panel-template">
          <div class="info-panel-inner">
            <div class="info-panel-title"><span class="bar">|</span> 台北小巨蛋 Taipei Arena <span class="bar">|</span></div>

            <p class="way-note">台北場最新官方舞台／座位配置圖：</p>
            <div class="seat-wrap">
              <a class="seat-map-link" href="./images/taipei-stage-map.webp" target="_blank" rel="noopener">
                <img class="seat-map-image" data-src="./images/taipei-stage-map-preview.webp" width="2772" height="3681" alt="Vaundy ASIA ARENA TOUR 2026「HORO」台北場台北小巨蛋舞台與座位配置圖，含各區票價；點擊查看原尺寸" loading="lazy" decoding="async">
              </a>
              <p class="seat-map-caption">點擊圖片後才會載入壓縮原圖，可開啟原尺寸查看。</p>
            </div>
            <p class="way-note">圖中票價與票區依主辦單位公布的配置圖整理；實際座位、入場動線與現場安排仍以票券及演出當日公告為準。</p>
            <div class="info-book-links">
              <a class="info-book-link" href="https://ticketplus.com.tw/activity/6c3d8c24e0f00c9c84777615c001bebe" target="_blank" rel="noopener">
                ${Le} Ticket Plus 售票頁面
              </a>
              <a class="info-book-link" href="https://www.arena.taipei/" target="_blank" rel="noopener">
                ${Le} 台北小巨蛋官網
              </a>
              <a class="info-book-link" href="https://twconcertview.com/venue/taipei-arena-center-stage/" target="_blank" rel="noopener">
                ${Le} 台灣各大場館視野
              </a>
            </div>

            <p class="info-footnote">※ 若主辦單位後續更新舞台、票區或票價，請以最新官方公告為準。</p>
          </div>
          </template>
        </div>
      </div>

      <div class="info-card" id="way-card">
        <button class="menu-row info-toggle" aria-expanded="false">
          <span class="info-toggle-icon">${Ds}</span>
          <span class="info-toggle-label">交通方式</span>
          <span class="info-toggle-chevron">${ae}</span>
        </button>
        <div class="info-panel" inert aria-hidden="true">
          <template class="info-panel-template">
          <div class="info-panel-inner">
            <div class="way-addr">
              <b>台北小巨蛋 Taipei Arena</b>
              <span>105037 臺北市松山區南京東路4段2號</span>
            </div>
            <div class="way-btns">
              <a href="https://www.arena.taipei/cp.aspx?n=459956E830D4A8BB" target="_blank" rel="noopener">場館交通資訊</a>
              <a href="https://web.metro.taipei/pages2026/WebStation/109" target="_blank" rel="noopener">台北捷運 G17</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Taipei+Arena+Taipei" target="_blank" rel="noopener">Google 地圖</a>
              <button type="button" id="copy-addr">複製地址</button>
            </div>

            <p class="way-note">演出日場館周邊預計人潮與車流較多，請<b>優先搭乘大眾運輸並預留入場時間</b>。</p>

            <div class="way-sec">
              <h4>捷運 <span>最推薦</span></h4>

              <div class="way-block">
                <div class="way-block-t">① 松山新店線（綠線） → <b>G17 台北小巨蛋站</b></div>
                <ul class="way-ul">
                  <li>搭乘台北捷運松山新店線至 G17 台北小巨蛋站，從<b> 2 號出口</b>出站即達。</li>
                  <li>從其他捷運路線前往時，請先轉乘至松山新店線；出發前可用台北捷運官方網站確認路線與營運資訊。</li>
                </ul>
              </div>
            </div>

            <div class="way-sec">
              <h4>公車</h4>
              <ul class="way-ul">
                <li>可搜尋站名「臺北小巨蛋」或「捷運台北小巨蛋站」。</li>
                <li>公車路線、到站時間與演出日改道資訊，請以臺北市公車動態資訊及現場公告為準。</li>
              </ul>
            </div>

            <div class="way-sec">
              <h4>開車／停車</h4>
              <ul class="way-ul warn">
                <li>活動日周邊車流與停車需求高，建議不要把開車作為首選。</li>
                <li>若需開車，請先查看台北小巨蛋官方停車與交通公告；場館車位有限，<b>停車不等於保證入場</b>。</li>
                <li>散場時請依工作人員與交通管制指示離場，避免在場館周邊久候。</li>
              </ul>
            </div>

            <p class="info-footnote">※ 地圖 App 需要網路連線。<br>※ 出口、交通管制、停車與臨時接駁若有變更，均以台北小巨蛋、台北捷運及主辦官方公告為準。</p>
          </div>
          </template>
        </div>
      </div>

      <div class="info-card" id="manner-card">
        <button class="menu-row info-toggle" aria-expanded="false">
          <span class="info-toggle-icon">${Gs}</span>
          <span class="info-toggle-label">應援禮儀・第一次參加</span>
          <span class="info-toggle-chevron">${ae}</span>
        </button>
        <div class="info-panel" inert aria-hidden="true">
          <template class="info-panel-template">
          <div class="info-panel-inner">

            <p class="way-note">不知道應援口號也沒關係。<b>應援不是義務。</b>這份指南整理的是「知道後會更有趣的事」，不是必須背熟的作業。安靜站著欣賞也很棒。</p>

            <div class="way-sec">
              <h4>第一次參加 <span>知道這些就足夠</span></h4>
              <ul class="way-ul">
                <li><b>不用全部跟著做。</b>只要在熟悉的歌曲、熟悉的段落一起應援，就能玩得很開心</li>
                <li>不會日文也沒關係・大合唱多半是<b>「Hu Hu」、「DA-DA-DA」</b>這類聲音，記住發音就可以</li>
                <li>本指南的動作全部都是<b>徒手</b>完成，不需要另外準備應援物品</li>
                <li>晚一拍跟著周圍的人做也完全不奇怪</li>
                <li>場館內網路訊號可能不穩。請<b>在家先開啟一次這個頁面</b>・歌詞會儲存在手機裡，沒有網路也能查看</li>
              </ul>
            </div>

            <div class="way-sec">
              <h4>一起遵守 <span>為了大家的觀賞體驗</span></h4>
              <ul class="way-ul warn">
                <li><b>禁止拍攝・錄音・錄影。</b>若有允許拍攝的段落，現場會另行通知</li>
                <li>演出中請<b>調低手機螢幕亮度</b>。昏暗觀眾席中的亮螢幕，後方觀眾會看得非常清楚</li>
                <li>請<b>避免使用手機閃光燈</b>。舞台演出連燈光完全熄滅的瞬間都經過設計，觀眾席的一道光可能破壞那個畫面
                  <span class="way-hint">若有全場一起舉燈的安排，演出中會另行通知</span></li>
                <li>安靜歌曲・原聲樂段請<b>克制口號與歡呼</b>，很多人是來聽歌的</li>
                <li>把手大幅揮過頭頂時，請留意<b>左右與後方觀眾的視線</b></li>
                <li>演出中的交談與歌曲解說，請留到曲目結束後再分享</li>
                <li>高帽子・蓬鬆髮型可能遮擋後方觀眾視線</li>
                <li>在人潮密集的空間裡，氣味強烈的香水可能讓他人感到不適</li>
              </ul>
            </div>

            <div class="way-sec">
              <h4>如果是站席</h4>
              <ul class="way-ul">
                <li><b>不要往前推。</b>後方推擠的力量會直接累積到前排</li>
                <li>大包包請放進<b>行李寄放處</b>・放在腳邊可能導致跌倒</li>
                <li>如果周圍有人跌倒，請不要推擠，<b>停下來扶起對方</b></li>
                <li>入場前先喝水、先上洗手間，因為要站立 2 小時</li>
                <li>若呼吸急促或頭暈，請不要勉強，告知<b>附近的工作人員</b></li>
              </ul>
            </div>

            <p class="info-footnote">※ 本指南由粉絲製作。拍攝、攜入、再次入場等官方規定，以 Ticket Plus、台北小巨蛋公告與<b>演出當天現場指示</b>為準。</p>
          </div>
          </template>
        </div>
      </div>

      <div class="info-card" id="vaws-card">
        <button class="menu-row info-toggle" aria-expanded="false">
          <span class="info-toggle-icon">${Ws}</span>
          <span class="info-toggle-label">VAWS 會員票卡</span>
          <span class="info-toggle-chevron">${ae}</span>
        </button>
        <div class="info-panel" inert aria-hidden="true">
          <template class="info-panel-template">
          <div class="info-panel-inner">
            <div class="info-panel-title"><span class="bar">|</span> 場館限定特典 <span class="bar">|</span></div>

            <p class="way-note">VAWS MEMBERS 的「公演別原創票卡」為巡演場館限定企劃；台北場攤位位置、開放時間與領取方式目前尚待官方公告。</p>

            <dl class="info-facts">
              <dt>台北場</dt>
              <dd>
                <span class="em">台北小巨蛋 Taipei Arena</span>
                <span class="sub">2026.10.31（六）・11.01（日）</span>
              </dd>

              <dt>對象</dt>
              <dd>
                <span class="em">VAWS MEMBERS 會員</span>
                <span class="sub">是否可於演出當日新加入、兌換地點與流程，請等待官方公告</span>
              </dd>

              <dt>攤位資訊</dt>
              <dd>
                <span class="em">待官方公布</span>
                <span class="sub">其他場次的攤位位置與營運時間不適用於台北場</span>
              </dd>
            </dl>

            <ul class="way-ul warn">
              <li>官方公布後，請依公告中的 QR 碼與兌換流程辦理。</li>
              <li>攤位時間與數量可能依準備狀況、天氣及現場人流調整。</li>
              <li>開場前後預計人潮較多，請預留時間。</li>
            </ul>

            <a class="info-book-link" href="https://member.vaundy.jp/feature/ASIAARENATOUR_2026" target="_blank" rel="noopener">
              ${Le} 查看 VAWS 官方巡演頁面
            </a>

            <p class="info-footnote">※ 以上內容以 VAWS MEMBERS 官方公告為準，詳細安排可能依演出當天現場狀況調整。</p>
          </div>
          </template>
        </div>
      </div>

      <div class="menu-links">
        <a class="menu-chip" href="https://vaundy.jp/?lang=en" target="_blank" rel="noopener">
          <span class="chip-ico">${Le}</span>
          <span class="chip-label">官方網站</span>
        </a>
        <button class="menu-chip spoiler" type="button" id="setlist-btn">
          <span class="chip-ico warn">${_a}</span>
          <span class="chip-label">東京/首爾歌單</span>
          <span class="chip-note">含劇透</span>
        </button>
      </div>
      </div>

      <!-- 폰 플래시(폰 반딧불) 안내 — 접지 않고 바로 보이는 한 문단 -->
      <aside class="home-note">
        <span class="home-note-ico">${zs}</span>
        <div class="home-note-body">
          <b>請避免使用手機閃光燈</b>
          <p>舞台演出連燈光完全熄滅的瞬間都經過設計。觀眾席的一道光會打破黑暗，讓精心安排的畫面失去效果。</p>
          <p class="sub">若有全場一起舉燈的安排，演出中會另行通知。</p>
        </div>
      </aside>

      <div class="home-foot">
        <button class="share-btn" type="button" id="share-btn">${Us} 分享</button>
      </div>
        </section>
      </div>
    </section>

    ${Oa(e)}
  `}const A=[{id:"Tokimeki",title:"心動 (Tokimeki)",translationCredit:"巴哈姆特的月勳",youtubeId:"-_PKhPMXMDY"},{id:"KaijuNoHanauta",title:"怪獸之花歌 (怪獣の花唄)",translationCredit:"巴哈姆特的月勳",youtubeId:"UM9XNpgrqVk"},{id:"CHAINSAWBLOOD",title:"CHAINSAW BLOOD",translationCredit:"巴哈姆特的月勳",youtubeId:"FL1QjjkZVm4"},{id:"KoikazeniNosete",title:"乘著戀愛感冒 (恋風邪にのせて)",translationCredit:"巴哈姆特的月勳",youtubeId:"1FIhcdocT-k"},{id:"Odoriko",title:"舞者 (踊り子)",translationCredit:"巴哈姆特的月勳",youtubeId:"7HgJIAUtICU"},{id:"HadakaNoYusha",title:"裸身勇者 (裸の勇者)",translationCredit:"巴哈姆特的月勳",youtubeId:"FT0GKCuSaW0"},{id:"Fukakouryoku",title:"不可幸力 (不可幸力)",translationCredit:"巴哈姆特的月勳",youtubeId:"Gbz2C2gQREI"},{id:"Reunion",title:"重逢 (再会)",translationCredit:"巴哈姆特的月勳",youtubeId:"WcaSSvtHFeM"},{id:"hanaurana",title:"花占卜 (花占い)",translationCredit:"Smiecj",translationCreditUrl:"https://smiecj.com/2022/12/30/vaundy-hanauranai/",translationSourceUrl:"https://smiecj.com/2022/12/30/vaundy-hanauranai/",translationLicense:"CC BY-NC-SA 4.0",translationLicenseUrl:"https://creativecommons.org/licenses/by-nc-sa/4.0/",youtubeId:"onhBN0qkUcE"},{id:"Yobigoe",title:"呼喚聲 (呼び声)",karaokeTrackId:"3kQf453SpkwX7ALdgzNSNY",translationCredit:"藍色小樹熊",translationCreditUrl:"https://bluekokomurmur.com/lyrics/vaundy-yobigoe/",translationSourceUrl:"https://bluekokomurmur.com/lyrics/vaundy-yobigoe/",youtubeId:"CI2x2aSi8aI"},{id:"Tomoshibi",title:"燈火 (灯火)",translationCredit:"巴哈姆特的月勳",youtubeId:"nrLZ-vTiQa4"},{id:"HowdoIknow'",title:"我怎麼會知道呢 (僕にはどうしてわかるんだろう)",translationCredit:"藍色小樹熊",translationCreditUrl:"https://bluekokomurmur.com/lyrics/vaundy-boku-niwa-doshite-wakarundarou/",translationSourceUrl:"https://bluekokomurmur.com/lyrics/vaundy-boku-niwa-doshite-wakarundarou/",youtubeId:"x4aWXNWPrtY"},{id:"Shiwaawase'",title:"皺褶相合 (しわあわせ)",youtubeId:"JwmGruvGt_I"},{id:"Homunculus",title:"人造小人 (ホムンクルス)",translationCredit:"巴哈姆特的月勳",youtubeId:"ZhUa0CumyxQ"},{id:"soramimi",title:"soramimi",youtubeId:"Jh_0EW6G3gQ"},{id:"TokyoFlash",title:"東京 Flash (東京フラッシュ)",translationCredit:"雨音子",translationCreditUrl:"https://ameotoko1997.blog.fc2.com/blog-entry-375.html",translationSourceUrl:"https://ameotoko1997.blog.fc2.com/blog-entry-375.html",youtubeId:"SIuF37EWaLU"},{id:"NakiJizo",title:"哭泣地藏 (泣き地蔵)",translationCredit:"巴哈姆特的月勳",youtubeId:"XQTM2M5iD_I"},{id:"napori",title:"napori",youtubeId:"ZeIGVnkYX04"},{id:"Backlight",title:"逆光 (逆光)",translationCredit:"巴哈姆特的月勳",youtubeId:"RhDxXvn6YaQ"},{id:"NEOJAPAN",title:"NEO JAPAN",youtubeId:"QC6gd_b1nz8"},{id:"ZuttoLoveSong",title:"一直都是情歌 (ずっとラブソング)",youtubeId:"wriTi0J_-1A"},{id:"Iseijin'",title:"偉生人 (偉生人)",translationCredit:"巴哈姆特的月勳",youtubeId:"aDaWuvpB_Kw"},{id:"ZERO",title:"ZERO",youtubeId:"Fs7MW0rx9Cw"},{id:"SonnaBitternaHanashi)",title:"那樣的 bitter 故事 (そんなbitterな話)",youtubeId:"V-gxqhWEbxI"},{id:"Fujin",title:"風神 (風神)",youtubeId:"yiU0I0tvt6s"},{id:"Jonetsu",title:"常熱 (常熱)",translationCredit:"Oblivionis",translationCreditUrl:"https://home.gamer.com.tw/artwork.php?sn=5830053",translationSourceUrl:"https://home.gamer.com.tw/artwork.php?sn=5830053",youtubeId:"fxtQ4Dsmqo0"},{id:"Kagero",title:"陽炎 (かげろう)",translationCredit:"巴哈姆特的月勳",youtubeId:"gY-7i-T76o0"},{id:"IdeagaAfureteNemurenai",title:"理念滿溢而無法入睡 (イデアが溢れて眠れない)",youtubeId:"0u_zA8BJG6A"},{id:"flyaway",title:"飛翔之時 (飛ぶ時)",translationCredit:"巴哈姆特的月勳",youtubeId:"ARj1adoUoEU"},{id:"mabuta",title:"眼瞼 (まぶた)",translationCredit:"巴哈姆特的月勳",youtubeId:"fjx_uy5eD8g"},{id:"Hitomibore",title:"為瞳孔著迷 (瞳惚れ)",youtubeId:"XEEXE8Ei5SA"},{id:"SekainoHimitsu",title:"世界的秘密 (世界の秘密)",translationCredit:"Smiecj",translationCreditUrl:"https://smiecj.com/2023/05/07/vaundy-sekainohimitu/",translationSourceUrl:"https://smiecj.com/2023/05/07/vaundy-sekainohimitu/",translationLicense:"CC BY-NC-SA 4.0",translationLicenseUrl:"https://creativecommons.org/licenses/by-nc-sa/4.0/",youtubeId:"xFoTFCHU70s"},{id:"Wasuremono",title:"遺忘之物 (忘れ物)",youtubeId:"tQq8C7irREk"},{id:"Timeparadox",title:"時間悖論 (タイムパラドックス)",translationCredit:"藍色小樹熊",translationCreditUrl:"https://bluekokomurmur.com/lyrics/vaundy-taimu-paradokkusu/",translationSourceUrl:"https://bluekokomurmur.com/lyrics/vaundy-taimu-paradokkusu/",youtubeId:"ewhRE-BvJCg"},{id:"TodomenoIchigeki",title:"最後一擊 (トドメの一撃)",translationCredit:"Smiecj",translationCreditUrl:"https://smiecj.com/2023/10/08/vaundy-todome/",translationSourceUrl:"https://smiecj.com/2023/10/08/vaundy-todome/",translationLicense:"CC BY-NC-SA 4.0",translationLicenseUrl:"https://creativecommons.org/licenses/by-nc-sa/4.0/",youtubeId:"7xRWOylrLfI"},{id:" Kimagure",title:"任性 (気まぐれ)",youtubeId:"uYyfD5A-w8Q"}],si={"2026-10-31":[{t:"17:30",label:"開場・開始入場"},{t:"19:00",label:"正式演出開始"},{t:"21:00",label:"預計演出結束（以現場為準）"}],"2026-11-01":[{t:"17:30",label:"開場・開始入場"},{t:"19:00",label:"正式演出開始"},{t:"21:00",label:"預計演出結束（以現場為準）"}]},ii=[{start:"2026-10-31T19:00:00+08:00",end:"2026-10-31T21:30:00+08:00"},{start:"2026-11-01T19:00:00+08:00",end:"2026-11-01T21:30:00+08:00"}],oi=[],ri=[],li={wave_jump:{video:"./images/tips/wave_jump.webm",src:"./images/tips/wave_jump.webp",fallback:"./images/tips/wave_jump.gif",caption:"jump"},wave_chain:{video:"./images/tips/wave_chain.webm",src:"./images/tips/wave_chain.webp",fallback:"./images/tips/wave_chain.gif",caption:"跟著 Hu Hu Hu Hu"},wave_dada:{video:"./images/tips/wave_dada.webm",src:"./images/tips/wave_dada.webp",fallback:"./images/tips/wave_dada.gif",caption:"跟著 DA-DADADADA"},wave_turn:{video:"./images/tips/wave_turn.webm",src:"./images/tips/wave_turn.webp",fallback:"./images/tips/wave_turn.gif",caption:"旋轉雙手"},wave_rl:{video:"./images/tips/wave_rl.webm",src:"./images/tips/wave_rl.webp",fallback:"./images/tips/wave_rl.gif",caption:"向左右大幅揮動"},"wave-basic":{video:"./images/tips/wave-basic.webm",src:"./images/tips/wave-basic.webp",fallback:"./images/tips/wave-basic.gif",caption:"雙手舉過頭頂・向左右大幅揮動"},"wave-slow":{src:"./images/tips/wave-slow.gif",caption:"單手慢慢揮動"},"clap-basic":{src:"./images/tips/clap-basic.gif",caption:"在頭頂上方拍手"},jump:{src:"./images/tips/jump.gif",caption:"跳起來！"}},qa=Object.freeze({Tokimeki:120,KaijuNoHanauta:75,CHAINSAWBLOOD:147,KoikazeniNosete:118,Odoriko:157,HadakaNoYusha:163,Fukakouryoku:94,Reunion:150,hanaurana:135,Yobigoe:120,Tomoshibi:110,"HowdoIknow'":162,"Shiwaawase'":160,Homunculus:153,soramimi:130,TokyoFlash:98,NakiJizo:120,napori:130,Backlight:145,NEOJAPAN:176,ZuttoLoveSong:145,"Iseijin'":170,ZERO:105,"SonnaBitternaHanashi)":178,Fujin:97,Jonetsu:155,Kagero:100,IdeagaAfureteNemurenai:105,flyaway:142,mabuta:115,Hitomibore:110,SekainoHimitsu:160,Wasuremono:105,Timeparadox:82,TodomenoIchigeki:100," Kimagure":178}),ie={label:"東京/首爾",dates:"東京 09.05・09.06｜首爾 09.19・09.20",items:[{n:1,songs:[{id:"NakiJizo"}]},{n:2,songs:[{id:"Homunculus"}]},{n:3,songs:[{id:"HadakaNoYusha"}]},{n:4,songs:[{id:"Reunion",day:"六"},{id:"Backlight",day:"日"}]},{n:5,songs:[{id:"Fukakouryoku"}]},{n:6,songs:[{id:"Fujin"}]},{n:7,songs:[{id:"SonnaBitternaHanashi)"}]},{n:8,songs:[{id:"KoikazeniNosete"}]},{n:9,songs:[{id:" Kimagure"}]},{n:10,songs:[{id:"napori"}]},{n:11,songs:[{id:"Timeparadox"}]},{n:12,songs:[{id:"Shiwaawase'"}]},{n:13,songs:[{id:"TokyoFlash"}]},{n:14,songs:[{id:"TodomenoIchigeki"}]},{n:15,songs:[{id:"IdeagaAfureteNemurenai"}]},{n:16,songs:[{id:"Yobigoe"}]},{n:17,songs:[{id:"flyaway"}]},{n:18,songs:[{id:"soramimi"}]},{n:19,songs:[{id:"CHAINSAWBLOOD"}]},{n:20,songs:[{id:"Tokimeki",day:"六"},{id:"hanaurana",day:"日"}]},{n:21,songs:[{id:"KaijuNoHanauta"}]},{n:22,songs:[{id:"Odoriko"}]}]},ta={cx:315,cy:210},na=[["A","floor",184,178,"153,119 213,119 213,154 275,205 258,223 140,223 121,204 121,150"],["B","floor",269,149,"220,119 311,119 311,169 280,199 220,150"],["C","floor",360,149,"319,119 410,119 410,149 349,199 319,169"],["D","floor",445,178,"417,119 477,119 508,149 509,204 490,223 371,223 355,205 417,154"],["E","floor",184,280,"140,235 258,235 275,254 213,304 212,340 154,340 121,308 121,254"],["F","floor",269,308,"279,260 283,261 311,289 311,339 220,340 220,309"],["G","floor",360,309,"348,260 355,263 410,309 410,340 319,340 319,289"],["H","floor",445,280,"372,235 490,235 509,254 509,308 476,340 418,340 417,304 355,254"],["201","r",482,404,"456,386 495,386 519,421 456,421"],["202","r",408,398,"363,386 454,386 454,410 363,411"],["203","r",315,398,"270,386 360,386 360,411 270,411"],["204","r",221,398,"177,386 267,386 267,411 177,411"],["205","r",147,404,"135,386 174,386 174,421 111,421"],["206","r",89,370,"73,328 132,385 111,416 44,350"],["207","r",54,300,"39,262 72,262 72,327 41,349 38,348"],["208","r",55,229,"39,200 72,200 72,259 39,259"],["209","r",54,158,"39,110 72,132 72,197 39,197"],["210","r",89,87,"109,42 115,47 132,74 73,130 44,108"],["211","r",147,52,"111,37 174,37 174,72 135,72"],["212","r",221,58,"177,46 267,46 267,72 176,72"],["213","r",314,58,"270,46 360,46 360,72 270,72"],["214","r",408,58,"363,46 453,46 454,71 363,72"],["215","r",482,52,"456,37 519,38 495,72 456,72"],["216","r",540,87,"519,42 586,108 557,130 498,74"],["217","r",575,158,"589,110 591,110 591,197 558,197 558,132"],["218","r",574,229,"558,200 591,200 591,259 558,259"],["219","r",575,300,"558,262 591,262 591,349 558,327"],["220","r",539,370,"555,328 586,350 519,416 498,385"],["308","s",15,229,"0,178 15,178 16,200 36,200 36,259 15,259 14,281 0,281"],["309","s",16,128,"13,70 23,79 14,92 35,108 35,172 0,172 0,85"],["310","s",56,55,"65,17 95,47 47,94 18,64"],["311","s",125,14,"83,0 174,0 174,14 158,14 158,35 109,35 93,12 82,22 71,13"],["312","s",216,16,"176,0 267,0 267,14 250,14 251,35 176,35"],["313","s",315,17,"269,0 361,0 361,35 269,35"],["314","s",413,16,"363,0 454,0 454,35 379,35 379,14 363,14"],["315","s",504,14,"456,0 547,0 559,13 548,22 537,12 520,35 472,35 472,14 456,14"],["316","s",573,55,"563,17 612,64 583,94 535,47"],["317","s",613,128,"616,70 630,85 630,172 595,172 595,108 616,92 607,80"],["318","s",614,229,"615,178 630,178 630,281 615,280 614,258 594,259 594,200 614,200"],["319","s",613,330,"595,287 630,287 630,374 617,389 607,380 617,367 595,351"],["320","s",585,389,"581,365 584,365 612,393 590,416 561,388 561,385"],["W1","w",0,0,"107,38 110,42 47,106 40,107"],["W2","w",0,0,"522,38 590,107 586,108 580,103 574,94 553,75 554,73 551,73 520,42"],["W3","w",0,0,"42,350 110,416 108,420 40,353"],["W4","w",0,0,"587,350 590,353 522,420 520,416"],["STAGE","stage",314,229,"314,180 364,228 364,231 316,279 265,230"]].map(e=>({id:e[0],grade:e[1],x:e[2],y:e[3],pts:e[4]})),ci={floor:{label:"Floor 站席",cls:"floor"},r:{label:"R席・2樓指定席",cls:"r"},s:{label:"S席・3樓指定席",cls:"s"}},aa="點選區域，查看座位等級與它在配置圖上的位置。",di=["上方","右上方","右側","右下方","下方","左下方","左側","左上方"],ui={A:"西側",B:"西側",E:"西側",F:"西側",C:"北側",D:"北側",G:"北側",H:"北側"},sa={jp:{label:"日本版",source:"日本版應援標記"},kr:{label:"韓國版",source:"韓國版應援標記"}},Fa="https://www.canva.com/design/DAGzhwjn1P4/WDMcBwi1A-ZJpX615SFpig/view",pi="jp",fi=["整體：日本版把「要跟唱」和「只做動作」分開標示；韓國版的 vocal cue 較密，常把整段副歌或回應片段標成大合唱。","怪獣の花唄：日本版強調「もっと／ねぇ もっと」、可指向 Vaundy 的「君がいつも」，以及第一段「落ちてく過去は鮮明で……」；韓國版則把更多副歌與後段波浪手勢列為跟唱。","花占い：日本版副歌以左右揮手、開心時跳躍為主，跟唱不是必要；韓國版有較明確的「なんて／抱いて／何年経っても」回應段。","逆光：日本版是副歌整體大聲唱，最後特別注意「悪党ふっ飛ばして」；韓國版較偏向「ないや／ないさ／ないな」的分段回應。","灯火／常熱：日本版分別集中在「ねぇ／けど まだ」與鼓點拍手、終段前尖叫；韓國版有更廣的副歌大合唱標記。","踊り子：日本版的核心是食指逆時針旋轉，第一段「とぅるるる」保持安靜；韓國版把較多旋律段落也列入大合唱。","恋風邪にのせて：兩版都重視「愛で／日々が」，是差異最小的歌曲之一。","ホムンクルス／Tokimeki：日本版更強調固定口號的順序（「ホムンクルス!」、Uh／Yeah、Da、Na、Tokimekiのせい）；韓國版則有較多 Hu／DA 與整段揮手標記。","CHAINSAW BLOOD／不可幸力：日本版更細分手勢與回應進場時機；不可幸力的「Welcome to the dirty night」以及「愛で」尤其要跟上。","soramimi／裸の勇者：日本版分別以跟著跳舞、以及安靜唱兩次「愛して」為主；韓國版大合唱範圍較廣。","偉生人／ずっとラブソング：日本版有明確的「Whoa → True, true, true」與食指比 1；韓國版對應的口號和揮手行較多。","呼び声／東京フラッシュ／トドメの一撃：日本版允許簡化（只唱「チェンジ」）或依副歌回應詞跟唱；韓國版則多以完整副歌行與固定揮手段落標記。"],mi=/[\[(](?:wave|clap|mic|chant|jump|spin|turn)[\])]/giu,ia=e=>Array.from(String(e||"").replace(mi,"")).filter(t=>!/\s/u.test(t)).join(""),Te=e=>Math.round(Number(e)*1e3);function Sn(e,t,n=new Set){if(n.has(t))throw new Error(`Circular chant inheritance: ${t}`);n.add(t);const a=e?.versions?.[t];if(!a)throw new Error(`Missing chant version: ${t}`);if(a.kind==="inherit")return Sn(e,a.from,n);if(a.kind!=="guide")throw new Error(`Invalid chant guide: ${t}`);return{...a,resolvedVersion:t}}function oa(e,t){if(!t||!Number.isInteger(t.occurrence)||t.occurrence<1)throw new Error("Invalid chant occurrence");const n=Array.from(ia(e)),a=Array.from(ia(t.text));if(!a.length)throw new Error("Empty chant target");let s=0;for(let i=0;i<=n.length-a.length;i++)if(a.every((o,r)=>o===n[i+r])&&++s===t.occurrence)return{start:i,end:i+a.length};throw new Error(`Chant target not found: ${t.text} #${t.occurrence}`)}function hi(e,t,n,a={}){const s=Sn(t,n),i=(s.cues||[]).find(u=>Te(u.time)===Te(e.time)),o=(s.actionOverrides||[]).find(u=>Te(u.time)===Te(e.time))||(t.actions||[]).find(u=>Te(u.time)===Te(e.time));if(i&&i.expectedText!==e.jp)throw new Error(`Stale chant text @ ${e.time}`);if(o&&o.expectedText!==e.jp)throw new Error(`Stale action text @ ${e.time}`);const r=i?.chant?.kind||"none";if(!["none","full","partial"].includes(r))throw new Error(`Invalid chant kind: ${r}`);if(r==="full"&&i.chant.parts)throw new Error("Full chant cannot have parts");const c={jp:e.jp,romaji:a.romaji,zh:e.tr},l={jp:[],romaji:[],zh:[]};if(r==="partial"){if(!i.chant.parts?.length)throw new Error("Partial chant requires parts");for(const u of i.chant.parts){if(!u.jp||!u.romaji)throw new Error("Partial chant requires Japanese and romaji targets");for(const d of Object.keys(l)){if(!u[d]||c[d]===void 0)continue;const p=oa(c[d],u[d]);if(l[d].some(f=>f.start<p.end&&p.start<f.end))throw new Error(`Overlapping chant ranges: ${d}`);l[d].push(p)}}}for(const u of i?.chant?.translationParts||[]){const d=oa(e.tr,u);if(l.zh.some(p=>p.start<d.end&&d.start<p.end))throw new Error("Overlapping translation ranges");l.zh.push(d)}return{time:e.time,chant:r,ranges:l,actions:o?.values||[],requestedVersion:n,resolvedVersion:s.resolvedVersion}}function gi(e,t,n=!1,a=document){const s=a.createElement("template");s.innerHTML=e;const i=s.content;i.querySelectorAll(".ico").forEach(p=>p.remove());const o=[],r=p=>{for(const f of[...p.childNodes])if(f.nodeType===3)o.push({node:f,text:f.nodeValue,atomic:!1});else if(f.nodeType===1){if(["RT","RP"].includes(f.tagName))continue;f.tagName==="RUBY"?o.push({node:f,text:[...f.childNodes].filter(y=>y.nodeType===3).map(y=>y.nodeValue).join(""),atomic:!0}):r(f)}};r(i);let c=0;const l=p=>n||t.some(f=>f.start<=p&&p<f.end),u=p=>{const f=a.createElement("span");f.className="chant-range",p.replaceWith(f),f.appendChild(p)};for(const p of o){const f=Array.from(p.text);if(p.atomic){const P=f.filter(V=>!/\s/u.test(V)).length,T=Array.from({length:P},(V,g)=>l(c+g));if(T.some(Boolean)&&!T.every(Boolean))throw new Error(`Chant boundary splits ruby: ${p.text}`);P&&T.every(Boolean)&&u(p.node),c+=P;continue}const y=a.createDocumentFragment();let E="",_=!1;const te=()=>{if(!E)return;const P=a.createTextNode(E);y.appendChild(P),_&&u(P),E=""};for(const P of f){const V=/\s/u.test(P)?_:l(c++);V!==_&&(te(),_=V),E+=P}te(),p.node.replaceWith(y)}const d=a.createElement("div");return d.appendChild(i),d.innerHTML}function yi(e){const t={chant:0,clap:!1,wave:!1,jump:!1,spin:!1};for(const n of e){n.chant!=="none"&&t.chant++;for(const a of n.actions)t[a]=!0}return t}function bi(e,t){const n=[];for(let s=0;s<e.length;s++){if(e[s].chant==="none")continue;let i=s;for(;i+1<e.length&&e[i+1].chant!=="none";)i++;n.push({from:s,to:i,start:Math.max(0,t[s]-1.2),end:(t[i+1]??t[i]+8)+.6}),s=i}const a=[];for(const s of n){const i=a.at(-1);i&&s.start-i.end<2.5?(i.end=s.end,i.to=s.to):a.push({...s})}return a}const vi={Tokimeki:{jp:{chant:25,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:25,clap:!0,wave:!0,jump:!1,spin:!1}},KaijuNoHanauta:{jp:{chant:21,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:35,clap:!0,wave:!0,jump:!1,spin:!1}},CHAINSAWBLOOD:{jp:{chant:18,clap:!0,wave:!0,jump:!0,spin:!1},kr:{chant:22,clap:!0,wave:!0,jump:!0,spin:!1}},KoikazeniNosete:{jp:{chant:12,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:12,clap:!0,wave:!0,jump:!1,spin:!1}},Odoriko:{jp:{chant:0,clap:!0,wave:!1,jump:!1,spin:!0},kr:{chant:7,clap:!0,wave:!1,jump:!1,spin:!0}},HadakaNoYusha:{jp:{chant:5,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:7,clap:!0,wave:!0,jump:!1,spin:!1}},Fukakouryoku:{jp:{chant:17,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:24,clap:!0,wave:!0,jump:!1,spin:!1}},Reunion:{jp:{chant:10,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:10,clap:!0,wave:!0,jump:!1,spin:!1}},hanaurana:{jp:{chant:7,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:18,clap:!0,wave:!0,jump:!1,spin:!1}},Yobigoe:{jp:{chant:22,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:23,clap:!0,wave:!0,jump:!1,spin:!1}},Tomoshibi:{jp:{chant:2,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:7,clap:!0,wave:!0,jump:!1,spin:!1}},"HowdoIknow'":{jp:{chant:8,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:8,clap:!1,wave:!0,jump:!1,spin:!1}},"Shiwaawase'":{jp:{chant:11,clap:!1,wave:!1,jump:!1,spin:!1},kr:{chant:11,clap:!1,wave:!1,jump:!1,spin:!1}},Homunculus:{jp:{chant:15,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:20,clap:!0,wave:!0,jump:!1,spin:!1}},soramimi:{jp:{chant:3,clap:!0,wave:!0,jump:!0,spin:!1},kr:{chant:25,clap:!0,wave:!0,jump:!0,spin:!1}},TokyoFlash:{jp:{chant:12,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:31,clap:!1,wave:!0,jump:!1,spin:!1}},NakiJizo:{jp:{chant:8,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:8,clap:!0,wave:!0,jump:!1,spin:!1}},napori:{jp:{chant:18,clap:!1,wave:!1,jump:!1,spin:!1},kr:{chant:18,clap:!1,wave:!1,jump:!1,spin:!1}},Backlight:{jp:{chant:18,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:12,clap:!0,wave:!0,jump:!1,spin:!1}},NEOJAPAN:{jp:{chant:4,clap:!1,wave:!1,jump:!1,spin:!1},kr:{chant:4,clap:!1,wave:!1,jump:!1,spin:!1}},ZuttoLoveSong:{jp:{chant:5,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:12,clap:!1,wave:!0,jump:!1,spin:!1}},"Iseijin'":{jp:{chant:13,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:23,clap:!0,wave:!0,jump:!1,spin:!1}},ZERO:{jp:{chant:10,clap:!1,wave:!1,jump:!1,spin:!1},kr:{chant:10,clap:!1,wave:!1,jump:!1,spin:!1}},"SonnaBitternaHanashi)":{jp:{chant:10,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:10,clap:!1,wave:!0,jump:!1,spin:!1}},Fujin:{jp:{chant:19,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:19,clap:!0,wave:!0,jump:!1,spin:!1}},Jonetsu:{jp:{chant:0,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:18,clap:!0,wave:!0,jump:!1,spin:!1}},Kagero:{jp:{chant:19,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:19,clap:!1,wave:!0,jump:!1,spin:!1}},IdeagaAfureteNemurenai:{jp:{chant:16,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:16,clap:!1,wave:!0,jump:!1,spin:!1}},flyaway:{jp:{chant:22,clap:!0,wave:!0,jump:!0,spin:!1},kr:{chant:22,clap:!0,wave:!0,jump:!0,spin:!1}},mabuta:{jp:{chant:11,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:11,clap:!0,wave:!0,jump:!1,spin:!1}},Hitomibore:{jp:{chant:2,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:2,clap:!0,wave:!0,jump:!1,spin:!1}},SekainoHimitsu:{jp:{chant:1,clap:!0,wave:!1,jump:!1,spin:!1},kr:{chant:1,clap:!0,wave:!1,jump:!1,spin:!1}},Wasuremono:{jp:{chant:0,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:0,clap:!1,wave:!0,jump:!1,spin:!1}},Timeparadox:{jp:{chant:0,clap:!0,wave:!1,jump:!1,spin:!1},kr:{chant:0,clap:!0,wave:!1,jump:!1,spin:!1}},TodomenoIchigeki:{jp:{chant:27,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:28,clap:!0,wave:!0,jump:!1,spin:!1}}," Kimagure":{jp:{chant:0,clap:!1,wave:!1,jump:!1,spin:!1},kr:{chant:0,clap:!1,wave:!1,jump:!1,spin:!1}}};let Yt=null,Xt=null,it=null,ra=!1,Zt=null,Da=null,Ua=null;function Va(){return Da}function ki(){return Ua}function wi(){return it||(it=Promise.all([Me(()=>import("./song-lyrics-Djs1kIJO.js"),[],import.meta.url),Me(()=>import("./version-data-CxJrOXZ9.js"),[],import.meta.url)]).then(([{SONG_LYRICS:e},{CHANT_GUIDES:t,CHANT_SOURCES:n}])=>(Da=t,Ua=n,new Map(e.map(a=>[a.id,a])))).catch(e=>{throw it=null,e})),it}function la(){return Zt||(Zt=Me(()=>import("./furigana-corrections-D479yki1.js"),[],import.meta.url).then(e=>e).catch(()=>null)),Zt}function ca(e){if(ra||!e)return;const{FURIGANA_CORRECTIONS:t,ROMAJI_CORRECTIONS:n}=e;window.JP_FURIGANA&&(window.JP_FURIGANA=Object.freeze({...window.JP_FURIGANA,...t})),window.JP_ROMAJI&&(window.JP_ROMAJI=Object.freeze({...window.JP_ROMAJI,...n})),!(!window.JP_FURIGANA&&!window.JP_ROMAJI)&&(ra=!0)}function Ei(){return window.JP_FURIGANA||window.JP_ROMAJI?la().then(ca):(Yt||(Yt=Promise.all([Me(()=>import("./furigana-BmLGyUBE.js"),[],import.meta.url),la()]).then(([,e])=>ca(e)).catch(()=>{})),Yt)}function xi(){return window.KARAOKE_SOURCES?Promise.resolve(window.KARAOKE_SOURCES):(Xt||(Xt=Me(()=>import("./karaoke-sources-DiYxmmu-.js"),[],import.meta.url).then(()=>window.KARAOKE_SOURCES||null).catch(()=>null)),Xt)}const Si=[400,500,700],Ii=/[\u3000-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/u;let Qt=null,da="";function ua(e,t=!1){if(document.head.querySelector(`link[rel="preconnect"][href="${e}"]`))return;const n=document.createElement("link");n.rel="preconnect",n.href=e,t&&(n.crossOrigin="anonymous"),document.head.appendChild(n)}function Ai(e){const t=Array.isArray(e)?e.join(""):String(e??"");return[...new Set([...t].filter(n=>Ii.test(n)))].sort((n,a)=>n.codePointAt(0)-a.codePointAt(0)).join("")}function Li(e,t=Si){const n=Ai(e);if(!n)return;const a=[...new Set(t)].map(Number).filter(r=>Number.isInteger(r)&&r>=100&&r<=900).sort((r,c)=>r-c);if(!a.length)return;const s=`${a.join(",")}:${n}`;if(Qt?.isConnected&&da===s)return;Qt?.remove();const i=new URLSearchParams({family:`Noto Sans JP:wght@${a.join(";")}`,display:"swap",text:n});ua("https://fonts.googleapis.com"),ua("https://fonts.gstatic.com",!0);const o=document.createElement("link");o.rel="stylesheet",o.href=`https://fonts.googleapis.com/css2?${i.toString()}`,o.dataset.japaneseFontSubset="true",da=s,Qt=o,document.head.appendChild(o)}function v(e,t){try{if(t===void 0)return localStorage.getItem(e);localStorage.setItem(e,t)}catch{return null}}const Ti="html,body{width:100%;height:100%;margin:0;overflow:hidden}body{background:var(--stage, var(--ui-bg, #151619));color:var(--ui-text, #f5f5f7)}[hidden]{display:none!important}.document-pip{box-sizing:border-box;position:relative;display:flex!important;flex-direction:column;gap:0;width:100%;height:100%;min-height:100%;padding:0;overflow:hidden;background:var(--stage, var(--ui-bg, #151619));color:var(--ui-text, #f5f5f7)}.document-pip .pip-progress{position:absolute;inset:0 0 auto;z-index:2;height:4px;overflow:hidden;background:var(--stage-raised, var(--ui-raised, #2b2c30));pointer-events:none}.document-pip .pip-progress-fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--ui-accent, #e9d9a3);transform:scaleX(0);transform-origin:left center}.document-pip .pip-controls{flex:none;display:grid;grid-template-columns:44px minmax(0,1fr) 44px;align-items:center;gap:8px;min-width:0;min-height:68px;padding:16px 22px 8px;box-sizing:border-box}.document-pip .pip-track-controls{display:flex;align-items:center;min-width:0;height:44px;overflow:hidden;border-radius:var(--radius-pill, 999px);background:var(--stage-surface, var(--ui-surface, #202125))}.document-pip .pip-song-label{flex:1 1 auto;min-width:0;height:44px;display:flex;align-items:center;justify-content:center;gap:7px;padding:0 4px}.document-pip .pip-song-number{flex:none;color:var(--ui-muted, #a9a9af);font-size:12px;font-variant-numeric:tabular-nums;white-space:nowrap}.document-pip .pip-title{min-width:0;overflow:hidden;color:var(--ui-text, #f5f5f7);font-family:var(--font-tw-sans, system-ui, sans-serif);font-size:14px;font-weight:600;line-height:1.35;text-overflow:ellipsis;white-space:nowrap}.document-pip .pip-status{flex:none;min-height:14px;color:var(--ui-muted, #a9a9af);font-size:10px;line-height:1.4}.document-pip .pip-lyrics{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;min-height:0;overflow:hidden;padding:0 24px 10px}.document-pip .pip-line-group{min-width:0}.document-pip .pip-line-label{display:none}.document-pip .pip-current-line,.document-pip .pip-next-line{min-width:0}.document-pip .pip-empty{margin:0;padding:12px 9px;border-radius:8px;color:var(--ui-muted, #a9a9af);font-size:13px;line-height:1.45;text-align:center}.document-pip .lyric-line{width:100%;box-sizing:border-box;display:flex;align-items:flex-start;gap:6px;margin:0;padding:5px 7px;border:0;border-radius:8px;background:transparent;color:var(--ui-text, #f5f5f7);cursor:default;pointer-events:none;text-align:left}.document-pip .pip-current-line .lyric-line{min-height:48px;border-left:3px solid var(--ui-accent, #e9d9a3);background:var(--ui-hover, rgba(255,255,255,.08))}.document-pip .pip-next-line{margin-top:5px;opacity:.58}.document-pip .lyric-body{overflow-wrap:anywhere}.document-pip .pip-current-line .lyric-jp{font-size:clamp(14px,3.2vw,18px);line-height:1.3}.document-pip .pip-current-line .lyric-romaji{font-size:clamp(10px,2.5vw,13px);line-height:1.25}.document-pip .pip-current-line .lyric-zh{font-size:clamp(12px,2.8vw,15px);line-height:1.3}.document-pip .pip-next-line .lyric-jp{font-size:clamp(11px,2.6vw,14px);line-height:1.28}.document-pip .pip-next-line .lyric-romaji{font-size:clamp(9px,2.2vw,11px);line-height:1.25}.document-pip .pip-next-line .lyric-zh{font-size:clamp(11px,2.6vw,13px);line-height:1.3}.document-pip.lyrics-hidden .pip-current-line>.lyric-line,.document-pip.lyrics-hidden .pip-next-group{display:none}.document-pip .pip-action{width:44px;min-width:44px;height:44px;min-height:44px;display:inline-flex;align-items:center;justify-content:center;padding:0;border:0;border-radius:50%;background:var(--ui-raised, rgba(255,255,255,.08));color:var(--ui-text, #f5f5f7);font:inherit;cursor:pointer}.document-pip .pip-controls>.pip-action{flex:none}.document-pip .pip-track-controls .pip-action{width:36px;min-width:36px;height:36px;min-height:36px;margin:4px;background:transparent;color:var(--ui-muted, #a9a9af)}.document-pip .pip-action-label{display:none}.document-pip .pip-action:hover{background:var(--ui-hover, rgba(255,255,255,.13))}.document-pip .pip-action:focus-visible{outline:2px solid var(--ui-accent, #e9d9a3);outline-offset:2px}.document-pip .pip-action:active{transform:scale(.97)}.document-pip .pip-action:disabled{cursor:not-allowed;opacity:.42}.document-pip .pip-action svg{flex:none;width:16px;height:16px}.document-pip .pip-play{color:var(--ui-accent, #e9d9a3)}.document-pip .pip-play svg,.document-pip .pip-return svg{width:18px;height:18px}.document-pip .pip-prev svg,.document-pip .pip-next svg{width:16px;height:16px}@media(prefers-reduced-motion:reduce){.document-pip *,.document-pip *:before,.document-pip *:after{animation:none!important;transition:none!important}.document-pip .pip-action:active{transform:none}}@media(max-width:360px){.document-pip{padding:0}.document-pip .pip-controls{grid-template-columns:40px minmax(0,1fr) 40px;gap:6px;padding-right:10px;padding-left:10px}.document-pip .pip-action{width:40px;min-width:40px;height:40px;min-height:40px}.document-pip .pip-track-controls .pip-action{width:32px;min-width:32px;height:32px;min-height:32px}.document-pip .pip-song-label{gap:4px}}",Ci=450,Ni=225,Bi=new Set(["karaoke-lit","karaoke-current"]);function ji(){try{return typeof window<"u"&&typeof window.documentPictureInPicture?.requestWindow=="function"}catch{return!1}}function $i(e,t){e.querySelectorAll('link[rel="stylesheet"]').forEach(a=>{const s=t.createElement("link");s.rel="stylesheet",s.href=a.href,t.head.appendChild(s)}),e.querySelectorAll("style").forEach(a=>{t.head.appendChild(a.cloneNode(!0))});const n=t.createElement("style");n.textContent=Ti,t.head.appendChild(n)}function Mi(e,t){const n=e.querySelector(".icon-sprite");n&&t.body.appendChild(n.cloneNode(!0))}function pa(e){return String(e||"").replace(/\s+class="([^"]*)"/gu,(t,n)=>{const a=n.split(/\s+/u).filter(s=>s&&!Bi.has(s));return a.length?` class="${a.join(" ")}"`:""}).replace(/\s+style="[^"]*"/gu,"")}function fa(e,t){if(!e||!t)return!0;const n=e.ownerDocument.createElement("template");n.innerHTML=t;const a=[...e.querySelectorAll(".karaoke-unit")],s=[...n.content.querySelectorAll(".karaoke-unit")];return a.length!==s.length?!1:(a.forEach((i,o)=>{const r=s[o];i.classList.toggle("karaoke-lit",r.classList.contains("karaoke-lit")),i.classList.toggle("karaoke-current",r.classList.contains("karaoke-current"));const c=r.style.getPropertyValue("--karaoke-word-progress");c?i.style.setProperty("--karaoke-word-progress",c):i.style.removeProperty("--karaoke-word-progress")}),!0)}function ot(e,t,n,a,s){const i=e.createElement("button");return i.type="button",i.className=`pip-action ${t}`,i.innerHTML='<span class="pip-action-icon" aria-hidden="true"></span><span class="pip-action-label"></span>',i.querySelector(".pip-action-icon").innerHTML=a||"",i.querySelector(".pip-action-label").textContent=n,i.setAttribute("aria-label",n),i.title=n,i.addEventListener("click",o=>{o.preventDefault();try{s()}catch{}}),i}function _i({onPlayPause:e=()=>{},onFocusOpener:t=()=>{},onPreviousSong:n=()=>{},onNextSong:a=()=>{},onClosed:s=()=>{}}={}){const i=ji();let o=null,r=null,c=null,l=!1,u=null,d=null;function p(){u=null,d=null}function f(g,b=!0){o===g&&(o=null,r=null,p(),b&&s())}function y(){return o?o.closed?(f(o),!1):!0:!1}function E(g,b,w){if(g.replaceChildren(),!b){const I=g.ownerDocument.createElement("p");I.className="pip-empty",I.textContent=w||"等待同步…",g.appendChild(I);return}const k=g.ownerDocument.createElement("template");k.innerHTML=b,g.appendChild(k.content.cloneNode(!0))}function _(g={}){if(!r)return;const b=r.ownerDocument,w=g.showJapanese!==!1,k=g.showChinese!==!1,I=!w&&!k,M=I?"":String(g.currentMarkup||""),ge=I?"":String(g.nextMarkup||""),qe=I?"歌詞已隱藏":M?"":"等待第一句…",Un=g.theme==="light"?"light":"dark";b.documentElement.dataset.theme=Un,r.dataset.theme=Un,r.classList.toggle("reading-both",g.readingMode==="both"),r.classList.toggle("hide-japanese",!w),r.classList.toggle("hide-chinese",!k),r.classList.toggle("karaoke-off",g.karaokeEnabled===!1),r.classList.toggle("lyrics-hidden",I),g.iconBeatDuration?r.style.setProperty("--icon-beat-duration",g.iconBeatDuration):r.style.removeProperty("--icon-beat-duration");const Vn=r.querySelector(".pip-song-number");Vn&&(Vn.textContent=g.songNumber||"");const Wn=r.querySelector(".pip-title");Wn&&(Wn.textContent=g.title||"同步字幕");const Kt=r.querySelector(".pip-progress"),Kn=r.querySelector(".pip-progress-fill");if(Kt&&Kn){const W=Math.max(0,Math.min(1,Number(g.progress)||0));Kt.setAttribute("aria-valuenow",String(Math.round(W*100))),Kt.setAttribute("aria-valuetext",g.progressText||"正在載入播放進度"),Kn.style.transform=`scaleX(${W})`}const Gt=r.querySelector(".pip-status");Gt&&(Gt.textContent=g.status||"",Gt.hidden=!g.status);const zt=r.querySelector(".pip-current-line");if(zt){const W=`${pa(M)}\0${qe}`;(W!==u||!fa(zt,M))&&(E(zt,M,qe),u=W)}const Gn=r.querySelector(".pip-next-group"),Jt=r.querySelector(".pip-next-line");if(Gn&&Jt){Gn.hidden=!ge;const W=pa(ge);(W!==d||!fa(Jt,ge))&&(E(Jt,ge,""),d=W)}const Fe=r.querySelector(".pip-play");if(Fe){const W=g.isPlaying===!0;Fe.disabled=g.canPlayPause!==!0,Fe.querySelector(".pip-action-icon").innerHTML=W?Ma:gt,Fe.querySelector(".pip-action-label").textContent=W?"暫停":"播放",Fe.setAttribute("aria-label",W?"暫停主頁影片":"播放主頁影片")}const zn=r.querySelector(".pip-return");zn&&zn.setAttribute("aria-label","返回主頁");const Jn=r.querySelector(".pip-prev"),Yn=r.querySelector(".pip-next");Jn&&(Jn.disabled=g.canNavigate!==!0),Yn&&(Yn.disabled=g.canNavigate!==!0),b.documentElement.lang="zh-Hant-TW"}function te(g){const b=g.document;b.documentElement.lang="zh-Hant-TW",b.title="同步字幕",b.head.replaceChildren(),b.body.replaceChildren(),$i(document,b),Mi(document,b);const w=b.createElement("main");w.className="document-pip song-page",w.innerHTML=`
      <div class="pip-progress" role="progressbar" aria-label="播放進度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-valuetext="正在載入播放進度">
        <span class="pip-progress-fill"></span>
      </div>
      <header class="pip-controls" aria-label="字幕窗控制"></header>
      <p class="pip-status" role="status" aria-live="polite" hidden></p>
      <section class="pip-lyrics" aria-label="同步歌詞">
        <div class="pip-line-group pip-current-group">
          <div class="pip-line-label">目前</div>
          <div class="pip-current-line"></div>
        </div>
        <div class="pip-line-group pip-next-group">
          <div class="pip-line-label">下一句</div>
          <div class="pip-next-line"></div>
        </div>
      </section>
    `;const k=w.querySelector(".pip-controls");k.appendChild(ot(b,"pip-return","返回主頁",Nt,t));const I=b.createElement("div");I.className="pip-track-controls",I.setAttribute("role","group"),I.setAttribute("aria-label","切換歌曲"),I.appendChild(ot(b,"pip-prev","上一首",Pa,n));const M=b.createElement("div");M.className="pip-song-label",M.setAttribute("aria-live","polite"),M.innerHTML='<span class="pip-song-number"></span><span class="pip-title"></span>',I.appendChild(M),I.appendChild(ot(b,"pip-next","下一首",Ra,a)),k.appendChild(I),k.appendChild(ot(b,"pip-play","播放",gt,e)),b.body.appendChild(w),r=w,p()}async function P(g={}){if(!i)return!1;if(o&&o.closed&&f(o),o){_(g);try{o.focus()}catch{}return!0}if(c){l=!1;const w=await c;if(w&&o){_(g);try{o.focus()}catch{}}return w}l=!1,c=(async()=>{try{const w=await window.documentPictureInPicture.requestWindow({width:Ci,height:Ni});if(l){try{w.close()}catch{}return!1}return o=w,te(w),w.addEventListener("pagehide",()=>f(w),{once:!0}),_(g),!0}catch{return o=null,r=null,p(),!1}})();const b=await c;return c=null,b}function T(g){y()&&_(g)}function V(){if(c){l=!0;return}const g=o;if(g){f(g);try{g.close()}catch{}}}return Object.freeze({supported:i,open:P,update:T,close:V,isOpen:y})}const Pi="./",L=document.getElementById("app"),S=document.getElementById("song-view");let ma=!0,ut=null,m=null,Ke=null,Ce=!0,ce=!1;const pt=["kana","romaji","both"],ha=v("horo-reading");let j=pt.includes(ha)?ha:"kana",O=v("horo-show-japanese")!=="0",q=v("horo-show-chinese")!=="0";const Ri=v("horo-chant-version");let R=Ri==="kr"?"kr":pi,Wa=!1,F=v("horo-karaoke")==="1",ke=-1,J=null,ye=null,en=0,Ka=0,Ga=performance.now();function Hi(){if(document.head.querySelector('link[rel="manifest"]'))return;const e=document.createElement("link");e.rel="manifest",e.href=`${Pi}manifest.json`,document.head.appendChild(e)}window.addEventListener("load",()=>window.setTimeout(Hi,8e3),{once:!0});const Oi=100,Bt="v1.11.1",qi="https://home.gamer.com.tw/profile/index.php?owner=tsukilsao319";function ft(e){let t=x(e);const n=[],a=s=>{const i=`\0${n.length}\0`;return n.push(s),i};return t=t.replace(/`([^`]+)`/g,(s,i)=>a(`<code>${i}</code>`)),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,(s,i,o)=>a(`<a href="${o}" target="_blank" rel="noopener">${ft(i)}</a>`)),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t.replace(/\u0000(\d+)\u0000/g,(s,i)=>n[Number(i)]||"")}function Fi(e){const t=[];let n=!1;const a=()=>{n&&(t.push("</ul>"),n=!1)};return String(e||"").replace(/\r\n?/g,`
`).split(`
`).forEach(s=>{const i=s.trim();if(!i){a();return}const o=i.match(/^(#{1,3})\s+(.+)$/);if(o){a();const r=o[1].length;t.push(`<h${r}>${ft(o[2])}</h${r}>`);return}if(i.startsWith("- ")){n||(t.push("<ul>"),n=!0),t.push(`<li>${ft(i.slice(2))}</li>`);return}a(),t.push(`<p>${ft(i)}</p>`)}),a(),t.join("")}const Di=/[?&]debug=1/.test(location.search);function Ui(){if(!Di)return;const e=document.createElement("div");e.id="dbg",e.style.cssText="position:fixed;left:6px;top:6px;z-index:9999;padding:5px 8px;background:rgba(0,0,0,.82);color:#7CFF9B;font:11px/1.45 ui-monospace,monospace;border-radius:7px;white-space:pre;pointer-events:none;max-width:92vw;",document.body.appendChild(e),setInterval(()=>{const t=document.querySelectorAll(".lyric-line.active").length,n=document.querySelectorAll("#lyrics-list, .lyrics-list").length;let a="-";try{m&&m.getCurrentTime&&(a=m.getCurrentTime().toFixed(1))}catch{a="ERR"}e.textContent=Bt+"  틱 "+Ka+`
켜진 줄 `+t+` (하나여야 정상)
idx `+ke+"  시간 "+a+"  목록 "+n+`
타이머 `+(Ke?"O":"X")+"  감시 "+($e?"O":"X")},400)}const un=.35,Vi=260,Wi=.08,Ki=.65,tt=Object.freeze([.25,.5,.75,1,1.25,1.5,2]),jt="horo-playback-rate",ga=Number(v(jt));let D=tt.includes(ga)?ga:1,de=[],oe=null,h=null,pn=0,rt=null;const fn=window.matchMedia("(prefers-color-scheme: dark)"),ya=v("horo-theme");let $t=ya==="dark"?"dark":ya==="light"?"light":fn.matches?"dark":"light";const fe=_i({onPlayPause:Ss,onFocusOpener:()=>{try{window.focus()}catch{}},onPreviousSong:()=>Pe(-1),onNextSong:()=>Pe(1),onClosed:wn});function Mt(e=""){return`<button class="theme-toggle ${e}" type="button" data-theme-toggle></button>`}function In(e,t=!1){$t=e,document.documentElement.dataset.theme=e,document.querySelector('meta[name="theme-color"]').content=e==="dark"?"#151619":"#f5f5f7",t&&v("horo-theme",e),document.querySelectorAll("[data-theme-toggle]").forEach(n=>{const a=e==="dark"?"淺色模式":"深色模式";n.innerHTML=e==="dark"?Zs:Ha,n.setAttribute("aria-label",`切換至${a}`),n.setAttribute("title",`切換至${a}`)}),he()}document.addEventListener("click",e=>{e.target.closest("[data-theme-toggle]")&&In($t==="dark"?"light":"dark",!0)});fn.addEventListener&&fn.addEventListener("change",e=>{v("horo-theme")||In(e.matches?"dark":"light")});function An(e=h,t=R){if(!e)return null;const n=Va()?.[e.id];return n?Sn(n,t):null}function _e(e=R){return sa[e]?.label||sa.jp.label}function yt(e=R){return ea[e]||ea.jp}function za(){return`<span class="chant-source-info">
    <b>應援版本說明</b>：預設為日本版，可用應援版本按鈕切換日本版／韓國版；切換後大合唱標記會同步更新。<br>
    <a href="${Fa}" target="_blank" rel="noopener">日本版參考：Canva《VAUNDY 應援教學》↗</a>
  </span>`}function Xe(){document.querySelectorAll("[data-chant-version]").forEach(e=>{const t=e.dataset.chantVersion===R;e.classList.toggle("active",t),e.setAttribute("aria-pressed",t?"true":"false")}),document.querySelectorAll("[data-chant-version-flag]").forEach(e=>{e.innerHTML=yt()}),document.querySelectorAll("[data-chant-version-toggle]").forEach(e=>{const t=R==="kr";e.classList.toggle("active",t),e.setAttribute("aria-pressed",t?"true":"false"),e.setAttribute("aria-label",`切換應援版本：目前${_e()}，點擊切換`),e.title="點擊切換日本版／韓國版";const n=e.querySelector(".chant-version-value");n&&(n.innerHTML=yt())})}function Ja(e=h){const t=document.getElementById("chant-version-note");if(!t)return;const n=An(e),a=n.resolvedVersion!==R,s=n.sourceIds.map(i=>ki()[i]);t.innerHTML=`<b>${_e()}</b>：${a?`這首歌沿用${_e(n.resolvedVersion)}標記。`:"歌詞旁的麥克風圖示代表大合唱段落。"}${s.map(i=>` <a href="${x(i.url)}" target="_blank" rel="noopener">${x(i.label)} ↗</a>`).join("")}`}function Ya(e=h){const t=document.getElementById("chant-notes-toggle"),n=document.getElementById("chant-notes"),a=document.getElementById("chant-notes-list");if(!t||!n||!a)return;const s=An(e),i=s&&Array.isArray(s.notes)?s.notes.filter(c=>typeof c=="string"&&c.trim()):[],o=i.length>0,r=o&&Wa;t.hidden=!o,t.classList.toggle("active",r),t.setAttribute("aria-expanded",r?"true":"false"),n.hidden=!r,a.innerHTML=i.map(c=>`<li>${x(c)}</li>`).join("")}document.addEventListener("click",e=>{const t=e.target.closest("[data-chant-version]");if(!t)return;const n=t.dataset.chantVersion;n!=="jp"&&n!=="kr"||cs(n)});document.addEventListener("click",e=>{const t=e.target.closest("[data-chant-version-toggle]");if(t){if(e.preventDefault(),e.stopPropagation(),t.id==="guide-chant-version-btn"&&(pe=null,m&&typeof m.pauseVideo=="function"))try{m.pauseVideo()}catch{}cs(R==="jp"?"kr":"jp")}});document.addEventListener("click",e=>{const t=e.target.closest("#chant-notes-toggle");if(!t||t.hidden)return;const n=document.getElementById(t.getAttribute("aria-controls")||"chant-notes");if(!n)return;const a=t.getAttribute("aria-expanded")!=="true";Wa=a,t.classList.toggle("active",a),t.setAttribute("aria-expanded",a?"true":"false"),n.hidden=!a});function $(e){return String(e).padStart(2,"0")}function Xa({resetScroll:e=!0}={}){Xi(),ve=null,yn();const t=location.hash.replace(/^#\/?/,"");let n=null;if(t.startsWith("song/")){const a=t.slice(5);let s=a;try{s=decodeURIComponent(a)}catch{}n=A.find(i=>i.id===s)||A.find(i=>i.id===a)||null}n?us(n):t==="guide"?(cn(),vt("guide"),mo()):t==="setlist"?(cn(),ko()):(cn(),vt("guide"),go(),co()),e&&window.scrollTo(0,0),In($t)}function Gi(e){const t=e.x-ta.cx,n=e.y-ta.cy,a=(Math.atan2(n,t)*180/Math.PI+450)%360;return"配置圖的"+di[Math.round(a/45)%8]}function zi(e){const t=ci[e.grade],n=ui[e.id],a=e.grade==="floor"?n?`入場前請依現場公告前往 <span class="hi">${n}側站席等候區</span>。詳細位置請查看「公告・指南」中的場館地圖。`:"這是環繞舞台的站席區域。入場順序請依演出當天現場指示。":'<span class="warn">A 排・B 排可能因安全欄杆而有些許視線遮擋。</span>';return`<span class="grade ${t.cls}">${t.label}</span><b>${x(e.id)}區</b>・${Gi(e)}<br>${a} <button type="button" class="seat-clear">取消選取</button>`}function bt(e){const t=e&&e.closest?e.closest(".info-card"):null;if(!t||!t.classList.contains("open"))return;const n=t.querySelector(".info-panel");n&&(n.style.maxHeight=n.scrollHeight+"px")}let Ji=[],Yi=[],Ge=[],be=0,Ue=null,Ve=null,ze=null,tn=null,mn=0,se=null;function Za(e,t,{idle:n=!1}={}){const a=++mn,s=()=>{a===mn&&Li(e,t)};if(n){const i=()=>{typeof window.requestIdleCallback=="function"?window.requestIdleCallback(s,{timeout:1500}):window.setTimeout(s,1500)};typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(i):i();return}typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(()=>window.setTimeout(s,0)):window.setTimeout(s,0)}function Xi(){mn++,se?.(),se=null}function Qa(e,t,n){se?.();const a=["pointerdown","keydown","touchstart"],s=()=>{if(location.hash!==n){se?.(),se=null;return}se?.(),se=null,Za(e,t,{idle:!0})};se=()=>{a.forEach(o=>window.removeEventListener(o,s))},a.forEach(o=>window.addEventListener(o,s,{passive:!0}))}function Zi(){return A.map(e=>Ln(e.title)).join("")}function Ln(e){const t=String(e??""),n=t.match(/\(([^()]*)\)/);return n?n[1]:t}function Qi(e){const t=An(e,"jp");return[Ln(e.title),...(e.lyrics||[]).map(n=>n.jp||""),...(t?.cues||[]).flatMap(n=>(n.chant.parts||[]).map(a=>a.jp.text))]}function es(e,t,n,a){if(!e||e.dataset.loaded==="1")return;e.dataset.loaded="1",e.innerHTML="",n.length=0;let s=t.length;const i=()=>{--s>0||(a&&(a.hidden=n.length>0),bt(e),no(n))};if(!s){a&&(a.hidden=!1);return}t.forEach(o=>{const r=document.createElement("button");r.type="button",r.className="notice-item",r.hidden=!0,r.innerHTML=`<img alt="${x(o.title)}" decoding="async"><span class="cap">${x(o.title)}</span>`;const c=r.querySelector("img");c.loading="lazy",Number.isFinite(Number(o.width))&&Number.isFinite(Number(o.height))&&(c.width=Number(o.width),c.height=Number(o.height)),c.addEventListener("load",()=>{r.hidden=!1,c.naturalWidth>c.naturalHeight*1.05&&r.classList.add("wide"),n.push(o),n.sort((l,u)=>t.indexOf(l)-t.indexOf(u)),r.addEventListener("click",()=>ao(n,n.indexOf(o))),bt(e),i()},{once:!0}),c.addEventListener("error",()=>{r.remove(),i()},{once:!0}),c.src=o.src,e.appendChild(r)})}function eo(){const e=document.getElementById("notice-grid");!e||e.dataset.loaded==="1"||es(e,oi,Ji,document.getElementById("notice-empty"))}function to(){const e=document.getElementById("vaws-grid");!e||e.dataset.loaded==="1"||es(e,ri,Yi,null)}function no(e){if(!("serviceWorker"in navigator)||!e.length)return;const t=e.map(n=>n.src);navigator.serviceWorker.ready.then(n=>n.active&&n.active.postMessage({type:"CACHE_URLS",urls:t})).catch(()=>{})}function ao(e,t){if(!e||!e.length)return;const n=document.getElementById("notice-view");if(!n)return;Ge=e,be=Math.max(0,Math.min(e.length-1,t)),Ue=document.activeElement,ts(),n.inert=!1,n.classList.add("open"),n.setAttribute("aria-hidden","false"),L.inert=!0,document.body.classList.add("no-scroll");const a=document.getElementById("nv-close");a&&a.focus()}function nn(){const e=document.getElementById("notice-view");e&&(e.classList.remove("open","zoom"),e.setAttribute("aria-hidden","true"),e.inert=!0,L.inert=!1,document.body.classList.remove("no-scroll"),Ue&&Ue.isConnected&&Ue.focus(),Ue=null)}function ts(){const e=Ge[be];if(!e)return;const t=document.getElementById("notice-view"),n=document.getElementById("nv-img"),a=document.getElementById("nv-title"),s=document.getElementById("nv-count"),i=document.getElementById("nv-prev"),o=document.getElementById("nv-next"),r=document.getElementById("nv-zoom"),c=document.getElementById("nv-scroll");n&&(n.src=e.src,n.alt=e.title,Number.isFinite(Number(e.width))&&Number.isFinite(Number(e.height))&&(n.width=Number(e.width),n.height=Number(e.height))),a&&(a.textContent=e.title),s&&(s.textContent=be+1+" / "+Ge.length),i&&(i.disabled=be===0),o&&(o.disabled=be===Ge.length-1),t&&t.classList.remove("zoom"),r&&(r.textContent="放大"),c&&(c.scrollTop=0,c.scrollLeft=0)}function De(e){const t=be+e;t<0||t>=Ge.length||(be=t,ts())}function so(){const e=document.getElementById("notice-view");if(!e||e.dataset.wired)return;e.dataset.wired="1";const t=document.getElementById("nv-zoom"),n=document.getElementById("nv-scroll"),a=()=>{const d=e.classList.toggle("zoom");t&&(t.textContent=d?"縮小":"放大"),n&&d&&(n.scrollLeft=(n.scrollWidth-n.clientWidth)/2)},s=document.getElementById("nv-close"),i=document.getElementById("nv-prev"),o=document.getElementById("nv-next");s&&s.addEventListener("click",nn),i&&i.addEventListener("click",()=>De(-1)),o&&o.addEventListener("click",()=>De(1)),t&&t.addEventListener("click",a);const r=document.getElementById("nv-img");r&&r.addEventListener("click",a),n&&n.addEventListener("click",d=>{d.target===n&&nn()}),document.addEventListener("keydown",d=>{if(e.classList.contains("open")){if(d.key==="Escape")d.preventDefault(),nn();else if(d.key==="ArrowLeft")d.preventDefault(),De(-1);else if(d.key==="ArrowRight")d.preventDefault(),De(1);else if(d.key==="Tab"){const p=[...e.querySelectorAll("button")].filter(E=>!E.disabled&&E.offsetParent!==null),f=p[0],y=p[p.length-1];d.shiftKey&&document.activeElement===f?(d.preventDefault(),y.focus()):!d.shiftKey&&document.activeElement===y&&(d.preventDefault(),f.focus())}}});let c=0,l=0,u=!1;e.addEventListener("touchstart",d=>{if(e.classList.contains("zoom"))return;const p=d.touches[0];c=p.clientX,l=p.clientY,u=!1},{passive:!0}),e.addEventListener("touchend",d=>{if(e.classList.contains("zoom")||u)return;const p=d.changedTouches[0],f=p.clientX-c,y=p.clientY-l;Math.abs(f)>60&&Math.abs(f)>Math.abs(y)*1.5&&De(f<0?1:-1)},{passive:!0})}function io(){return tn||(tn=Me(()=>import("./CHANGELOG-Dy17FSsv.js"),[],import.meta.url).then(e=>e.default||"").catch(()=>"")),tn}function oo(){const e=document.getElementById("changelog-view"),t=document.getElementById("changelog-content");if(!e||!t)return;t.dataset.rendered!=="1"&&t.dataset.loading!=="1"&&(t.dataset.loading="1",t.textContent="載入版本記錄…",io().then(s=>{t.dataset.rendered!=="1"&&(t.innerHTML=s?Fi(s):"<p>版本記錄暫時無法載入。</p>",t.dataset.rendered="1")})),Ve=document.activeElement,ze=X()?S:L,ze.inert=!0,e.inert=!1,e.classList.add("open"),e.setAttribute("aria-hidden","false"),document.body.classList.add("no-scroll");const n=document.getElementById("changelog-scroll");n&&(n.scrollTop=0);const a=document.getElementById("changelog-close");a&&a.focus()}function an(){const e=document.getElementById("changelog-view");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true"),e.inert=!0,ze&&(ze.inert=!1),ze=null,document.body.classList.remove("no-scroll"),Ve&&Ve.isConnected&&Ve.focus(),Ve=null)}function ro(){const e=document.getElementById("changelog-view");if(!e||e.dataset.wired)return;e.dataset.wired="1";const t=document.getElementById("changelog-close"),n=document.getElementById("changelog-scroll");t&&t.addEventListener("click",an),e&&e.addEventListener("click",a=>{(a.target===e||a.target===n)&&an()}),document.addEventListener("click",a=>{a.target.closest&&a.target.closest("[data-open-changelog]")&&(a.preventDefault(),oo())}),document.addEventListener("keydown",a=>{if(!e.classList.contains("open"))return;if(a.key==="Escape"){a.preventDefault(),an();return}if(a.key!=="Tab")return;const s=[...e.querySelectorAll("button, a[href]")].filter(r=>!r.disabled&&r.offsetParent!==null),i=s[0],o=s[s.length-1];!i||!o||(a.shiftKey&&document.activeElement===i?(a.preventDefault(),o.focus()):!a.shiftKey&&document.activeElement===o&&(a.preventDefault(),i.focus()))})}function lo(){const e=document.querySelector(".seat-map"),t=document.getElementById("seat-readout");if(!e||!t)return;const n=[...e.querySelectorAll(".seat-blk")],a=(i,o)=>{n.forEach(l=>l.classList.remove("selected"));const r=i?na.find(l=>l.id===i):null;if(!r){t.textContent=aa,o&&v("horo-seat",""),bt(t);return}const c=n.find(l=>l.dataset.id===i);c&&c.classList.add("selected"),t.innerHTML=zi(r),o&&v("horo-seat",i),bt(t)};e.addEventListener("click",i=>{const o=i.target.closest&&i.target.closest(".seat-blk");o&&a(o.classList.contains("selected")?null:o.dataset.id,!0)}),e.addEventListener("keydown",i=>{if(i.key!=="Enter"&&i.key!==" ")return;const o=i.target.closest&&i.target.closest(".seat-blk");o&&(i.preventDefault(),a(o.classList.contains("selected")?null:o.dataset.id,!0))}),t.addEventListener("click",i=>{i.target.closest(".seat-clear")&&a(null,!0)});const s=v("horo-seat");s&&na.some(i=>i.id===s)?a(s,!1):t.textContent=aa}function co(){(!ma||!L.querySelector(".hero"))&&(L.innerHTML=ai(Bt,Mt("home-theme"))),ma=!1,document.getElementById("guide-btn").addEventListener("click",()=>{location.hash="#/guide"}),document.getElementById("setlist-btn").addEventListener("click",()=>{location.hash="#/setlist"}),po(),so(),lo(),So(),To()}function uo(e){const t=e.closest(".hero-inner");!t||t.style.marginTop||(t.style.marginTop=getComputedStyle(t).marginTop,t.style.marginBottom="0px")}let ba=null;window.addEventListener("resize",()=>{if(window.innerWidth===ba)return;ba=window.innerWidth;const e=document.querySelector(".hero-inner");e&&!e.querySelector(".info-card.open")&&(e.style.marginTop="",e.style.marginBottom="")});function po(){document.querySelectorAll(".info-card").forEach(e=>fo(e))}function fo(e){const t=e.querySelector(".info-toggle"),n=e.querySelector(".info-panel");!e||!t||!n||t.addEventListener("click",()=>{if(e.classList.contains("open"))n.inert=!0,n.setAttribute("aria-hidden","true"),n.style.maxHeight=n.scrollHeight+"px",requestAnimationFrame(()=>{e.classList.remove("open"),t.setAttribute("aria-expanded","false"),n.style.maxHeight="0px"});else{uo(e);const s=n.querySelector(":scope > .info-panel-template");s&&n.replaceChild(s.content.cloneNode(!0),s),n.inert=!1,n.setAttribute("aria-hidden","false"),e.classList.add("open"),t.setAttribute("aria-expanded","true"),n.querySelectorAll("img[data-src]").forEach(i=>{i.src=i.dataset.src,delete i.dataset.src}),e.id==="notice-card"&&eo(),e.id==="vaws-card"&&to(),e.id==="way-card"&&Io(),n.style.maxHeight=n.scrollHeight+"px",setTimeout(()=>{e.classList.contains("open")&&(n.style.maxHeight=n.scrollHeight+"px")},300)}})}function mo(){L.innerHTML=`
    <div class="guide-page">
      <div class="song-topbar">
        <button class="back-btn" id="back-btn" aria-label="返回首頁" title="返回首頁">${Nt}</button>
        ${Mt()}
      </div>

      <section class="songs-section">
        <div class="songs-head">
          <h1>應援指南 無劇透</h1>
          <p>選擇歌曲，搭配影片查看歌詞與大合唱重點</p>
          <div class="song-legend">
            <span class="legend-item"><span class="legend-icon chant">${N.mic}</span>大合唱 <b class="legend-num">12</b> 行</span>
            <span class="legend-item"><span class="legend-icon clap">${N.clap}</span>拍手</span>
            <span class="legend-item"><span class="legend-icon wave">${N.wave}</span>揮手</span>
            <span class="legend-item"><span class="legend-icon jump">${N.jump}</span>跳躍</span>
            <span class="legend-item"><span class="legend-icon spin">${N.spin}</span>轉臂</span>
          </div>
          <p class="song-legend-note">數字代表目前應援版本的大合唱歌詞行數。<br>切換歌曲時會依目前排序移動。<br>拍手・揮手提示會顯示在歌曲頁面。</p>
        </div>
        <details class="chant-source-details" id="guide-chant-source">
          <summary>應援版本說明</summary>
          <div id="guide-chant-source-content"></div>
        </details>
        <div class="song-search-sentinel" id="song-search-sentinel"></div>
        <div class="song-search">
          <label class="search-label" for="song-search-input">搜尋歌曲</label>
          <div class="song-search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>
            <input id="song-search-input" type="search" inputmode="search" autocomplete="off"
                   placeholder="搜尋歌曲名稱・編號">
            <button type="button" class="song-search-clear" id="song-search-clear" aria-label="清除">✕</button>
          </div>
        </div>
        <div class="song-sorts" role="group" aria-label="歌曲清單排序">
          <button class="song-sort" type="button" data-sort="default">預設</button>
          <button class="song-sort" type="button" data-sort="title" id="sort-title">名稱</button>
          <button class="song-sort" type="button" data-sort="chant" id="sort-chant">大合唱</button>
        </div>
        <div class="song-search-meta"><span id="song-count">共 ${A.length} 首</span></div>
        <p class="song-empty" id="song-empty" hidden><b>找不到歌曲</b>請輸入部分歌曲名稱或歌曲編號</p>
        <ul class="song-list" id="song-list"></ul>
      </section>

      ${Oa(Bt)}
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>{location.hash="#/"});const e=document.getElementById("guide-chant-source"),t=document.getElementById("guide-chant-source-content");e?.addEventListener("toggle",()=>{!e.open||!t||t.dataset.loaded==="1"||(t.innerHTML=`${za()}
      <section class="chant-differences" aria-labelledby="chant-differences-title">
        <div class="chant-differences-head">
          <h2 id="chant-differences-title">日本版／韓國版差異</h2>
          <button type="button" class="chant-differences-current chant-version-current" id="guide-chant-version-btn" data-chant-version-toggle aria-pressed="false" aria-label="切換應援版本：目前${_e()}，點擊切換">
            目前 <span data-chant-version-flag aria-hidden="true">${yt()}</span>
          </button>
        </div>
        <ul>${fi.map(n=>`<li>${x(n)}</li>`).join("")}</ul>
        <p class="chant-differences-footnote">未列入日本版歌單的歌曲會暫沿用現有標記，現場仍以 Vaundy 與觀眾的即時引導為準。</p>
      </section>`,t.dataset.loaded="1",Xe())}),Xe(),L.querySelectorAll(".song-sort").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.sort;a==="chant"?C=C==="chant-desc"?"chant-asc":"chant-desc":a==="title"?C=C==="title"?"title-desc":"title":C=a,v("horo-song-sort",C),gn({eager:!0})})}),Lo(),gn(),Qa(Zi(),[500],"#/guide")}let Se="guide";function vt(e){Se=e==="setlist"?"setlist":"guide"}function ho(){return Se==="setlist"?"#/setlist":"#/guide"}function kt(e){const t=A.find(n=>n.id===e.id);return t?t.title:e.title||e.id}function we(e){return x(String(e??"")).replace(/\(([^()]*)\)/g,(t,n)=>`(<span lang="ja">${n}</span>)`)}let Y="random",Je=null,hn=!1,wt=0;function go(){hn=!1,wt=0,Y="random"}let ns=(()=>{const e=parseInt(v("horo-set-pos"),10);return Number.isFinite(e)&&e>=0?e:-1})();function Tn(e){ns=e,v("horo-set-pos",String(e))}function nt(){const e=[];return ie.items.forEach(t=>t.songs.forEach((n,a)=>e.push({key:t.n+":"+a,id:n.id}))),e}function as(){const e=nt().map(t=>t.key);for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}Je=e,v("horo-set-shuffle2",JSON.stringify(e))}function yo(){const e=nt();if(Je&&Je.length===e.length)return;const t=v("horo-set-shuffle2");if(t)try{const n=JSON.parse(t);if(Array.isArray(n)&&n.length===e.length){Je=n;return}}catch{}as()}function ss(){yo();const e=new Map(nt().map(t=>[t.key,t]));return Je.map(t=>e.get(t)).filter(Boolean)}function is(){return(Y==="random"?ss():nt()).filter(t=>A.some(n=>n.id===t.id))}function bo(e){if(e.songs.length===1){const t=e.songs[0],n=A.some(a=>a.id===t.id);return`
      <li class="set-item">
        <button class="set-row" data-id="${x(t.id)}" ${n?"":"disabled"}>
          <span class="set-num">${$(e.n)}</span>
          <span class="set-title">${we(kt(t))}</span>
          <span class="set-go">${n?"›":""}</span>
        </button>
      </li>`}return`
    <li class="set-item">
      <div class="set-split">
        <div class="set-split-head">
          <span class="set-num">${$(e.n)}</span>
          <span class="set-split-note">日期不同的歌曲</span>
        </div>
        ${e.songs.map(t=>{const n=A.some(a=>a.id===t.id);return`
          <button class="set-row sub" data-id="${x(t.id)}" ${n?"":"disabled"}>
            <span class="day-chip ${t.day==="日"?"sun":""}">${t.day}</span>
            <span class="set-title">${we(kt(t))}</span>
            <span class="set-go">${n?"›":""}</span>
          </button>`}).join("")}
      </div>
    </li>`}function vo(e){const t=A.some(n=>n.id===e.id);return`
    <li class="set-item">
      <button class="set-row" data-id="${x(e.id)}" ${t?"":"disabled"}>
        <span class="set-num rand">♪</span>
        <span class="set-title">${we(kt(e))}</span>
        <span class="set-go">${t?"›":""}</span>
      </button>
    </li>`}function lt(){const e=document.getElementById("set-list");if(!e)return;const t=Y==="order",n=nt().length;e.innerHTML=t?ie.items.map(bo).join(""):ss().map(vo).join("");const a=document.getElementById("setlist-count");a&&(a.textContent=t?`東京/首爾 ${ie.items.length} 首・共 ${n} 首`:`共 ${n} 首`);const s=document.getElementById("setlist-mode-meta");s&&(s.textContent=t?"劇透":"隨機");const i=document.getElementById("set-shuffle");i&&(i.hidden=t);const o=document.getElementById("setlist-desc");o&&(o.innerHTML=t?`${x(ie.dates)}<br>點選歌曲即可前往應援指南`:`${x(ie.dates)}<br>目前將歌曲<b>打亂顯示，不公開演出順序</b>`);const r=document.getElementById("setlist-note");r&&(r.innerHTML=t?`※ 這是整理自粉絲紀錄的非官方東京/首爾歌單，首爾場順序與東京場相同；台北場實際演出順序仍以官方公告為準。<br>
       ※ 日期不同而有變化的曲目，已分為<b>六</b>・<b>日</b>。`:`※ 這是整理自粉絲紀錄的非官方東京/首爾歌單，首爾場順序與東京場相同；台北場實際演出順序仍以官方公告為準。<br>
       ※ 演出順序與日期差異曲目皆已隱藏。想查看完整內容，請在上方點選<b>演出順序</b>。`),L.querySelectorAll(".set-mode").forEach(l=>{const u=l.dataset.mode===Y;l.classList.toggle("active",u),l.setAttribute("aria-pressed",u?"true":"false")});let c=0;e.querySelectorAll(".set-row").forEach(l=>{if(l.disabled)return;const u=c++;l.addEventListener("click",()=>{const d=A.find(p=>p.id===l.dataset.id);d&&(wt=window.scrollY,vt("setlist"),Tn(u),Rt(d))})}),Qa(ie.items.map(l=>Ln(kt(l))).join(""),[500],"#/setlist")}function ko(){L.innerHTML=`
    <div class="setlist-page">
      <div class="song-topbar">
        <button class="back-btn" id="setlist-back-btn" aria-label="返回首頁" title="返回首頁">${Nt}</button>
        <h1>歌單</h1>
        ${Mt()}
      </div>

      <section class="spoiler-hero">
        <div class="spoiler-mark">${_a}</div>
        <h2 class="spoiler-title">劇透注意</h2>
        <p class="spoiler-desc">
          這個頁面包含<b>${ie.label}的歌曲名稱與順序</b>。<br>
          選擇查看方式前，不會顯示內容。
        </p>
        <button class="spoiler-safe" type="button" id="spoiler-safe">不看劇透，返回首頁</button>

        <div class="spoiler-choice">
          <button class="spoiler-open soft" type="button" data-mode="random">
            <b>只看歌曲名稱<span class="tag">歌曲劇透</span></b>
            <span>打亂顯示演出順序</span>
          </button>
          <button class="spoiler-open" type="button" data-mode="order">
            <b>依演出順序查看<span class="tag">完整劇透</span></b>
            <span>公開歌曲名稱與完整順序</span>
          </button>
        </div>
      </section>

      <section class="setlist-body" id="setlist-body" hidden inert>
        <div class="setlist-head">
          <h2>${x(ie.label)}歌單</h2>
          <p id="setlist-desc"></p>
        </div>

        <div class="set-modes" role="group" aria-label="歌單查看方式">
          <button class="set-mode" type="button" data-mode="order">演出順序<span class="set-mode-badge">劇透</span></button>
          <button class="set-mode" type="button" data-mode="random">隨機順序</button>
        </div>
        <div class="set-order-confirm" id="set-order-confirm" role="group" aria-label="確認公開演出順序" hidden>
          <p>演出順序將完整公開。</p>
          <button type="button" id="set-order-cancel">取消</button>
          <button type="button" id="set-order-reveal">公開順序</button>
        </div>

        <div class="set-shuffle" id="set-shuffle" hidden>
          <span><b>已將順序打亂。</b>先看看有哪些歌曲，把順序留到演出當天揭曉吧。</span>
          <button type="button" id="set-reshuffle">重新打亂</button>
        </div>

        <div class="setlist-meta">
          <span id="setlist-count"></span>
          <span id="setlist-mode-meta">劇透</span>
        </div>

        <ul class="set-list" id="set-list"></ul>

        <p class="setlist-note" id="setlist-note"></p>
      </section>
    </div>
  `,document.getElementById("setlist-back-btn").addEventListener("click",()=>{location.hash="#/"}),document.getElementById("spoiler-safe").addEventListener("click",()=>{location.hash="#/"});const e=document.getElementById("setlist-body"),t=document.getElementById("set-order-confirm"),n=(a,s)=>{Y=a==="order"?"order":"random",hn=!0,lt(),e.hidden=!1,e.inert=!1,s!==!1&&e.scrollIntoView({behavior:"smooth",block:"start"})};if(L.querySelectorAll(".spoiler-choice .spoiler-open").forEach(a=>{a.addEventListener("click",()=>n(a.dataset.mode))}),L.querySelectorAll(".set-mode").forEach(a=>{a.addEventListener("click",()=>{if(a.dataset.mode==="order"&&Y!=="order"){t.hidden=!1,document.getElementById("set-order-cancel").focus();return}t.hidden=!0,Y!==a.dataset.mode&&(Y=a.dataset.mode==="random"?"random":"order",lt())})}),document.getElementById("set-order-cancel").addEventListener("click",()=>{t.hidden=!0,L.querySelector('.set-mode[data-mode="order"]').focus()}),document.getElementById("set-order-reveal").addEventListener("click",()=>{t.hidden=!0,Y="order",lt(),L.querySelector('.set-mode[data-mode="order"]').focus()}),document.getElementById("set-reshuffle").addEventListener("click",()=>{as(),lt()}),hn&&(n(Y,!1),wt>0)){const a=wt,s=()=>{const i=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo(0,Math.min(a,i))};requestAnimationFrame(s),setTimeout(s,80),setTimeout(s,260)}}function sn(e,t,n){const a=document.querySelector(".cd-pill"),s=document.getElementById("cd-dday"),i=document.getElementById("cd-clock");!a||!s||!i||(s.textContent=e,i.textContent=t||"",a.classList.toggle("is-live",n==="live"),a.classList.toggle("is-end",n==="end"))}function wo(e,t){document.querySelectorAll(".show-meta .show-row").forEach((a,s)=>{const i=s===e,o=!i&&(t===-1||s<t);a.classList.toggle("live",i),a.classList.toggle("past",o)})}function os(e){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(e)}function Eo(e,t){const n=a=>{const s=os(new Date(a));return Date.UTC(+s.slice(0,4),+s.slice(5,7)-1,+s.slice(8,10))};return Math.max(0,Math.round((n(t)-n(e))/864e5))}let on=null;function xo(e){const t=document.getElementById("today-card");if(!t)return;const n=os(new Date(e)),a=si[n];if(!a){t.hidden=!0,on=null;return}t.hidden=!1;const s=a.map(y=>new Date(`${n}T${y.t}:00+09:00`).getTime()),i=s.findIndex(y=>y>e),o=i===-1?a.length-1:i-1;if(on!==n){on=n;const y=new Date(`${n}T12:00:00+09:00`),E=["日","一","二","三","四","五","六"][y.getDay()];document.getElementById("today-title").textContent=`今日演出・${Number(n.slice(5,7))}/${Number(n.slice(8,10))}（${E}）`}document.getElementById("today-list").innerHTML=a.map((y,E)=>`<li class="${E<o?"past":E===o?"now":""}"><span class="t">${y.t}</span><span class="l">${x(y.label)}</span></li>`).join("");const r=document.getElementById("today-now");if(i===-1){r.innerHTML="<b>今天的演出已全部結束。</b>辛苦了！";return}const c=s[i]-e,l=Math.floor(c/36e5),u=Math.floor(c%36e5/6e4),d=Math.floor(c%6e4/1e3),p=l>0?`${l} 小時 ${$(u)} 分 ${$(d)} 秒`:`${u} 分 ${$(d)} 秒`,f=o>=0?`<b>${x(a[o].label)}</b>進行中<br>`:"";r.innerHTML=`${f}距離${x(a[i].label)}還有 <span class="left">${p}</span>`}function So(){const e=document.getElementById("share-btn");e&&e.addEventListener("click",async()=>{const t={title:'VAUNDY "HORO" TAIPEI 應援指南',text:"搭配影片查看各曲歌詞與大合唱、拍手、揮手重點",url:location.href.split("#")[0]};try{if(navigator.share){await navigator.share(t);return}await navigator.clipboard.writeText(t.url),Ut("已<b>複製</b>連結，請貼上分享。","確定",Vt)}catch{}})}function Io(){const e=document.getElementById("copy-addr");!e||e.dataset.wired==="1"||(e.dataset.wired="1",e.addEventListener("click",async()=>{const t="105037 臺北市松山區南京東路4段2號 台北小巨蛋 Taipei Arena";try{await navigator.clipboard.writeText(t),e.textContent="已複製 ✓"}catch{e.textContent=t}setTimeout(()=>{e.textContent="複製地址"},1600)}))}const Ao=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];function rs(e){return[...String(e)].map(t=>{const n=t.charCodeAt(0);return n>=44032&&n<=55203?Ao[Math.floor((n-44032)/588)]:t}).join("")}const Be=e=>String(e).toLowerCase().replace(/\s+/g,"");let ct=0,ve=null,ne=null,K=null;function gn({eager:e=!1}={}){const t=document.getElementById("song-list");if(!t)return;ne&&(window.removeEventListener("scroll",ne),ne=null),K?.remove(),K=null;const n=Rn(),a=++ct;ve=null,t.dataset.total=String(n.length),t.innerHTML="",t.dataset.clickBound!=="1"&&(t.dataset.clickBound="1",t.addEventListener("click",l=>{const u=l.target.closest(".song-row");if(!u||!t.contains(u))return;const d=A.find(p=>p.id===u.dataset.id);d&&(vt("guide"),Rt(d))}),t.addEventListener("focusin",()=>ve?.()));let s=0;const i=({filter:l=!0,includeMarks:u=!0}={})=>{if(a!==ct||!t.isConnected)return;const d=Math.min(s+4,n.length),p=n.slice(s,d).map(f=>`
      <li data-no="${ue(f)}">
        <button class="song-row" data-id="${x(f.id)}">
          <span class="song-num">${$(ue(f))}</span>
          <span class="song-title">${we(f.title)}</span>
          ${u?Ta(f):'<span class="song-marks song-marks-placeholder" aria-hidden="true"></span>'}
        </button>
      </li>`).join("");K?.isConnected?K.insertAdjacentHTML("beforebegin",p):t.insertAdjacentHTML("beforeend",p),s=d,l&&mt()},o=()=>{if(a!==ct||!t.isConnected)return;for(ne&&(window.removeEventListener("scroll",ne),ne=null),K?.remove(),K=null;s<n.length;)i({filter:!1,includeMarks:!0});const l=new Map(n.map(u=>[String(ue(u)),u]));t.querySelectorAll(".song-marks-placeholder").forEach(u=>{const d=u.closest("li"),p=d&&l.get(d.dataset.no);u.outerHTML=p?Ta(p):""}),ve=null,mt()};if(ve=o,i({includeMarks:!0}),e)o();else if(s<n.length){K=document.createElement("li"),K.className="song-list-sentinel",K.setAttribute("aria-hidden","true"),t.appendChild(K);let l=null;const u=()=>{l=null,!(a!==ct||!t.isConnected||!K?.isConnected)&&(K.getBoundingClientRect().top>window.innerHeight+480||(i({includeMarks:!0}),s<n.length&&i({includeMarks:!0}),s>=n.length&&o()))};ne=()=>{l===null&&(l=window.requestAnimationFrame(u))},window.addEventListener("scroll",ne,{passive:!0})}L.querySelectorAll(".song-sort").forEach(l=>{const u=l.dataset.sort==="chant"||l.dataset.sort==="title"?C.startsWith(l.dataset.sort):l.dataset.sort===C;l.classList.toggle("active",u),l.setAttribute("aria-pressed",u?"true":"false")});const r=document.getElementById("sort-chant");if(r){const l=C==="chant-asc"?"少→多":"多→少";r.innerHTML=C.startsWith("chant")?`大合唱 <span class="dir">${l}</span>`:"大合唱"}const c=document.getElementById("sort-title");if(c){const l=C==="title-desc"?"Z→A":"A→Z";c.innerHTML=C.startsWith("title")?`名稱 <span class="dir">${l}</span>`:"名稱"}mt()}function mt(){const e=document.getElementById("song-search-input"),t=document.getElementById("song-search-clear"),n=document.getElementById("song-count"),a=document.getElementById("song-empty"),s=document.querySelectorAll("#song-list > li[data-no]");if(!e||!s.length)return;const i=Number(document.getElementById("song-list")?.dataset.total)||s.length,o=Be(e.value).replace(/번$/,""),r=/^\d{1,2}$/.test(o);let c=0;s.forEach(l=>{const u=l.querySelector(".song-title").textContent,d=l.dataset.no,p=!o||(r?d===String(Number(o))||$(Number(d))===o:Be(u).includes(o)||Be(rs(u)).includes(o));l.hidden=!p,p&&c++}),n&&(n.textContent=o?`搜尋結果 ${c} 首`:`共 ${i} 首`),a&&(a.hidden=c!==0),t&&t.classList.toggle("show",!!e.value)}function Lo(){const e=document.getElementById("song-search-input"),t=document.getElementById("song-search-clear");if(!e)return;const n=mt,a=document.querySelector(".song-search"),s=document.getElementById("song-search-sentinel");a&&s&&"IntersectionObserver"in window&&new IntersectionObserver(([i])=>{a.classList.toggle("stuck",!i.isIntersecting)},{threshold:0}).observe(s),e.addEventListener("input",()=>{ve?.(),n()}),t.addEventListener("click",()=>{ve?.(),e.value="",n(),e.focus()}),n()}function To(){const e=ii.map(a=>({start:new Date(a.start).getTime(),end:new Date(a.end).getTime()})),t=e[e.length-1].end;function n(){if(!document.getElementById("countdown")){yn();return}const s=Date.now();xo(s);const i=e.findIndex(p=>s>=p.start&&s<p.end),o=e.findIndex(p=>p.start>s);if(wo(i,o),i!==-1){sn("現在","直播中","live");return}if(o===-1){s>=t&&(sn("結束","","end"),yn());return}const r=e[o].start-s,c=Eo(s,e[o].start),l=Math.floor(r/36e5),u=Math.floor(r%36e5/6e4),d=Math.floor(r%6e4/1e3);sn(`D-${$(c)}`,`${$(l)}:${$(u)}:${$(d)}`,"count")}n(),ut=setInterval(n,1e3)}function yn(){ut&&(clearInterval(ut),ut=null)}function Et(){const e=document.getElementById("sheet-search-input"),t=document.getElementById("sheet-search-clear"),n=S.querySelector(".song-sheet-count"),a=document.getElementById("sheet-empty"),s=S.querySelectorAll("#song-sheet-list > li");if(!e||!s.length)return;const i=Be(e.value).replace(/번$/,""),o=/^\d{1,2}$/.test(i);let r=0;s.forEach(c=>{const l=c.querySelector(".song-sheet-name").textContent,u=c.dataset.no,d=!i||(o?u===String(Number(i))||$(Number(u))===i:Be(l).includes(i)||Be(rs(l)).includes(i));c.hidden=!d,d&&r++}),n&&(n.textContent=i?`${r} 首`:`${s.length} 首`),a&&(a.hidden=r!==0),t&&t.classList.toggle("show",!!e.value)}function Co(){const e=document.getElementById("sheet-search-input");e&&(e.value="",Et())}function No(){const e=document.getElementById("song-sheet"),t=document.getElementById("song-picker-btn"),n=document.getElementById("song-sheet-list");if(!e)return;e.inert=!1,e.classList.add("open"),e.setAttribute("aria-hidden","false"),t&&t.setAttribute("aria-expanded","true"),S.querySelectorAll("#song-page > .song-topbar, #song-page > .song-body, #song-page > .player-controls, #song-page > .song-dock").forEach(s=>{s.inert=!0});const a=n&&n.querySelector(".song-sheet-item.current");a&&(n.scrollTop=Math.max(0,a.offsetTop-n.clientHeight/2+a.offsetHeight/2)),e.querySelector(".song-sheet-close").focus()}function Ne(){const e=document.getElementById("song-sheet"),t=document.getElementById("song-picker-btn");if(!e)return;const n=e.classList.contains("open");Co(),S.querySelectorAll("#song-page > .song-topbar, #song-page > .song-body, #song-page > .player-controls, #song-page > .song-dock").forEach(a=>{a.inert=!1}),e.classList.remove("open"),e.setAttribute("aria-hidden","true"),e.inert=!0,t&&t.setAttribute("aria-expanded","false"),n&&t&&t.focus()}let Ie=!1;function Bo(){if(Se==="setlist"){const e=is();if(e.length){const t=e.map(n=>A.find(a=>a.id===n.id)).filter(Boolean);if(t.length)return t}}return Rn()}function xt(e){if(Se==="setlist"){const a=is();if(a.length){let s=ns;if(s>=0&&s<a.length&&a[s].id===e.id||(s=a.findIndex(i=>i.id===e.id)),s>=0){const i=(s-1+a.length)%a.length,o=(s+1)%a.length,r=c=>A.find(l=>l.id===a[c].id)||e;return{idx:s,prev:r(i),next:r(o),pos:s,prevPos:i,nextPos:o}}}}const t=Rn(),n=t.findIndex(a=>a.id===e.id);return n<0?{idx:-1,prev:e,next:e}:{idx:n,prev:t[(n-1+t.length)%t.length],next:t[(n+1)%t.length]}}function Pe(e){if(!h)return;const t=xt(h),n=e<0?t.prev:t.next,a=e<0?t.prevPos:t.nextPos;a!==void 0&&Tn(a),Rt(n)}function ls(){if(Ie)return;Ie=!0,ce=v("horo-venue")==="1",S.innerHTML=`
    <div class="song-page" id="song-page">
      <div class="song-topbar">
        <div class="song-playback-progress" id="song-playback-progress" role="progressbar" aria-label="播放進度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-valuetext="正在載入播放進度">
          <span class="song-playback-progress-fill" id="song-playback-progress-fill"></span>
        </div>
        <button class="back-btn" id="song-back-btn" aria-label="返回歌曲清單" title="返回歌曲清單">${Nt}</button>
        <h1 class="visually-hidden" id="song-page-heading"></h1>
        <nav class="song-dock" aria-label="切換歌曲">
        <div class="song-nav">
          <button class="song-nav-btn" id="prev-song" aria-label="上一首">${Pa}</button>
          <div class="song-picker-h">
            <button class="song-picker-btn" id="song-picker-btn" aria-expanded="false" aria-haspopup="dialog" title="開啟歌曲清單">
              <span class="song-picker-number" id="song-picker-number"></span>
              <span class="song-picker-title" id="song-picker-title"></span>
              <span class="song-picker-caret">${ae}</span>
            </button>
          </div>
          <button class="song-nav-btn" id="next-song" aria-label="下一首">${Ra}</button>
        </div>
        </nav>
        ${Mt()}
      </div>

      <div class="song-body">
        <div class="song-fixed-top">
          <div class="video-wrap">
            <div class="video-frame">
              <div id="yt-player"></div>
              <details class="karaoke-source-popover" id="karaoke-source-popover">
                <summary aria-label="查看同步資訊與中譯歌詞作者" title="同步資訊與中譯歌詞作者">${$a}</summary>
                <span class="karaoke-source-status" id="karaoke-source-status" role="status" aria-live="polite">
                  <span id="karaoke-source-status-text"></span>
                  <span class="lyrics-credit" id="lyrics-credit" hidden></span>
                  ${za()}
                </span>
              </details>
              <div class="video-status" id="video-status" role="status">正在載入影片…</div>
            </div>
          </div>

          <div class="lyrics-note">
            <span class="dot">●</span>
            <span class="lyrics-note-copy">點選歌詞跳至影片位置，歌詞隨影片同步。</span>
            <a class="watch-on-yt" id="watch-on-yt" href="#" target="_blank" rel="noopener">在 YouTube 觀看 ↗</a>
          </div>

          <div class="lyrics-legend">
            <span class="legend-item"><span class="legend-icon chant">${N.mic}</span>大合唱</span>
            <span class="legend-item"><span class="legend-icon clap">${N.clap}</span>拍手</span>
            <span class="legend-item"><span class="legend-icon wave">${N.wave}</span>揮手</span>
            <button type="button" class="chant-notes-toggle" id="chant-notes-toggle" aria-expanded="false" aria-controls="chant-notes" title="查看這首歌的日本版應援提示" hidden>
              <span class="chant-notes-label">應援說明</span><span class="chant-notes-chevron" aria-hidden="true">${ae}</span>
            </button>
          </div>
          <div class="chant-notes-panel" id="chant-notes" hidden>
            <ul class="chant-notes-list" id="chant-notes-list"></ul>
            <a href="${Fa}" target="_blank" rel="noopener">Canva《VAUNDY 應援教學》↗</a>
          </div>
        </div>

        <div class="lyrics-pane">
          <!-- 떼창만 듣기 — 켜져 있을 때만 보이는 띠 -->
          <div class="chant-bar" id="chant-bar" hidden role="status">
            <span class="chant-ico">${Zn}</span>
            <span class="chant-bar-label">只聽大合唱</span>
            <span class="chant-bar-msg" id="chant-msg"></span>
            <span class="chant-bar-count" id="chant-count"></span>
            <button class="chant-step" id="chant-prev" aria-label="上一段大合唱">${Js}</button>
            <button class="chant-step" id="chant-next" aria-label="下一段大合唱">${Ys}</button>
            <button class="chant-bar-off" id="chant-off" aria-label="關閉只聽大合唱">${Qn}</button>
          </div>

          <!-- 짤방(동작 사진) — 지정한 가사에서만 떴다가 사라집니다 -->
          <div class="tip-pic at-below-video" id="tip-pic" aria-live="polite">
            <figure class="tip-pic-card" id="tip-pic-card" title="點選即可放大">
              <video id="tip-pic-video" muted loop playsinline preload="none" aria-hidden="true" hidden></video>
              <img id="tip-pic-img" alt="" decoding="async" hidden>
              <figcaption class="tip-pic-cap" id="tip-pic-cap"></figcaption>
            </figure>
          </div>

          <div class="lyrics-scroll">
            <p class="lyrics-hidden-message" role="status" aria-live="polite" hidden>歌詞已隱藏</p>
            <ul class="lyrics-list" id="lyrics-list"></ul>
          </div>
        </div>
      </div>

      <div class="player-controls">
        <button class="play-toggle" id="play-toggle" aria-label="播放／暫停">${gt}</button>
        <label class="playback-rate-control" for="playback-rate">
          <select class="playback-rate-select" id="playback-rate" aria-label="目前倍速x1">
            ${tt.map(o=>'<option value="'+o+'">'+Bs(o)+"</option>").join("")}
          </select>
        </label>
        <button class="venue-toggle pip-toggle" id="pip-btn" type="button" aria-pressed="false" aria-label="開啟或聚焦同步字幕小窗" title="開啟或聚焦同步字幕小窗"${fe.supported?"":" hidden"}>
          ${Xs}
          <span class="venue-label venue-label-desktop">PiP</span>
          <span class="venue-label venue-label-mobile" aria-hidden="true">PiP</span>
        </button>
        <button class="venue-toggle chant-toggle" id="chant-btn" aria-pressed="false" aria-label="開啟／關閉只聽大合唱">
          <span class="chant-ico">${Zn}</span>
          <span class="venue-label">只聽大合唱</span>
        </button>
        <button class="venue-toggle chant-version-toggle" id="chant-version-btn" data-chant-version-toggle aria-pressed="false" aria-label="切換應援版本">
          <span class="venue-label venue-label-desktop">應援版</span>
          <span class="venue-label venue-label-mobile" aria-hidden="true">應援</span>
          <span class="chant-version-value">${yt()}</span>
        </button>
        <button class="venue-toggle" id="venue-btn" aria-label="開啟／關閉簡潔模式">
          <span class="venue-label">簡潔</span>
          <span class="venue-switch"><span class="venue-knob"></span></span>
        </button>
        <button class="venue-toggle reading-toggle" id="reading-btn" aria-pressed="${j!=="kana"?"true":"false"}" aria-label="切換日文讀音：目前顯示${kn()}">
          <span class="venue-label">讀音</span>
          <span class="reading-value reading-value-desktop" id="reading-value">${kn()}</span>
          <span class="reading-value reading-value-mobile" id="reading-value-mobile" aria-hidden="true">${vs()}</span>
        </button>
        <button class="venue-toggle display-toggle${O?" active":""}" id="japanese-toggle" aria-pressed="${O?"true":"false"}" aria-label="切換日文歌詞：目前${O?"顯示":"隱藏"}">
          <span class="venue-label venue-label-desktop">日文</span>
          <span class="venue-label venue-label-mobile" aria-hidden="true">日</span>
          <span class="venue-switch"><span class="venue-knob"></span></span>
        </button>
        <button class="venue-toggle display-toggle${q?" active":""}" id="chinese-toggle" aria-pressed="${q?"true":"false"}" aria-label="切換繁中翻譯：目前${q?"顯示":"隱藏"}">
          <span class="venue-label venue-label-desktop">中文</span>
          <span class="venue-label venue-label-mobile" aria-hidden="true">中</span>
          <span class="venue-switch"><span class="venue-knob"></span></span>
        </button>
        <button class="venue-toggle display-toggle karaoke-toggle${F?" active":""}" id="karaoke-btn" aria-pressed="${F?"true":"false"}" aria-label="切換逐字卡拉OK高亮：目前${F?"開啟":"關閉"}">
          <span class="venue-label venue-label-desktop">卡拉OK</span>
          <span class="venue-label venue-label-mobile" aria-hidden="true">卡拉</span>
          <span class="venue-switch"><span class="venue-knob"></span></span>
        </button>
        <button class="venue-toggle autoscroll-toggle${Ce?" active":""}" id="autoscroll-btn" aria-label="開啟／關閉自動捲動">
          <span class="venue-label venue-label-desktop">自動捲動</span>
          <span class="venue-label venue-label-mobile" aria-hidden="true">同步</span>
          <span class="venue-switch"><span class="venue-knob"></span></span>
        </button>
      </div>

      <div class="song-sheet" id="song-sheet" aria-hidden="true" inert>
        <div class="song-sheet-backdrop" data-close-sheet></div>
        <div class="song-sheet-panel" role="dialog" aria-modal="true" aria-label="選擇歌曲">
          <span class="song-sheet-grip"></span>
          <div class="song-sheet-head">
            <span class="song-sheet-title" id="song-sheet-title">選擇歌曲</span>
            <span class="song-sheet-count">${A.length} 首</span>
            <button class="song-sheet-close" data-close-sheet aria-label="關閉">${Qn}</button>
          </div>
          <div class="sheet-search">
            <label class="search-label" for="sheet-search-input">搜尋歌曲</label>
            <div class="song-search-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>
              <input id="sheet-search-input" type="search" inputmode="search" autocomplete="off"
                     placeholder="搜尋歌曲名稱・編號">
              <button type="button" class="song-search-clear" id="sheet-search-clear" aria-label="清除">✕</button>
            </div>
          </div>
          <p class="sheet-empty" id="sheet-empty" hidden>找不到歌曲</p>
          <ul class="song-sheet-list" id="song-sheet-list"></ul>
        </div>
      </div>
    </div>
  `;const e=document.getElementById("karaoke-source-popover");let t=null;e&&e.addEventListener("toggle",()=>{t&&clearTimeout(t),e.open&&(t=setTimeout(()=>{e.removeAttribute("open"),t=null},2e3))}),document.getElementById("song-back-btn").addEventListener("click",()=>{location.hash=ho()}),document.getElementById("prev-song").addEventListener("click",()=>{Pe(-1)}),document.getElementById("next-song").addEventListener("click",()=>{Pe(1)}),document.getElementById("song-picker-btn").addEventListener("click",()=>{document.getElementById("song-sheet").classList.contains("open")?Ne():No()}),document.getElementById("song-sheet").querySelectorAll("[data-close-sheet]").forEach(o=>{o.addEventListener("click",Ne)}),document.getElementById("song-sheet-list").addEventListener("click",o=>{const r=o.target.closest(".song-sheet-item");if(!r)return;const c=A.find(l=>l.id===r.dataset.id);if(Ne(),!(!c||h&&c.id===h.id)){if(Se==="setlist"){const l=parseInt(r.dataset.pos,10);Number.isFinite(l)&&Tn(l)}Rt(c)}});const n=document.getElementById("sheet-search-input"),a=document.getElementById("sheet-search-clear");n&&(n.addEventListener("input",Et),a.addEventListener("click",()=>{n.value="",Et(),n.focus()}));const s=document.getElementById("tip-pic-card");s&&s.addEventListener("click",()=>{document.getElementById("tip-pic").classList.toggle("big")}),(function(){const r=S.querySelector(".lyrics-pane");if(!r)return;let c=0,l=0,u=!1;r.addEventListener("touchstart",d=>{if(!B||d.touches.length!==1){u=!1;return}const p=d.touches[0];if(p.clientX<24||p.clientX>window.innerWidth-24){u=!1;return}c=p.clientX,l=p.clientY,u=!0},{passive:!0}),r.addEventListener("touchend",d=>{if(!u)return;u=!1;const p=d.changedTouches&&d.changedTouches[0];if(!p)return;const f=p.clientX-c,y=p.clientY-l;Math.abs(f)<70||Math.abs(f)<Math.abs(y)*2||rn(f<0?1:-1)},{passive:!0})})(),document.getElementById("lyrics-list").addEventListener("click",o=>{const r=o.target.closest(".lyric-line");r&&(wr(Number(r.dataset.time)),B&&(U=!1,ds(Number(r.dataset.time))))}),document.getElementById("play-toggle").addEventListener("click",Ss);const i=document.getElementById("pip-btn");i&&fe.supported&&(i.addEventListener("click",async()=>{await fe.open(Is())&&wn()}),wn()),document.getElementById("playback-rate").addEventListener("change",o=>{rr(Number(o.currentTarget.value))}),Oe(),document.getElementById("chant-btn").addEventListener("click",()=>{ka(!B)}),document.getElementById("chant-off").addEventListener("click",()=>{ka(!1)}),document.getElementById("chant-prev").addEventListener("click",()=>{va(-1)}),document.getElementById("chant-next").addEventListener("click",()=>{va(1)}),document.getElementById("venue-btn").addEventListener("click",o=>{ce=!ce,v("horo-venue",ce?"1":""),Ot()}),document.getElementById("reading-btn").addEventListener("click",()=>{const o=pt.indexOf(j);j=pt[(o+1)%pt.length],v("horo-reading",j),ps(),Cn()}),document.getElementById("japanese-toggle").addEventListener("click",()=>{O=!O,v("horo-show-japanese",O?"1":"0"),vn()}),document.getElementById("chinese-toggle").addEventListener("click",()=>{q=!q,v("horo-show-chinese",q?"1":"0"),vn()}),document.getElementById("karaoke-btn").addEventListener("click",()=>{F=!F,v("horo-karaoke",F?"1":"0"),fs()}),document.getElementById("autoscroll-btn").addEventListener("click",o=>{Ce=!Ce,o.currentTarget.classList.toggle("active",Ce),Ce&&Z(!0)}),rt&&document.removeEventListener("keydown",rt),rt=o=>{if(!X())return;const r=document.getElementById("song-sheet");if(o.key==="Escape"&&r.classList.contains("open")){o.preventDefault(),Ne();return}if(r.classList.contains("open")){if(o.key==="Tab"){const l=[...r.querySelectorAll("button, input")].filter(p=>!p.disabled&&p.offsetParent!==null),u=l[0],d=l[l.length-1];o.shiftKey&&document.activeElement===u?(o.preventDefault(),d.focus()):!o.shiftKey&&document.activeElement===d&&(o.preventDefault(),u.focus())}return}const c=(o.target&&o.target.tagName||"").toLowerCase();c==="input"||c==="textarea"||(o.key==="ArrowLeft"&&(o.preventDefault(),B?rn(-1):document.getElementById("prev-song").click()),o.key==="ArrowRight"&&(o.preventDefault(),B?rn(1):document.getElementById("next-song").click()))},document.addEventListener("keydown",rt)}let B=!1,H=-1,U=!1,je=null,_t=0;function me(){return nr(h)}function jo(e=h){const t=document.getElementById("lyrics-list");!t||!e?.lyrics||(t.querySelectorAll(".lyric-line").forEach(n=>{const a=e.lyrics[Number(n.dataset.idx)];n.dataset.chant=He(a,e).chant,n.querySelector(".lyric-icons").innerHTML=Ts(a,e),n.querySelector(".lyric-zh").innerHTML=Es(a,e)}),Cn())}function cs(e){if(e!=="jp"&&e!=="kr"||e===R){Xe();return}R=e,v("horo-chant-version",R),ht.clear(),Ye.clear(),H=-1,U=!1,je=null,_t=0,Xe(),h&&(jo(h),Ja(h),Ya(h),Pt(),Ae(),B&&me().length?ee(0):X()&&Z(!0)),document.getElementById("song-list")&&gn()}function Pt(){const e=document.getElementById("song-page");e&&e.classList.toggle("chant-only",B&&me().length>0);const t=document.getElementById("chant-btn");t&&(t.classList.toggle("active",B),t.setAttribute("aria-pressed",B?"true":"false"))}function Ae(){const e=document.getElementById("chant-bar");if(!e||(e.hidden=!B,!B))return;const t=me(),n=document.getElementById("chant-msg"),a=document.getElementById("chant-count"),s=document.getElementById("chant-prev"),i=document.getElementById("chant-next");if(!t.length){n&&(n.textContent="這首歌沒有大合唱段落"),a&&(a.textContent=""),s&&(s.disabled=!0),i&&(i.disabled=!0);return}const o=window.matchMedia&&window.matchMedia("(hover: none)").matches;n&&(n.textContent=U?"結束・按播放即可從頭開始":o?"左右滑動切換段落":"用 ← → 切換段落"),a&&(a.textContent=`第 ${Math.max(1,H+1)} / ${t.length} 段`),s&&(s.disabled=H<=0),i&&(i.disabled=H>=t.length-1)}function ee(e){const t=me();if(t.length&&(H=Math.max(0,Math.min(t.length-1,e)),U=!1,ds(t[H].start),Ae(),m&&typeof m.seekTo=="function"))try{m.seekTo(t[H].start,!0),m.playVideo()}catch{}}function ds(e){je=e,_t=Date.now()+4e3}function va(e){const t=me();if(t.length){if(U&&e<0){ee(t.length-1);return}ee(H+e)}}function $o(e){if(!B||e===null||!isFinite(e))return!1;const t=me();if(!t.length)return!1;const n=e-un;if(je!==null)if(Math.abs(n-je)<1.6||Date.now()>_t)je=null;else return!1;const a=t.findIndex(i=>n>=i.start-.35&&n<=i.end);if(a>=0)return(a!==H||U)&&(H=a,U=!1,Ae()),!1;const s=t.findIndex(i=>i.start>n);if(s>=0)return ee(s),!0;if(U=!0,H=t.length-1,Ae(),m&&typeof m.pauseVideo=="function")try{m.pauseVideo()}catch{}return!0}function ka(e){B=!!e,U=!1,H=-1,Pt(),Ae(),B?me().length&&ee(0):Z(!0)}function rn(e){if(!X())return;const t=me();if(B&&t.length){const n=H+e;if(e>0&&!U&&n<=t.length-1){ee(n);return}if(e<0&&U){ee(t.length-1);return}if(e<0&&n>=0){ee(n);return}}Pe(e)}function Rt(e){e&&(Ft(e.youtubeId),location.hash=`#/song/${e.id}`)}function X(){return!S.classList.contains("offstage")}function Ht(e){const t=document.getElementById("song-page");if(!t)return;const n=Number(qa[e?.id]);if(!Number.isFinite(n)||n<=0)return;const a=60/n/Math.max(.01,D);t.style.setProperty("--song-bpm",String(n)),t.style.setProperty("--icon-beat-duration",`${a.toFixed(3)}s`),t.dataset.bpm=String(n),Ga=performance.now(),he()}function ln(e,t){if(e!==pn||!location.hash.startsWith("#/song/"))return;const n=document.getElementById("lyrics-list");if(!n)return;const a=document.createElement("li");a.className="lyrics-load-error";const s=document.createElement("p");s.setAttribute("role","status"),s.setAttribute("aria-live","polite"),s.textContent=t;const i=document.createElement("button");i.type="button",i.className="lyrics-retry-btn",i.textContent="重新載入歌詞",i.addEventListener("click",()=>location.reload(),{once:!0}),a.append(s,i),n.replaceChildren(a);const o=document.getElementById("video-status");o&&(o.hidden=!1,o.textContent=t)}function us(e){const t=++pn;if(ls(),!Array.isArray(e.lyrics)){h=e;const{prev:l,next:u}=xt(e),d=document.getElementById("song-page");document.getElementById("song-page-heading").textContent=e.title,document.getElementById("song-picker-number").textContent=`${$(ue(e))}.`,document.getElementById("song-picker-title").innerHTML=we(e.title),document.getElementById("prev-song").title=`上一首：${l.title}`,document.getElementById("next-song").title=`下一首：${u.title}`,document.getElementById("lyrics-list").innerHTML="",document.getElementById("video-status").textContent="正在載入歌詞…",d?.classList.remove("song-ready"),S.classList.remove("offstage"),S.inert=!1,L.style.display="none";const p=window.setTimeout(()=>{ln(t,"歌詞載入較久，請稍候；如果畫面沒有更新，請檢查網路後重新載入。")},15e3);wi().then(f=>{if(window.clearTimeout(p),t!==pn||!location.hash.startsWith("#/song/"))return;const y=f.get(e.id);y?us({...e,...y}):ln(t,"找不到這首歌的歌詞資料，請重新載入頁面。")}).catch(()=>{window.clearTimeout(p),ln(t,"歌詞載入失敗，請檢查網路連線後重新載入。")});return}Ei().then(()=>{h===e&&Cn()}),h=e,Uo(),ke=-1,J=null,ye=null,H=-1,U=!1,je=null,_t=0,yr(),Ze(),oe!==null&&(cancelAnimationFrame(oe),oe=null);const{prev:n,next:a}=xt(e),s=document.getElementById("song-page");Ht(e),e.cover?s.style.setProperty("--song-cover",`url('${e.cover}')`):s.style.removeProperty("--song-cover"),document.getElementById("song-picker-number").textContent=`${$(ue(e))}.`,document.getElementById("song-picker-title").innerHTML=we(e.title),document.getElementById("song-page-heading").textContent=e.title;const i=document.getElementById("lyrics-credit");if(i){const l=!!e.translationCredit;if(l){const d=`<a href="${e.translationCreditUrl||qi}" target="_blank" rel="noopener">${x(e.translationCredit)}</a>`,p=e.translationSourceUrl?` · <a href="${e.translationSourceUrl}" target="_blank" rel="noopener">出處</a>`:"",f=e.translationLicenseUrl?` · <a href="${e.translationLicenseUrl}" target="_blank" rel="noopener">${x(e.translationLicense||"授權")}</a>`:"";i.innerHTML=`中譯歌詞作者：${d}${p}${f}`}else i.innerHTML="";i.hidden=!l}const o=document.getElementById("song-back-btn");if(o){const l=Se==="setlist"?"返回歌單":"返回歌曲清單";o.title=l,o.setAttribute("aria-label",l)}document.getElementById("prev-song").title=`上一首：${n.title}`,document.getElementById("next-song").title=`下一首：${a.title}`,document.getElementById("watch-on-yt").href=`https://www.youtube.com/watch?v=${encodeURIComponent(e.youtubeId)}`,document.getElementById("lyrics-list").innerHTML=e.lyrics.map((l,u)=>`
    <li>
      <button class="lyric-line" data-chant="${He(l,e).chant}" data-time="${l.time}" data-idx="${u}">
        <span class="lyric-icons">${Ts(l,e)}</span>
        <span class="lyric-body">
          <span class="lyric-jp" lang="ja">${ks(l,e)}</span>
          <span class="lyric-romaji" lang="ja-Latn">${j==="both"?ws(l,e):""}</span>
          <span class="lyric-zh">${Es(l,e)}</span>
        </span>
      </button>
    </li>`).join(""),Qo(e),Q("loading","歌詞逐字時間：正在尋找開源時間碼…"),document.getElementById("song-sheet-list").innerHTML=Bo().map((l,u)=>`
    <li data-no="${ue(l)}">
      <button class="song-sheet-item${l.id===e.id?" current":""}" data-id="${l.id}" data-pos="${u}"${l.id===e.id?' aria-current="true"':""}>
        <span class="song-sheet-num">${$(ue(l))}</span>
        <span class="song-sheet-name">${we(l.title)}</span>
        ${l.id===e.id?'<span class="song-sheet-now">目前播放</span>':""}
      </button>
    </li>`).join("");const r=document.getElementById("song-sheet-title");r&&(r.textContent=Se==="setlist"?"歌單歌曲":"選擇歌曲"),Ne(),Et(),S.classList.remove("offstage"),S.inert=!1,L.style.display="none",Xe(),Ja(e),Ya(e),Pt(),Ae(),Ot(),ps(),vn(),fs(),Dt(),Mo(),Cs();const c=S.querySelector(".lyrics-scroll");c&&(c.scrollTop=0),lr(),Ir(),xn(),fr(e.youtubeId),Jo(e),Za(Qi(e),[400,500,700])}let re=null;function Mo(){re&&(re.disconnect(),re=null);const e=S.querySelector(".lyrics-scroll"),t=S.querySelectorAll(".lyric-line");if(!(!e||!t.length)){if(!("IntersectionObserver"in window)){const n=performance.now();t.forEach(a=>{a.classList.add("in-view"),bn(a,n)});return}re=new IntersectionObserver(n=>{const a=performance.now();n.forEach(s=>{s.target.classList.toggle("in-view",s.isIntersecting),s.isIntersecting&&bn(s.target,a)})},{root:e,rootMargin:"120px 0px"}),t.forEach(n=>re.observe(n))}}function bn(e,t){const n=document.getElementById("song-page"),a=Number(n&&n.dataset.bpm);if(!e||!n||!Number.isFinite(a)||a<=0)return;const s=6e4/a,o=-(Math.max(0,(t||performance.now())-Ga)%s/1e3);e.querySelectorAll(".ico-wave svg, .ico-mic svg, .ico-jump svg, .ico-spin .arm, .ico-clap .hand, .ico-clap .spark").forEach(c=>{c.style.animationDelay=`${o.toFixed(3)}s`})}function Ot(){const e=document.getElementById("song-page"),t=document.getElementById("venue-btn");if(e){if(e.classList.toggle("venue",ce),e.classList.toggle("offline",!navigator.onLine),t&&t.classList.toggle("active",ce),ce){const n=document.getElementById("chant-notes-toggle"),a=document.getElementById("chant-notes");n&&(n.classList.remove("active"),n.setAttribute("aria-expanded","false")),a&&(a.hidden=!0)}Ms(),hs(),Dt(),Z(!0)}}function ps(){const e=document.getElementById("reading-btn"),t=document.getElementById("reading-value"),n=document.getElementById("reading-value-mobile"),a=kn(),s=vs(),i=document.getElementById("song-page");i&&i.classList.toggle("reading-both",j==="both"),t&&(t.textContent=a),n&&(n.textContent=s),e&&(e.classList.toggle("active",j!=="kana"),e.setAttribute("aria-pressed",j!=="kana"?"true":"false"),e.setAttribute("aria-label",`切換日文讀音：目前顯示${a}`)),he()}function vn(){const e=document.getElementById("song-page");if(!e)return;e.classList.toggle("hide-japanese",!O),e.classList.toggle("hide-chinese",!q),e.classList.toggle("lyrics-hidden",!O&&!q);const t=e.querySelector(".lyrics-hidden-message");t&&(t.hidden=O||q);const n=document.getElementById("japanese-toggle");n&&(n.classList.toggle("active",O),n.setAttribute("aria-pressed",O?"true":"false"),n.setAttribute("aria-label",`切換日文歌詞：目前${O?"顯示":"隱藏"}`));const a=document.getElementById("chinese-toggle");a&&(a.classList.toggle("active",q),a.setAttribute("aria-pressed",q?"true":"false"),a.setAttribute("aria-label",`切換繁中翻譯：目前${q?"顯示":"隱藏"}`)),Dt(),he()}function fs(){const e=document.getElementById("song-page");if(!e)return;e.classList.toggle("karaoke-off",!F);const t=document.getElementById("karaoke-btn");t&&(t.classList.toggle("active",F),t.setAttribute("aria-pressed",F?"true":"false"),t.setAttribute("aria-label",`切換逐字卡拉OK高亮：目前${F?"開啟":"關閉"}`)),F||(En(J),J=null),Z(!0)}function Cn(){if(!h)return;const e=document.getElementById("lyrics-list");if(!e)return;const t=performance.now();e.querySelectorAll(".lyric-line").forEach(n=>{const a=Number(n.dataset.idx),s=h.lyrics&&h.lyrics[a],i=n.querySelector(".lyric-jp"),o=n.querySelector(".lyric-romaji");!s||!i||(i.innerHTML=ks(s,h),o&&(o.innerHTML=j==="both"?ws(s,h):""),It(i),o&&It(o),Pn(n,st(h,a)),bn(n,t))}),Z(!0)}window.addEventListener("online",()=>{Ie&&Ot()});window.addEventListener("offline",()=>{Ie&&Ot()});function cn(){if(Lt(),br(),pe=null,Ne(),Ze(),re&&(re.disconnect(),re=null),sr(),fe.close(),m&&typeof m.pauseVideo=="function")try{m.pauseVideo()}catch{}Ie&&S.classList.add("offstage"),S.inert=!0,L.style.display=""}let Nn=null;const ms=new Set;function _o(e){if(!e||typeof e!="string")return null;const t=li[e],n=t?t.src:/[\/.]/.test(e)?e:null;if(!n||ms.has(n))return null;const a=t?.video||(/\.gif$/i.test(n)?n.replace(/\.gif$/i,".webm"):""),s=t?.fallback||(/\.webp$/i.test(n)?n.replace(/\.webp$/i,".gif"):"");return{key:e,src:n,video:a,fallback:s,caption:t&&t.caption||""}}function Ze(){const e=document.getElementById("tip-pic");if(!e)return;const t=document.getElementById("tip-pic-video"),n=document.getElementById("tip-pic-img");t&&(t.pause(),t.hidden=!0,t.setAttribute("aria-hidden","true")),n&&(n.hidden=!0),e.classList.remove("show","big"),Nn=null}function hs(){const e=document.getElementById("tip-pic");if(!e)return;const t=S.querySelector(".lyrics-pane"),n=S.querySelector(".song-fixed-top");if(!t||!n)return;const a=window.matchMedia("(min-width:900px), (orientation: landscape) and (max-height:600px)").matches,s=ce?"at-lyrics":a?"at-lyrics-right":"at-below-video",i=s==="at-below-video"?n:t;e.classList.contains(s)||(e.classList.remove("at-below-video","at-lyrics","at-lyrics-right","big"),e.classList.add(s)),e.parentElement!==i&&i.appendChild(e)}function Po(e){const t=document.getElementById("tip-pic"),n=document.getElementById("tip-pic-video"),a=document.getElementById("tip-pic-img"),s=document.getElementById("tip-pic-cap");if(!t||!a)return;const i=()=>{n&&(n.pause(),n.removeAttribute("src"),n.load(),n.hidden=!0,n.setAttribute("aria-hidden","true")),a.hidden=!1,a.alt=e.caption||"應援動作",a.dataset.fallbackTried="0",a.onerror=()=>{if(a.dataset.fallbackTried!=="1"&&e.fallback&&e.fallback!==e.src){a.dataset.fallbackTried="1",a.src=e.fallback;return}ms.add(e.src),Ze()},a.src=e.src};n&&e.video&&n.canPlayType("video/webm")?(n.onerror=i,n.onloadeddata=()=>{n.hidden=!1,n.setAttribute("aria-hidden","false"),a.hidden=!0,n.play().catch(()=>{})},n.muted=!0,n.hidden=!0,n.setAttribute("aria-hidden","true"),n.src=e.video,n.load()):i(),s&&(s.textContent=e.caption||""),t.classList.remove("big"),t.classList.add("show"),Nn=e.key}function Ro(e){if(!h)return Ze();const t=e>=0?h.lyrics[e]:null,n=t?_o(t.pic):null;if(!n)return Ze();n.key!==Nn&&Po(n)}function x(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const wa=/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u,Ea=/[A-Za-z0-9]/,gs=/[\p{Script=Latin}\p{N}]/u,Ho=/[\p{Script=Latin}\p{N}'’_-]/u,Oo=/([\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}])(?=[A-Za-z0-9])/gu,qo=/([A-Za-z0-9])(?=[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}])/gu;function Bn(e){return String(e??"").replace(Oo,"$1 ").replace(qo,"$1 ")}function xa(e,t){const n=Array.from(String(e||""));for(;n.length&&/\s/u.test(t?n.at(-1):n[0]);)t?n.pop():n.shift();return t?n.at(-1)||"":n[0]||""}function Fo(e){const t=String(e||"").split(/(<[^>]*>)/g),n=[];t.forEach((a,s)=>{/^<[^>]*>$/.test(a)||(t[s]=Bn(a),n.push(s))});for(let a=1;a<n.length;a++){const s=n[a-1],i=n[a],o=t[s],r=t[i],c=xa(o,!0),l=xa(r,!1),u=/\s$/u.test(o),d=/^\s/u.test(r);!u&&!d&&wa.test(c)&&Ea.test(l)?t[i]=" "+r:!u&&!d&&Ea.test(c)&&wa.test(l)&&(t[s]=o+" ")}return t.join("")}const at=/[\[(](wave|clap|mic|chant|jump|spin|turn)[\])]/gi;function jn(e){return e==null?"":x(Bn(e)).replace(at,(t,n)=>N[n.toLowerCase()]||t)}function ys(e){const t=String(e??""),n=window.JP_FURIGANA&&window.JP_FURIGANA[t];return n?Fo(n).replace(at,(a,s)=>N[s.toLowerCase()]||a):jn(t)}function bs(e,t=!0){const n=String(e??""),a=window.JP_ROMAJI&&window.JP_ROMAJI[n],s=typeof a=="string"?a:n;return t?jn(s):x(Bn(s)).replace(at,"")}function kn(e=j){return e==="romaji"?"羅馬字":e==="both"?"假名+羅馬字":"假名"}function vs(e=j){return e==="romaji"?"羅":e==="both"?"假+羅":"假"}function Do(e){return j==="romaji"?bs(e):ys(e)}function He(e,t=h){return hi(e,Va()[t.id],R,{romaji:window.JP_ROMAJI?.[e.jp]})}function qt(e,t,n,a,s){const i=He(t,n),o=i.chant==="full"&&s!=="zh";return(s==="jp"||s==="romaji"&&j==="romaji"?i.actions.map(c=>N[c]||"").join(""):"")+gi(a(e),i.ranges[s]||[],o)}function ks(e,t=h){const n=j==="romaji"?"romaji":"jp";return qt(e.jp||"",e,t,Do,n)}function ws(e,t=h){return qt(e.jp||"",e,t,n=>bs(n,!1),"romaji")}function Es(e,t=h){return qt(e.tr||"",e,t,jn,"zh")}function $n(){try{if(m&&typeof m.getCurrentTime=="function"){const e=Number(m.getCurrentTime());return Number.isFinite(e)?e:null}}catch{}return null}function Mn(){try{if(m&&typeof m.getDuration=="function"){const e=Number(m.getDuration());return Number.isFinite(e)&&e>0?e:null}}catch{}return null}function St(e){const t=Math.max(0,Math.floor(Number(e)||0)),n=Math.floor(t/3600),a=Math.floor(t%3600/60),s=t%60;return n>0?`${n}:${String(a).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${a}:${String(s).padStart(2,"0")}`}function xs(){const e=document.getElementById("song-playback-progress"),t=document.getElementById("song-playback-progress-fill");if(!e||!t)return;const n=Mn(),a=$n(),s=n&&a!==null?Math.max(0,Math.min(1,a/n)):0;e.setAttribute("aria-valuenow",String(Math.round(s*100))),e.setAttribute("aria-valuetext",n&&a!==null?`${St(a)} / ${St(n)}`:"正在載入播放進度"),t.style.transform=`scaleX(${s})`}function Uo(){const e=document.getElementById("song-playback-progress"),t=document.getElementById("song-playback-progress-fill");!e||!t||(e.setAttribute("aria-valuenow","0"),e.setAttribute("aria-valuetext","正在載入播放進度"),t.style.transform="scaleX(0)")}function Vo(){try{const e=m&&typeof m.getPlayerState=="function"?m.getPlayerState():-1;return e===1||e===3}catch{return!1}}function wn(){const e=document.getElementById("pip-btn");if(!e||!fe.supported)return;const t=fe.isOpen();e.classList.toggle("active",t),e.setAttribute("aria-pressed",t?"true":"false"),e.setAttribute("aria-label",t?"聚焦同步字幕小窗":"開啟或聚焦同步字幕小窗"),e.setAttribute("title",t?"聚焦同步字幕小窗":"開啟或聚焦同步字幕小窗")}function Ss(){if(!m||!G)return;if(B&&U){ee(0);return}const e=(()=>{try{return m.getPlayerState()}catch{return-1}})();try{e===YT.PlayerState.PLAYING||e===YT.PlayerState.BUFFERING?m.pauseVideo():m.playVideo()}catch{}he()}function Sa(e,t){if(!e)return"";const n=e.cloneNode(!0);n.classList.toggle("active",!!t),n.classList.add("in-view");const a=document.createElement("div");return a.className=n.className,a.dataset.chant=n.dataset.chant,a.innerHTML=n.innerHTML,a.outerHTML}function Wo(e,t){const n=e&&Array.isArray(e.lyrics)?e.lyrics:[],a=Number.isInteger(t)?t+1:0;for(let s=a;s<n.length;s++)if(_n(n[s]))return s;return-1}function Is(e=ke){const t=document.getElementById("song-page"),n=document.getElementById("lyrics-list"),a=n?[...n.querySelectorAll(".lyric-line")]:[],s=Number.isInteger(e)?e:-1,i=s>=0?a[s]:null,o=Wo(h,s),r=o>=0?a[o]:null,c=Mn(),l=$n(),u=c&&l!==null?Math.max(0,Math.min(1,l/c)):0,d=t?getComputedStyle(t).getPropertyValue("--icon-beat-duration").trim():"";return{title:h?h.title:"同步字幕",songNumber:h?`${$(ue(h))}.`:"",canNavigate:!!h,progress:u,progressText:c&&l!==null?`${St(l)} / ${St(c)}`:"正在載入播放進度",currentMarkup:Sa(i,!0),nextMarkup:Sa(r,!1),isPlaying:Vo(),canPlayPause:!!(m&&G&&typeof m.playVideo=="function"&&typeof m.pauseVideo=="function"),theme:$t,showJapanese:O,showChinese:q,readingMode:j,karaokeEnabled:F,iconBeatDuration:d,status:G?"":"正在等待影片播放器…"}}function he(e=ke){fe.isOpen()&&fe.update(Is(e))}function Q(e,t){const n=document.getElementById("karaoke-source-status"),a=document.getElementById("karaoke-source-status-text");if(!n||!a)return;n.dataset.state=e||"";const s=n.closest(".karaoke-source-popover");s&&(s.dataset.state=e||""),a.textContent=t||""}function st(e,t){return!e||!ye||ye.songId!==e.id?null:ye.lines&&ye.lines[t]||null}function As(e,t){const n=st(e,t),a=e&&e.lyrics&&e.lyrics[t];return n&&Number.isFinite(Number(n.start))?Number(n.start):Number(a&&a.time)||0}function Ko(e){const t=document.getElementById("lyrics-list");!t||!e||!Array.isArray(e.lyrics)||(t.querySelectorAll(".lyric-line").forEach(n=>{const a=Number(n.dataset.idx),s=st(e,a),i=Ls(e,a);n.dataset.time=String(As(e,a)),i&&(n.dataset.karaokeStart=String(i.start),n.dataset.karaokeEnd=String(i.end)),Pn(n,s)}),Ye.clear(),Pt(),Ae())}function Go(e){return typeof e=="string"?e:Array.isArray(e)?e.map(t=>typeof t=="string"?t:t&&t.text||"").join(""):""}function _n(e){return e?[e.jp,e.tr].some(t=>Go(t).replace(at,"").replace(/\s/gu,"").length>0):!1}function zo(e,t){const n=e&&Array.isArray(e.lyrics)?e.lyrics:[],a=Number(n[t]&&n[t].time);for(let s=t+1;s<n.length;s++){if(!_n(n[s]))continue;const i=Number(n[s]&&n[s].time);if(Number.isFinite(i)&&(!Number.isFinite(a)||i>a))return i}return null}async function Jo(e){const t=++en;ye=null,Q("loading","歌詞逐字時間：正在尋找開源時間碼…");const n=await xi();if(!n||typeof n.load!="function"||typeof n.alignToLocalLyrics!="function"){Q("miss","歌詞逐字時間：目前使用本地估算同步");return}let a=Mn(),s=null;try{s=await n.load(e,{duration:a,onStatus:c=>{t!==en||!c||(c.state==="cache"?Q("loading","歌詞逐字時間：已讀取本機快取，正在校正影片偏移…"):c.state==="fallback"?Q("fallback",`歌詞逐字時間：前順位來源沒有結果，改查${c.source||"下一順位來源"}…`):c.state==="offline"&&Q("miss","歌詞逐字時間：離線且沒有快取，使用本地估算同步"))}})}catch{s=null}if(t!==en||!e||h!==e)return;if(!s){Q("miss","歌詞逐字時間：找不到可用來源，使用本地估算同步");return}const i=n.alignToLocalLyrics(s,e.lyrics);if(!i){Q("miss","歌詞逐字時間：來源歌詞與本頁不相符，使用本地估算同步");return}i.songId=e.id,ye=i,Ko(e);const o=s.source&&s.source.indexOf("開源多來源")>=0?"開源多來源":s.source||"開源來源",r=s.granularity==="line"?"歌詞逐行時間":"歌詞逐字時間";Q("ready",`${r}：${o}（已對齊 ${i.matchedLines}/${i.totalLines}行，偏移${i.offset.toFixed(2)}秒）`),Z(!0)}function Ls(e,t){const a=(e&&Array.isArray(e.lyrics)?e.lyrics:[])[t],s=Number(a&&a.time);if(!Number.isFinite(s))return null;const i=st(e,t);if(i)return{start:Number(i.start),end:Math.max(Number(i.start)+.04,Number(i.end))};const o=String(a.jp||"").replace(at,""),r=Qe(o)||1,c=Number(qa[e.id])||120,l=Math.max(.8,Math.min(12,r*(60/c)*Ki)),u=zo(e,t),d=u===null?s+l:Math.min(s+l,Math.max(s+.25,u-Wi));return{start:s,end:d}}function Qe(e){const t=String(e||""),n=Array.from(t).filter(a=>!/\s/u.test(a));return n.length?n.every(a=>gs.test(a))?Math.max(1,n.length*.75):n.every(a=>/[、。！？!?.,，。]/u.test(a))?.45:Math.max(1,n.length):0}function Ia(e,t,n,a){const s=document.createElement("span");s.className="karaoke-unit",s.textContent=n,s.dataset.karaokeText=n,s.dataset.karaokeWeight=String(a),e.appendChild(s),t.push({el:s,weight:a})}function Yo(e,t){const n=e.nodeValue||"";if(!n.trim())return;const a=document.createDocumentFragment(),s=Array.from(n);for(let i=0;i<s.length;){const o=s[i];if(/\s/u.test(o)){a.appendChild(document.createTextNode(o)),i++;continue}if(gs.test(o)){let r=i+1;for(;r<s.length&&Ho.test(s[r]);)r++;const c=s.slice(i,r).join("");Ia(a,t,c,Qe(c)),i=r;continue}Ia(a,t,o,Qe(o)),i++}a.childNodes.length&&e.replaceWith(a)}function It(e){if(!e)return;const t=[],n=a=>{[...a.childNodes].forEach(s=>{if(s.nodeType===Node.TEXT_NODE){Yo(s,t);return}if(s.nodeType===Node.ELEMENT_NODE&&!s.classList.contains("ico")){if(s.tagName==="RUBY"){const i=[...s.childNodes].filter(r=>r.nodeType===Node.TEXT_NODE).map(r=>r.nodeValue||"").join(""),o=document.createElement("span");o.className="karaoke-unit",o.dataset.karaokeText=i,o.dataset.karaokeWeight=String(Qe(i)),s.parentNode.insertBefore(o,s),o.appendChild(s),t.push({el:o,weight:Qe(i)});return}s.tagName==="RT"||s.tagName==="RP"||n(s)}})};n(e),e._karaokeUnits=t}function Aa(e){return e&&e.el&&(e.el.dataset.karaokeText||e.el.textContent)||""}function Xo(e){if(!e||!e.el)return"";const t=e.el.querySelector("ruby");if(t){const n=t.querySelector("rt");return n?n.textContent||"":t.textContent||""}return e.el.textContent||""}function Zo(e){if(!e)return null;if(j!=="romaji")return e.querySelector(".lyric-jp");const t=Number(e.dataset.idx),n=h&&h.lyrics&&h.lyrics[t];if(!n)return null;const a=document.createElement("span");return a.className="lyric-jp karaoke-reference",a.lang="ja",a.innerHTML=qt(n.jp||"",n,h,s=>ys(s),"jp"),It(a),a}function Pn(e,t){if(!e)return;const n=[...e.querySelectorAll(".lyric-jp, .lyric-romaji")].filter(T=>(T.textContent||"").trim()),a=Zo(e),s=[...new Set([a,...n].filter(Boolean))],i=a&&a._karaokeUnits?a._karaokeUnits:[],o=i.map(Aa),r=i.map(Xo),c=window.KARAOKE_SOURCES||{},l=t?Number(t.start):NaN,u=t?Number(t.end):NaN,d=Number.isFinite(l)?l:Number(e.dataset.karaokeStart),p=Number.isFinite(u)?u:Number(e.dataset.karaokeEnd),f=Number.isFinite(d)?d:0,y=Number.isFinite(p)&&p>f?p:f+.04,E=typeof c.allocateUnitTimings=="function"?c.allocateUnitTimings(o,f,y):[];let _=E,te=!1;if(t&&t.granularity!=="line"&&Array.isArray(t.words)&&t.words.length&&typeof c.mapUnitsToWords=="function"){const T=c.mapUnitsToWords(o,t.words);T.total>0&&T.matched/T.total>=.6&&(_=T.timings.map((g,b)=>g||E[b]||null),te=!0)}let P=te?"word":"line-proportional";s.forEach(T=>{const V=T._karaokeUnits||[];V.forEach(k=>{k.start=null,k.end=null,delete k.el.dataset.karaokeStart,delete k.el.dataset.karaokeEnd});const g=T===a,b=V.map(Aa);let w=g?_:[];if(!g&&typeof c.mapUnitsToReferenceTimings=="function"){const k=c.mapUnitsToReferenceTimings(b,r,_);w=k.timings,!k.complete&&te&&(P="word-reference-fallback")}else!g&&typeof c.allocateUnitTimings=="function"&&(w=c.allocateUnitTimings(b,f,y));V.forEach((k,I)=>{const M=w[I];if(!M||!Number.isFinite(Number(M.start))||!Number.isFinite(Number(M.end)))return;const ge=Math.max(f,Number(M.start)),qe=Math.min(y,Number(M.end));qe<=ge||(k.start=ge,k.end=qe,k.el.dataset.karaokeStart=String(k.start),k.el.dataset.karaokeEnd=String(k.end))})}),e.dataset.karaokeSource=P}function Qo(e){J=null;const t=document.getElementById("lyrics-list");!t||!e||t.querySelectorAll(".lyric-line").forEach(n=>{const a=Number(n.dataset.idx),s=Ls(e,a);s&&(n.dataset.karaokeStart=String(s.start),n.dataset.karaokeEnd=String(s.end)),n.querySelectorAll(".lyric-jp, .lyric-romaji").forEach(It),Pn(n,st(e,a))})}function En(e){e&&e.querySelectorAll(".lyric-jp, .lyric-romaji").forEach(t=>{const n=t._karaokeUnits||[];n.forEach(a=>a.el.classList.remove("karaoke-lit","karaoke-current")),n.forEach(a=>a.el.style.removeProperty("--karaoke-word-progress"))})}function er(e,t){if(!F){En(J),J=null;return}if(J&&J!==e&&En(J),J=e||null,!e||!Number.isFinite(t))return;const n=Number(e.dataset.karaokeStart),a=Number(e.dataset.karaokeEnd);!Number.isFinite(n)||!Number.isFinite(a)||e.querySelectorAll(".lyric-jp, .lyric-romaji").forEach(s=>{const i=s._karaokeUnits||[];if(!i.length)return;if(i.some(d=>Number.isFinite(d.start)&&Number.isFinite(d.end)||Number.isFinite(Number(d.el.dataset.karaokeStart))&&Number.isFinite(Number(d.el.dataset.karaokeEnd)))){i.forEach(d=>{const p=Number.isFinite(d.start)?Number(d.start):Number(d.el.dataset.karaokeStart),f=Number.isFinite(d.end)?Number(d.end):Number(d.el.dataset.karaokeEnd);if(!Number.isFinite(p)||!Number.isFinite(f)){d.el.classList.remove("karaoke-lit","karaoke-current"),d.el.style.removeProperty("--karaoke-word-progress");return}const y=Math.max(0,Math.min(1,(t-p)/Math.max(.02,f-p)));d.el.classList.toggle("karaoke-lit",y>=1),d.el.classList.toggle("karaoke-current",y>0&&y<1),d.el.style.setProperty("--karaoke-word-progress",y.toFixed(3))});return}const r=Math.max(0,Math.min(1,(t-n)/Math.max(.01,a-n))),c=i.reduce((d,p)=>d+p.weight,0)||i.length,l=r*c;let u=0;i.forEach(d=>{const p=u;u+=d.weight;const f=l>=u,y=!f&&l>p;d.el.classList.toggle("karaoke-lit",f),d.el.classList.toggle("karaoke-current",y)})})}function Ts(e,t=h){return tr(e,t)?`<span class="lyric-type-icon chant" title="大合唱">${N.mic}</span>`:""}function tr(e,t=h){return He(e,t).chant!=="none"}const Ye=new Map;function nr(e){if(!e)return[];const t=`${R}:${e.id}`;if(!Ye.has(t)){const n=e.lyrics||[];Ye.set(t,bi(n.map(a=>He(a,e)),n.map((a,s)=>As(e,s))))}return Ye.get(t)}const ht=new Map;function We(e){const t=`${R}:${e.id}`;if(ht.has(t))return ht.get(t);const n=e.lyrics?yi(e.lyrics.map(a=>He(a,e))):vi[e.id][R];return ht.set(t,n),n}let C=(()=>{const e=v("horo-song-sort");return["default","title","title-desc","chant-desc","chant-asc"].includes(e)?e:"default"})();const ar=new Map(A.map((e,t)=>[e.id,t+1]));function ue(e){return ar.get(e.id)||0}const La=e=>/^[\u3131-\u318E\uAC00-\uD7A3]/.test(String(e).trim());function dt(e,t){const n=La(e.title)?0:1,a=La(t.title)?0:1;return n!==a?n-a:String(e.title).localeCompare(String(t.title),"ko")}function Rn(){const e=A.slice();return C==="title"?e.sort(dt):C==="title-desc"?e.sort((t,n)=>dt(n,t)):C==="chant-desc"?e.sort((t,n)=>We(n).chant-We(t).chant||dt(t,n)):C==="chant-asc"?e.sort((t,n)=>We(t).chant-We(n).chant||dt(t,n)):e}function Ta(e){const t=We(e);let n="";return t.chant&&(n+=`<span class="song-mark chant" title="${_e()}大合唱 ${t.chant} 行" aria-label="${_e()}大合唱 ${t.chant} 行">${z("i-mic")}<b>${t.chant}</b><span class="song-mark-unit">行</span></span>`),t.clap&&(n+=`<span class="song-mark dot clap common" title="拍手" aria-label="拍手">${z("i-hand")}</span>`),t.wave&&(n+=`<span class="song-mark dot wave common" title="揮手" aria-label="揮手">${z("i-wave")}</span>`),t.jump&&(n+=`<span class="song-mark dot jump" title="跳躍" aria-label="跳躍">${z("i-jump")}</span>`),t.spin&&(n+=`<span class="song-mark dot spin" title="轉臂" aria-label="轉臂">${z("i-cheer")}</span>`),n?`<span class="song-marks">${n}</span>`:""}let le=null;async function Cs(){if(!(!("wakeLock"in navigator)||le))try{le=await navigator.wakeLock.request("screen"),le.addEventListener("release",()=>{le=null})}catch{le=null}}function sr(){if(le){try{le.release()}catch{}le=null}}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Ie&&X()&&Cs()});let G=!1,At=null,et=null,pe=null,Hn=100,Ns=!1,Ca=null,On=!1;function Bs(e){const t=Number(e);return"x"+(Number.isInteger(t)?t:String(t))}function Re(e,t){return Math.abs(Number(e)-Number(t))<.001}function ir(){if(!m||typeof m.getAvailablePlaybackRates!="function")return[];try{const e=m.getAvailablePlaybackRates();return Array.isArray(e)?e.map(Number).filter(t=>Number.isFinite(t)&&t>0).sort((t,n)=>t-n):[]}catch{return[]}}function js(e){if(!de.length)return e;const t=de.find(a=>Re(a,e));if(t!==void 0)return t;const n=de.filter(a=>a<=e);return n.length?n.at(-1):de[0]}function Oe(){const e=document.getElementById("playback-rate");if(!e)return;const t=tt.find(n=>Re(n,D));t!==void 0&&(e.value=String(t)),e.setAttribute("aria-label","目前倍速"+Bs(D)),[...e.options].forEach(n=>{n.disabled=de.length>0&&!de.some(a=>Re(a,n.value))})}function or(){de=ir(),Oe()}function $s(){if(!(!m||!G)){or(),D=js(D),v(jt,String(D)),Oe(),Ht(h),On=!1;try{m.setPlaybackRate(D)}catch{}}}function rr(e){const t=tt.find(n=>Re(n,e));if(t!==void 0&&(D=js(t),v(jt,String(D)),Oe(),Ht(h),m&&G))try{m.setPlaybackRate(D)}catch{}}function lr(){const e=document.getElementById("video-status");e&&(clearTimeout(At),e.hidden=G,!G&&(e.textContent="正在載入影片…",At=setTimeout(()=>{!G&&e.isConnected&&(e.textContent="影片連線延遲，請在下方開啟 YouTube。")},8e3)))}function xn(){m||!window.YT||!window.YT.Player||(ls(),document.getElementById("yt-player")&&(et=(h||A[0]).youtubeId,m=new YT.Player("yt-player",{videoId:et,playerVars:{rel:0,playsinline:1,modestbranding:1,autoplay:0},events:{onReady:cr,onStateChange:mr,onPlaybackRateChange:ur,onError:dr}})))}function cr(){G=!0,clearTimeout(At);const e=document.getElementById("video-status");e&&(e.hidden=!0);try{m.unMute(),m.setVolume(Hn)}catch{}if($s(),pr(),xs(),pe&&X()){const t=pe;pe=null,Ft(t)}else pe=null;he()}function dr(){clearTimeout(At);const e=document.getElementById("video-status");e&&(e.hidden=!1,e.textContent="無法播放影片，請在下方開啟 YouTube。")}function ur(e){const t=Number(e&&e.data);if(!Number.isFinite(t)||On&&!Re(t,D))return;const n=tt.find(a=>Re(a,t));n!==void 0&&(D=n,v(jt,String(D)),Oe(),Ht(h))}function pr(){Ca||(Ca=setInterval(()=>{if(!(!m||!G))try{const e=m.getVolume(),t=m.isMuted();typeof e=="number"&&e>0&&(Hn=e),Ns=!!t}catch{}},800))}function Ft(e){if(!m||!G){pe=e;return}try{Ns?m.mute():m.unMute(),m.setVolume(Hn),et===e?(m.seekTo(0,!0),m.playVideo()):(et=e,de=[],On=!0,Oe(),m.loadVideoById(e))}catch{}}function fr(e){if(!m||!G){pe=e;return}if(et===e){let t=-1;try{t=m.getPlayerState()}catch{}if(t===YT.PlayerState.PLAYING||t===YT.PlayerState.BUFFERING)return}Ft(e)}function Ms(){const e=document.getElementById("play-toggle");if(!e)return;let t=-1;try{t=m&&m.getPlayerState()}catch{}const n=t===1||t===3;e.innerHTML=n?Ma:gt,e.classList.toggle("playing",n),e.setAttribute("aria-label",n?"暫停":"播放")}function mr(e){if(Ms(),he(),(e.data===YT.PlayerState.PLAYING||e.data===YT.PlayerState.CUED)&&$s(),e.data===YT.PlayerState.ENDED){Lt(),hr();return}e.data===YT.PlayerState.PLAYING?gr():(Lt(),Z())}function hr(){if(!h||!X())return;const e=xt(h);if(e.next.id===h.id){Ft(e.next.youtubeId);return}Pe(1)}function gr(){Lt(),Ke=setInterval(Z,Oi)}function Lt(){Ke&&(clearInterval(Ke),Ke=null)}function _s(e){const t=document.querySelectorAll(".lyric-line.active");if(!t.length)return 0;const n=e||t[t.length-1];let a=0;return t.forEach(s=>{s!==n&&(s.classList.remove("active"),s.style.opacity="0.999",requestAnimationFrame(()=>{s.style.opacity=""}),a++)}),a}let $e=null;function yr(){$e||($e=setInterval(()=>{try{_s(null)}catch{}},300))}function br(){$e&&(clearInterval($e),$e=null)}function Z(e){xs();const t=document.getElementById("lyrics-list");if(!t)return;const n=t.querySelectorAll(".lyric-line"),a=$n(),s=a===null?null:a+un;$o(s);let i=ke;if(s!==null&&isFinite(s)){i=-1;for(let r=0;r<n.length&&s>=Number(n[r].dataset.time);r++)_n(h&&h.lyrics&&h.lyrics[r])&&(i=r)}const o=i>=0&&n[i]?n[i]:null;er(o,s===null?null:s-un),_s(o),o&&!o.classList.contains("active")&&o.classList.add("active"),Ka++,he(i),s!==null&&(i===ke&&!e||(Ro(i),ke=i,i>=0&&Ce&&vr(n[i])))}function Dt(){const e=document.querySelector(".lyrics-scroll"),t=document.getElementById("lyrics-list");if(!e||!t)return;const n=t.querySelector(".lyric-line"),a=e.clientHeight;if(!n||!a)return;const s=a/2-n.getBoundingClientRect().height/2;t.style.paddingTop=Math.max(8,s)+"px",t.style.paddingBottom=Math.max(140,a/2)+"px"}let Na=null,Ba=null;window.addEventListener("resize",()=>{const e=window.innerWidth,t=window.innerHeight;(e!==Na||Math.abs(t-Ba)>100)&&(Na=e,Ba=t,Ie&&(hs(),Dt(),X()&&Z(!0)))});function vr(e){const t=document.querySelector(".lyrics-scroll");if(!t||!e)return;const n=t.getBoundingClientRect(),a=e.getBoundingClientRect(),s=a.top-n.top-(t.clientHeight/2-a.height/2),i=t.scrollHeight-t.clientHeight,o=Math.max(0,Math.min(i,t.scrollTop+s));Math.abs(o-t.scrollTop)<4||kr(t,o,Vi)}function kr(e,t,n){oe!==null&&cancelAnimationFrame(oe);const a=e.scrollTop,s=t-a,i=performance.now(),o=r=>{const c=Math.min(1,(r-i)/n),l=1-Math.pow(1-c,3);e.scrollTop=a+s*l,c<1?oe=requestAnimationFrame(o):oe=null};oe=requestAnimationFrame(o)}function wr(e){m&&typeof m.seekTo=="function"&&(m.seekTo(e,!0),m.playVideo())}const Ee=document.getElementById("app-banner"),Er=document.getElementById("app-banner-msg"),xe=document.getElementById("app-banner-action"),ja=document.getElementById("app-banner-close");let Tt=null,Ct=null;function Ut(e,t,n,a,s){Ee&&(Er.innerHTML=e,Tt=n||null,Ct=s||null,xe.textContent=t||"",xe.hidden=!t,Ee.classList.toggle("offline",a==="offline"),Ee.classList.add("show"))}function Vt(){Ee&&Ee.classList.remove("show"),xe&&(xe.hidden=!0,xe.textContent=""),Tt=null,Ct=null}xe&&xe.addEventListener("click",()=>{Tt&&Tt()});ja&&ja.addEventListener("click",()=>{Ct?Ct():Vt()});const Ps="horo-install-hint";function xr(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function Rs(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&Number(navigator.maxTouchPoints)>1,n=/android/i.test(e)&&(/mobile/i.test(e)||navigator.userAgentData&&navigator.userAgentData.mobile===!0);return{ios:t,android:n}}function qn(){if(!navigator.onLine||xr())return!1;const e=Rs();return e.ios||e.android}function Fn(){return v(Ps)==="done"}function Wt(){v(Ps,"done"),Vt()}function Hs(e,t,n){!qn()||Fn()||Ut(e,t,n,"install",Wt)}"serviceWorker"in navigator&&location.protocol.startsWith("http")&&window.addEventListener("load",()=>{window.setTimeout(()=>{const e=!!navigator.serviceWorker.controller;navigator.serviceWorker.register(`./sw.js?build=${Bt}`).then(n=>{n.addEventListener("updatefound",()=>{const a=n.installing;a&&a.addEventListener("statechange",()=>{a.state==="installed"&&navigator.serviceWorker.controller&&Ut("<b>新版本</b>已準備完成，歌詞或介面可能已更新。","重新整理",()=>{a.postMessage({type:"SKIP_WAITING"})})})})}).catch(()=>{});let t=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{!e||t||(t=!0,location.reload())})},8e3)},{once:!0});function Dn(){navigator.onLine?Ee&&Ee.classList.contains("offline")&&Vt():Ut("目前處於<b>離線</b>狀態。仍可查看歌詞與應援提示，但無法播放影片。","",null,"offline")}window.addEventListener("online",Dn);window.addEventListener("offline",Dn);function Sr(){!Rs().ios||!qn()||Fn()||Hs("點選分享按鈕 <b>⎋</b> → <b>加入主畫面</b>，即可像 App 一樣使用。","知道了",Wt)}let dn=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),!(!qn()||Fn())&&(dn=e,Hs("<b>安裝</b>到主畫面後，就能在場館直接開啟。","安裝",async()=>{const t=dn;if(Wt(),dn=null,!!t)try{t.prompt(),await t.userChoice}catch{}}))});window.addEventListener("appinstalled",Wt);setTimeout(()=>{Dn(),Sr()},1500);window.addEventListener("hashchange",Xa);function Ir(){if(window.YT&&window.YT.Player){X()&&xn();return}if(document.querySelector("script[data-youtube-api]"))return;window.onYouTubeIframeAPIReady=()=>{X()&&xn()};const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",e.async=!0,e.dataset.youtubeApi="true",document.head.appendChild(e)}Ui();ro();Xa({resetScroll:!1});document.documentElement.removeAttribute("data-initial-route");
