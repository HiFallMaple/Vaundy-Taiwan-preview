(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Rs="modulepreload",Hs=function(e,t){return new URL(e,t).href},Xn={},$e=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");s=c(n.map(u=>{if(u=Hs(u,a),u in Xn)return;Xn[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(a)for(let h=o.length-1;h>=0;h--){const x=o[h];if(x.href===u&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${p}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Rs,d||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),d)return new Promise((h,x)=>{f.addEventListener("load",h),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return s.then(o=>{for(const r of o||[])r.status==="rejected"&&i(r.reason);return t().catch(i)})},Ca='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="11"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',Os='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.595 24 12.297c0-6.627-5.373-12-12-12z"/></svg>',Ae='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',qs='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',yt='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.2v13.6a1 1 0 0 0 1.5.87l11-6.8a1 1 0 0 0 0-1.74l-11-6.8A1 1 0 0 0 8 5.2z"/></svg>',Na='<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6.5" y="4.5" width="4" height="15" rx="1.4"/><rect x="13.5" y="4.5" width="4" height="15" rx="1.4"/></svg>',Fs='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5 15.4 17.5"/><path d="M15.4 6.5 8.6 10.5"/></svg>',Ds='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3.5h9l4.5 4.5v12a1 1 0 0 1-1 1h-12.5a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1z"/><path d="M14 3.5V8h4.5"/><path d="M8.5 13h7"/><path d="M8.5 16.5h5"/></svg>',Vs='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="9" width="18" height="12" rx="1.5"/><line x1="12" y1="9" x2="12" y2="21"/><path d="M3 13h18"/><path d="M12 9S10.6 4.5 8.2 4.5A2.2 2.2 0 0 0 8.2 9z"/><path d="M12 9s1.4-4.5 3.8-4.5A2.2 2.2 0 0 1 15.8 9z"/></svg>',ae='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',Us='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><rect x="9.6" y="10.2" width="4.8" height="3.6" rx="1.2"/></svg>',Ws='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5s-7.2-4.4-7.2-9.6A3.9 3.9 0 0 1 12 8.4a3.9 3.9 0 0 1 7.2 2.5c0 5.2-7.2 9.6-7.2 9.6z"/><path d="M8.4 5.2 9.6 3"/><path d="M12 4.2V2"/><path d="M15.6 5.2 14.4 3"/></svg>',Ba='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.9 18.2A2 2 0 0 0 3.6 21h16.8a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13.5"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',Ks='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6.6" y="2.6" width="10.8" height="18.8" rx="2.4"/><line x1="10.4" y1="5.6" x2="13.6" y2="5.6"/><line x1="3.6" y1="20.8" x2="20.4" y2="3.2"/></svg>',Y=e=>`<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#${e}"/></svg>`,H={wave:`<span class="ico ico-wave" title="揮手">${Y("i-wave")}</span>`,clap:`<span class="ico ico-clap" title="拍手"><span class="hand l">${Y("i-hand")}</span><span class="hand r">${Y("i-hand")}</span><span class="spark">${Y("i-spark")}</span></span>`,mic:`<span class="ico ico-mic" title="大合唱">${Y("i-mic")}</span>`,jump:`<span class="ico ico-jump" title="跳躍">${Y("i-jump")}<span class="ground"></span></span>`,spin:`<span class="ico ico-spin" title="轉臂">
           <svg class="body" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-cheer"/></svg>
           <svg class="arm" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-cheer-arm"/></svg>
         </span>`};H.turn=H.spin;H.chant=H.mic;const Zn='<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-mic"/></svg>',zs='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',Gs='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',Bt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>',ja='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 5h2v14H5z"/><path d="M19 5.6v12.8a1 1 0 0 1-1.6.8l-9.2-6.4a1 1 0 0 1 0-1.6l9.2-6.4a1 1 0 0 1 1.6.8z"/></svg>',$a='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 5h2v14h-2z"/><path d="M5 5.6v12.8a1 1 0 0 0 1.6.8l9.2-6.4a1 1 0 0 0 0-1.6L6.6 4.8a1 1 0 0 0-1.6.8z"/></svg>',Ys='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><rect x="11" y="12" width="8" height="5" rx="1" fill="currentColor" stroke="none"/></svg>',Qn='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',Js='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.8"/><path d="M12 2.5v2.1M12 19.4v2.1M4.7 4.7l1.5 1.5M17.8 17.8l1.5 1.5M2.5 12h2.1M19.4 12h2.1M4.7 19.3l1.5-1.5M17.8 6.2l1.5-1.5"/></svg>',Ma='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1z"/></svg>',ea=Object.freeze({jp:'<svg class="chant-version-flag chant-version-flag-jp" viewBox="0 0 24 16" role="img" aria-label="日本版"><rect x="1" y="1" width="22" height="14" rx="2" fill="#fff" stroke="currentColor" stroke-opacity=".45"/><circle cx="12" cy="8" r="4" fill="#bc002d"/></svg>',kr:'<svg class="chant-version-flag chant-version-flag-kr" viewBox="0 0 24 16" role="img" aria-label="韓國版"><rect x="1" y="1" width="22" height="14" rx="2" fill="#fff" stroke="currentColor" stroke-opacity=".45"/><path d="M12 4a4 4 0 0 1 0 8v-4a2 2 0 0 0 0-4Z" fill="#cd2e3a"/><path d="M12 12a4 4 0 0 1 0-8v4a2 2 0 0 0 0 4Z" fill="#0047a0"/><path d="M4 4h3m-3 1.5h3M17 10.5h3m-3 1.5h3" stroke="#141414" stroke-width="1" stroke-linecap="round"/></svg>'}),Xs="https://github.com/watain666/Vaundy-Taiwan-2026",Zs="https://www.threads.com/@brainginger/post/DdiLWztgen9",Qs="https://vaundy-seoul-2026.pages.dev/",ei="https://gall.dcinside.com/mgallery/board/view/?id=vaundy0606&no=35550";function _a(e){return`
    <footer class="credits">
      <nav class="credits-links" aria-label="專案連結">
        <p class="credits-copy">
          <span class="credits-copy-desktop">VAUNDY ASIA ARENA TOUR 2026 &ldquo;HORO&rdquo;・TAIWAN FAN CHANT GUIDE（非官方粉絲製作）</span>
          <span class="credits-copy-mobile">VAUNDY ASIA ARENA TOUR 2026 &ldquo;HORO&rdquo;<br>TAIWAN FAN CHANT GUIDE（非官方粉絲製作）</span>
          <span class="build">${e}</span>
        </p>
        <span class="credits-origin">
          <a class="credits-link credits-repo" href="${Xs}" target="_blank" rel="noopener" aria-label="GitHub Repo" title="GitHub Repo">
            ${Os}
          </a>
          <a class="credits-fork" href="${Qs}" target="_blank" rel="noopener" aria-label="Fork from SEOUL 응원가이드">
            Fork from SEOUL 응원가이드
          </a>
        </span>
        <a class="credits-fork" href="${ei}" target="_blank" rel="noopener" aria-label="Thanks to the original Korean creator, 카쿠메.">
          Thanks to the original Korean creator, 카쿠메.
        </a>
        <span class="credits-actions">
          <a class="credits-link" href="${Zs}" target="_blank" rel="noopener" aria-label="意見回饋" title="意見回饋">
            <span>意見回饋</span>
          </a>
          <button class="credits-link changelog-trigger" type="button" data-open-changelog aria-haspopup="dialog" aria-controls="changelog-view">
            更新日誌
          </button>
        </span>
      </nav>
    </footer>
  `}function ti(e,t=`<button class="theme-toggle home-theme" type="button" data-theme-toggle aria-label="切換主題">${Ma}</button>`){return`
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
          <span class="info-toggle-icon">${Ca}</span>
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
              ${Ae} 前往 Ticket Plus 售票頁面
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
          <span class="info-toggle-icon">${Ds}</span>
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
          <span class="info-toggle-icon">${Us}</span>
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
                ${Ae} Ticket Plus 售票頁面
              </a>
              <a class="info-book-link" href="https://www.arena.taipei/" target="_blank" rel="noopener">
                ${Ae} 台北小巨蛋官網
              </a>
              <a class="info-book-link" href="https://twconcertview.com/venue/taipei-arena-center-stage/" target="_blank" rel="noopener">
                ${Ae} 台灣各大場館視野
              </a>
            </div>

            <p class="info-footnote">※ 若主辦單位後續更新舞台、票區或票價，請以最新官方公告為準。</p>
          </div>
          </template>
        </div>
      </div>

      <div class="info-card" id="way-card">
        <button class="menu-row info-toggle" aria-expanded="false">
          <span class="info-toggle-icon">${qs}</span>
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
          <span class="info-toggle-icon">${Ws}</span>
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
          <span class="info-toggle-icon">${Vs}</span>
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
              ${Ae} 查看 VAWS 官方巡演頁面
            </a>

            <p class="info-footnote">※ 以上內容以 VAWS MEMBERS 官方公告為準，詳細安排可能依演出當天現場狀況調整。</p>
          </div>
          </template>
        </div>
      </div>

      <div class="menu-links">
        <a class="menu-chip" href="https://vaundy.jp/?lang=en" target="_blank" rel="noopener">
          <span class="chip-ico">${Ae}</span>
          <span class="chip-label">官方網站</span>
        </a>
        <button class="menu-chip spoiler" type="button" id="setlist-btn">
          <span class="chip-ico warn">${Ba}</span>
          <span class="chip-label">東京/首爾歌單</span>
          <span class="chip-note">含劇透</span>
        </button>
      </div>
      </div>

      <!-- 폰 플래시(폰 반딧불) 안내 — 접지 않고 바로 보이는 한 문단 -->
      <aside class="home-note">
        <span class="home-note-ico">${Ks}</span>
        <div class="home-note-body">
          <b>請避免使用手機閃光燈</b>
          <p>舞台演出連燈光完全熄滅的瞬間都經過設計。觀眾席的一道光會打破黑暗，讓精心安排的畫面失去效果。</p>
          <p class="sub">若有全場一起舉燈的安排，演出中會另行通知。</p>
        </div>
      </aside>

      <div class="home-foot">
        <button class="share-btn" type="button" id="share-btn">${Fs} 分享</button>
      </div>
        </section>
      </div>
    </section>

    ${_a(e)}
  `}const B=[{id:"Tokimeki",title:"心動 (Tokimeki)",translationCredit:"巴哈姆特的月勳",youtubeId:"-_PKhPMXMDY"},{id:"KaijuNoHanauta",title:"怪獸之花歌 (怪獣の花唄)",translationCredit:"巴哈姆特的月勳",youtubeId:"UM9XNpgrqVk"},{id:"CHAINSAWBLOOD",title:"CHAINSAW BLOOD",translationCredit:"巴哈姆特的月勳",youtubeId:"FL1QjjkZVm4"},{id:"KoikazeniNosete",title:"乘著戀愛感冒 (恋風邪にのせて)",translationCredit:"巴哈姆特的月勳",youtubeId:"1FIhcdocT-k"},{id:"Odoriko",title:"舞者 (踊り子)",translationCredit:"巴哈姆特的月勳",youtubeId:"7HgJIAUtICU"},{id:"HadakaNoYusha",title:"裸身勇者 (裸の勇者)",translationCredit:"巴哈姆特的月勳",youtubeId:"FT0GKCuSaW0"},{id:"Fukakouryoku",title:"不可幸力 (不可幸力)",translationCredit:"巴哈姆特的月勳",youtubeId:"Gbz2C2gQREI"},{id:"Reunion",title:"重逢 (再会)",translationCredit:"巴哈姆特的月勳",youtubeId:"WcaSSvtHFeM"},{id:"hanaurana",title:"花占卜 (花占い)",translationCredit:"Smiecj",translationCreditUrl:"https://smiecj.com/2022/12/30/vaundy-hanauranai/",translationSourceUrl:"https://smiecj.com/2022/12/30/vaundy-hanauranai/",translationLicense:"CC BY-NC-SA 4.0",translationLicenseUrl:"https://creativecommons.org/licenses/by-nc-sa/4.0/",youtubeId:"onhBN0qkUcE"},{id:"Yobigoe",title:"呼喚聲 (呼び声)",karaokeTrackId:"3kQf453SpkwX7ALdgzNSNY",translationCredit:"藍色小樹熊",translationCreditUrl:"https://bluekokomurmur.com/lyrics/vaundy-yobigoe/",translationSourceUrl:"https://bluekokomurmur.com/lyrics/vaundy-yobigoe/",youtubeId:"CI2x2aSi8aI"},{id:"Tomoshibi",title:"燈火 (灯火)",translationCredit:"巴哈姆特的月勳",youtubeId:"nrLZ-vTiQa4"},{id:"HowdoIknow'",title:"我怎麼會知道呢 (僕にはどうしてわかるんだろう)",translationCredit:"藍色小樹熊",translationCreditUrl:"https://bluekokomurmur.com/lyrics/vaundy-boku-niwa-doshite-wakarundarou/",translationSourceUrl:"https://bluekokomurmur.com/lyrics/vaundy-boku-niwa-doshite-wakarundarou/",youtubeId:"x4aWXNWPrtY"},{id:"Shiwaawase'",title:"皺褶相合 (しわあわせ)",youtubeId:"JwmGruvGt_I"},{id:"Homunculus",title:"人造小人 (ホムンクルス)",translationCredit:"巴哈姆特的月勳",youtubeId:"ZhUa0CumyxQ"},{id:"soramimi",title:"soramimi",youtubeId:"Jh_0EW6G3gQ"},{id:"TokyoFlash",title:"東京 Flash (東京フラッシュ)",translationCredit:"雨音子",translationCreditUrl:"https://ameotoko1997.blog.fc2.com/blog-entry-375.html",translationSourceUrl:"https://ameotoko1997.blog.fc2.com/blog-entry-375.html",youtubeId:"SIuF37EWaLU"},{id:"NakiJizo",title:"哭泣地藏 (泣き地蔵)",translationCredit:"巴哈姆特的月勳",youtubeId:"XQTM2M5iD_I"},{id:"napori",title:"napori",youtubeId:"ZeIGVnkYX04"},{id:"Backlight",title:"逆光 (逆光)",translationCredit:"巴哈姆特的月勳",youtubeId:"RhDxXvn6YaQ"},{id:"NEOJAPAN",title:"NEO JAPAN",youtubeId:"QC6gd_b1nz8"},{id:"ZuttoLoveSong",title:"一直都是情歌 (ずっとラブソング)",youtubeId:"wriTi0J_-1A"},{id:"Iseijin'",title:"偉生人 (偉生人)",translationCredit:"巴哈姆特的月勳",youtubeId:"aDaWuvpB_Kw"},{id:"ZERO",title:"ZERO",youtubeId:"Fs7MW0rx9Cw"},{id:"SonnaBitternaHanashi)",title:"那樣的 bitter 故事 (そんなbitterな話)",youtubeId:"V-gxqhWEbxI"},{id:"Fujin",title:"風神 (風神)",youtubeId:"yiU0I0tvt6s"},{id:"Jonetsu",title:"常熱 (常熱)",translationCredit:"Oblivionis",translationCreditUrl:"https://home.gamer.com.tw/artwork.php?sn=5830053",translationSourceUrl:"https://home.gamer.com.tw/artwork.php?sn=5830053",youtubeId:"fxtQ4Dsmqo0"},{id:"Kagero",title:"陽炎 (かげろう)",translationCredit:"巴哈姆特的月勳",youtubeId:"gY-7i-T76o0"},{id:"IdeagaAfureteNemurenai",title:"理念滿溢而無法入睡 (イデアが溢れて眠れない)",youtubeId:"0u_zA8BJG6A"},{id:"flyaway",title:"飛翔之時 (飛ぶ時)",translationCredit:"巴哈姆特的月勳",youtubeId:"ARj1adoUoEU"},{id:"mabuta",title:"眼瞼 (まぶた)",translationCredit:"巴哈姆特的月勳",youtubeId:"fjx_uy5eD8g"},{id:"Hitomibore",title:"為瞳孔著迷 (瞳惚れ)",youtubeId:"XEEXE8Ei5SA"},{id:"SekainoHimitsu",title:"世界的秘密 (世界の秘密)",translationCredit:"Smiecj",translationCreditUrl:"https://smiecj.com/2023/05/07/vaundy-sekainohimitu/",translationSourceUrl:"https://smiecj.com/2023/05/07/vaundy-sekainohimitu/",translationLicense:"CC BY-NC-SA 4.0",translationLicenseUrl:"https://creativecommons.org/licenses/by-nc-sa/4.0/",youtubeId:"xFoTFCHU70s"},{id:"Wasuremono",title:"遺忘之物 (忘れ物)",youtubeId:"tQq8C7irREk"},{id:"Timeparadox",title:"時間悖論 (タイムパラドックス)",translationCredit:"藍色小樹熊",translationCreditUrl:"https://bluekokomurmur.com/lyrics/vaundy-taimu-paradokkusu/",translationSourceUrl:"https://bluekokomurmur.com/lyrics/vaundy-taimu-paradokkusu/",youtubeId:"ewhRE-BvJCg"},{id:"TodomenoIchigeki",title:"最後一擊 (トドメの一撃)",translationCredit:"Smiecj",translationCreditUrl:"https://smiecj.com/2023/10/08/vaundy-todome/",translationSourceUrl:"https://smiecj.com/2023/10/08/vaundy-todome/",translationLicense:"CC BY-NC-SA 4.0",translationLicenseUrl:"https://creativecommons.org/licenses/by-nc-sa/4.0/",youtubeId:"7xRWOylrLfI"},{id:" Kimagure",title:"任性 (気まぐれ)",youtubeId:"uYyfD5A-w8Q"}],ni={"2026-10-31":[{t:"17:30",label:"開場・開始入場"},{t:"19:00",label:"正式演出開始"},{t:"21:00",label:"預計演出結束（以現場為準）"}],"2026-11-01":[{t:"17:30",label:"開場・開始入場"},{t:"19:00",label:"正式演出開始"},{t:"21:00",label:"預計演出結束（以現場為準）"}]},ai=[{start:"2026-10-31T19:00:00+08:00",end:"2026-10-31T21:30:00+08:00"},{start:"2026-11-01T19:00:00+08:00",end:"2026-11-01T21:30:00+08:00"}],si=[],ii=[],oi={wave_jump:{video:"./images/tips/wave_jump.webm",src:"./images/tips/wave_jump.webp",fallback:"./images/tips/wave_jump.gif",caption:"jump"},wave_chain:{video:"./images/tips/wave_chain.webm",src:"./images/tips/wave_chain.webp",fallback:"./images/tips/wave_chain.gif",caption:"跟著 Hu Hu Hu Hu"},wave_dada:{video:"./images/tips/wave_dada.webm",src:"./images/tips/wave_dada.webp",fallback:"./images/tips/wave_dada.gif",caption:"跟著 DA-DADADADA"},wave_turn:{video:"./images/tips/wave_turn.webm",src:"./images/tips/wave_turn.webp",fallback:"./images/tips/wave_turn.gif",caption:"旋轉雙手"},wave_rl:{video:"./images/tips/wave_rl.webm",src:"./images/tips/wave_rl.webp",fallback:"./images/tips/wave_rl.gif",caption:"向左右大幅揮動"},"wave-basic":{video:"./images/tips/wave-basic.webm",src:"./images/tips/wave-basic.webp",fallback:"./images/tips/wave-basic.gif",caption:"雙手舉過頭頂・向左右大幅揮動"},"wave-slow":{src:"./images/tips/wave-slow.gif",caption:"單手慢慢揮動"},"clap-basic":{src:"./images/tips/clap-basic.gif",caption:"在頭頂上方拍手"},jump:{src:"./images/tips/jump.gif",caption:"跳起來！"}},Pa=Object.freeze({Tokimeki:120,KaijuNoHanauta:75,CHAINSAWBLOOD:147,KoikazeniNosete:118,Odoriko:157,HadakaNoYusha:163,Fukakouryoku:94,Reunion:150,hanaurana:135,Yobigoe:120,Tomoshibi:110,"HowdoIknow'":162,"Shiwaawase'":160,Homunculus:153,soramimi:130,TokyoFlash:98,NakiJizo:120,napori:130,Backlight:145,NEOJAPAN:176,ZuttoLoveSong:145,"Iseijin'":170,ZERO:105,"SonnaBitternaHanashi)":178,Fujin:97,Jonetsu:155,Kagero:100,IdeagaAfureteNemurenai:105,flyaway:142,mabuta:115,Hitomibore:110,SekainoHimitsu:160,Wasuremono:105,Timeparadox:82,TodomenoIchigeki:100," Kimagure":178}),ie={label:"東京/首爾",dates:"東京 09.05・09.06｜首爾 09.19・09.20",items:[{n:1,songs:[{id:"NakiJizo"}]},{n:2,songs:[{id:"Homunculus"}]},{n:3,songs:[{id:"HadakaNoYusha"}]},{n:4,songs:[{id:"Reunion",day:"六"},{id:"Backlight",day:"日"}]},{n:5,songs:[{id:"Fukakouryoku"}]},{n:6,songs:[{id:"Fujin"}]},{n:7,songs:[{id:"SonnaBitternaHanashi)"}]},{n:8,songs:[{id:"KoikazeniNosete"}]},{n:9,songs:[{id:" Kimagure"}]},{n:10,songs:[{id:"napori"}]},{n:11,songs:[{id:"Timeparadox"}]},{n:12,songs:[{id:"Shiwaawase'"}]},{n:13,songs:[{id:"TokyoFlash"}]},{n:14,songs:[{id:"TodomenoIchigeki"}]},{n:15,songs:[{id:"IdeagaAfureteNemurenai"}]},{n:16,songs:[{id:"Yobigoe"}]},{n:17,songs:[{id:"flyaway"}]},{n:18,songs:[{id:"soramimi"}]},{n:19,songs:[{id:"CHAINSAWBLOOD"}]},{n:20,songs:[{id:"Tokimeki",day:"六"},{id:"hanaurana",day:"日"}]},{n:21,songs:[{id:"KaijuNoHanauta"}]},{n:22,songs:[{id:"Odoriko"}]}]},ta={cx:315,cy:210},na=[["A","floor",184,178,"153,119 213,119 213,154 275,205 258,223 140,223 121,204 121,150"],["B","floor",269,149,"220,119 311,119 311,169 280,199 220,150"],["C","floor",360,149,"319,119 410,119 410,149 349,199 319,169"],["D","floor",445,178,"417,119 477,119 508,149 509,204 490,223 371,223 355,205 417,154"],["E","floor",184,280,"140,235 258,235 275,254 213,304 212,340 154,340 121,308 121,254"],["F","floor",269,308,"279,260 283,261 311,289 311,339 220,340 220,309"],["G","floor",360,309,"348,260 355,263 410,309 410,340 319,340 319,289"],["H","floor",445,280,"372,235 490,235 509,254 509,308 476,340 418,340 417,304 355,254"],["201","r",482,404,"456,386 495,386 519,421 456,421"],["202","r",408,398,"363,386 454,386 454,410 363,411"],["203","r",315,398,"270,386 360,386 360,411 270,411"],["204","r",221,398,"177,386 267,386 267,411 177,411"],["205","r",147,404,"135,386 174,386 174,421 111,421"],["206","r",89,370,"73,328 132,385 111,416 44,350"],["207","r",54,300,"39,262 72,262 72,327 41,349 38,348"],["208","r",55,229,"39,200 72,200 72,259 39,259"],["209","r",54,158,"39,110 72,132 72,197 39,197"],["210","r",89,87,"109,42 115,47 132,74 73,130 44,108"],["211","r",147,52,"111,37 174,37 174,72 135,72"],["212","r",221,58,"177,46 267,46 267,72 176,72"],["213","r",314,58,"270,46 360,46 360,72 270,72"],["214","r",408,58,"363,46 453,46 454,71 363,72"],["215","r",482,52,"456,37 519,38 495,72 456,72"],["216","r",540,87,"519,42 586,108 557,130 498,74"],["217","r",575,158,"589,110 591,110 591,197 558,197 558,132"],["218","r",574,229,"558,200 591,200 591,259 558,259"],["219","r",575,300,"558,262 591,262 591,349 558,327"],["220","r",539,370,"555,328 586,350 519,416 498,385"],["308","s",15,229,"0,178 15,178 16,200 36,200 36,259 15,259 14,281 0,281"],["309","s",16,128,"13,70 23,79 14,92 35,108 35,172 0,172 0,85"],["310","s",56,55,"65,17 95,47 47,94 18,64"],["311","s",125,14,"83,0 174,0 174,14 158,14 158,35 109,35 93,12 82,22 71,13"],["312","s",216,16,"176,0 267,0 267,14 250,14 251,35 176,35"],["313","s",315,17,"269,0 361,0 361,35 269,35"],["314","s",413,16,"363,0 454,0 454,35 379,35 379,14 363,14"],["315","s",504,14,"456,0 547,0 559,13 548,22 537,12 520,35 472,35 472,14 456,14"],["316","s",573,55,"563,17 612,64 583,94 535,47"],["317","s",613,128,"616,70 630,85 630,172 595,172 595,108 616,92 607,80"],["318","s",614,229,"615,178 630,178 630,281 615,280 614,258 594,259 594,200 614,200"],["319","s",613,330,"595,287 630,287 630,374 617,389 607,380 617,367 595,351"],["320","s",585,389,"581,365 584,365 612,393 590,416 561,388 561,385"],["W1","w",0,0,"107,38 110,42 47,106 40,107"],["W2","w",0,0,"522,38 590,107 586,108 580,103 574,94 553,75 554,73 551,73 520,42"],["W3","w",0,0,"42,350 110,416 108,420 40,353"],["W4","w",0,0,"587,350 590,353 522,420 520,416"],["STAGE","stage",314,229,"314,180 364,228 364,231 316,279 265,230"]].map(e=>({id:e[0],grade:e[1],x:e[2],y:e[3],pts:e[4]})),ri={floor:{label:"Floor 站席",cls:"floor"},r:{label:"R席・2樓指定席",cls:"r"},s:{label:"S席・3樓指定席",cls:"s"}},aa="點選區域，查看座位等級與它在配置圖上的位置。",li=["上方","右上方","右側","右下方","下方","左下方","左側","左上方"],ci={A:"西側",B:"西側",E:"西側",F:"西側",C:"北側",D:"北側",G:"北側",H:"北側"},sa={jp:{label:"日本版",source:"日本版應援標記"},kr:{label:"韓國版",source:"韓國版應援標記"}},Ra="https://www.canva.com/design/DAGzhwjn1P4/WDMcBwi1A-ZJpX615SFpig/view",di="jp",ui=["整體：日本版把「要跟唱」和「只做動作」分開標示；韓國版的 vocal cue 較密，常把整段副歌或回應片段標成大合唱。","怪獣の花唄：日本版強調「もっと／ねぇ もっと」、可指向 Vaundy 的「君がいつも」，以及第一段「落ちてく過去は鮮明で……」；韓國版則把更多副歌與後段波浪手勢列為跟唱。","花占い：日本版副歌以左右揮手、開心時跳躍為主，跟唱不是必要；韓國版有較明確的「なんて／抱いて／何年経っても」回應段。","逆光：日本版是副歌整體大聲唱，最後特別注意「悪党ふっ飛ばして」；韓國版較偏向「ないや／ないさ／ないな」的分段回應。","灯火／常熱：日本版分別集中在「ねぇ／けど まだ」與鼓點拍手、終段前尖叫；韓國版有更廣的副歌大合唱標記。","踊り子：日本版的核心是食指逆時針旋轉，第一段「とぅるるる」保持安靜；韓國版把較多旋律段落也列入大合唱。","恋風邪にのせて：兩版都重視「愛で／日々が」，是差異最小的歌曲之一。","ホムンクルス／Tokimeki：日本版更強調固定口號的順序（「ホムンクルス!」、Uh／Yeah、Da、Na、Tokimekiのせい）；韓國版則有較多 Hu／DA 與整段揮手標記。","CHAINSAW BLOOD／不可幸力：日本版更細分手勢與回應進場時機；不可幸力的「Welcome to the dirty night」以及「愛で」尤其要跟上。","soramimi／裸の勇者：日本版分別以跟著跳舞、以及安靜唱兩次「愛して」為主；韓國版大合唱範圍較廣。","偉生人／ずっとラブソング：日本版有明確的「Whoa → True, true, true」與食指比 1；韓國版對應的口號和揮手行較多。","呼び声／東京フラッシュ／トドメの一撃：日本版允許簡化（只唱「チェンジ」）或依副歌回應詞跟唱；韓國版則多以完整副歌行與固定揮手段落標記。"],ia=/[\[(](?:wave|clap|mic|chant|jump|spin|turn)[\])]/iu;function pi(e,t={}){const n={};for(const a of["furigana","romaji"]){const s=Object.create(null);for(const[i,o]of[["base",e[a]],["corrections",t[a]]])for(const[r,l]of Object.entries(o||{})){if(!r.trim()||typeof l!="string"||!l.trim())throw new Error(`Invalid ${i} ${a} reading: ${JSON.stringify(r)}`);if(ia.test(r)||ia.test(l))throw new Error(`Action markers are not allowed in ${i} ${a} readings: ${JSON.stringify(r)}`);s[r]=l}n[a]=Object.freeze(s)}return Object.freeze(n)}function fi(e,t){return e?.[t]}const We=e=>Array.from(String(e||"")).filter(t=>!/\s/u.test(t)).join("");function In(e,t,n=new Set){if(n.has(t))throw new Error(`Circular chant inheritance: ${t}`);n.add(t);const a=e?.versions?.[t];if(!a)throw new Error(`Missing chant version: ${t}`);if(a.kind==="inherit")return In(e,a.from,n);if(a.kind!=="guide")throw new Error(`Invalid chant guide: ${t}`);return{...a,resolvedVersion:t}}function Xt(e,t){if(!t||typeof t.text!="string"||!Number.isInteger(t.occurrence)||t.occurrence<1)throw new Error("Invalid chant occurrence or target");const n=Array.from(We(e)),a=Array.from(We(t.text));if(!a.length)throw new Error("Empty chant target");let s=0;for(let i=0;i<=n.length-a.length;i++)if(a.every((o,r)=>o===n[i+r])&&++s===t.occurrence)return{start:i,end:i+a.length};throw new Error(`Chant target not found: ${t.text} #${t.occurrence}`)}function mi(e,t,n,a={}){const s=In(t,n),i=e.chants?.[s.resolvedVersion],o=i?.chant?.kind||"none";if(!["none","full","partial"].includes(o))throw new Error(`Invalid chant kind: ${o}`);if(o==="full"&&i.chant.parts)throw new Error("Full chant cannot have parts");const r={jp:e.jp,romaji:a.romaji??(/[ぁ-ゖ゠-ヿ一-鿿]/u.test(e.jp)?void 0:e.jp),zh:e.tr},l={jp:[],romaji:[],zh:[]};if(o==="partial"){if(!i.chant.parts?.length)throw new Error("Partial chant requires parts");for(const u of i.chant.parts){if(!u.jp||!u.romaji)throw new Error("Partial chant requires Japanese and romaji targets");for(const d of Object.keys(l)){if(!u[d]||r[d]===void 0)continue;const p=Xt(r[d],u[d]);if(l[d].some(f=>f.start<p.end&&p.start<f.end))throw new Error(`Overlapping chant ranges: ${d}`);l[d].push(p)}}}for(const u of i?.chant?.translationParts||[]){const d=Xt(e.tr,u);if(l.zh.some(p=>p.start<d.end&&d.start<p.end))throw new Error("Overlapping translation ranges");l.zh.push(d)}const c=(i?.actions||[]).map(u=>{const d=hi(u.marks),p=["at","before","after"].filter(h=>Object.hasOwn(u,h));if(p.length!==1||u.at!==void 0&&!["start","end"].includes(u.at))throw new Error("Invalid action position");const f={};for(const h of["jp","romaji"])if(u.at)f[h]=u.at==="start"?0:Array.from(We(r[h])).length;else{const x=(u.before||u.after)?.[h];if(!x||!We(e.jp))throw new Error("Inline action requires Japanese and romaji targets");if(typeof x.text!="string"||!We(x.text)||!Number.isInteger(x.occurrence)||x.occurrence<1)throw new Error("Invalid action target");if(r[h]===void 0)f[h]=null;else{const C=Xt(r[h],x);f[h]=u.before?C.start:C.end}}return{marks:d,positions:f,edge:u.at||p[0]}});return{time:e.time,chant:o,ranges:l,actionPlacements:c,actions:[...new Set(c.flatMap(u=>u.marks))],requestedVersion:n,resolvedVersion:s.resolvedVersion}}function hi(e){if(typeof e!="string"||!/^(?:\[(?:clap|wave|jump|spin)\])+$/.test(e))throw new Error(`Invalid action marks: ${e}`);return[...e.matchAll(/\[([a-z]+)\]/g)].map(t=>t[1])}function gi(e,t,n=!1,a=document){const s=a.createElement("template");s.innerHTML=e;const i=s.content;i.querySelectorAll(".ico").forEach(p=>p.remove());const o=[],r=p=>{for(const f of[...p.childNodes])if(f.nodeType===3)o.push({node:f,text:f.nodeValue,atomic:!1});else if(f.nodeType===1){if(["RT","RP"].includes(f.tagName))continue;f.tagName==="RUBY"?o.push({node:f,text:[...f.childNodes].filter(h=>h.nodeType===3).map(h=>h.nodeValue).join(""),atomic:!0}):r(f)}};r(i);let l=0;const c=p=>n||t.some(f=>f.start<=p&&p<f.end),u=p=>{const f=a.createElement("span");f.className="chant-range",p.replaceWith(f),f.appendChild(p)};for(const p of o){const f=Array.from(p.text);if(p.atomic){const y=f.filter(S=>!/\s/u.test(S)).length,w=Array.from({length:y},(S,m)=>c(l+m));if(w.some(Boolean)&&!w.every(Boolean))throw new Error(`Chant boundary splits ruby: ${p.text}`);y&&w.every(Boolean)&&u(p.node),l+=y;continue}const h=a.createDocumentFragment();let x="",C=!1;const E=()=>{if(!x)return;const y=a.createTextNode(x);h.appendChild(y),C&&u(y),x=""};for(const y of f){const S=/\s/u.test(y)?C:c(l++);S!==C&&(E(),C=S),x+=y}E(),p.node.replaceWith(h)}const d=a.createElement("div");return d.appendChild(i),d.innerHTML}function yi(e,t,n,a,s=document){const i=E=>E.map(y=>{if(!a[y])throw new Error(`Missing action icon: ${y}`);return a[y]}).join("");if(!t.length)return e;if(t.every(E=>["start","end"].includes(E.edge))){const E=y=>i(t.filter(w=>w.edge===y).flatMap(w=>w.marks));return E("start")+e+E("end")}const o=s.createElement("template");o.innerHTML=e;const r=o.content,l=[];let c=0,u=0;const d=E=>{for(const y of[...E.childNodes])if(!(y.nodeType===1&&y.matches("rt,rp,.ico")))if(y.nodeType===3||y.nodeType===1&&y.tagName==="RUBY"){const w=y.nodeType===1,S=w?[...y.childNodes].filter(k=>k.nodeType===3).map(k=>k.nodeValue).join(""):y.nodeValue,m=[];let b=0;for(const k of Array.from(S))/\s/u.test(k)||m.push({start:b,end:b+k.length}),b+=k.length;l.push({node:y,atomic:w,offsets:m,start:c,end:c+m.length,rawStart:u,rawEnd:u+S.length}),c+=m.length,u+=S.length}else y.nodeType===1&&d(y)};d(r);const p=new Map,f=new Map,h=new Map,x=(E,y)=>{let w=f.get(E);if(w||(w={},f.set(E,w)),!w[y]){const S=s.createTextNode("");E===r?y==="start"?r.prepend(S):r.append(S):y==="start"?E.before(S):E.after(S),w[y]=S}return{node:w[y],offset:0}};for(const E of t){const y=E.positions[n];if(y===null)continue;if(!Number.isInteger(y)||y<0||y>c)throw new Error(`Invalid action boundary: ${y}`);let w,S;if(["start","end"].includes(E.edge))S=E.edge==="start"?0:u,w=()=>x(r,E.edge);else{const m=E.edge==="after",b=l.find(k=>m?k.start<y&&y<=k.end:k.start<=y&&y<k.end);if(!b)throw new Error(`Action boundary not found: ${y}`);if(b.atomic){if(y!==b.start&&y!==b.end)throw new Error(`Action boundary splits ruby: ${b.node.textContent}`);const k=y===b.start?"start":"end";S=k==="start"?b.rawStart:b.rawEnd,w=()=>x(b.node,k)}else{const k=m?b.offsets[y-b.start-1].end:b.offsets[y-b.start].start;S=b.rawStart+k,w=()=>({node:b.node,offset:k})}}h.has(S)||h.set(S,{point:w,marks:[]}),h.get(S).marks.push(...E.marks)}for(const{point:E,marks:y}of h.values()){const w=E();p.has(w.node)||p.set(w.node,new Map),p.get(w.node).set(w.offset,y)}for(const[E,y]of p)for(const[w,S]of[...y].sort(([m],[b])=>b-m)){const m=s.createTextNode(""),b=s.createTextNode(E.nodeValue.slice(w));for(E.nodeValue=E.nodeValue.slice(0,w),E.after(m,b);m.parentNode!==r;){const I=m.parentNode,A=I.cloneNode(!1);for(;m.nextSibling;)A.appendChild(m.nextSibling);I.after(m,A),I.childNodes.length||I.remove(),A.childNodes.length||A.remove()}const k=s.createElement("template");k.innerHTML=i(S),m.replaceWith(k.content)}const C=s.createElement("div");return C.appendChild(r),C.innerHTML}function bi(e){const t={chant:0,clap:!1,wave:!1,jump:!1,spin:!1};for(const n of e){n.chant!=="none"&&t.chant++;for(const a of n.actions)t[a]=!0}return t}function vi(e,t){const n=[];for(let s=0;s<e.length;s++){if(e[s].chant==="none")continue;let i=s;for(;i+1<e.length&&e[i+1].chant!=="none";)i++;n.push({from:s,to:i,start:Math.max(0,t[s]-1.2),end:(t[i+1]??t[i]+8)+.6}),s=i}const a=[];for(const s of n){const i=a.at(-1);i&&s.start-i.end<2.5?(i.end=s.end,i.to=s.to):a.push({...s})}return a}const ki={Tokimeki:{jp:{chant:25,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:25,clap:!0,wave:!0,jump:!1,spin:!1}},KaijuNoHanauta:{jp:{chant:21,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:35,clap:!0,wave:!0,jump:!1,spin:!1}},CHAINSAWBLOOD:{jp:{chant:18,clap:!0,wave:!0,jump:!0,spin:!1},kr:{chant:22,clap:!0,wave:!0,jump:!0,spin:!1}},KoikazeniNosete:{jp:{chant:12,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:12,clap:!0,wave:!0,jump:!1,spin:!1}},Odoriko:{jp:{chant:0,clap:!0,wave:!1,jump:!1,spin:!0},kr:{chant:7,clap:!0,wave:!1,jump:!1,spin:!0}},HadakaNoYusha:{jp:{chant:5,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:7,clap:!0,wave:!0,jump:!1,spin:!1}},Fukakouryoku:{jp:{chant:17,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:24,clap:!0,wave:!0,jump:!1,spin:!1}},Reunion:{jp:{chant:10,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:10,clap:!0,wave:!0,jump:!1,spin:!1}},hanaurana:{jp:{chant:7,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:18,clap:!0,wave:!0,jump:!1,spin:!1}},Yobigoe:{jp:{chant:22,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:23,clap:!0,wave:!0,jump:!1,spin:!1}},Tomoshibi:{jp:{chant:2,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:7,clap:!0,wave:!0,jump:!1,spin:!1}},"HowdoIknow'":{jp:{chant:8,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:8,clap:!1,wave:!0,jump:!1,spin:!1}},"Shiwaawase'":{jp:{chant:11,clap:!1,wave:!1,jump:!1,spin:!1},kr:{chant:11,clap:!1,wave:!1,jump:!1,spin:!1}},Homunculus:{jp:{chant:15,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:20,clap:!0,wave:!0,jump:!1,spin:!1}},soramimi:{jp:{chant:3,clap:!0,wave:!0,jump:!0,spin:!1},kr:{chant:25,clap:!0,wave:!0,jump:!0,spin:!1}},TokyoFlash:{jp:{chant:12,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:31,clap:!1,wave:!0,jump:!1,spin:!1}},NakiJizo:{jp:{chant:8,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:8,clap:!0,wave:!0,jump:!1,spin:!1}},napori:{jp:{chant:18,clap:!1,wave:!1,jump:!1,spin:!1},kr:{chant:18,clap:!1,wave:!1,jump:!1,spin:!1}},Backlight:{jp:{chant:18,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:12,clap:!0,wave:!0,jump:!1,spin:!1}},NEOJAPAN:{jp:{chant:4,clap:!1,wave:!1,jump:!1,spin:!1},kr:{chant:4,clap:!1,wave:!1,jump:!1,spin:!1}},ZuttoLoveSong:{jp:{chant:5,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:12,clap:!1,wave:!0,jump:!1,spin:!1}},"Iseijin'":{jp:{chant:13,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:23,clap:!0,wave:!0,jump:!1,spin:!1}},ZERO:{jp:{chant:10,clap:!1,wave:!1,jump:!1,spin:!1},kr:{chant:10,clap:!1,wave:!1,jump:!1,spin:!1}},"SonnaBitternaHanashi)":{jp:{chant:10,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:10,clap:!1,wave:!0,jump:!1,spin:!1}},Fujin:{jp:{chant:19,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:19,clap:!0,wave:!0,jump:!1,spin:!1}},Jonetsu:{jp:{chant:0,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:18,clap:!0,wave:!0,jump:!1,spin:!1}},Kagero:{jp:{chant:19,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:19,clap:!1,wave:!0,jump:!1,spin:!1}},IdeagaAfureteNemurenai:{jp:{chant:16,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:16,clap:!1,wave:!0,jump:!1,spin:!1}},flyaway:{jp:{chant:22,clap:!0,wave:!0,jump:!0,spin:!1},kr:{chant:22,clap:!0,wave:!0,jump:!0,spin:!1}},mabuta:{jp:{chant:11,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:11,clap:!0,wave:!0,jump:!1,spin:!1}},Hitomibore:{jp:{chant:2,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:2,clap:!0,wave:!0,jump:!1,spin:!1}},SekainoHimitsu:{jp:{chant:1,clap:!0,wave:!1,jump:!1,spin:!1},kr:{chant:1,clap:!0,wave:!1,jump:!1,spin:!1}},Wasuremono:{jp:{chant:0,clap:!1,wave:!0,jump:!1,spin:!1},kr:{chant:0,clap:!1,wave:!0,jump:!1,spin:!1}},Timeparadox:{jp:{chant:0,clap:!0,wave:!1,jump:!1,spin:!1},kr:{chant:0,clap:!0,wave:!1,jump:!1,spin:!1}},TodomenoIchigeki:{jp:{chant:27,clap:!0,wave:!0,jump:!1,spin:!1},kr:{chant:28,clap:!0,wave:!0,jump:!1,spin:!1}}," Kimagure":{jp:{chant:0,clap:!1,wave:!1,jump:!1,spin:!1},kr:{chant:0,clap:!1,wave:!1,jump:!1,spin:!1}}};let st=null,Zt=null,it=null,un=null,ot=null,Ha=null,Oa=null;function qa(){return Ha}function wi(){return Oa}function Ei(){return it||(it=Promise.all([$e(()=>import("./song-content-DvchZjhS.js"),[],import.meta.url),$e(()=>import("./version-data-D0oENBd5.js"),[],import.meta.url)]).then(([{SONG_CONTENT:e},{CHANT_GUIDES:t,CHANT_SOURCES:n}])=>(Ha=t,Oa=n,new Map(e.map(a=>[a.id,a])))).catch(e=>{throw it=null,e})),it}function xi(){return ot||(ot=$e(()=>import("./furigana-corrections-LPXuAvVA.js"),[],import.meta.url).catch(e=>{throw ot=null,e})),ot}function Ln(e,t){return fi(un?.[t],e)}function Si(){return un?Promise.resolve():(st||(st=Promise.all([$e(()=>import("./furigana-DzFJ_RVc.js"),[],import.meta.url),xi()]).then(([,e])=>{un=pi({furigana:window.JP_FURIGANA,romaji:window.JP_ROMAJI},{furigana:e.FURIGANA_CORRECTIONS,romaji:e.ROMAJI_CORRECTIONS})}).catch(e=>{st=null,console.error("Reading data could not be loaded",e)})),st)}function Ii(){return window.KARAOKE_SOURCES?Promise.resolve(window.KARAOKE_SOURCES):(Zt||(Zt=$e(()=>import("./karaoke-sources-DiYxmmu-.js"),[],import.meta.url).then(()=>window.KARAOKE_SOURCES||null).catch(()=>null)),Zt)}const Li=[400,500,700],Ai=/[\u3000-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/u;let Qt=null,oa="";function ra(e,t=!1){if(document.head.querySelector(`link[rel="preconnect"][href="${e}"]`))return;const n=document.createElement("link");n.rel="preconnect",n.href=e,t&&(n.crossOrigin="anonymous"),document.head.appendChild(n)}function Ti(e){const t=Array.isArray(e)?e.join(""):String(e??"");return[...new Set([...t].filter(n=>Ai.test(n)))].sort((n,a)=>n.codePointAt(0)-a.codePointAt(0)).join("")}function Ci(e,t=Li){const n=Ti(e);if(!n)return;const a=[...new Set(t)].map(Number).filter(r=>Number.isInteger(r)&&r>=100&&r<=900).sort((r,l)=>r-l);if(!a.length)return;const s=`${a.join(",")}:${n}`;if(Qt?.isConnected&&oa===s)return;Qt?.remove();const i=new URLSearchParams({family:`Noto Sans JP:wght@${a.join(";")}`,display:"swap",text:n});ra("https://fonts.googleapis.com"),ra("https://fonts.gstatic.com",!0);const o=document.createElement("link");o.rel="stylesheet",o.href=`https://fonts.googleapis.com/css2?${i.toString()}`,o.dataset.japaneseFontSubset="true",oa=s,Qt=o,document.head.appendChild(o)}function L(e,t){try{if(t===void 0)return localStorage.getItem(e);localStorage.setItem(e,t)}catch{return null}}const Ni="html,body{width:100%;height:100%;margin:0;overflow:hidden}body{background:var(--stage, var(--ui-bg, #151619));color:var(--ui-text, #f5f5f7)}[hidden]{display:none!important}.document-pip{box-sizing:border-box;position:relative;display:flex!important;flex-direction:column;gap:0;width:100%;height:100%;min-height:100%;padding:0;overflow:hidden;background:var(--stage, var(--ui-bg, #151619));color:var(--ui-text, #f5f5f7)}.document-pip .pip-progress{position:absolute;inset:0 0 auto;z-index:2;height:4px;overflow:hidden;background:var(--stage-raised, var(--ui-raised, #2b2c30));pointer-events:none}.document-pip .pip-progress-fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--ui-accent, #e9d9a3);transform:scaleX(0);transform-origin:left center}.document-pip .pip-controls{flex:none;display:grid;grid-template-columns:44px minmax(0,1fr) 44px;align-items:center;gap:8px;min-width:0;min-height:68px;padding:16px 22px 8px;box-sizing:border-box}.document-pip .pip-track-controls{display:flex;align-items:center;min-width:0;height:44px;overflow:hidden;border-radius:var(--radius-pill, 999px);background:var(--stage-surface, var(--ui-surface, #202125))}.document-pip .pip-song-label{flex:1 1 auto;min-width:0;height:44px;display:flex;align-items:center;justify-content:center;gap:7px;padding:0 4px}.document-pip .pip-song-number{flex:none;color:var(--ui-muted, #a9a9af);font-size:12px;font-variant-numeric:tabular-nums;white-space:nowrap}.document-pip .pip-title{min-width:0;overflow:hidden;color:var(--ui-text, #f5f5f7);font-family:var(--font-tw-sans, system-ui, sans-serif);font-size:14px;font-weight:600;line-height:1.35;text-overflow:ellipsis;white-space:nowrap}.document-pip .pip-status{flex:none;min-height:14px;color:var(--ui-muted, #a9a9af);font-size:10px;line-height:1.4}.document-pip .pip-lyrics{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;min-height:0;overflow:hidden;padding:0 24px 10px}.document-pip .pip-line-group{min-width:0}.document-pip .pip-line-label{display:none}.document-pip .pip-current-line,.document-pip .pip-next-line{min-width:0}.document-pip .pip-empty{margin:0;padding:12px 9px;border-radius:8px;color:var(--ui-muted, #a9a9af);font-size:13px;line-height:1.45;text-align:center}.document-pip .lyric-line{width:100%;box-sizing:border-box;display:flex;align-items:flex-start;gap:6px;margin:0;padding:5px 7px;border:0;border-radius:8px;background:transparent;color:var(--ui-text, #f5f5f7);cursor:default;pointer-events:none;text-align:left}.document-pip .pip-current-line .lyric-line{min-height:48px;border-left:3px solid var(--ui-accent, #e9d9a3);background:var(--ui-hover, rgba(255,255,255,.08))}.document-pip .pip-next-line{margin-top:5px;opacity:.58}.document-pip .lyric-body{overflow-wrap:anywhere}.document-pip .pip-current-line .lyric-jp{font-size:clamp(14px,3.2vw,18px);line-height:1.3}.document-pip .pip-current-line .lyric-romaji{font-size:clamp(10px,2.5vw,13px);line-height:1.25}.document-pip .pip-current-line .lyric-zh{font-size:clamp(12px,2.8vw,15px);line-height:1.3}.document-pip .pip-next-line .lyric-jp{font-size:clamp(11px,2.6vw,14px);line-height:1.28}.document-pip .pip-next-line .lyric-romaji{font-size:clamp(9px,2.2vw,11px);line-height:1.25}.document-pip .pip-next-line .lyric-zh{font-size:clamp(11px,2.6vw,13px);line-height:1.3}.document-pip.lyrics-hidden .pip-current-line>.lyric-line,.document-pip.lyrics-hidden .pip-next-group{display:none}.document-pip .pip-action{width:44px;min-width:44px;height:44px;min-height:44px;display:inline-flex;align-items:center;justify-content:center;padding:0;border:0;border-radius:50%;background:var(--ui-raised, rgba(255,255,255,.08));color:var(--ui-text, #f5f5f7);font:inherit;cursor:pointer}.document-pip .pip-controls>.pip-action{flex:none}.document-pip .pip-track-controls .pip-action{width:36px;min-width:36px;height:36px;min-height:36px;margin:4px;background:transparent;color:var(--ui-muted, #a9a9af)}.document-pip .pip-action-label{display:none}.document-pip .pip-action:hover{background:var(--ui-hover, rgba(255,255,255,.13))}.document-pip .pip-action:focus-visible{outline:2px solid var(--ui-accent, #e9d9a3);outline-offset:2px}.document-pip .pip-action:active{transform:scale(.97)}.document-pip .pip-action:disabled{cursor:not-allowed;opacity:.42}.document-pip .pip-action svg{flex:none;width:16px;height:16px}.document-pip .pip-play{color:var(--ui-accent, #e9d9a3)}.document-pip .pip-play svg,.document-pip .pip-return svg{width:18px;height:18px}.document-pip .pip-prev svg,.document-pip .pip-next svg{width:16px;height:16px}@media(prefers-reduced-motion:reduce){.document-pip *,.document-pip *:before,.document-pip *:after{animation:none!important;transition:none!important}.document-pip .pip-action:active{transform:none}}@media(max-width:360px){.document-pip{padding:0}.document-pip .pip-controls{grid-template-columns:40px minmax(0,1fr) 40px;gap:6px;padding-right:10px;padding-left:10px}.document-pip .pip-action{width:40px;min-width:40px;height:40px;min-height:40px}.document-pip .pip-track-controls .pip-action{width:32px;min-width:32px;height:32px;min-height:32px}.document-pip .pip-song-label{gap:4px}}",Bi=450,ji=225,$i=new Set(["karaoke-lit","karaoke-current"]);function Mi(){try{return typeof window<"u"&&typeof window.documentPictureInPicture?.requestWindow=="function"}catch{return!1}}function _i(e,t){e.querySelectorAll('link[rel="stylesheet"]').forEach(a=>{const s=t.createElement("link");s.rel="stylesheet",s.href=a.href,t.head.appendChild(s)}),e.querySelectorAll("style").forEach(a=>{t.head.appendChild(a.cloneNode(!0))});const n=t.createElement("style");n.textContent=Ni,t.head.appendChild(n)}function Pi(e,t){const n=e.querySelector(".icon-sprite");n&&t.body.appendChild(n.cloneNode(!0))}function la(e){return String(e||"").replace(/\s+class="([^"]*)"/gu,(t,n)=>{const a=n.split(/\s+/u).filter(s=>s&&!$i.has(s));return a.length?` class="${a.join(" ")}"`:""}).replace(/\s+style="[^"]*"/gu,"")}function ca(e,t){if(!e||!t)return!0;const n=e.ownerDocument.createElement("template");n.innerHTML=t;const a=[...e.querySelectorAll(".karaoke-unit")],s=[...n.content.querySelectorAll(".karaoke-unit")];return a.length!==s.length?!1:(a.forEach((i,o)=>{const r=s[o];i.classList.toggle("karaoke-lit",r.classList.contains("karaoke-lit")),i.classList.toggle("karaoke-current",r.classList.contains("karaoke-current"));const l=r.style.getPropertyValue("--karaoke-word-progress");l?i.style.setProperty("--karaoke-word-progress",l):i.style.removeProperty("--karaoke-word-progress")}),!0)}function rt(e,t,n,a,s){const i=e.createElement("button");return i.type="button",i.className=`pip-action ${t}`,i.innerHTML='<span class="pip-action-icon" aria-hidden="true"></span><span class="pip-action-label"></span>',i.querySelector(".pip-action-icon").innerHTML=a||"",i.querySelector(".pip-action-label").textContent=n,i.setAttribute("aria-label",n),i.title=n,i.addEventListener("click",o=>{o.preventDefault();try{s()}catch{}}),i}function Ri({onPlayPause:e=()=>{},onFocusOpener:t=()=>{},onPreviousSong:n=()=>{},onNextSong:a=()=>{},onClosed:s=()=>{}}={}){const i=Mi();let o=null,r=null,l=null,c=!1,u=null,d=null;function p(){u=null,d=null}function f(m,b=!0){o===m&&(o=null,r=null,p(),b&&s())}function h(){return o?o.closed?(f(o),!1):!0:!1}function x(m,b,k){if(m.replaceChildren(),!b){const A=m.ownerDocument.createElement("p");A.className="pip-empty",A.textContent=k||"等待同步…",m.appendChild(A);return}const I=m.ownerDocument.createElement("template");I.innerHTML=b,m.appendChild(I.content.cloneNode(!0))}function C(m={}){if(!r)return;const b=r.ownerDocument,k=m.showJapanese!==!1,I=m.showChinese!==!1,A=!k&&!I,R=A?"":String(m.currentMarkup||""),ge=A?"":String(m.nextMarkup||""),Oe=A?"歌詞已隱藏":R?"":"等待第一句…",Vn=m.theme==="light"?"light":"dark";b.documentElement.dataset.theme=Vn,r.dataset.theme=Vn,r.classList.toggle("reading-both",m.readingMode==="both"),r.classList.toggle("hide-japanese",!k),r.classList.toggle("hide-chinese",!I),r.classList.toggle("karaoke-off",m.karaokeEnabled===!1),r.classList.toggle("lyrics-hidden",A),m.iconBeatDuration?r.style.setProperty("--icon-beat-duration",m.iconBeatDuration):r.style.removeProperty("--icon-beat-duration");const Un=r.querySelector(".pip-song-number");Un&&(Un.textContent=m.songNumber||"");const Wn=r.querySelector(".pip-title");Wn&&(Wn.textContent=m.title||"同步字幕");const zt=r.querySelector(".pip-progress"),Kn=r.querySelector(".pip-progress-fill");if(zt&&Kn){const K=Math.max(0,Math.min(1,Number(m.progress)||0));zt.setAttribute("aria-valuenow",String(Math.round(K*100))),zt.setAttribute("aria-valuetext",m.progressText||"正在載入播放進度"),Kn.style.transform=`scaleX(${K})`}const Gt=r.querySelector(".pip-status");Gt&&(Gt.textContent=m.status||"",Gt.hidden=!m.status);const Yt=r.querySelector(".pip-current-line");if(Yt){const K=`${la(R)}\0${Oe}`;(K!==u||!ca(Yt,R))&&(x(Yt,R,Oe),u=K)}const zn=r.querySelector(".pip-next-group"),Jt=r.querySelector(".pip-next-line");if(zn&&Jt){zn.hidden=!ge;const K=la(ge);(K!==d||!ca(Jt,ge))&&(x(Jt,ge,""),d=K)}const qe=r.querySelector(".pip-play");if(qe){const K=m.isPlaying===!0;qe.disabled=m.canPlayPause!==!0,qe.querySelector(".pip-action-icon").innerHTML=K?Na:yt,qe.querySelector(".pip-action-label").textContent=K?"暫停":"播放",qe.setAttribute("aria-label",K?"暫停主頁影片":"播放主頁影片")}const Gn=r.querySelector(".pip-return");Gn&&Gn.setAttribute("aria-label","返回主頁");const Yn=r.querySelector(".pip-prev"),Jn=r.querySelector(".pip-next");Yn&&(Yn.disabled=m.canNavigate!==!0),Jn&&(Jn.disabled=m.canNavigate!==!0),b.documentElement.lang="zh-Hant-TW"}function E(m){const b=m.document;b.documentElement.lang="zh-Hant-TW",b.title="同步字幕",b.head.replaceChildren(),b.body.replaceChildren(),_i(document,b),Pi(document,b);const k=b.createElement("main");k.className="document-pip song-page",k.innerHTML=`
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
    `;const I=k.querySelector(".pip-controls");I.appendChild(rt(b,"pip-return","返回主頁",Bt,t));const A=b.createElement("div");A.className="pip-track-controls",A.setAttribute("role","group"),A.setAttribute("aria-label","切換歌曲"),A.appendChild(rt(b,"pip-prev","上一首",ja,n));const R=b.createElement("div");R.className="pip-song-label",R.setAttribute("aria-live","polite"),R.innerHTML='<span class="pip-song-number"></span><span class="pip-title"></span>',A.appendChild(R),A.appendChild(rt(b,"pip-next","下一首",$a,a)),I.appendChild(A),I.appendChild(rt(b,"pip-play","播放",yt,e)),b.body.appendChild(k),r=k,p()}async function y(m={}){if(!i)return!1;if(o&&o.closed&&f(o),o){C(m);try{o.focus()}catch{}return!0}if(l){c=!1;const k=await l;if(k&&o){C(m);try{o.focus()}catch{}}return k}c=!1,l=(async()=>{try{const k=await window.documentPictureInPicture.requestWindow({width:Bi,height:ji});if(c){try{k.close()}catch{}return!1}return o=k,E(k),k.addEventListener("pagehide",()=>f(k),{once:!0}),C(m),!0}catch{return o=null,r=null,p(),!1}})();const b=await l;return l=null,b}function w(m){h()&&C(m)}function S(){if(l){c=!0;return}const m=o;if(m){f(m);try{m.close()}catch{}}}return Object.freeze({supported:i,open:y,update:w,close:S,isOpen:h})}const Hi="./",j=document.getElementById("app"),N=document.getElementById("song-view");let da=!0,pt=null,g=null,Ke=null,Te=!0,ce=!1;const ft=["kana","romaji","both"],ua=L("horo-reading");let _=ft.includes(ua)?ua:"kana",F=L("horo-show-japanese")!=="0",D=L("horo-show-chinese")!=="0";const Oi=L("horo-chant-version");let O=Oi==="kr"?"kr":di,Fa=!1,V=L("horo-karaoke")==="1",ke=-1,J=null,ye=null,en=0,Da=0,Va=performance.now();function qi(){if(document.head.querySelector('link[rel="manifest"]'))return;const e=document.createElement("link");e.rel="manifest",e.href=`${Hi}manifest.json`,document.head.appendChild(e)}window.addEventListener("load",()=>window.setTimeout(qi,8e3),{once:!0});const Fi=100,jt="v1.11.1",Di="https://home.gamer.com.tw/profile/index.php?owner=tsukilsao319";function mt(e){let t=T(e);const n=[],a=s=>{const i=`\0${n.length}\0`;return n.push(s),i};return t=t.replace(/`([^`]+)`/g,(s,i)=>a(`<code>${i}</code>`)),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,(s,i,o)=>a(`<a href="${o}" target="_blank" rel="noopener">${mt(i)}</a>`)),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t.replace(/\u0000(\d+)\u0000/g,(s,i)=>n[Number(i)]||"")}function Vi(e){const t=[];let n=!1;const a=()=>{n&&(t.push("</ul>"),n=!1)};return String(e||"").replace(/\r\n?/g,`
`).split(`
`).forEach(s=>{const i=s.trim();if(!i){a();return}const o=i.match(/^(#{1,3})\s+(.+)$/);if(o){a();const r=o[1].length;t.push(`<h${r}>${mt(o[2])}</h${r}>`);return}if(i.startsWith("- ")){n||(t.push("<ul>"),n=!0),t.push(`<li>${mt(i.slice(2))}</li>`);return}a(),t.push(`<p>${mt(i)}</p>`)}),a(),t.join("")}const Ui=/[?&]debug=1/.test(location.search);function Wi(){if(!Ui)return;const e=document.createElement("div");e.id="dbg",e.style.cssText="position:fixed;left:6px;top:6px;z-index:9999;padding:5px 8px;background:rgba(0,0,0,.82);color:#7CFF9B;font:11px/1.45 ui-monospace,monospace;border-radius:7px;white-space:pre;pointer-events:none;max-width:92vw;",document.body.appendChild(e),setInterval(()=>{const t=document.querySelectorAll(".lyric-line.active").length,n=document.querySelectorAll("#lyrics-list, .lyrics-list").length;let a="-";try{g&&g.getCurrentTime&&(a=g.getCurrentTime().toFixed(1))}catch{a="ERR"}e.textContent=jt+"  틱 "+Da+`
켜진 줄 `+t+` (하나여야 정상)
idx `+ke+"  시간 "+a+"  목록 "+n+`
타이머 `+(Ke?"O":"X")+"  감시 "+(je?"O":"X")},400)}const pn=.35,Ki=260,zi=.08,Gi=.65,tt=Object.freeze([.25,.5,.75,1,1.25,1.5,2]),$t="horo-playback-rate",pa=Number(L($t));let U=tt.includes(pa)?pa:1,de=[],oe=null,v=null,fn=0,lt=null;const mn=window.matchMedia("(prefers-color-scheme: dark)"),fa=L("horo-theme");let Mt=fa==="dark"?"dark":fa==="light"?"light":mn.matches?"dark":"light";const fe=Ri({onPlayPause:Es,onFocusOpener:()=>{try{window.focus()}catch{}},onPreviousSong:()=>_e(-1),onNextSong:()=>_e(1),onClosed:En});function _t(e=""){return`<button class="theme-toggle ${e}" type="button" data-theme-toggle></button>`}function An(e,t=!1){Mt=e,document.documentElement.dataset.theme=e,document.querySelector('meta[name="theme-color"]').content=e==="dark"?"#151619":"#f5f5f7",t&&L("horo-theme",e),document.querySelectorAll("[data-theme-toggle]").forEach(n=>{const a=e==="dark"?"淺色模式":"深色模式";n.innerHTML=e==="dark"?Js:Ma,n.setAttribute("aria-label",`切換至${a}`),n.setAttribute("title",`切換至${a}`)}),he()}document.addEventListener("click",e=>{e.target.closest("[data-theme-toggle]")&&An(Mt==="dark"?"light":"dark",!0)});mn.addEventListener&&mn.addEventListener("change",e=>{L("horo-theme")||An(e.matches?"dark":"light")});function Ua(e=v,t=O){if(!e)return null;const n=qa()?.[e.id];return n?In(n,t):null}function Me(e=O){return sa[e]?.label||sa.jp.label}function bt(e=O){return ea[e]||ea.jp}function Wa(){return`<span class="chant-source-info">
    <b>應援版本說明</b>：預設為日本版，可用應援版本按鈕切換日本版／韓國版；切換後大合唱標記會同步更新。<br>
    <a href="${Ra}" target="_blank" rel="noopener">日本版參考：Canva《VAUNDY 應援教學》↗</a>
  </span>`}function Xe(){document.querySelectorAll("[data-chant-version]").forEach(e=>{const t=e.dataset.chantVersion===O;e.classList.toggle("active",t),e.setAttribute("aria-pressed",t?"true":"false")}),document.querySelectorAll("[data-chant-version-flag]").forEach(e=>{e.innerHTML=bt()}),document.querySelectorAll("[data-chant-version-toggle]").forEach(e=>{const t=O==="kr";e.classList.toggle("active",t),e.setAttribute("aria-pressed",t?"true":"false"),e.setAttribute("aria-label",`切換應援版本：目前${Me()}，點擊切換`),e.title="點擊切換日本版／韓國版";const n=e.querySelector(".chant-version-value");n&&(n.innerHTML=bt())})}function Ka(e=v){const t=document.getElementById("chant-version-note");if(!t)return;const n=Ua(e),a=n.resolvedVersion!==O,s=n.sourceIds.map(i=>wi()[i]);t.innerHTML=`<b>${Me()}</b>：${a?`這首歌沿用${Me(n.resolvedVersion)}標記。`:"歌詞旁的麥克風圖示代表大合唱段落。"}${s.map(i=>` <a href="${T(i.url)}" target="_blank" rel="noopener">${T(i.label)} ↗</a>`).join("")}`}function za(e=v){const t=document.getElementById("chant-notes-toggle"),n=document.getElementById("chant-notes"),a=document.getElementById("chant-notes-list");if(!t||!n||!a)return;const s=Ua(e),i=s&&Array.isArray(s.notes)?s.notes.filter(l=>typeof l=="string"&&l.trim()):[],o=i.length>0,r=o&&Fa;t.hidden=!o,t.classList.toggle("active",r),t.setAttribute("aria-expanded",r?"true":"false"),n.hidden=!r,a.innerHTML=i.map(l=>`<li>${T(l)}</li>`).join("")}document.addEventListener("click",e=>{const t=e.target.closest("[data-chant-version]");if(!t)return;const n=t.dataset.chantVersion;n!=="jp"&&n!=="kr"||os(n)});document.addEventListener("click",e=>{const t=e.target.closest("[data-chant-version-toggle]");if(t){if(e.preventDefault(),e.stopPropagation(),t.id==="guide-chant-version-btn"&&(pe=null,g&&typeof g.pauseVideo=="function"))try{g.pauseVideo()}catch{}os(O==="jp"?"kr":"jp")}});document.addEventListener("click",e=>{const t=e.target.closest("#chant-notes-toggle");if(!t||t.hidden)return;const n=document.getElementById(t.getAttribute("aria-controls")||"chant-notes");if(!n)return;const a=t.getAttribute("aria-expanded")!=="true";Fa=a,t.classList.toggle("active",a),t.setAttribute("aria-expanded",a?"true":"false"),n.hidden=!a});function P(e){return String(e).padStart(2,"0")}function Ga({resetScroll:e=!0}={}){Qi(),ve=null,bn();const t=location.hash.replace(/^#\/?/,"");let n=null;if(t.startsWith("song/")){const a=t.slice(5);let s=a;try{s=decodeURIComponent(a)}catch{}n=B.find(i=>i.id===s)||B.find(i=>i.id===a)||null}n?ls(n):t==="guide"?(cn(),kt("guide"),go()):t==="setlist"?(cn(),Eo()):(cn(),kt("guide"),bo(),po()),e&&window.scrollTo(0,0),An(Mt)}function Yi(e){const t=e.x-ta.cx,n=e.y-ta.cy,a=(Math.atan2(n,t)*180/Math.PI+450)%360;return"配置圖的"+li[Math.round(a/45)%8]}function Ji(e){const t=ri[e.grade],n=ci[e.id],a=e.grade==="floor"?n?`入場前請依現場公告前往 <span class="hi">${n}側站席等候區</span>。詳細位置請查看「公告・指南」中的場館地圖。`:"這是環繞舞台的站席區域。入場順序請依演出當天現場指示。":'<span class="warn">A 排・B 排可能因安全欄杆而有些許視線遮擋。</span>';return`<span class="grade ${t.cls}">${t.label}</span><b>${T(e.id)}區</b>・${Yi(e)}<br>${a} <button type="button" class="seat-clear">取消選取</button>`}function vt(e){const t=e&&e.closest?e.closest(".info-card"):null;if(!t||!t.classList.contains("open"))return;const n=t.querySelector(".info-panel");n&&(n.style.maxHeight=n.scrollHeight+"px")}let Xi=[],Zi=[],ze=[],be=0,De=null,Ve=null,Ge=null,tn=null,hn=0,se=null;function Ya(e,t,{idle:n=!1}={}){const a=++hn,s=()=>{a===hn&&Ci(e,t)};if(n){const i=()=>{typeof window.requestIdleCallback=="function"?window.requestIdleCallback(s,{timeout:1500}):window.setTimeout(s,1500)};typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(i):i();return}typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(()=>window.setTimeout(s,0)):window.setTimeout(s,0)}function Qi(){hn++,se?.(),se=null}function Ja(e,t,n){se?.();const a=["pointerdown","keydown","touchstart"],s=()=>{if(location.hash!==n){se?.(),se=null;return}se?.(),se=null,Ya(e,t,{idle:!0})};se=()=>{a.forEach(o=>window.removeEventListener(o,s))},a.forEach(o=>window.addEventListener(o,s,{passive:!0}))}function eo(){return B.map(e=>Tn(e.title)).join("")}function Tn(e){const t=String(e??""),n=t.match(/\(([^()]*)\)/);return n?n[1]:t}function to(e){return[Tn(e.title),...(e.lyrics||[]).map(t=>t.jp||"")]}function Xa(e,t,n,a){if(!e||e.dataset.loaded==="1")return;e.dataset.loaded="1",e.innerHTML="",n.length=0;let s=t.length;const i=()=>{--s>0||(a&&(a.hidden=n.length>0),vt(e),so(n))};if(!s){a&&(a.hidden=!1);return}t.forEach(o=>{const r=document.createElement("button");r.type="button",r.className="notice-item",r.hidden=!0,r.innerHTML=`<img alt="${T(o.title)}" decoding="async"><span class="cap">${T(o.title)}</span>`;const l=r.querySelector("img");l.loading="lazy",Number.isFinite(Number(o.width))&&Number.isFinite(Number(o.height))&&(l.width=Number(o.width),l.height=Number(o.height)),l.addEventListener("load",()=>{r.hidden=!1,l.naturalWidth>l.naturalHeight*1.05&&r.classList.add("wide"),n.push(o),n.sort((c,u)=>t.indexOf(c)-t.indexOf(u)),r.addEventListener("click",()=>io(n,n.indexOf(o))),vt(e),i()},{once:!0}),l.addEventListener("error",()=>{r.remove(),i()},{once:!0}),l.src=o.src,e.appendChild(r)})}function no(){const e=document.getElementById("notice-grid");!e||e.dataset.loaded==="1"||Xa(e,si,Xi,document.getElementById("notice-empty"))}function ao(){const e=document.getElementById("vaws-grid");!e||e.dataset.loaded==="1"||Xa(e,ii,Zi,null)}function so(e){if(!("serviceWorker"in navigator)||!e.length)return;const t=e.map(n=>n.src);navigator.serviceWorker.ready.then(n=>n.active&&n.active.postMessage({type:"CACHE_URLS",urls:t})).catch(()=>{})}function io(e,t){if(!e||!e.length)return;const n=document.getElementById("notice-view");if(!n)return;ze=e,be=Math.max(0,Math.min(e.length-1,t)),De=document.activeElement,Za(),n.inert=!1,n.classList.add("open"),n.setAttribute("aria-hidden","false"),j.inert=!0,document.body.classList.add("no-scroll");const a=document.getElementById("nv-close");a&&a.focus()}function nn(){const e=document.getElementById("notice-view");e&&(e.classList.remove("open","zoom"),e.setAttribute("aria-hidden","true"),e.inert=!0,j.inert=!1,document.body.classList.remove("no-scroll"),De&&De.isConnected&&De.focus(),De=null)}function Za(){const e=ze[be];if(!e)return;const t=document.getElementById("notice-view"),n=document.getElementById("nv-img"),a=document.getElementById("nv-title"),s=document.getElementById("nv-count"),i=document.getElementById("nv-prev"),o=document.getElementById("nv-next"),r=document.getElementById("nv-zoom"),l=document.getElementById("nv-scroll");n&&(n.src=e.src,n.alt=e.title,Number.isFinite(Number(e.width))&&Number.isFinite(Number(e.height))&&(n.width=Number(e.width),n.height=Number(e.height))),a&&(a.textContent=e.title),s&&(s.textContent=be+1+" / "+ze.length),i&&(i.disabled=be===0),o&&(o.disabled=be===ze.length-1),t&&t.classList.remove("zoom"),r&&(r.textContent="放大"),l&&(l.scrollTop=0,l.scrollLeft=0)}function Fe(e){const t=be+e;t<0||t>=ze.length||(be=t,Za())}function oo(){const e=document.getElementById("notice-view");if(!e||e.dataset.wired)return;e.dataset.wired="1";const t=document.getElementById("nv-zoom"),n=document.getElementById("nv-scroll"),a=()=>{const d=e.classList.toggle("zoom");t&&(t.textContent=d?"縮小":"放大"),n&&d&&(n.scrollLeft=(n.scrollWidth-n.clientWidth)/2)},s=document.getElementById("nv-close"),i=document.getElementById("nv-prev"),o=document.getElementById("nv-next");s&&s.addEventListener("click",nn),i&&i.addEventListener("click",()=>Fe(-1)),o&&o.addEventListener("click",()=>Fe(1)),t&&t.addEventListener("click",a);const r=document.getElementById("nv-img");r&&r.addEventListener("click",a),n&&n.addEventListener("click",d=>{d.target===n&&nn()}),document.addEventListener("keydown",d=>{if(e.classList.contains("open")){if(d.key==="Escape")d.preventDefault(),nn();else if(d.key==="ArrowLeft")d.preventDefault(),Fe(-1);else if(d.key==="ArrowRight")d.preventDefault(),Fe(1);else if(d.key==="Tab"){const p=[...e.querySelectorAll("button")].filter(x=>!x.disabled&&x.offsetParent!==null),f=p[0],h=p[p.length-1];d.shiftKey&&document.activeElement===f?(d.preventDefault(),h.focus()):!d.shiftKey&&document.activeElement===h&&(d.preventDefault(),f.focus())}}});let l=0,c=0,u=!1;e.addEventListener("touchstart",d=>{if(e.classList.contains("zoom"))return;const p=d.touches[0];l=p.clientX,c=p.clientY,u=!1},{passive:!0}),e.addEventListener("touchend",d=>{if(e.classList.contains("zoom")||u)return;const p=d.changedTouches[0],f=p.clientX-l,h=p.clientY-c;Math.abs(f)>60&&Math.abs(f)>Math.abs(h)*1.5&&Fe(f<0?1:-1)},{passive:!0})}function ro(){return tn||(tn=$e(()=>import("./CHANGELOG-Dy17FSsv.js"),[],import.meta.url).then(e=>e.default||"").catch(()=>"")),tn}function lo(){const e=document.getElementById("changelog-view"),t=document.getElementById("changelog-content");if(!e||!t)return;t.dataset.rendered!=="1"&&t.dataset.loading!=="1"&&(t.dataset.loading="1",t.textContent="載入版本記錄…",ro().then(s=>{t.dataset.rendered!=="1"&&(t.innerHTML=s?Vi(s):"<p>版本記錄暫時無法載入。</p>",t.dataset.rendered="1")})),Ve=document.activeElement,Ge=Z()?N:j,Ge.inert=!0,e.inert=!1,e.classList.add("open"),e.setAttribute("aria-hidden","false"),document.body.classList.add("no-scroll");const n=document.getElementById("changelog-scroll");n&&(n.scrollTop=0);const a=document.getElementById("changelog-close");a&&a.focus()}function an(){const e=document.getElementById("changelog-view");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true"),e.inert=!0,Ge&&(Ge.inert=!1),Ge=null,document.body.classList.remove("no-scroll"),Ve&&Ve.isConnected&&Ve.focus(),Ve=null)}function co(){const e=document.getElementById("changelog-view");if(!e||e.dataset.wired)return;e.dataset.wired="1";const t=document.getElementById("changelog-close"),n=document.getElementById("changelog-scroll");t&&t.addEventListener("click",an),e&&e.addEventListener("click",a=>{(a.target===e||a.target===n)&&an()}),document.addEventListener("click",a=>{a.target.closest&&a.target.closest("[data-open-changelog]")&&(a.preventDefault(),lo())}),document.addEventListener("keydown",a=>{if(!e.classList.contains("open"))return;if(a.key==="Escape"){a.preventDefault(),an();return}if(a.key!=="Tab")return;const s=[...e.querySelectorAll("button, a[href]")].filter(r=>!r.disabled&&r.offsetParent!==null),i=s[0],o=s[s.length-1];!i||!o||(a.shiftKey&&document.activeElement===i?(a.preventDefault(),o.focus()):!a.shiftKey&&document.activeElement===o&&(a.preventDefault(),i.focus()))})}function uo(){const e=document.querySelector(".seat-map"),t=document.getElementById("seat-readout");if(!e||!t)return;const n=[...e.querySelectorAll(".seat-blk")],a=(i,o)=>{n.forEach(c=>c.classList.remove("selected"));const r=i?na.find(c=>c.id===i):null;if(!r){t.textContent=aa,o&&L("horo-seat",""),vt(t);return}const l=n.find(c=>c.dataset.id===i);l&&l.classList.add("selected"),t.innerHTML=Ji(r),o&&L("horo-seat",i),vt(t)};e.addEventListener("click",i=>{const o=i.target.closest&&i.target.closest(".seat-blk");o&&a(o.classList.contains("selected")?null:o.dataset.id,!0)}),e.addEventListener("keydown",i=>{if(i.key!=="Enter"&&i.key!==" ")return;const o=i.target.closest&&i.target.closest(".seat-blk");o&&(i.preventDefault(),a(o.classList.contains("selected")?null:o.dataset.id,!0))}),t.addEventListener("click",i=>{i.target.closest(".seat-clear")&&a(null,!0)});const s=L("horo-seat");s&&na.some(i=>i.id===s)?a(s,!1):t.textContent=aa}function po(){(!da||!j.querySelector(".hero"))&&(j.innerHTML=ti(jt,_t("home-theme"))),da=!1,document.getElementById("guide-btn").addEventListener("click",()=>{location.hash="#/guide"}),document.getElementById("setlist-btn").addEventListener("click",()=>{location.hash="#/setlist"}),mo(),oo(),uo(),Lo(),No()}function fo(e){const t=e.closest(".hero-inner");!t||t.style.marginTop||(t.style.marginTop=getComputedStyle(t).marginTop,t.style.marginBottom="0px")}let ma=null;window.addEventListener("resize",()=>{if(window.innerWidth===ma)return;ma=window.innerWidth;const e=document.querySelector(".hero-inner");e&&!e.querySelector(".info-card.open")&&(e.style.marginTop="",e.style.marginBottom="")});function mo(){document.querySelectorAll(".info-card").forEach(e=>ho(e))}function ho(e){const t=e.querySelector(".info-toggle"),n=e.querySelector(".info-panel");!e||!t||!n||t.addEventListener("click",()=>{if(e.classList.contains("open"))n.inert=!0,n.setAttribute("aria-hidden","true"),n.style.maxHeight=n.scrollHeight+"px",requestAnimationFrame(()=>{e.classList.remove("open"),t.setAttribute("aria-expanded","false"),n.style.maxHeight="0px"});else{fo(e);const s=n.querySelector(":scope > .info-panel-template");s&&n.replaceChild(s.content.cloneNode(!0),s),n.inert=!1,n.setAttribute("aria-hidden","false"),e.classList.add("open"),t.setAttribute("aria-expanded","true"),n.querySelectorAll("img[data-src]").forEach(i=>{i.src=i.dataset.src,delete i.dataset.src}),e.id==="notice-card"&&no(),e.id==="vaws-card"&&ao(),e.id==="way-card"&&Ao(),n.style.maxHeight=n.scrollHeight+"px",setTimeout(()=>{e.classList.contains("open")&&(n.style.maxHeight=n.scrollHeight+"px")},300)}})}function go(){j.innerHTML=`
    <div class="guide-page">
      <div class="song-topbar">
        <button class="back-btn" id="back-btn" aria-label="返回首頁" title="返回首頁">${Bt}</button>
        ${_t()}
      </div>

      <section class="songs-section">
        <div class="songs-head">
          <h1>應援指南 無劇透</h1>
          <p>選擇歌曲，搭配影片查看歌詞與大合唱重點</p>
          <div class="song-legend">
            <span class="legend-item"><span class="legend-icon chant">${H.mic}</span>大合唱 <b class="legend-num">12</b> 行</span>
            <span class="legend-item"><span class="legend-icon clap">${H.clap}</span>拍手</span>
            <span class="legend-item"><span class="legend-icon wave">${H.wave}</span>揮手</span>
            <span class="legend-item"><span class="legend-icon jump">${H.jump}</span>跳躍</span>
            <span class="legend-item"><span class="legend-icon spin">${H.spin}</span>轉臂</span>
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
        <div class="song-search-meta"><span id="song-count">共 ${B.length} 首</span></div>
        <p class="song-empty" id="song-empty" hidden><b>找不到歌曲</b>請輸入部分歌曲名稱或歌曲編號</p>
        <ul class="song-list" id="song-list"></ul>
      </section>

      ${_a(jt)}
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>{location.hash="#/"});const e=document.getElementById("guide-chant-source"),t=document.getElementById("guide-chant-source-content");e?.addEventListener("toggle",()=>{!e.open||!t||t.dataset.loaded==="1"||(t.innerHTML=`${Wa()}
      <section class="chant-differences" aria-labelledby="chant-differences-title">
        <div class="chant-differences-head">
          <h2 id="chant-differences-title">日本版／韓國版差異</h2>
          <button type="button" class="chant-differences-current chant-version-current" id="guide-chant-version-btn" data-chant-version-toggle aria-pressed="false" aria-label="切換應援版本：目前${Me()}，點擊切換">
            目前 <span data-chant-version-flag aria-hidden="true">${bt()}</span>
          </button>
        </div>
        <ul>${ui.map(n=>`<li>${T(n)}</li>`).join("")}</ul>
        <p class="chant-differences-footnote">未列入日本版歌單的歌曲會暫沿用現有標記，現場仍以 Vaundy 與觀眾的即時引導為準。</p>
      </section>`,t.dataset.loaded="1",Xe())}),Xe(),j.querySelectorAll(".song-sort").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.sort;a==="chant"?$=$==="chant-desc"?"chant-asc":"chant-desc":a==="title"?$=$==="title"?"title-desc":"title":$=a,L("horo-song-sort",$),yn({eager:!0})})}),Co(),yn(),Ja(eo(),[500],"#/guide")}let Se="guide";function kt(e){Se=e==="setlist"?"setlist":"guide"}function yo(){return Se==="setlist"?"#/setlist":"#/guide"}function wt(e){const t=B.find(n=>n.id===e.id);return t?t.title:e.title||e.id}function we(e){return T(String(e??"")).replace(/\(([^()]*)\)/g,(t,n)=>`(<span lang="ja">${n}</span>)`)}let X="random",Ye=null,gn=!1,Et=0;function bo(){gn=!1,Et=0,X="random"}let Qa=(()=>{const e=parseInt(L("horo-set-pos"),10);return Number.isFinite(e)&&e>=0?e:-1})();function Cn(e){Qa=e,L("horo-set-pos",String(e))}function nt(){const e=[];return ie.items.forEach(t=>t.songs.forEach((n,a)=>e.push({key:t.n+":"+a,id:n.id}))),e}function es(){const e=nt().map(t=>t.key);for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}Ye=e,L("horo-set-shuffle2",JSON.stringify(e))}function vo(){const e=nt();if(Ye&&Ye.length===e.length)return;const t=L("horo-set-shuffle2");if(t)try{const n=JSON.parse(t);if(Array.isArray(n)&&n.length===e.length){Ye=n;return}}catch{}es()}function ts(){vo();const e=new Map(nt().map(t=>[t.key,t]));return Ye.map(t=>e.get(t)).filter(Boolean)}function ns(){return(X==="random"?ts():nt()).filter(t=>B.some(n=>n.id===t.id))}function ko(e){if(e.songs.length===1){const t=e.songs[0],n=B.some(a=>a.id===t.id);return`
      <li class="set-item">
        <button class="set-row" data-id="${T(t.id)}" ${n?"":"disabled"}>
          <span class="set-num">${P(e.n)}</span>
          <span class="set-title">${we(wt(t))}</span>
          <span class="set-go">${n?"›":""}</span>
        </button>
      </li>`}return`
    <li class="set-item">
      <div class="set-split">
        <div class="set-split-head">
          <span class="set-num">${P(e.n)}</span>
          <span class="set-split-note">日期不同的歌曲</span>
        </div>
        ${e.songs.map(t=>{const n=B.some(a=>a.id===t.id);return`
          <button class="set-row sub" data-id="${T(t.id)}" ${n?"":"disabled"}>
            <span class="day-chip ${t.day==="日"?"sun":""}">${t.day}</span>
            <span class="set-title">${we(wt(t))}</span>
            <span class="set-go">${n?"›":""}</span>
          </button>`}).join("")}
      </div>
    </li>`}function wo(e){const t=B.some(n=>n.id===e.id);return`
    <li class="set-item">
      <button class="set-row" data-id="${T(e.id)}" ${t?"":"disabled"}>
        <span class="set-num rand">♪</span>
        <span class="set-title">${we(wt(e))}</span>
        <span class="set-go">${t?"›":""}</span>
      </button>
    </li>`}function ct(){const e=document.getElementById("set-list");if(!e)return;const t=X==="order",n=nt().length;e.innerHTML=t?ie.items.map(ko).join(""):ts().map(wo).join("");const a=document.getElementById("setlist-count");a&&(a.textContent=t?`東京/首爾 ${ie.items.length} 首・共 ${n} 首`:`共 ${n} 首`);const s=document.getElementById("setlist-mode-meta");s&&(s.textContent=t?"劇透":"隨機");const i=document.getElementById("set-shuffle");i&&(i.hidden=t);const o=document.getElementById("setlist-desc");o&&(o.innerHTML=t?`${T(ie.dates)}<br>點選歌曲即可前往應援指南`:`${T(ie.dates)}<br>目前將歌曲<b>打亂顯示，不公開演出順序</b>`);const r=document.getElementById("setlist-note");r&&(r.innerHTML=t?`※ 這是整理自粉絲紀錄的非官方東京/首爾歌單，首爾場順序與東京場相同；台北場實際演出順序仍以官方公告為準。<br>
       ※ 日期不同而有變化的曲目，已分為<b>六</b>・<b>日</b>。`:`※ 這是整理自粉絲紀錄的非官方東京/首爾歌單，首爾場順序與東京場相同；台北場實際演出順序仍以官方公告為準。<br>
       ※ 演出順序與日期差異曲目皆已隱藏。想查看完整內容，請在上方點選<b>演出順序</b>。`),j.querySelectorAll(".set-mode").forEach(c=>{const u=c.dataset.mode===X;c.classList.toggle("active",u),c.setAttribute("aria-pressed",u?"true":"false")});let l=0;e.querySelectorAll(".set-row").forEach(c=>{if(c.disabled)return;const u=l++;c.addEventListener("click",()=>{const d=B.find(p=>p.id===c.dataset.id);d&&(Et=window.scrollY,kt("setlist"),Cn(u),Ht(d))})}),Ja(ie.items.map(c=>Tn(wt(c))).join(""),[500],"#/setlist")}function Eo(){j.innerHTML=`
    <div class="setlist-page">
      <div class="song-topbar">
        <button class="back-btn" id="setlist-back-btn" aria-label="返回首頁" title="返回首頁">${Bt}</button>
        <h1>歌單</h1>
        ${_t()}
      </div>

      <section class="spoiler-hero">
        <div class="spoiler-mark">${Ba}</div>
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
          <h2>${T(ie.label)}歌單</h2>
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
  `,document.getElementById("setlist-back-btn").addEventListener("click",()=>{location.hash="#/"}),document.getElementById("spoiler-safe").addEventListener("click",()=>{location.hash="#/"});const e=document.getElementById("setlist-body"),t=document.getElementById("set-order-confirm"),n=(a,s)=>{X=a==="order"?"order":"random",gn=!0,ct(),e.hidden=!1,e.inert=!1,s!==!1&&e.scrollIntoView({behavior:"smooth",block:"start"})};if(j.querySelectorAll(".spoiler-choice .spoiler-open").forEach(a=>{a.addEventListener("click",()=>n(a.dataset.mode))}),j.querySelectorAll(".set-mode").forEach(a=>{a.addEventListener("click",()=>{if(a.dataset.mode==="order"&&X!=="order"){t.hidden=!1,document.getElementById("set-order-cancel").focus();return}t.hidden=!0,X!==a.dataset.mode&&(X=a.dataset.mode==="random"?"random":"order",ct())})}),document.getElementById("set-order-cancel").addEventListener("click",()=>{t.hidden=!0,j.querySelector('.set-mode[data-mode="order"]').focus()}),document.getElementById("set-order-reveal").addEventListener("click",()=>{t.hidden=!0,X="order",ct(),j.querySelector('.set-mode[data-mode="order"]').focus()}),document.getElementById("set-reshuffle").addEventListener("click",()=>{es(),ct()}),gn&&(n(X,!1),Et>0)){const a=Et,s=()=>{const i=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo(0,Math.min(a,i))};requestAnimationFrame(s),setTimeout(s,80),setTimeout(s,260)}}function sn(e,t,n){const a=document.querySelector(".cd-pill"),s=document.getElementById("cd-dday"),i=document.getElementById("cd-clock");!a||!s||!i||(s.textContent=e,i.textContent=t||"",a.classList.toggle("is-live",n==="live"),a.classList.toggle("is-end",n==="end"))}function xo(e,t){document.querySelectorAll(".show-meta .show-row").forEach((a,s)=>{const i=s===e,o=!i&&(t===-1||s<t);a.classList.toggle("live",i),a.classList.toggle("past",o)})}function as(e){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(e)}function So(e,t){const n=a=>{const s=as(new Date(a));return Date.UTC(+s.slice(0,4),+s.slice(5,7)-1,+s.slice(8,10))};return Math.max(0,Math.round((n(t)-n(e))/864e5))}let on=null;function Io(e){const t=document.getElementById("today-card");if(!t)return;const n=as(new Date(e)),a=ni[n];if(!a){t.hidden=!0,on=null;return}t.hidden=!1;const s=a.map(h=>new Date(`${n}T${h.t}:00+09:00`).getTime()),i=s.findIndex(h=>h>e),o=i===-1?a.length-1:i-1;if(on!==n){on=n;const h=new Date(`${n}T12:00:00+09:00`),x=["日","一","二","三","四","五","六"][h.getDay()];document.getElementById("today-title").textContent=`今日演出・${Number(n.slice(5,7))}/${Number(n.slice(8,10))}（${x}）`}document.getElementById("today-list").innerHTML=a.map((h,x)=>`<li class="${x<o?"past":x===o?"now":""}"><span class="t">${h.t}</span><span class="l">${T(h.label)}</span></li>`).join("");const r=document.getElementById("today-now");if(i===-1){r.innerHTML="<b>今天的演出已全部結束。</b>辛苦了！";return}const l=s[i]-e,c=Math.floor(l/36e5),u=Math.floor(l%36e5/6e4),d=Math.floor(l%6e4/1e3),p=c>0?`${c} 小時 ${P(u)} 分 ${P(d)} 秒`:`${u} 分 ${P(d)} 秒`,f=o>=0?`<b>${T(a[o].label)}</b>進行中<br>`:"";r.innerHTML=`${f}距離${T(a[i].label)}還有 <span class="left">${p}</span>`}function Lo(){const e=document.getElementById("share-btn");e&&e.addEventListener("click",async()=>{const t={title:'VAUNDY "HORO" TAIPEI 應援指南',text:"搭配影片查看各曲歌詞與大合唱、拍手、揮手重點",url:location.href.split("#")[0]};try{if(navigator.share){await navigator.share(t);return}await navigator.clipboard.writeText(t.url),Ut("已<b>複製</b>連結，請貼上分享。","確定",Wt)}catch{}})}function Ao(){const e=document.getElementById("copy-addr");!e||e.dataset.wired==="1"||(e.dataset.wired="1",e.addEventListener("click",async()=>{const t="105037 臺北市松山區南京東路4段2號 台北小巨蛋 Taipei Arena";try{await navigator.clipboard.writeText(t),e.textContent="已複製 ✓"}catch{e.textContent=t}setTimeout(()=>{e.textContent="複製地址"},1600)}))}const To=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];function ss(e){return[...String(e)].map(t=>{const n=t.charCodeAt(0);return n>=44032&&n<=55203?To[Math.floor((n-44032)/588)]:t}).join("")}const Ne=e=>String(e).toLowerCase().replace(/\s+/g,"");let dt=0,ve=null,ne=null,z=null;function yn({eager:e=!1}={}){const t=document.getElementById("song-list");if(!t)return;ne&&(window.removeEventListener("scroll",ne),ne=null),z?.remove(),z=null;const n=Rn(),a=++dt;ve=null,t.dataset.total=String(n.length),t.innerHTML="",t.dataset.clickBound!=="1"&&(t.dataset.clickBound="1",t.addEventListener("click",c=>{const u=c.target.closest(".song-row");if(!u||!t.contains(u))return;const d=B.find(p=>p.id===u.dataset.id);d&&(kt("guide"),Ht(d))}),t.addEventListener("focusin",()=>ve?.()));let s=0;const i=({filter:c=!0,includeMarks:u=!0}={})=>{if(a!==dt||!t.isConnected)return;const d=Math.min(s+4,n.length),p=n.slice(s,d).map(f=>`
      <li data-no="${ue(f)}">
        <button class="song-row" data-id="${T(f.id)}">
          <span class="song-num">${P(ue(f))}</span>
          <span class="song-title">${we(f.title)}</span>
          ${u?Sa(f):'<span class="song-marks song-marks-placeholder" aria-hidden="true"></span>'}
        </button>
      </li>`).join("");z?.isConnected?z.insertAdjacentHTML("beforebegin",p):t.insertAdjacentHTML("beforeend",p),s=d,c&&ht()},o=()=>{if(a!==dt||!t.isConnected)return;for(ne&&(window.removeEventListener("scroll",ne),ne=null),z?.remove(),z=null;s<n.length;)i({filter:!1,includeMarks:!0});const c=new Map(n.map(u=>[String(ue(u)),u]));t.querySelectorAll(".song-marks-placeholder").forEach(u=>{const d=u.closest("li"),p=d&&c.get(d.dataset.no);u.outerHTML=p?Sa(p):""}),ve=null,ht()};if(ve=o,i({includeMarks:!0}),e)o();else if(s<n.length){z=document.createElement("li"),z.className="song-list-sentinel",z.setAttribute("aria-hidden","true"),t.appendChild(z);let c=null;const u=()=>{c=null,!(a!==dt||!t.isConnected||!z?.isConnected)&&(z.getBoundingClientRect().top>window.innerHeight+480||(i({includeMarks:!0}),s<n.length&&i({includeMarks:!0}),s>=n.length&&o()))};ne=()=>{c===null&&(c=window.requestAnimationFrame(u))},window.addEventListener("scroll",ne,{passive:!0})}j.querySelectorAll(".song-sort").forEach(c=>{const u=c.dataset.sort==="chant"||c.dataset.sort==="title"?$.startsWith(c.dataset.sort):c.dataset.sort===$;c.classList.toggle("active",u),c.setAttribute("aria-pressed",u?"true":"false")});const r=document.getElementById("sort-chant");if(r){const c=$==="chant-asc"?"少→多":"多→少";r.innerHTML=$.startsWith("chant")?`大合唱 <span class="dir">${c}</span>`:"大合唱"}const l=document.getElementById("sort-title");if(l){const c=$==="title-desc"?"Z→A":"A→Z";l.innerHTML=$.startsWith("title")?`名稱 <span class="dir">${c}</span>`:"名稱"}ht()}function ht(){const e=document.getElementById("song-search-input"),t=document.getElementById("song-search-clear"),n=document.getElementById("song-count"),a=document.getElementById("song-empty"),s=document.querySelectorAll("#song-list > li[data-no]");if(!e||!s.length)return;const i=Number(document.getElementById("song-list")?.dataset.total)||s.length,o=Ne(e.value).replace(/번$/,""),r=/^\d{1,2}$/.test(o);let l=0;s.forEach(c=>{const u=c.querySelector(".song-title").textContent,d=c.dataset.no,p=!o||(r?d===String(Number(o))||P(Number(d))===o:Ne(u).includes(o)||Ne(ss(u)).includes(o));c.hidden=!p,p&&l++}),n&&(n.textContent=o?`搜尋結果 ${l} 首`:`共 ${i} 首`),a&&(a.hidden=l!==0),t&&t.classList.toggle("show",!!e.value)}function Co(){const e=document.getElementById("song-search-input"),t=document.getElementById("song-search-clear");if(!e)return;const n=ht,a=document.querySelector(".song-search"),s=document.getElementById("song-search-sentinel");a&&s&&"IntersectionObserver"in window&&new IntersectionObserver(([i])=>{a.classList.toggle("stuck",!i.isIntersecting)},{threshold:0}).observe(s),e.addEventListener("input",()=>{ve?.(),n()}),t.addEventListener("click",()=>{ve?.(),e.value="",n(),e.focus()}),n()}function No(){const e=ai.map(a=>({start:new Date(a.start).getTime(),end:new Date(a.end).getTime()})),t=e[e.length-1].end;function n(){if(!document.getElementById("countdown")){bn();return}const s=Date.now();Io(s);const i=e.findIndex(p=>s>=p.start&&s<p.end),o=e.findIndex(p=>p.start>s);if(xo(i,o),i!==-1){sn("現在","直播中","live");return}if(o===-1){s>=t&&(sn("結束","","end"),bn());return}const r=e[o].start-s,l=So(s,e[o].start),c=Math.floor(r/36e5),u=Math.floor(r%36e5/6e4),d=Math.floor(r%6e4/1e3);sn(`D-${P(l)}`,`${P(c)}:${P(u)}:${P(d)}`,"count")}n(),pt=setInterval(n,1e3)}function bn(){pt&&(clearInterval(pt),pt=null)}function xt(){const e=document.getElementById("sheet-search-input"),t=document.getElementById("sheet-search-clear"),n=N.querySelector(".song-sheet-count"),a=document.getElementById("sheet-empty"),s=N.querySelectorAll("#song-sheet-list > li");if(!e||!s.length)return;const i=Ne(e.value).replace(/번$/,""),o=/^\d{1,2}$/.test(i);let r=0;s.forEach(l=>{const c=l.querySelector(".song-sheet-name").textContent,u=l.dataset.no,d=!i||(o?u===String(Number(i))||P(Number(u))===i:Ne(c).includes(i)||Ne(ss(c)).includes(i));l.hidden=!d,d&&r++}),n&&(n.textContent=i?`${r} 首`:`${s.length} 首`),a&&(a.hidden=r!==0),t&&t.classList.toggle("show",!!e.value)}function Bo(){const e=document.getElementById("sheet-search-input");e&&(e.value="",xt())}function jo(){const e=document.getElementById("song-sheet"),t=document.getElementById("song-picker-btn"),n=document.getElementById("song-sheet-list");if(!e)return;e.inert=!1,e.classList.add("open"),e.setAttribute("aria-hidden","false"),t&&t.setAttribute("aria-expanded","true"),N.querySelectorAll("#song-page > .song-topbar, #song-page > .song-body, #song-page > .player-controls, #song-page > .song-dock").forEach(s=>{s.inert=!0});const a=n&&n.querySelector(".song-sheet-item.current");a&&(n.scrollTop=Math.max(0,a.offsetTop-n.clientHeight/2+a.offsetHeight/2)),e.querySelector(".song-sheet-close").focus()}function Ce(){const e=document.getElementById("song-sheet"),t=document.getElementById("song-picker-btn");if(!e)return;const n=e.classList.contains("open");Bo(),N.querySelectorAll("#song-page > .song-topbar, #song-page > .song-body, #song-page > .player-controls, #song-page > .song-dock").forEach(a=>{a.inert=!1}),e.classList.remove("open"),e.setAttribute("aria-hidden","true"),e.inert=!0,t&&t.setAttribute("aria-expanded","false"),n&&t&&t.focus()}let Ie=!1;function $o(){if(Se==="setlist"){const e=ns();if(e.length){const t=e.map(n=>B.find(a=>a.id===n.id)).filter(Boolean);if(t.length)return t}}return Rn()}function St(e){if(Se==="setlist"){const a=ns();if(a.length){let s=Qa;if(s>=0&&s<a.length&&a[s].id===e.id||(s=a.findIndex(i=>i.id===e.id)),s>=0){const i=(s-1+a.length)%a.length,o=(s+1)%a.length,r=l=>B.find(c=>c.id===a[l].id)||e;return{idx:s,prev:r(i),next:r(o),pos:s,prevPos:i,nextPos:o}}}}const t=Rn(),n=t.findIndex(a=>a.id===e.id);return n<0?{idx:-1,prev:e,next:e}:{idx:n,prev:t[(n-1+t.length)%t.length],next:t[(n+1)%t.length]}}function _e(e){if(!v)return;const t=St(v),n=e<0?t.prev:t.next,a=e<0?t.prevPos:t.nextPos;a!==void 0&&Cn(a),Ht(n)}function is(){if(Ie)return;Ie=!0,ce=L("horo-venue")==="1",N.innerHTML=`
    <div class="song-page" id="song-page">
      <div class="song-topbar">
        <div class="song-playback-progress" id="song-playback-progress" role="progressbar" aria-label="播放進度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-valuetext="正在載入播放進度">
          <span class="song-playback-progress-fill" id="song-playback-progress-fill"></span>
        </div>
        <button class="back-btn" id="song-back-btn" aria-label="返回歌曲清單" title="返回歌曲清單">${Bt}</button>
        <h1 class="visually-hidden" id="song-page-heading"></h1>
        <nav class="song-dock" aria-label="切換歌曲">
        <div class="song-nav">
          <button class="song-nav-btn" id="prev-song" aria-label="上一首">${ja}</button>
          <div class="song-picker-h">
            <button class="song-picker-btn" id="song-picker-btn" aria-expanded="false" aria-haspopup="dialog" title="開啟歌曲清單">
              <span class="song-picker-number" id="song-picker-number"></span>
              <span class="song-picker-title" id="song-picker-title"></span>
              <span class="song-picker-caret">${ae}</span>
            </button>
          </div>
          <button class="song-nav-btn" id="next-song" aria-label="下一首">${$a}</button>
        </div>
        </nav>
        ${_t()}
      </div>

      <div class="song-body">
        <div class="song-fixed-top">
          <div class="video-wrap">
            <div class="video-frame">
              <div id="yt-player"></div>
              <details class="karaoke-source-popover" id="karaoke-source-popover">
                <summary aria-label="查看同步資訊與中譯歌詞作者" title="同步資訊與中譯歌詞作者">${Ca}</summary>
                <span class="karaoke-source-status" id="karaoke-source-status" role="status" aria-live="polite">
                  <span id="karaoke-source-status-text"></span>
                  <span class="lyrics-credit" id="lyrics-credit" hidden></span>
                  ${Wa()}
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
            <span class="legend-item"><span class="legend-icon chant">${H.mic}</span>大合唱</span>
            <span class="legend-item"><span class="legend-icon clap">${H.clap}</span>拍手</span>
            <span class="legend-item"><span class="legend-icon wave">${H.wave}</span>揮手</span>
            <button type="button" class="chant-notes-toggle" id="chant-notes-toggle" aria-expanded="false" aria-controls="chant-notes" title="查看這首歌的日本版應援提示" hidden>
              <span class="chant-notes-label">應援說明</span><span class="chant-notes-chevron" aria-hidden="true">${ae}</span>
            </button>
          </div>
          <div class="chant-notes-panel" id="chant-notes" hidden>
            <ul class="chant-notes-list" id="chant-notes-list"></ul>
            <a href="${Ra}" target="_blank" rel="noopener">Canva《VAUNDY 應援教學》↗</a>
          </div>
        </div>

        <div class="lyrics-pane">
          <!-- 떼창만 듣기 — 켜져 있을 때만 보이는 띠 -->
          <div class="chant-bar" id="chant-bar" hidden role="status">
            <span class="chant-ico">${Zn}</span>
            <span class="chant-bar-label">只聽大合唱</span>
            <span class="chant-bar-msg" id="chant-msg"></span>
            <span class="chant-bar-count" id="chant-count"></span>
            <button class="chant-step" id="chant-prev" aria-label="上一段大合唱">${zs}</button>
            <button class="chant-step" id="chant-next" aria-label="下一段大合唱">${Gs}</button>
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
        <button class="play-toggle" id="play-toggle" aria-label="播放／暫停">${yt}</button>
        <label class="playback-rate-control" for="playback-rate">
          <select class="playback-rate-select" id="playback-rate" aria-label="目前倍速x1">
            ${tt.map(o=>'<option value="'+o+'">'+Cs(o)+"</option>").join("")}
          </select>
        </label>
        <button class="venue-toggle pip-toggle" id="pip-btn" type="button" aria-pressed="false" aria-label="開啟或聚焦同步字幕小窗" title="開啟或聚焦同步字幕小窗"${fe.supported?"":" hidden"}>
          ${Ys}
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
          <span class="chant-version-value">${bt()}</span>
        </button>
        <button class="venue-toggle" id="venue-btn" aria-label="開啟／關閉簡潔模式">
          <span class="venue-label">簡潔</span>
          <span class="venue-switch"><span class="venue-knob"></span></span>
        </button>
        <button class="venue-toggle reading-toggle" id="reading-btn" aria-pressed="${_!=="kana"?"true":"false"}" aria-label="切換日文讀音：目前顯示${wn()}">
          <span class="venue-label">讀音</span>
          <span class="reading-value reading-value-desktop" id="reading-value">${wn()}</span>
          <span class="reading-value reading-value-mobile" id="reading-value-mobile" aria-hidden="true">${ys()}</span>
        </button>
        <button class="venue-toggle display-toggle${F?" active":""}" id="japanese-toggle" aria-pressed="${F?"true":"false"}" aria-label="切換日文歌詞：目前${F?"顯示":"隱藏"}">
          <span class="venue-label venue-label-desktop">日文</span>
          <span class="venue-label venue-label-mobile" aria-hidden="true">日</span>
          <span class="venue-switch"><span class="venue-knob"></span></span>
        </button>
        <button class="venue-toggle display-toggle${D?" active":""}" id="chinese-toggle" aria-pressed="${D?"true":"false"}" aria-label="切換繁中翻譯：目前${D?"顯示":"隱藏"}">
          <span class="venue-label venue-label-desktop">中文</span>
          <span class="venue-label venue-label-mobile" aria-hidden="true">中</span>
          <span class="venue-switch"><span class="venue-knob"></span></span>
        </button>
        <button class="venue-toggle display-toggle karaoke-toggle${V?" active":""}" id="karaoke-btn" aria-pressed="${V?"true":"false"}" aria-label="切換逐字卡拉OK高亮：目前${V?"開啟":"關閉"}">
          <span class="venue-label venue-label-desktop">卡拉OK</span>
          <span class="venue-label venue-label-mobile" aria-hidden="true">卡拉</span>
          <span class="venue-switch"><span class="venue-knob"></span></span>
        </button>
        <button class="venue-toggle autoscroll-toggle${Te?" active":""}" id="autoscroll-btn" aria-label="開啟／關閉自動捲動">
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
            <span class="song-sheet-count">${B.length} 首</span>
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
  `;const e=document.getElementById("karaoke-source-popover");let t=null;e&&e.addEventListener("toggle",()=>{t&&clearTimeout(t),e.open&&(t=setTimeout(()=>{e.removeAttribute("open"),t=null},2e3))}),document.getElementById("song-back-btn").addEventListener("click",()=>{location.hash=yo()}),document.getElementById("prev-song").addEventListener("click",()=>{_e(-1)}),document.getElementById("next-song").addEventListener("click",()=>{_e(1)}),document.getElementById("song-picker-btn").addEventListener("click",()=>{document.getElementById("song-sheet").classList.contains("open")?Ce():jo()}),document.getElementById("song-sheet").querySelectorAll("[data-close-sheet]").forEach(o=>{o.addEventListener("click",Ce)}),document.getElementById("song-sheet-list").addEventListener("click",o=>{const r=o.target.closest(".song-sheet-item");if(!r)return;const l=B.find(c=>c.id===r.dataset.id);if(Ce(),!(!l||v&&l.id===v.id)){if(Se==="setlist"){const c=parseInt(r.dataset.pos,10);Number.isFinite(c)&&Cn(c)}Ht(l)}});const n=document.getElementById("sheet-search-input"),a=document.getElementById("sheet-search-clear");n&&(n.addEventListener("input",xt),a.addEventListener("click",()=>{n.value="",xt(),n.focus()}));const s=document.getElementById("tip-pic-card");s&&s.addEventListener("click",()=>{document.getElementById("tip-pic").classList.toggle("big")}),(function(){const r=N.querySelector(".lyrics-pane");if(!r)return;let l=0,c=0,u=!1;r.addEventListener("touchstart",d=>{if(!M||d.touches.length!==1){u=!1;return}const p=d.touches[0];if(p.clientX<24||p.clientX>window.innerWidth-24){u=!1;return}l=p.clientX,c=p.clientY,u=!0},{passive:!0}),r.addEventListener("touchend",d=>{if(!u)return;u=!1;const p=d.changedTouches&&d.changedTouches[0];if(!p)return;const f=p.clientX-l,h=p.clientY-c;Math.abs(f)<70||Math.abs(f)<Math.abs(h)*2||rn(f<0?1:-1)},{passive:!0})})(),document.getElementById("lyrics-list").addEventListener("click",o=>{const r=o.target.closest(".lyric-line");r&&(xr(Number(r.dataset.time)),M&&(W=!1,rs(Number(r.dataset.time))))}),document.getElementById("play-toggle").addEventListener("click",Es);const i=document.getElementById("pip-btn");i&&fe.supported&&(i.addEventListener("click",async()=>{await fe.open(xs())&&En()}),En()),document.getElementById("playback-rate").addEventListener("change",o=>{cr(Number(o.currentTarget.value))}),He(),document.getElementById("chant-btn").addEventListener("click",()=>{ga(!M)}),document.getElementById("chant-off").addEventListener("click",()=>{ga(!1)}),document.getElementById("chant-prev").addEventListener("click",()=>{ha(-1)}),document.getElementById("chant-next").addEventListener("click",()=>{ha(1)}),document.getElementById("venue-btn").addEventListener("click",o=>{ce=!ce,L("horo-venue",ce?"1":""),qt()}),document.getElementById("reading-btn").addEventListener("click",()=>{const o=ft.indexOf(_);_=ft[(o+1)%ft.length],L("horo-reading",_),cs(),Nn()}),document.getElementById("japanese-toggle").addEventListener("click",()=>{F=!F,L("horo-show-japanese",F?"1":"0"),kn()}),document.getElementById("chinese-toggle").addEventListener("click",()=>{D=!D,L("horo-show-chinese",D?"1":"0"),kn()}),document.getElementById("karaoke-btn").addEventListener("click",()=>{V=!V,L("horo-karaoke",V?"1":"0"),ds()}),document.getElementById("autoscroll-btn").addEventListener("click",o=>{Te=!Te,o.currentTarget.classList.toggle("active",Te),Te&&Q(!0)}),lt&&document.removeEventListener("keydown",lt),lt=o=>{if(!Z())return;const r=document.getElementById("song-sheet");if(o.key==="Escape"&&r.classList.contains("open")){o.preventDefault(),Ce();return}if(r.classList.contains("open")){if(o.key==="Tab"){const c=[...r.querySelectorAll("button, input")].filter(p=>!p.disabled&&p.offsetParent!==null),u=c[0],d=c[c.length-1];o.shiftKey&&document.activeElement===u?(o.preventDefault(),d.focus()):!o.shiftKey&&document.activeElement===d&&(o.preventDefault(),u.focus())}return}const l=(o.target&&o.target.tagName||"").toLowerCase();l==="input"||l==="textarea"||(o.key==="ArrowLeft"&&(o.preventDefault(),M?rn(-1):document.getElementById("prev-song").click()),o.key==="ArrowRight"&&(o.preventDefault(),M?rn(1):document.getElementById("next-song").click()))},document.addEventListener("keydown",lt)}let M=!1,q=-1,W=!1,Be=null,Pt=0;function me(){return sr(v)}function Mo(e=v){const t=document.getElementById("lyrics-list");!t||!e?.lyrics||(t.querySelectorAll(".lyric-line").forEach(n=>{const a=e.lyrics[Number(n.dataset.idx)];n.dataset.chant=Re(a,e).chant,n.querySelector(".lyric-icons").innerHTML=Ls(a,e),n.querySelector(".lyric-zh").innerHTML=ks(a,e)}),Nn())}function os(e){if(e!=="jp"&&e!=="kr"||e===O){Xe();return}O=e,L("horo-chant-version",O),gt.clear(),Je.clear(),q=-1,W=!1,Be=null,Pt=0,Xe(),v&&(Mo(v),Ka(v),za(v),Rt(),Le(),M&&me().length?te(0):Z()&&Q(!0)),document.getElementById("song-list")&&yn()}function Rt(){const e=document.getElementById("song-page");e&&e.classList.toggle("chant-only",M&&me().length>0);const t=document.getElementById("chant-btn");t&&(t.classList.toggle("active",M),t.setAttribute("aria-pressed",M?"true":"false"))}function Le(){const e=document.getElementById("chant-bar");if(!e||(e.hidden=!M,!M))return;const t=me(),n=document.getElementById("chant-msg"),a=document.getElementById("chant-count"),s=document.getElementById("chant-prev"),i=document.getElementById("chant-next");if(!t.length){n&&(n.textContent="這首歌沒有大合唱段落"),a&&(a.textContent=""),s&&(s.disabled=!0),i&&(i.disabled=!0);return}const o=window.matchMedia&&window.matchMedia("(hover: none)").matches;n&&(n.textContent=W?"結束・按播放即可從頭開始":o?"左右滑動切換段落":"用 ← → 切換段落"),a&&(a.textContent=`第 ${Math.max(1,q+1)} / ${t.length} 段`),s&&(s.disabled=q<=0),i&&(i.disabled=q>=t.length-1)}function te(e){const t=me();if(t.length&&(q=Math.max(0,Math.min(t.length-1,e)),W=!1,rs(t[q].start),Le(),g&&typeof g.seekTo=="function"))try{g.seekTo(t[q].start,!0),g.playVideo()}catch{}}function rs(e){Be=e,Pt=Date.now()+4e3}function ha(e){const t=me();if(t.length){if(W&&e<0){te(t.length-1);return}te(q+e)}}function _o(e){if(!M||e===null||!isFinite(e))return!1;const t=me();if(!t.length)return!1;const n=e-pn;if(Be!==null)if(Math.abs(n-Be)<1.6||Date.now()>Pt)Be=null;else return!1;const a=t.findIndex(i=>n>=i.start-.35&&n<=i.end);if(a>=0)return(a!==q||W)&&(q=a,W=!1,Le()),!1;const s=t.findIndex(i=>i.start>n);if(s>=0)return te(s),!0;if(W=!0,q=t.length-1,Le(),g&&typeof g.pauseVideo=="function")try{g.pauseVideo()}catch{}return!0}function ga(e){M=!!e,W=!1,q=-1,Rt(),Le(),M?me().length&&te(0):Q(!0)}function rn(e){if(!Z())return;const t=me();if(M&&t.length){const n=q+e;if(e>0&&!W&&n<=t.length-1){te(n);return}if(e<0&&W){te(t.length-1);return}if(e<0&&n>=0){te(n);return}}_e(e)}function Ht(e){e&&(Dt(e.youtubeId),location.hash=`#/song/${e.id}`)}function Z(){return!N.classList.contains("offstage")}function Ot(e){const t=document.getElementById("song-page");if(!t)return;const n=Number(Pa[e?.id]);if(!Number.isFinite(n)||n<=0)return;const a=60/n/Math.max(.01,U);t.style.setProperty("--song-bpm",String(n)),t.style.setProperty("--icon-beat-duration",`${a.toFixed(3)}s`),t.dataset.bpm=String(n),Va=performance.now(),he()}function ln(e,t){if(e!==fn||!location.hash.startsWith("#/song/"))return;const n=document.getElementById("lyrics-list");if(!n)return;const a=document.createElement("li");a.className="lyrics-load-error";const s=document.createElement("p");s.setAttribute("role","status"),s.setAttribute("aria-live","polite"),s.textContent=t;const i=document.createElement("button");i.type="button",i.className="lyrics-retry-btn",i.textContent="重新載入歌詞",i.addEventListener("click",()=>location.reload(),{once:!0}),a.append(s,i),n.replaceChildren(a);const o=document.getElementById("video-status");o&&(o.hidden=!1,o.textContent=t)}function ls(e){const t=++fn;if(is(),!Array.isArray(e.lyrics)){v=e;const{prev:c,next:u}=St(e),d=document.getElementById("song-page");document.getElementById("song-page-heading").textContent=e.title,document.getElementById("song-picker-number").textContent=`${P(ue(e))}.`,document.getElementById("song-picker-title").innerHTML=we(e.title),document.getElementById("prev-song").title=`上一首：${c.title}`,document.getElementById("next-song").title=`下一首：${u.title}`,document.getElementById("lyrics-list").innerHTML="",document.getElementById("video-status").textContent="正在載入歌詞…",d?.classList.remove("song-ready"),N.classList.remove("offstage"),N.inert=!1,j.style.display="none";const p=window.setTimeout(()=>{ln(t,"歌詞載入較久，請稍候；如果畫面沒有更新，請檢查網路後重新載入。")},15e3);Ei().then(f=>{if(window.clearTimeout(p),t!==fn||!location.hash.startsWith("#/song/"))return;const h=f.get(e.id);h?ls({...h,...e,lyrics:h.lyrics}):ln(t,"找不到這首歌的歌詞資料，請重新載入頁面。")}).catch(()=>{window.clearTimeout(p),ln(t,"歌詞載入失敗，請檢查網路連線後重新載入。")});return}Si().then(()=>{v===e&&Nn()}),v=e,Wo(),ke=-1,J=null,ye=null,q=-1,W=!1,Be=null,Pt=0,vr(),Ze(),oe!==null&&(cancelAnimationFrame(oe),oe=null);const{prev:n,next:a}=St(e),s=document.getElementById("song-page");Ot(e),e.cover?s.style.setProperty("--song-cover",`url('${e.cover}')`):s.style.removeProperty("--song-cover"),document.getElementById("song-picker-number").textContent=`${P(ue(e))}.`,document.getElementById("song-picker-title").innerHTML=we(e.title),document.getElementById("song-page-heading").textContent=e.title;const i=document.getElementById("lyrics-credit");if(i){const c=!!e.translationCredit;if(c){const d=`<a href="${e.translationCreditUrl||Di}" target="_blank" rel="noopener">${T(e.translationCredit)}</a>`,p=e.translationSourceUrl?` · <a href="${e.translationSourceUrl}" target="_blank" rel="noopener">出處</a>`:"",f=e.translationLicenseUrl?` · <a href="${e.translationLicenseUrl}" target="_blank" rel="noopener">${T(e.translationLicense||"授權")}</a>`:"";i.innerHTML=`中譯歌詞作者：${d}${p}${f}`}else i.innerHTML="";i.hidden=!c}const o=document.getElementById("song-back-btn");if(o){const c=Se==="setlist"?"返回歌單":"返回歌曲清單";o.title=c,o.setAttribute("aria-label",c)}document.getElementById("prev-song").title=`上一首：${n.title}`,document.getElementById("next-song").title=`下一首：${a.title}`,document.getElementById("watch-on-yt").href=`https://www.youtube.com/watch?v=${encodeURIComponent(e.youtubeId)}`,document.getElementById("lyrics-list").innerHTML=e.lyrics.map((c,u)=>`
    <li>
      <button class="lyric-line" data-chant="${Re(c,e).chant}" data-time="${c.time}" data-idx="${u}">
        <span class="lyric-icons">${Ls(c,e)}</span>
        <span class="lyric-body">
          <span class="lyric-jp" lang="ja">${bs(c,e)}</span>
          <span class="lyric-romaji" lang="ja-Latn">${_==="both"?vs(c,e):""}</span>
          <span class="lyric-zh">${ks(c,e)}</span>
        </span>
      </button>
    </li>`).join(""),tr(e),ee("loading","歌詞逐字時間：正在尋找開源時間碼…"),document.getElementById("song-sheet-list").innerHTML=$o().map((c,u)=>`
    <li data-no="${ue(c)}">
      <button class="song-sheet-item${c.id===e.id?" current":""}" data-id="${c.id}" data-pos="${u}"${c.id===e.id?' aria-current="true"':""}>
        <span class="song-sheet-num">${P(ue(c))}</span>
        <span class="song-sheet-name">${we(c.title)}</span>
        ${c.id===e.id?'<span class="song-sheet-now">目前播放</span>':""}
      </button>
    </li>`).join("");const r=document.getElementById("song-sheet-title");r&&(r.textContent=Se==="setlist"?"歌單歌曲":"選擇歌曲"),Ce(),xt(),N.classList.remove("offstage"),N.inert=!1,j.style.display="none",Xe(),Ka(e),za(e),Rt(),Le(),qt(),cs(),kn(),ds(),Vt(),Po(),As();const l=N.querySelector(".lyrics-scroll");l&&(l.scrollTop=0),dr(),Ar(),Sn(),hr(e.youtubeId),Xo(e),Ya(to(e),[400,500,700])}let re=null;function Po(){re&&(re.disconnect(),re=null);const e=N.querySelector(".lyrics-scroll"),t=N.querySelectorAll(".lyric-line");if(!(!e||!t.length)){if(!("IntersectionObserver"in window)){const n=performance.now();t.forEach(a=>{a.classList.add("in-view"),vn(a,n)});return}re=new IntersectionObserver(n=>{const a=performance.now();n.forEach(s=>{s.target.classList.toggle("in-view",s.isIntersecting),s.isIntersecting&&vn(s.target,a)})},{root:e,rootMargin:"120px 0px"}),t.forEach(n=>re.observe(n))}}function vn(e,t){const n=document.getElementById("song-page"),a=Number(n&&n.dataset.bpm);if(!e||!n||!Number.isFinite(a)||a<=0)return;const s=6e4/a,o=-(Math.max(0,(t||performance.now())-Va)%s/1e3);e.querySelectorAll(".ico-wave svg, .ico-mic svg, .ico-jump svg, .ico-spin .arm, .ico-clap .hand, .ico-clap .spark").forEach(l=>{l.style.animationDelay=`${o.toFixed(3)}s`})}function qt(){const e=document.getElementById("song-page"),t=document.getElementById("venue-btn");if(e){if(e.classList.toggle("venue",ce),e.classList.toggle("offline",!navigator.onLine),t&&t.classList.toggle("active",ce),ce){const n=document.getElementById("chant-notes-toggle"),a=document.getElementById("chant-notes");n&&(n.classList.remove("active"),n.setAttribute("aria-expanded","false")),a&&(a.hidden=!0)}js(),ps(),Vt(),Q(!0)}}function cs(){const e=document.getElementById("reading-btn"),t=document.getElementById("reading-value"),n=document.getElementById("reading-value-mobile"),a=wn(),s=ys(),i=document.getElementById("song-page");i&&i.classList.toggle("reading-both",_==="both"),t&&(t.textContent=a),n&&(n.textContent=s),e&&(e.classList.toggle("active",_!=="kana"),e.setAttribute("aria-pressed",_!=="kana"?"true":"false"),e.setAttribute("aria-label",`切換日文讀音：目前顯示${a}`)),he()}function kn(){const e=document.getElementById("song-page");if(!e)return;e.classList.toggle("hide-japanese",!F),e.classList.toggle("hide-chinese",!D),e.classList.toggle("lyrics-hidden",!F&&!D);const t=e.querySelector(".lyrics-hidden-message");t&&(t.hidden=F||D);const n=document.getElementById("japanese-toggle");n&&(n.classList.toggle("active",F),n.setAttribute("aria-pressed",F?"true":"false"),n.setAttribute("aria-label",`切換日文歌詞：目前${F?"顯示":"隱藏"}`));const a=document.getElementById("chinese-toggle");a&&(a.classList.toggle("active",D),a.setAttribute("aria-pressed",D?"true":"false"),a.setAttribute("aria-label",`切換繁中翻譯：目前${D?"顯示":"隱藏"}`)),Vt(),he()}function ds(){const e=document.getElementById("song-page");if(!e)return;e.classList.toggle("karaoke-off",!V);const t=document.getElementById("karaoke-btn");t&&(t.classList.toggle("active",V),t.setAttribute("aria-pressed",V?"true":"false"),t.setAttribute("aria-label",`切換逐字卡拉OK高亮：目前${V?"開啟":"關閉"}`)),V||(xn(J),J=null),Q(!0)}function Nn(){if(!v)return;const e=document.getElementById("lyrics-list");if(!e)return;const t=performance.now();e.querySelectorAll(".lyric-line").forEach(n=>{const a=Number(n.dataset.idx),s=v.lyrics&&v.lyrics[a],i=n.querySelector(".lyric-jp"),o=n.querySelector(".lyric-romaji");!s||!i||(i.innerHTML=bs(s,v),o&&(o.innerHTML=_==="both"?vs(s,v):""),Lt(i),o&&Lt(o),Pn(n,at(v,a)),vn(n,t))}),Q(!0)}window.addEventListener("online",()=>{Ie&&qt()});window.addEventListener("offline",()=>{Ie&&qt()});function cn(){if(Tt(),kr(),pe=null,Ce(),Ze(),re&&(re.disconnect(),re=null),or(),fe.close(),g&&typeof g.pauseVideo=="function")try{g.pauseVideo()}catch{}Ie&&N.classList.add("offstage"),N.inert=!0,j.style.display=""}let Bn=null;const us=new Set;function Ro(e){if(!e||typeof e!="string")return null;const t=oi[e],n=t?t.src:/[\/.]/.test(e)?e:null;if(!n||us.has(n))return null;const a=t?.video||(/\.gif$/i.test(n)?n.replace(/\.gif$/i,".webm"):""),s=t?.fallback||(/\.webp$/i.test(n)?n.replace(/\.webp$/i,".gif"):"");return{key:e,src:n,video:a,fallback:s,caption:t&&t.caption||""}}function Ze(){const e=document.getElementById("tip-pic");if(!e)return;const t=document.getElementById("tip-pic-video"),n=document.getElementById("tip-pic-img");t&&(t.pause(),t.hidden=!0,t.setAttribute("aria-hidden","true")),n&&(n.hidden=!0),e.classList.remove("show","big"),Bn=null}function ps(){const e=document.getElementById("tip-pic");if(!e)return;const t=N.querySelector(".lyrics-pane"),n=N.querySelector(".song-fixed-top");if(!t||!n)return;const a=window.matchMedia("(min-width:900px), (orientation: landscape) and (max-height:600px)").matches,s=ce?"at-lyrics":a?"at-lyrics-right":"at-below-video",i=s==="at-below-video"?n:t;e.classList.contains(s)||(e.classList.remove("at-below-video","at-lyrics","at-lyrics-right","big"),e.classList.add(s)),e.parentElement!==i&&i.appendChild(e)}function Ho(e){const t=document.getElementById("tip-pic"),n=document.getElementById("tip-pic-video"),a=document.getElementById("tip-pic-img"),s=document.getElementById("tip-pic-cap");if(!t||!a)return;const i=()=>{n&&(n.pause(),n.removeAttribute("src"),n.load(),n.hidden=!0,n.setAttribute("aria-hidden","true")),a.hidden=!1,a.alt=e.caption||"應援動作",a.dataset.fallbackTried="0",a.onerror=()=>{if(a.dataset.fallbackTried!=="1"&&e.fallback&&e.fallback!==e.src){a.dataset.fallbackTried="1",a.src=e.fallback;return}us.add(e.src),Ze()},a.src=e.src};n&&e.video&&n.canPlayType("video/webm")?(n.onerror=i,n.onloadeddata=()=>{n.hidden=!1,n.setAttribute("aria-hidden","false"),a.hidden=!0,n.play().catch(()=>{})},n.muted=!0,n.hidden=!0,n.setAttribute("aria-hidden","true"),n.src=e.video,n.load()):i(),s&&(s.textContent=e.caption||""),t.classList.remove("big"),t.classList.add("show"),Bn=e.key}function Oo(e){if(!v)return Ze();const t=e>=0?v.lyrics[e]:null,n=t?Ro(t.pic):null;if(!n)return Ze();n.key!==Bn&&Ho(n)}function T(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const ya=/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u,ba=/[A-Za-z0-9]/,fs=/[\p{Script=Latin}\p{N}]/u,qo=/[\p{Script=Latin}\p{N}'’_-]/u,Fo=/([\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}])(?=[A-Za-z0-9])/gu,Do=/([A-Za-z0-9])(?=[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}])/gu;function jn(e){return String(e??"").replace(Fo,"$1 ").replace(Do,"$1 ")}function va(e,t){const n=Array.from(String(e||""));for(;n.length&&/\s/u.test(t?n.at(-1):n[0]);)t?n.pop():n.shift();return t?n.at(-1)||"":n[0]||""}function Vo(e){const t=String(e||"").split(/(<[^>]*>)/g),n=[];t.forEach((a,s)=>{/^<[^>]*>$/.test(a)||(t[s]=jn(a),n.push(s))});for(let a=1;a<n.length;a++){const s=n[a-1],i=n[a],o=t[s],r=t[i],l=va(o,!0),c=va(r,!1),u=/\s$/u.test(o),d=/^\s/u.test(r);!u&&!d&&ya.test(l)&&ba.test(c)?t[i]=" "+r:!u&&!d&&ba.test(l)&&ya.test(c)&&(t[s]=o+" ")}return t.join("")}function ms(e){return T(jn(e))}function hs(e){const t=String(e??""),n=Ln(t,"furigana");return n?Vo(n):ms(t)}function gs(e){const t=String(e??"");return T(jn(Ln(t,"romaji")??t))}function wn(e=_){return e==="romaji"?"羅馬字":e==="both"?"假名+羅馬字":"假名"}function ys(e=_){return e==="romaji"?"羅":e==="both"?"假+羅":"假"}function Uo(e){return _==="romaji"?gs(e):hs(e)}function Re(e,t=v){return mi(e,qa()[t.id],O,{romaji:Ln(e.jp,"romaji")})}function Ft(e,t,n,a,s){const i=Re(t,n),o=i.chant==="full"&&s!=="zh",r=gi(a(e),i.ranges[s]||[],o);return s==="jp"||s==="romaji"&&_==="romaji"?yi(r,i.actionPlacements,s,H):r}function bs(e,t=v){const n=_==="romaji"?"romaji":"jp";return Ft(e.jp||"",e,t,Uo,n)}function vs(e,t=v){return Ft(e.jp||"",e,t,n=>gs(n),"romaji")}function ks(e,t=v){return Ft(e.tr||"",e,t,ms,"zh")}function $n(){try{if(g&&typeof g.getCurrentTime=="function"){const e=Number(g.getCurrentTime());return Number.isFinite(e)?e:null}}catch{}return null}function Mn(){try{if(g&&typeof g.getDuration=="function"){const e=Number(g.getDuration());return Number.isFinite(e)&&e>0?e:null}}catch{}return null}function It(e){const t=Math.max(0,Math.floor(Number(e)||0)),n=Math.floor(t/3600),a=Math.floor(t%3600/60),s=t%60;return n>0?`${n}:${String(a).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${a}:${String(s).padStart(2,"0")}`}function ws(){const e=document.getElementById("song-playback-progress"),t=document.getElementById("song-playback-progress-fill");if(!e||!t)return;const n=Mn(),a=$n(),s=n&&a!==null?Math.max(0,Math.min(1,a/n)):0;e.setAttribute("aria-valuenow",String(Math.round(s*100))),e.setAttribute("aria-valuetext",n&&a!==null?`${It(a)} / ${It(n)}`:"正在載入播放進度"),t.style.transform=`scaleX(${s})`}function Wo(){const e=document.getElementById("song-playback-progress"),t=document.getElementById("song-playback-progress-fill");!e||!t||(e.setAttribute("aria-valuenow","0"),e.setAttribute("aria-valuetext","正在載入播放進度"),t.style.transform="scaleX(0)")}function Ko(){try{const e=g&&typeof g.getPlayerState=="function"?g.getPlayerState():-1;return e===1||e===3}catch{return!1}}function En(){const e=document.getElementById("pip-btn");if(!e||!fe.supported)return;const t=fe.isOpen();e.classList.toggle("active",t),e.setAttribute("aria-pressed",t?"true":"false"),e.setAttribute("aria-label",t?"聚焦同步字幕小窗":"開啟或聚焦同步字幕小窗"),e.setAttribute("title",t?"聚焦同步字幕小窗":"開啟或聚焦同步字幕小窗")}function Es(){if(!g||!G)return;if(M&&W){te(0);return}const e=(()=>{try{return g.getPlayerState()}catch{return-1}})();try{e===YT.PlayerState.PLAYING||e===YT.PlayerState.BUFFERING?g.pauseVideo():g.playVideo()}catch{}he()}function ka(e,t){if(!e)return"";const n=e.cloneNode(!0);n.classList.toggle("active",!!t),n.classList.add("in-view");const a=document.createElement("div");return a.className=n.className,a.dataset.chant=n.dataset.chant,a.innerHTML=n.innerHTML,a.outerHTML}function zo(e,t){const n=e&&Array.isArray(e.lyrics)?e.lyrics:[],a=Number.isInteger(t)?t+1:0;for(let s=a;s<n.length;s++)if(_n(n[s]))return s;return-1}function xs(e=ke){const t=document.getElementById("song-page"),n=document.getElementById("lyrics-list"),a=n?[...n.querySelectorAll(".lyric-line")]:[],s=Number.isInteger(e)?e:-1,i=s>=0?a[s]:null,o=zo(v,s),r=o>=0?a[o]:null,l=Mn(),c=$n(),u=l&&c!==null?Math.max(0,Math.min(1,c/l)):0,d=t?getComputedStyle(t).getPropertyValue("--icon-beat-duration").trim():"";return{title:v?v.title:"同步字幕",songNumber:v?`${P(ue(v))}.`:"",canNavigate:!!v,progress:u,progressText:l&&c!==null?`${It(c)} / ${It(l)}`:"正在載入播放進度",currentMarkup:ka(i,!0),nextMarkup:ka(r,!1),isPlaying:Ko(),canPlayPause:!!(g&&G&&typeof g.playVideo=="function"&&typeof g.pauseVideo=="function"),theme:Mt,showJapanese:F,showChinese:D,readingMode:_,karaokeEnabled:V,iconBeatDuration:d,status:G?"":"正在等待影片播放器…"}}function he(e=ke){fe.isOpen()&&fe.update(xs(e))}function ee(e,t){const n=document.getElementById("karaoke-source-status"),a=document.getElementById("karaoke-source-status-text");if(!n||!a)return;n.dataset.state=e||"";const s=n.closest(".karaoke-source-popover");s&&(s.dataset.state=e||""),a.textContent=t||""}function at(e,t){return!e||!ye||ye.songId!==e.id?null:ye.lines&&ye.lines[t]||null}function Ss(e,t){const n=at(e,t),a=e&&e.lyrics&&e.lyrics[t];return n&&Number.isFinite(Number(n.start))?Number(n.start):Number(a&&a.time)||0}function Go(e){const t=document.getElementById("lyrics-list");!t||!e||!Array.isArray(e.lyrics)||(t.querySelectorAll(".lyric-line").forEach(n=>{const a=Number(n.dataset.idx),s=at(e,a),i=Is(e,a);n.dataset.time=String(Ss(e,a)),i&&(n.dataset.karaokeStart=String(i.start),n.dataset.karaokeEnd=String(i.end)),Pn(n,s)}),Je.clear(),Rt(),Le())}function Yo(e){return typeof e=="string"?e:Array.isArray(e)?e.map(t=>typeof t=="string"?t:t&&t.text||"").join(""):""}function _n(e){return e?[e.jp,e.tr].some(t=>Yo(t).replace(/\s/gu,"").length>0):!1}function Jo(e,t){const n=e&&Array.isArray(e.lyrics)?e.lyrics:[],a=Number(n[t]&&n[t].time);for(let s=t+1;s<n.length;s++){if(!_n(n[s]))continue;const i=Number(n[s]&&n[s].time);if(Number.isFinite(i)&&(!Number.isFinite(a)||i>a))return i}return null}async function Xo(e){const t=++en;ye=null,ee("loading","歌詞逐字時間：正在尋找開源時間碼…");const n=await Ii();if(!n||typeof n.load!="function"||typeof n.alignToLocalLyrics!="function"){ee("miss","歌詞逐字時間：目前使用本地估算同步");return}let a=Mn(),s=null;try{s=await n.load(e,{duration:a,onStatus:l=>{t!==en||!l||(l.state==="cache"?ee("loading","歌詞逐字時間：已讀取本機快取，正在校正影片偏移…"):l.state==="fallback"?ee("fallback",`歌詞逐字時間：前順位來源沒有結果，改查${l.source||"下一順位來源"}…`):l.state==="offline"&&ee("miss","歌詞逐字時間：離線且沒有快取，使用本地估算同步"))}})}catch{s=null}if(t!==en||!e||v!==e)return;if(!s){ee("miss","歌詞逐字時間：找不到可用來源，使用本地估算同步");return}const i=n.alignToLocalLyrics(s,e.lyrics);if(!i){ee("miss","歌詞逐字時間：來源歌詞與本頁不相符，使用本地估算同步");return}i.songId=e.id,ye=i,Go(e);const o=s.source&&s.source.indexOf("開源多來源")>=0?"開源多來源":s.source||"開源來源",r=s.granularity==="line"?"歌詞逐行時間":"歌詞逐字時間";ee("ready",`${r}：${o}（已對齊 ${i.matchedLines}/${i.totalLines}行，偏移${i.offset.toFixed(2)}秒）`),Q(!0)}function Is(e,t){const a=(e&&Array.isArray(e.lyrics)?e.lyrics:[])[t],s=Number(a&&a.time);if(!Number.isFinite(s))return null;const i=at(e,t);if(i)return{start:Number(i.start),end:Math.max(Number(i.start)+.04,Number(i.end))};const o=String(a.jp||""),r=Qe(o)||1,l=Number(Pa[e.id])||120,c=Math.max(.8,Math.min(12,r*(60/l)*Gi)),u=Jo(e,t),d=u===null?s+c:Math.min(s+c,Math.max(s+.25,u-zi));return{start:s,end:d}}function Qe(e){const t=String(e||""),n=Array.from(t).filter(a=>!/\s/u.test(a));return n.length?n.every(a=>fs.test(a))?Math.max(1,n.length*.75):n.every(a=>/[、。！？!?.,，。]/u.test(a))?.45:Math.max(1,n.length):0}function wa(e,t,n,a){const s=document.createElement("span");s.className="karaoke-unit",s.textContent=n,s.dataset.karaokeText=n,s.dataset.karaokeWeight=String(a),e.appendChild(s),t.push({el:s,weight:a})}function Zo(e,t){const n=e.nodeValue||"";if(!n.trim())return;const a=document.createDocumentFragment(),s=Array.from(n);for(let i=0;i<s.length;){const o=s[i];if(/\s/u.test(o)){a.appendChild(document.createTextNode(o)),i++;continue}if(fs.test(o)){let r=i+1;for(;r<s.length&&qo.test(s[r]);)r++;const l=s.slice(i,r).join("");wa(a,t,l,Qe(l)),i=r;continue}wa(a,t,o,Qe(o)),i++}a.childNodes.length&&e.replaceWith(a)}function Lt(e){if(!e)return;const t=[],n=a=>{[...a.childNodes].forEach(s=>{if(s.nodeType===Node.TEXT_NODE){Zo(s,t);return}if(s.nodeType===Node.ELEMENT_NODE&&!s.classList.contains("ico")){if(s.tagName==="RUBY"){const i=[...s.childNodes].filter(r=>r.nodeType===Node.TEXT_NODE).map(r=>r.nodeValue||"").join(""),o=document.createElement("span");o.className="karaoke-unit",o.dataset.karaokeText=i,o.dataset.karaokeWeight=String(Qe(i)),s.parentNode.insertBefore(o,s),o.appendChild(s),t.push({el:o,weight:Qe(i)});return}s.tagName==="RT"||s.tagName==="RP"||n(s)}})};n(e),e._karaokeUnits=t}function Ea(e){return e&&e.el&&(e.el.dataset.karaokeText||e.el.textContent)||""}function Qo(e){if(!e||!e.el)return"";const t=e.el.querySelector("ruby");if(t){const n=t.querySelector("rt");return n?n.textContent||"":t.textContent||""}return e.el.textContent||""}function er(e){if(!e)return null;if(_!=="romaji")return e.querySelector(".lyric-jp");const t=Number(e.dataset.idx),n=v&&v.lyrics&&v.lyrics[t];if(!n)return null;const a=document.createElement("span");return a.className="lyric-jp karaoke-reference",a.lang="ja",a.innerHTML=Ft(n.jp||"",n,v,s=>hs(s),"jp"),Lt(a),a}function Pn(e,t){if(!e)return;const n=[...e.querySelectorAll(".lyric-jp, .lyric-romaji")].filter(w=>(w.textContent||"").trim()),a=er(e),s=[...new Set([a,...n].filter(Boolean))],i=a&&a._karaokeUnits?a._karaokeUnits:[],o=i.map(Ea),r=i.map(Qo),l=window.KARAOKE_SOURCES||{},c=t?Number(t.start):NaN,u=t?Number(t.end):NaN,d=Number.isFinite(c)?c:Number(e.dataset.karaokeStart),p=Number.isFinite(u)?u:Number(e.dataset.karaokeEnd),f=Number.isFinite(d)?d:0,h=Number.isFinite(p)&&p>f?p:f+.04,x=typeof l.allocateUnitTimings=="function"?l.allocateUnitTimings(o,f,h):[];let C=x,E=!1;if(t&&t.granularity!=="line"&&Array.isArray(t.words)&&t.words.length&&typeof l.mapUnitsToWords=="function"){const w=l.mapUnitsToWords(o,t.words);w.total>0&&w.matched/w.total>=.6&&(C=w.timings.map((m,b)=>m||x[b]||null),E=!0)}let y=E?"word":"line-proportional";s.forEach(w=>{const S=w._karaokeUnits||[];S.forEach(I=>{I.start=null,I.end=null,delete I.el.dataset.karaokeStart,delete I.el.dataset.karaokeEnd});const m=w===a,b=S.map(Ea);let k=m?C:[];if(!m&&typeof l.mapUnitsToReferenceTimings=="function"){const I=l.mapUnitsToReferenceTimings(b,r,C);k=I.timings,!I.complete&&E&&(y="word-reference-fallback")}else!m&&typeof l.allocateUnitTimings=="function"&&(k=l.allocateUnitTimings(b,f,h));S.forEach((I,A)=>{const R=k[A];if(!R||!Number.isFinite(Number(R.start))||!Number.isFinite(Number(R.end)))return;const ge=Math.max(f,Number(R.start)),Oe=Math.min(h,Number(R.end));Oe<=ge||(I.start=ge,I.end=Oe,I.el.dataset.karaokeStart=String(I.start),I.el.dataset.karaokeEnd=String(I.end))})}),e.dataset.karaokeSource=y}function tr(e){J=null;const t=document.getElementById("lyrics-list");!t||!e||t.querySelectorAll(".lyric-line").forEach(n=>{const a=Number(n.dataset.idx),s=Is(e,a);s&&(n.dataset.karaokeStart=String(s.start),n.dataset.karaokeEnd=String(s.end)),n.querySelectorAll(".lyric-jp, .lyric-romaji").forEach(Lt),Pn(n,at(e,a))})}function xn(e){e&&e.querySelectorAll(".lyric-jp, .lyric-romaji").forEach(t=>{const n=t._karaokeUnits||[];n.forEach(a=>a.el.classList.remove("karaoke-lit","karaoke-current")),n.forEach(a=>a.el.style.removeProperty("--karaoke-word-progress"))})}function nr(e,t){if(!V){xn(J),J=null;return}if(J&&J!==e&&xn(J),J=e||null,!e||!Number.isFinite(t))return;const n=Number(e.dataset.karaokeStart),a=Number(e.dataset.karaokeEnd);!Number.isFinite(n)||!Number.isFinite(a)||e.querySelectorAll(".lyric-jp, .lyric-romaji").forEach(s=>{const i=s._karaokeUnits||[];if(!i.length)return;if(i.some(d=>Number.isFinite(d.start)&&Number.isFinite(d.end)||Number.isFinite(Number(d.el.dataset.karaokeStart))&&Number.isFinite(Number(d.el.dataset.karaokeEnd)))){i.forEach(d=>{const p=Number.isFinite(d.start)?Number(d.start):Number(d.el.dataset.karaokeStart),f=Number.isFinite(d.end)?Number(d.end):Number(d.el.dataset.karaokeEnd);if(!Number.isFinite(p)||!Number.isFinite(f)){d.el.classList.remove("karaoke-lit","karaoke-current"),d.el.style.removeProperty("--karaoke-word-progress");return}const h=Math.max(0,Math.min(1,(t-p)/Math.max(.02,f-p)));d.el.classList.toggle("karaoke-lit",h>=1),d.el.classList.toggle("karaoke-current",h>0&&h<1),d.el.style.setProperty("--karaoke-word-progress",h.toFixed(3))});return}const r=Math.max(0,Math.min(1,(t-n)/Math.max(.01,a-n))),l=i.reduce((d,p)=>d+p.weight,0)||i.length,c=r*l;let u=0;i.forEach(d=>{const p=u;u+=d.weight;const f=c>=u,h=!f&&c>p;d.el.classList.toggle("karaoke-lit",f),d.el.classList.toggle("karaoke-current",h)})})}function Ls(e,t=v){return ar(e,t)?`<span class="lyric-type-icon chant" title="大合唱">${H.mic}</span>`:""}function ar(e,t=v){return Re(e,t).chant!=="none"}const Je=new Map;function sr(e){if(!e)return[];const t=`${O}:${e.id}`;if(!Je.has(t)){const n=e.lyrics||[];Je.set(t,vi(n.map(a=>Re(a,e)),n.map((a,s)=>Ss(e,s))))}return Je.get(t)}const gt=new Map;function Ue(e){const t=`${O}:${e.id}`;if(gt.has(t))return gt.get(t);const n=e.lyrics?bi(e.lyrics.map(a=>Re(a,e))):ki[e.id][O];return gt.set(t,n),n}let $=(()=>{const e=L("horo-song-sort");return["default","title","title-desc","chant-desc","chant-asc"].includes(e)?e:"default"})();const ir=new Map(B.map((e,t)=>[e.id,t+1]));function ue(e){return ir.get(e.id)||0}const xa=e=>/^[\u3131-\u318E\uAC00-\uD7A3]/.test(String(e).trim());function ut(e,t){const n=xa(e.title)?0:1,a=xa(t.title)?0:1;return n!==a?n-a:String(e.title).localeCompare(String(t.title),"ko")}function Rn(){const e=B.slice();return $==="title"?e.sort(ut):$==="title-desc"?e.sort((t,n)=>ut(n,t)):$==="chant-desc"?e.sort((t,n)=>Ue(n).chant-Ue(t).chant||ut(t,n)):$==="chant-asc"?e.sort((t,n)=>Ue(t).chant-Ue(n).chant||ut(t,n)):e}function Sa(e){const t=Ue(e);let n="";return t.chant&&(n+=`<span class="song-mark chant" title="${Me()}大合唱 ${t.chant} 行" aria-label="${Me()}大合唱 ${t.chant} 行">${Y("i-mic")}<b>${t.chant}</b><span class="song-mark-unit">行</span></span>`),t.clap&&(n+=`<span class="song-mark dot clap common" title="拍手" aria-label="拍手">${Y("i-hand")}</span>`),t.wave&&(n+=`<span class="song-mark dot wave common" title="揮手" aria-label="揮手">${Y("i-wave")}</span>`),t.jump&&(n+=`<span class="song-mark dot jump" title="跳躍" aria-label="跳躍">${Y("i-jump")}</span>`),t.spin&&(n+=`<span class="song-mark dot spin" title="轉臂" aria-label="轉臂">${Y("i-cheer")}</span>`),n?`<span class="song-marks">${n}</span>`:""}let le=null;async function As(){if(!(!("wakeLock"in navigator)||le))try{le=await navigator.wakeLock.request("screen"),le.addEventListener("release",()=>{le=null})}catch{le=null}}function or(){if(le){try{le.release()}catch{}le=null}}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Ie&&Z()&&As()});let G=!1,At=null,et=null,pe=null,Hn=100,Ts=!1,Ia=null,On=!1;function Cs(e){const t=Number(e);return"x"+(Number.isInteger(t)?t:String(t))}function Pe(e,t){return Math.abs(Number(e)-Number(t))<.001}function rr(){if(!g||typeof g.getAvailablePlaybackRates!="function")return[];try{const e=g.getAvailablePlaybackRates();return Array.isArray(e)?e.map(Number).filter(t=>Number.isFinite(t)&&t>0).sort((t,n)=>t-n):[]}catch{return[]}}function Ns(e){if(!de.length)return e;const t=de.find(a=>Pe(a,e));if(t!==void 0)return t;const n=de.filter(a=>a<=e);return n.length?n.at(-1):de[0]}function He(){const e=document.getElementById("playback-rate");if(!e)return;const t=tt.find(n=>Pe(n,U));t!==void 0&&(e.value=String(t)),e.setAttribute("aria-label","目前倍速"+Cs(U)),[...e.options].forEach(n=>{n.disabled=de.length>0&&!de.some(a=>Pe(a,n.value))})}function lr(){de=rr(),He()}function Bs(){if(!(!g||!G)){lr(),U=Ns(U),L($t,String(U)),He(),Ot(v),On=!1;try{g.setPlaybackRate(U)}catch{}}}function cr(e){const t=tt.find(n=>Pe(n,e));if(t!==void 0&&(U=Ns(t),L($t,String(U)),He(),Ot(v),g&&G))try{g.setPlaybackRate(U)}catch{}}function dr(){const e=document.getElementById("video-status");e&&(clearTimeout(At),e.hidden=G,!G&&(e.textContent="正在載入影片…",At=setTimeout(()=>{!G&&e.isConnected&&(e.textContent="影片連線延遲，請在下方開啟 YouTube。")},8e3)))}function Sn(){g||!window.YT||!window.YT.Player||(is(),document.getElementById("yt-player")&&(et=(v||B[0]).youtubeId,g=new YT.Player("yt-player",{videoId:et,playerVars:{rel:0,playsinline:1,modestbranding:1,autoplay:0},events:{onReady:ur,onStateChange:gr,onPlaybackRateChange:fr,onError:pr}})))}function ur(){G=!0,clearTimeout(At);const e=document.getElementById("video-status");e&&(e.hidden=!0);try{g.unMute(),g.setVolume(Hn)}catch{}if(Bs(),mr(),ws(),pe&&Z()){const t=pe;pe=null,Dt(t)}else pe=null;he()}function pr(){clearTimeout(At);const e=document.getElementById("video-status");e&&(e.hidden=!1,e.textContent="無法播放影片，請在下方開啟 YouTube。")}function fr(e){const t=Number(e&&e.data);if(!Number.isFinite(t)||On&&!Pe(t,U))return;const n=tt.find(a=>Pe(a,t));n!==void 0&&(U=n,L($t,String(U)),He(),Ot(v))}function mr(){Ia||(Ia=setInterval(()=>{if(!(!g||!G))try{const e=g.getVolume(),t=g.isMuted();typeof e=="number"&&e>0&&(Hn=e),Ts=!!t}catch{}},800))}function Dt(e){if(!g||!G){pe=e;return}try{Ts?g.mute():g.unMute(),g.setVolume(Hn),et===e?(g.seekTo(0,!0),g.playVideo()):(et=e,de=[],On=!0,He(),g.loadVideoById(e))}catch{}}function hr(e){if(!g||!G){pe=e;return}if(et===e){let t=-1;try{t=g.getPlayerState()}catch{}if(t===YT.PlayerState.PLAYING||t===YT.PlayerState.BUFFERING)return}Dt(e)}function js(){const e=document.getElementById("play-toggle");if(!e)return;let t=-1;try{t=g&&g.getPlayerState()}catch{}const n=t===1||t===3;e.innerHTML=n?Na:yt,e.classList.toggle("playing",n),e.setAttribute("aria-label",n?"暫停":"播放")}function gr(e){if(js(),he(),(e.data===YT.PlayerState.PLAYING||e.data===YT.PlayerState.CUED)&&Bs(),e.data===YT.PlayerState.ENDED){Tt(),yr();return}e.data===YT.PlayerState.PLAYING?br():(Tt(),Q())}function yr(){if(!v||!Z())return;const e=St(v);if(e.next.id===v.id){Dt(e.next.youtubeId);return}_e(1)}function br(){Tt(),Ke=setInterval(Q,Fi)}function Tt(){Ke&&(clearInterval(Ke),Ke=null)}function $s(e){const t=document.querySelectorAll(".lyric-line.active");if(!t.length)return 0;const n=e||t[t.length-1];let a=0;return t.forEach(s=>{s!==n&&(s.classList.remove("active"),s.style.opacity="0.999",requestAnimationFrame(()=>{s.style.opacity=""}),a++)}),a}let je=null;function vr(){je||(je=setInterval(()=>{try{$s(null)}catch{}},300))}function kr(){je&&(clearInterval(je),je=null)}function Q(e){ws();const t=document.getElementById("lyrics-list");if(!t)return;const n=t.querySelectorAll(".lyric-line"),a=$n(),s=a===null?null:a+pn;_o(s);let i=ke;if(s!==null&&isFinite(s)){i=-1;for(let r=0;r<n.length&&s>=Number(n[r].dataset.time);r++)_n(v&&v.lyrics&&v.lyrics[r])&&(i=r)}const o=i>=0&&n[i]?n[i]:null;nr(o,s===null?null:s-pn),$s(o),o&&!o.classList.contains("active")&&o.classList.add("active"),Da++,he(i),s!==null&&(i===ke&&!e||(Oo(i),ke=i,i>=0&&Te&&wr(n[i])))}function Vt(){const e=document.querySelector(".lyrics-scroll"),t=document.getElementById("lyrics-list");if(!e||!t)return;const n=t.querySelector(".lyric-line"),a=e.clientHeight;if(!n||!a)return;const s=a/2-n.getBoundingClientRect().height/2;t.style.paddingTop=Math.max(8,s)+"px",t.style.paddingBottom=Math.max(140,a/2)+"px"}let La=null,Aa=null;window.addEventListener("resize",()=>{const e=window.innerWidth,t=window.innerHeight;(e!==La||Math.abs(t-Aa)>100)&&(La=e,Aa=t,Ie&&(ps(),Vt(),Z()&&Q(!0)))});function wr(e){const t=document.querySelector(".lyrics-scroll");if(!t||!e)return;const n=t.getBoundingClientRect(),a=e.getBoundingClientRect(),s=a.top-n.top-(t.clientHeight/2-a.height/2),i=t.scrollHeight-t.clientHeight,o=Math.max(0,Math.min(i,t.scrollTop+s));Math.abs(o-t.scrollTop)<4||Er(t,o,Ki)}function Er(e,t,n){oe!==null&&cancelAnimationFrame(oe);const a=e.scrollTop,s=t-a,i=performance.now(),o=r=>{const l=Math.min(1,(r-i)/n),c=1-Math.pow(1-l,3);e.scrollTop=a+s*c,l<1?oe=requestAnimationFrame(o):oe=null};oe=requestAnimationFrame(o)}function xr(e){g&&typeof g.seekTo=="function"&&(g.seekTo(e,!0),g.playVideo())}const Ee=document.getElementById("app-banner"),Sr=document.getElementById("app-banner-msg"),xe=document.getElementById("app-banner-action"),Ta=document.getElementById("app-banner-close");let Ct=null,Nt=null;function Ut(e,t,n,a,s){Ee&&(Sr.innerHTML=e,Ct=n||null,Nt=s||null,xe.textContent=t||"",xe.hidden=!t,Ee.classList.toggle("offline",a==="offline"),Ee.classList.add("show"))}function Wt(){Ee&&Ee.classList.remove("show"),xe&&(xe.hidden=!0,xe.textContent=""),Ct=null,Nt=null}xe&&xe.addEventListener("click",()=>{Ct&&Ct()});Ta&&Ta.addEventListener("click",()=>{Nt?Nt():Wt()});const Ms="horo-install-hint";function Ir(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function _s(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&Number(navigator.maxTouchPoints)>1,n=/android/i.test(e)&&(/mobile/i.test(e)||navigator.userAgentData&&navigator.userAgentData.mobile===!0);return{ios:t,android:n}}function qn(){if(!navigator.onLine||Ir())return!1;const e=_s();return e.ios||e.android}function Fn(){return L(Ms)==="done"}function Kt(){L(Ms,"done"),Wt()}function Ps(e,t,n){!qn()||Fn()||Ut(e,t,n,"install",Kt)}"serviceWorker"in navigator&&location.protocol.startsWith("http")&&window.addEventListener("load",()=>{window.setTimeout(()=>{const e=!!navigator.serviceWorker.controller;navigator.serviceWorker.register(`./sw.js?build=${jt}`).then(n=>{n.addEventListener("updatefound",()=>{const a=n.installing;a&&a.addEventListener("statechange",()=>{a.state==="installed"&&navigator.serviceWorker.controller&&Ut("<b>新版本</b>已準備完成，歌詞或介面可能已更新。","重新整理",()=>{a.postMessage({type:"SKIP_WAITING"})})})})}).catch(()=>{});let t=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{!e||t||(t=!0,location.reload())})},8e3)},{once:!0});function Dn(){navigator.onLine?Ee&&Ee.classList.contains("offline")&&Wt():Ut("目前處於<b>離線</b>狀態。仍可查看歌詞與應援提示，但無法播放影片。","",null,"offline")}window.addEventListener("online",Dn);window.addEventListener("offline",Dn);function Lr(){!_s().ios||!qn()||Fn()||Ps("點選分享按鈕 <b>⎋</b> → <b>加入主畫面</b>，即可像 App 一樣使用。","知道了",Kt)}let dn=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),!(!qn()||Fn())&&(dn=e,Ps("<b>安裝</b>到主畫面後，就能在場館直接開啟。","安裝",async()=>{const t=dn;if(Kt(),dn=null,!!t)try{t.prompt(),await t.userChoice}catch{}}))});window.addEventListener("appinstalled",Kt);setTimeout(()=>{Dn(),Lr()},1500);window.addEventListener("hashchange",Ga);function Ar(){if(window.YT&&window.YT.Player){Z()&&Sn();return}if(document.querySelector("script[data-youtube-api]"))return;window.onYouTubeIframeAPIReady=()=>{Z()&&Sn()};const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",e.async=!0,e.dataset.youtubeApi="true",document.head.appendChild(e)}Wi();co();Ga({resetScroll:!1});document.documentElement.removeAttribute("data-initial-route");
