/* empty css              */import{i as j}from"./modal-lZnzjzJK.js";let g=[],q=0,L=!1,f="https://genesis-expert.ru/api/v1/games/?page=1";const M=async t=>{try{const e=await fetch(t);if(!e.ok)throw new Error(`Error: ${e.status}`);const n=await e.json();return q=n.count,g.push(...n.results),f=n.next,n}catch(e){return console.error("Failed to fetch games data:",e),null}};async function A(){try{const e=[{url:"https://genesis-expert.ru/api/v1/genres/",key:"genres"},{url:"https://genesis-expert.ru/api/v1/modes/",key:"modes"},{url:"https://genesis-expert.ru/api/v1/platforms/",key:"platforms"},{url:"https://genesis-expert.ru/api/v1/competencies/",key:"competencies"},{url:"https://genesis-expert.ru/api/v1/durations/",key:"durations"}].map(async({url:r,key:s})=>{const o=await fetch(r);if(!o.ok)throw new Error(`Error fetching ${s}: ${o.status}`);const l=(await o.json()).reduce((i,c)=>(i[c.id]=c.name,i),{});return{[s]:l}}),n=await Promise.all(e);return Object.assign({},...n)}catch(t){return console.error("Failed to fetch dropdown data:",t),null}}const C="https://genesis-expert.ru",y={platforms:[],genres:[],durations:[],modes:[],competencies:[]},k=[{index:0,question:"На чем играть?",answer:["PS – игровая консоль Playstation компании Sony.","Xbox – игровая консоль Xbox компании Microsoft.","Nintendo Switch – портативная консоль компании Nintendo.","ПК – персональный компьютер, ноутбук или Steam Deck."]},{index:1,question:"Основные термины",answer:["Локальный кооператив – игры с возможностью играть совместно на одной консоли 2-м и более игрокам","Локальное противостояние – игры с возможностью играть нескольким игрокам друг против друга на одной консоли.","Мультиплеерный кооператив – игры с возможностью играть совместно по сети.","Мультиплеерное противостояние – игры с возможностью играть друг против друга нескольким игрокам по сети.","Песочница – игры с большой свободой действий.","RPG – ролевая игра, для которой характерны: возможность создавать главного героя, развивать характеристики подконтрольных игроку персонажей, выбирать варианты ответных реплик в диалогах с неигровыми персонажами, своими действиями влиять на ход внутриигровых нарративов.","Платформер – игры с упором на прыжках по платформам.","Beat ’em up – игры с акцентом на рукопашные схватки.","Hack and slash – игры, в которых происходит в основном истребление множества противников в ближнем бою с помощью разнообразного оружия.","Survival horror – игры с упором на выживание, нагнетание атмосферы страха."]},{index:2,question:"Как могут помочь видеоигры?",answer:["Видеоигры могут научить ценным навыкам, таким как решение проблем, ответственность за принятие решений и стратегии преодоления трудностей. Видеоигры также могут моделировать сценарии реальной жизни, позволяя людям практиковать и совершенствовать социальные навыки в безопасной и контролируемой среде.","Игра может быть ресурсом развития. Инструментом, через который ребенок познает мир, познает себя.","Библиотека видеоигр рекомендуется как психологам, которые хотят проводить консультации по нашей авторской методике, так и родителям, которые хотят провести больше времени со своим ребенком, создавая крепкие и доверительные отношения."]},{index:3,question:"Для кого предназначена библиотека?",answer:["У картотеки видеоигр 2 целевых аудитории:","1. Психологи, которые хотят использовать в своей работе методику психологического консультирования с помощью видеоигр.","2. Родители, которые хотят лучше понимать увлечения своих детей и погрузиться в мир игровой индустрии."]}],v=(t,e,n,r)=>{const s=document.getElementById(t),o=document.createElement("button");o.className="inline-flex justify-between w-full rounded-md px-4 py-2 text-sm font-medium hover:bg-slate-500",o.setAttribute("id",`${t}Button`);const d=document.createElement("span");d.textContent=e;const l=document.createElement("span");l.innerHTML="&#x25BC;",l.className="ml-2 transition-transform duration-300",o.appendChild(d),o.appendChild(l);const i=document.createElement("div");i.className="hidden flex flex-col absolute origin-top-left mt-2 whitespace-wrap rounded-md max-h-[50vh] py-2 overflow-y-auto shadow-lg bg-slate-500 ring-1 ring-black ring-opacity-5 focus:outline-none",i.setAttribute("id",`${t}Menu`);const c=document.createElement("div");c.className="py-1",c.setAttribute("role","none");for(const[w,b]of Object.entries(n)){const u=document.createElement("label");u.className="flex px-2 py-0.5 text-sm text-white";const m=document.createElement("input");m.type="checkbox",m.value=w,m.className="";const h=document.createElement("span");h.className="p-2",h.innerHTML=b.toLowerCase(),u.appendChild(m),u.appendChild(h),c.appendChild(u),m.addEventListener("change",$=>{if($.target.checked)y[r].push(b);else{const a=y[r].indexOf(b);a!==-1&&y[r].splice(a,1)}B(g,!1)})}i.appendChild(c),s.appendChild(o),s.appendChild(i),o.addEventListener("click",()=>{i.classList.toggle("hidden"),l.innerHTML=i.classList.contains("hidden")?"&#x25BC;":"&#x25B2;"})},H=t=>{const e=q;document.getElementById("total").innerHTML=e},x=t=>Array.isArray(t)?`<ul>${t.map(e=>`<li>${e}</li>`).join("")}</ul>`:`<div>${t}</div>`,p=t=>Array.isArray(t)?`<div>${t.map(e=>`<span> ${e}</span>`)}</div>`:`<div>${t}</div>`;document.getElementById("faq").addEventListener("click",function(t){if(t.target&&t.target.matches("button[id^='accordionFaqButton-']")){const e=t.target.getAttribute("data-index");F(e)}});const D=(t,e,n)=>{const r=document.getElementById(`accordionFaqContent-${t}`);r.innerHTML=`
    <div class="p-6 bg-slate-300 dark:bg-slate-700">
      <div class="flex flex-col w-full">
        ${n.map(s=>`
            <div>${s}</div>
          `).join("")}
      </div>
    </div>
  `},F=t=>{const e=k.find(o=>o.index==t),n=document.getElementById(`accordionFaqContent-${t}`),r=document.getElementById(`accordionFaqButtonRow-${t}`),s=document.getElementById(`accordionFaqButton-${t}`);if(n.classList.contains("hidden")){const o=e.question,d=e.answer;D(t,o,d),n.classList.remove("hidden"),r.classList.remove("border-b","border-slate-500"),n.classList.add("border-b","border-slate-500"),s.innerHTML=`${e.question} &#x25B2;`}else n.classList.add("hidden"),r.classList.add("border-b","border-slate-500"),n.classList.remove("border-b","border-slate-500"),s.innerHTML=`${e.question} &#x25BC;`};document.querySelector("tbody").addEventListener("click",function(t){if(t.target&&t.target.matches("button[id^='accordionButton-']")){const e=t.target.getAttribute("data-index");G(e)}if(t.target&&t.target.matches(".game-screenshot")){const e=j();e&&e(t.target.src)}});const I=(t,e,n)=>{let r=e||"Описание в разработке";const s=document.getElementById(`accordionContent-${t}`);s.innerHTML=`
    <td colspan="6" class="p-6 bg-gray-300 dark:bg-gray-700">
      <p>${r}</p>
      <div class="flex justify-between pt-2">
        ${n.map(o=>`
            <img
               class="flex-1 mx-2 cursor-pointer game-screenshot"
               src="${C+o}"
               alt="Screenshot"
               style="max-width: calc(33.33% - 0.5rem);"
            />
          `).join("")}
      </div>
    </td>
  `},G=t=>{const e=g.find(o=>o.id==t),n=document.getElementById(`accordionContent-${t}`),r=document.getElementById(`accordionButtonRow-${t}`),s=document.getElementById(`accordionButton-${t}`);if(n.classList.contains("hidden")){const o=e.description,d=e.screen_shots_list;I(t,o,d),n.classList.remove("hidden"),r.classList.remove("border-b","border-slate-700","dark:border-slate-300"),n.classList.add("border-b","border-slate-700","dark:border-slate-300"),s.innerHTML="Свернуть &#x25B2;"}else n.classList.add("hidden"),r.classList.add("border-b","border-slate-700","dark:border-slate-300"),n.classList.remove("border-b","border-slate-700","dark:border-slate-300"),s.innerHTML="Узнать больше &#x25BC;"},N=t=>{const e=t.map(n=>`<div
                  id="accordionFaqButtonRow-${n.index}"
                  class="border-b border-slate-500"
                >
                    <div class="flex justify-center w-full bg-slate-300 dark:bg-slate-700">
                      <button
                        id="accordionFaqButton-${n.index}"
                        data-index="${n.index}"
                        class="text-slate-900 dark:text-slate-100  py-4 focus:outline-none"
                      >
                        ${n.question} &#x25BC;
                      </button>
                    </div>
                </div>
                <div id="accordionFaqContent-${n.index}" class="hidden"></div>`).join("");document.getElementById("faq").innerHTML=e},E=t=>t.map(e=>`
        <tr class="text-center">
          <td class="px-6 py-2">
            <div class="flex flex-col justify-center items-center">
              <div class="mb-2">${x(e.titles_list)}</div>
              <img class="max-w-60 rounded-md" src=${C+e.cover_image} alt="" />
            </div>
          </td>
          <td class="px-2 py-2 min-w-52">
            <div>${x(e.platforms.map(n=>n.name))}</div>
          </td>
          <td class="px-2 py-2">
            <div>${e.duration}</div>
          </td>
          <td class="px-2 py-2">
            <div>${x(e.modes.map(n=>n.name))}</div>
          </td>
          <td class="px-2 py-2">
            <div>${x(e.genres.map(n=>n.name))}</div>
          </td>
          <td class="px-2 py-2">
            <div>${p(e.competencies.map((n,r)=>{const s=n.name.toLowerCase();return r===0?s.charAt(0).toUpperCase()+s.slice(1):s}))}</div>
          </td>
        </tr>
        <tr id="accordionButtonRow-${e.id}" class="border-b border-slate-700 dark:border-slate-300">
          <td colspan="6" class="text-center">
            <div class="flex justify-center">
              <button id="accordionButton-${e.id}" data-index="${e.id}" class="text-slate-500 pb-2 focus:outline-none">
                Узнать больше &#x25BC;
              </button>
            </div>
          </td>
        </tr>
        <tr id="accordionContent-${e.id}" class="hidden">
          <td colspan="6" class="p-6 bg-gray-300 dark:bg-gray-700">
            <p>${e.description||"Описание в разработке"}</p>
            <div class="flex justify-between pt-2">
              ${e.screen_shots_list.map(n=>`
                  <img
                    class="flex-1 mx-2 cursor-pointer game-screenshot"
                    src=${n}
                    alt="Screenshot"
                    style="max-width: calc(33.33% - 0.5rem);"
                  />
                `).join("")}
            </div>
          </td>
        </tr>`).join(""),T=t=>{document.querySelector("#minitable").innerHTML=t.map(e=>`<div
      class="flex flex-col justify-center items-center pb-4 border-b border-slate-700 dark:border-slate-300"
    >
      <div class="flex flex-col justify-center items-center">
        <div class="mb-2">${p(e.titles_list)}</div>
        <img
          class="max-w-32 rounded-md"
          src=${C+e.cover_image}
          alt=""
        />
      </div>
      <div>${p(e.platforms.map(n=>n.name))}</div>
      <div>${e.duration[0]}</div>
      <div>${p(e.modes.map(n=>n.name))}</div>
      <div>${p(e.genres.map(n=>n.name))}</div>
      <div class="pl-2 text-justify">
      ${p(e.competencies.map((n,r)=>{const s=n.name.toLowerCase();return r===0?s.charAt(0).toUpperCase()+s.slice(1):s}))}
      </div>
    </div>`).join("")},O=t=>{const{genres:e,platforms:n,modes:r,durations:s,competencies:o}=y;return t.filter(d=>{const l=d.genres.map(a=>a.name),i=e.length===0||e.some(a=>l.includes(a)),c=d.platforms.map(a=>a.name),w=n.length===0||n.some(a=>c.includes(a)),b=d.modes.map(a=>a.name),u=r.length===0||r.every(a=>b.includes(a)),m=s.length===0||s.includes(d.duration_type.name),h=d.competencies.map(a=>a.name),$=o.length===0||o.every(a=>h.includes(a));return i&&w&&u&&m&&$})},B=(t,e=!1)=>{const n=O(t),r=document.getElementById("endOfTable");if(n.length===0&&f===null){r.insertAdjacentHTML("beforebegin",`
        <tr>
          <td colspan="100%" class="text-center w-full">Мы не нашли ни одной игры, соответствующей этому запросу.</td>
        </tr>
      `);return}if(e){const s=document.getElementById("endOfTable");s&&n?s.insertAdjacentHTML("beforebegin",E(n)):console.log("Either the table element or the HTML content is undefined")}else Array.from(r.parentElement.children).filter(o=>o.id!=="endOfTable").forEach(o=>o.remove()),r.insertAdjacentHTML("beforebegin",E(n))};document.addEventListener("DOMContentLoaded",async()=>{try{const t=await M(f),e=await A();t&&e&&(v("platformDropdownContainer","Платформа",e.platforms,"platforms"),v("durationDropdownContainer","Продолжительность основной сюжетной линии (приблизительная)",e.durations,"durations"),v("typeDropdownContainer","Режим игры",e.modes,"modes"),v("genreDropdownContainer","Жанр",e.genres,"genres"),v("competenciesDropdownContainer","Компетенции",e.competencies,"competencies"),N(k),H(t),B(t.results,!0),T(g))}catch(t){console.error("Error during DOMContentLoaded:",t)}});window.addEventListener("scroll",async()=>{if(window.innerHeight+window.scrollY>=document.body.offsetHeight-200&&!L&&f&&f!=="http://192.168.1.176:8099/api/v1/games/?page=1"){L=!0;try{const t=await M(f);B(t.results,!0),T(g)}catch(t){console.error("Failed to fetch games on scroll:",t)}finally{L=!1}}});
