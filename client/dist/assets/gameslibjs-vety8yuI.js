/* empty css              */import{i as q}from"./modal-Yooto6kQ.js";let w=[];async function E(){try{const e=await fetch("https://genesis-expert.ru/api/v1/games");if(!e.ok)throw new Error(`Error: ${e.status}`);const t=await e.json();return w=t,t}catch(e){return console.error("Failed to fetch games data:",e),null}}async function M(){try{const t=[{url:"https://genesis-expert.ru/api/v1/genres",key:"genres"},{url:"https://genesis-expert.ru/api/v1/modes",key:"modes"},{url:"https://genesis-expert.ru/api/v1/platforms",key:"platforms"},{url:"https://genesis-expert.ru/api/v1/competencies",key:"competencies"},{url:"https://genesis-expert.ru/api/v1/durations",key:"durations"}].map(async({url:n,key:s})=>{const r=await fetch(n);if(!r.ok)throw new Error(`Error fetching ${s}: ${r.status}`);const l=(await r.json()).reduce((c,i)=>(c[i.id]=i.name,c),{});return{[s]:l}}),o=await Promise.all(t);return Object.assign({},...o)}catch(e){return console.error("Failed to fetch dropdown data:",e),null}}const $="https://genesis-expert.ru",y={platforms:[],genres:[],durations:[],modes:[],competencies:[]},C=[{index:0,question:"На чем играть?",answer:["PS – игровая консоль Playstation компании Sony.","Xbox – игровая консоль Xbox компании Microsoft.","Nintendo Switch – портативная консоль компании Nintendo.","ПК – персональный компьютер, ноутбук или Steam Deck."]},{index:1,question:"Основные термины",answer:["Локальный кооператив – игры с возможностью играть совместно на одной консоли 2-м и более игрокам","Локальное противостояние – игры с возможностью играть нескольким игрокам друг против друга на одной консоли.","Мультиплеерный кооператив – игры с возможностью играть совместно по сети.","Мультиплеерное противостояние – игры с возможностью играть друг против друга нескольким игрокам по сети.","Песочница – игры с большой свободой действий.","RPG – ролевая игра, для которой характерны: возможность создавать главного героя, развивать характеристики подконтрольных игроку персонажей, выбирать варианты ответных реплик в диалогах с неигровыми персонажами, своими действиями влиять на ход внутриигровых нарративов.","Платформер – игры с упором на прыжках по платформам.","Beat ’em up – игры с акцентом на рукопашные схватки.","Hack and slash – игры, в которых происходит в основном истребление множества противников в ближнем бою с помощью разнообразного оружия.","Survival horror – игры с упором на выживание, нагнетание атмосферы страха."]},{index:2,question:"Как могут помочь видеоигры?",answer:["Видеоигры могут научить ценным навыкам, таким как решение проблем, ответственность за принятие решений и стратегии преодоления трудностей. Видеоигры также могут моделировать сценарии реальной жизни, позволяя людям практиковать и совершенствовать социальные навыки в безопасной и контролируемой среде.","Игра может быть ресурсом развития. Инструментом, через который ребенок познает мир, познает себя.","Библиотека видеоигр рекомендуется как психологам, которые хотят проводить консультации по нашей авторской методике, так и родителям, которые хотят провести больше времени со своим ребенком, создавая крепкие и доверительные отношения."]},{index:3,question:"Для кого предназначена библиотека?",answer:["У картотеки видеоигр 2 целевых аудитории:","1. Психологи, которые хотят использовать в своей работе методику психологического консультирования с помощью видеоигр.","2. Родители, которые хотят лучше понимать увлечения своих детей и погрузиться в мир игровой индустрии."]}],v=(e,t,o,n)=>{const s=document.getElementById(e),r=document.createElement("button");r.className="inline-flex justify-between w-full rounded-md px-4 py-2 text-sm font-medium hover:bg-slate-500",r.setAttribute("id",`${e}Button`);const a=document.createElement("span");a.textContent=t;const l=document.createElement("span");l.innerHTML="&#x25BC;",l.className="ml-2 transition-transform duration-300",r.appendChild(a),r.appendChild(l);const c=document.createElement("div");c.className="hidden flex flex-col absolute origin-top-left mt-2 whitespace-wrap rounded-md max-h-[50vh] py-2 overflow-y-auto shadow-lg bg-slate-500 ring-1 ring-black ring-opacity-5 focus:outline-none",c.setAttribute("id",`${e}Menu`);const i=document.createElement("div");i.className="py-1",i.setAttribute("role","none");for(const[x,f]of Object.entries(o)){const u=document.createElement("label");u.className="flex px-2 py-0.5 text-sm text-white";const m=document.createElement("input");m.type="checkbox",m.value=x,m.className="";const b=document.createElement("span");b.className="p-2",b.innerHTML=f.toLowerCase(),u.appendChild(m),u.appendChild(b),i.appendChild(u),m.addEventListener("change",g=>{if(g.target.checked)y[n].push(f);else{const d=y[n].indexOf(f);d!==-1&&y[n].splice(d,1)}B(w)})}c.appendChild(i),s.appendChild(r),s.appendChild(c),r.addEventListener("click",()=>{c.classList.toggle("hidden"),l.innerHTML=c.classList.contains("hidden")?"&#x25BC;":"&#x25B2;"})},k=e=>{const t=e.length;document.getElementById("total").innerHTML=t},L=e=>e.sort((t,o)=>{const n=s=>(Array.isArray(s)&&(s=s[0]),typeof s=="string"?s.replace("Серия игр","").trim().toLowerCase():s);return n(t.titles_list)>n(o.titles_list)?1:-1}),h=e=>Array.isArray(e)?`<ul>${e.map(t=>`<li>${t}</li>`).join("")}</ul>`:`<div>${e}</div>`,p=e=>Array.isArray(e)?`<div>${e.map(t=>`<span> ${t}</span>`)}</div>`:`<div>${e}</div>`;document.getElementById("faq").addEventListener("click",function(e){if(e.target&&e.target.matches("button[id^='accordionFaqButton-']")){const t=e.target.getAttribute("data-index");j(t)}});const A=(e,t,o)=>{const n=document.getElementById(`accordionFaqContent-${e}`);n.innerHTML=`
    <div class="p-6 bg-slate-300 dark:bg-slate-700">
      <div class="flex flex-col w-full">
        ${o.map(s=>`
            <div>${s}</div>
          `).join("")}
      </div>
    </div>
  `},j=e=>{const t=C.find(r=>r.index==e),o=document.getElementById(`accordionFaqContent-${e}`),n=document.getElementById(`accordionFaqButtonRow-${e}`),s=document.getElementById(`accordionFaqButton-${e}`);if(o.classList.contains("hidden")){const r=t.question,a=t.answer;A(e,r,a),o.classList.remove("hidden"),n.classList.remove("border-b","border-slate-500"),o.classList.add("border-b","border-slate-500"),s.innerHTML=`${t.question} &#x25B2;`}else o.classList.add("hidden"),n.classList.add("border-b","border-slate-500"),o.classList.remove("border-b","border-slate-500"),s.innerHTML=`${t.question} &#x25BC;`};document.querySelector("tbody").addEventListener("click",function(e){if(e.target&&e.target.matches("button[id^='accordionButton-']")){const t=e.target.getAttribute("data-index");T(t)}if(e.target&&e.target.matches(".game-screenshot")){const t=q();t&&t(e.target.src)}});const D=(e,t,o)=>{let n=t||"Описание в разработке";const s=document.getElementById(`accordionContent-${e}`);s.innerHTML=`
    <td colspan="6" class="p-6 bg-gray-300 dark:bg-gray-700">
      <p>${n}</p>
      <div class="flex justify-between pt-2">
        ${o.map(r=>`
            <img
               class="flex-1 mx-2 cursor-pointer game-screenshot"
               src="${$+r}"
               alt="Screenshot"
               style="max-width: calc(33.33% - 0.5rem);"
            />
          `).join("")}
      </div>
    </td>
  `},T=e=>{const t=w.find(r=>r.id==e),o=document.getElementById(`accordionContent-${e}`),n=document.getElementById(`accordionButtonRow-${e}`),s=document.getElementById(`accordionButton-${e}`);if(o.classList.contains("hidden")){const r=t.description,a=t.screen_shots_list;D(e,r,a),o.classList.remove("hidden"),n.classList.remove("border-b","border-slate-700","dark:border-slate-300"),o.classList.add("border-b","border-slate-700","dark:border-slate-300"),s.innerHTML="Свернуть &#x25B2;"}else o.classList.add("hidden"),n.classList.add("border-b","border-slate-700","dark:border-slate-300"),o.classList.remove("border-b","border-slate-700","dark:border-slate-300"),s.innerHTML="Узнать больше &#x25BC;"},H=e=>{const t=e.map(o=>`<div
                  id="accordionFaqButtonRow-${o.index}"
                  class="border-b border-slate-500"
                >
                    <div class="flex justify-center w-full bg-slate-300 dark:bg-slate-700">
                      <button
                        id="accordionFaqButton-${o.index}"
                        data-index="${o.index}"
                        class="text-slate-900 dark:text-slate-100  py-4 focus:outline-none"
                      >
                        ${o.question} &#x25BC;
                      </button>
                    </div>
                </div>
                <div id="accordionFaqContent-${o.index}" class="hidden"></div>`).join("");document.getElementById("faq").innerHTML=t},F=e=>{const o=L(e).map(n=>`
        <tr class="text-center">
          <td class="px-6 py-2">
            <div class="flex flex-col justify-center items-center">
              <div class="mb-2">${h(n.titles_list)}</div>
              <img class="max-w-60 rounded-md" src=${$+n.cover_image} alt="" />
            </div>
          </td>
          <td class="px-2 py-2 min-w-52">
            <div>${h(n.platforms.map(s=>s.name))}</div>
          </td>
          <td class="px-2 py-2">
            <div>${n.duration}</div>
          </td>
          <td class="px-2 py-2">
            <div>${h(n.modes.map(s=>s.name))}</div>
          </td>
          <td class="px-2 py-2">
            <div>${h(n.genres.map(s=>s.name))}</div>
          </td>
          <td class="px-2 py-2">
            <div>${p(n.competencies.map((s,r)=>{const a=s.name.toLowerCase();return r===0?a.charAt(0).toUpperCase()+a.slice(1):a}))}</div>
          </td>
        </tr>
        <tr id="accordionButtonRow-${n.id}" class="border-b border-slate-700 dark:border-slate-300">
          <td colspan="6" class="text-center">
            <div class="flex justify-center">
              <button id="accordionButton-${n.id}" data-index="${n.id}" class="text-slate-500 pb-2 focus:outline-none">
                Узнать больше &#x25BC;
              </button>
            </div>
          </td>
        </tr>
        <tr id="accordionContent-${n.id}" class="hidden">
          <td colspan="6" class="p-6 bg-gray-300 dark:bg-gray-700">
            <p>${n.description||"Описание в разработке"}</p>
            <div class="flex justify-between pt-2">
              ${n.screen_shots_list.map(s=>`
                  <img
                    class="flex-1 mx-2 cursor-pointer game-screenshot"
                    src=${s}
                    alt="Screenshot"
                    style="max-width: calc(33.33% - 0.5rem);"
                  />
                `).join("")}
            </div>
          </td>
        </tr>
`).join("");document.querySelector("tbody").innerHTML=o},I=e=>{const o=L(e).map(n=>`<div
      class="flex flex-col justify-center items-center pb-4 border-b border-slate-700 dark:border-slate-300"
    >
      <div class="flex flex-col justify-center items-center">
        <div class="mb-2">${p(n.titles_list)}</div>
        <img
          class="max-w-32 rounded-md"
          src=${$+n.cover_image}
          alt=""
        />
      </div>
      <div>${p(n.platforms.map(s=>s.name))}</div>
      <div>${n.duration[0]}</div>
      <div>${p(n.modes.map(s=>s.name))}</div>
      <div>${p(n.genres.map(s=>s.name))}</div>
      <div class="pl-2 text-justify">
      ${p(n.competencies.map((s,r)=>{const a=s.name.toLowerCase();return r===0?a.charAt(0).toUpperCase()+a.slice(1):a}))}
      </div>
    </div>`).join("");document.querySelector("#minitable").innerHTML=o},N=e=>{const{genres:t,platforms:o,modes:n,durations:s,competencies:r}=y;return e.filter(a=>{const l=a.genres.map(d=>d.name),c=t.length===0||t.some(d=>l.includes(d)),i=a.platforms.map(d=>d.name),x=o.length===0||o.some(d=>i.includes(d)),f=a.modes.map(d=>d.name),u=n.length===0||n.every(d=>f.includes(d)),m=s.length===0||s.includes(a.duration_type.name),b=a.competencies.map(d=>d.name),g=r.length===0||r.every(d=>b.includes(d));return c&&x&&u&&m&&g})},B=e=>{const t=N(e),o=document.querySelector("tbody");if(t.length===0){const n=`
      <tr>
        <td colspan="100%" class="text-center w-full">Мы не нашли ни одной игры, соответствующей этому запросу.</td>
      </tr>
    `;o.innerHTML=n}else F(t)};document.addEventListener("DOMContentLoaded",()=>{});document.addEventListener("DOMContentLoaded",async()=>{const e=await E(),t=await M();e&&t&&(v("platformDropdownContainer","Платформа",t.platforms,"platforms"),v("durationDropdownContainer","Продолжительность основной сюжетной линии (приблизительная)",t.durations,"durations"),v("typeDropdownContainer","Режим игры",t.modes,"modes"),v("genreDropdownContainer","Жанр",t.genres,"genres"),v("competenciesDropdownContainer","Компетенции",t.competencies,"competencies"),H(C),k(e),B(e),I(e))});
