const skill = {
    data: [{
        item: "html",
        level: 15,
        iconPath: "img/html.svg",
    },
    {
        item: "css",
        level: 10,
        iconPath: "img/css.svg",
    },
    {
        item: "figma",
        level: 5,
        iconPath: "img/figma.svg",
    },
    {
        item: "C++",
        level: 25,
        iconPath: "img/c++.svg",
    },
    {
        item: "java",
        level: 35,
        iconPath: "img/photoshop.svg",
    },
    {
        item: "photoshop",
        level: 21,
        iconPath: "img/c++.svg",
    }],
    isSorted: false,
    generateList: function(parentElement) {
        parentElement.innerHTML = '';
        this.data.forEach(element => {
            const dtt = document.createElement('dt');
            dtt.classList.add('skill-item');
            dtt.textContent = element.item;
            dtt.style.backgroundImage = `url(${element.iconPath})`;

            const ddd = document.createElement('dd');
            ddd.classList.add('skill-level');
            
            const divv = document.createElement('div');
            divv.style.width = `${element.level}%`;
            divv.textContent = `${element.level}%`;

            ddd.appendChild(divv);
            
            parentElement.append(dtt,ddd);
        });
    },
    sortList: function(sortingType) {
        if (skill.isSorted !== sortingType){
            switch (sortingType){
                case 'name':
                    this.data.sort((a,b) => a.item.localeCompare(b.item)); break;
                case 'level':
                    this.data.sort((a,b) => b.level - a.level); break;
                default:
                    return;
            }
            this.isSorted = sortingType;
        } else {
            this.data.reverse();
        }
        this.generateList(document.querySelector("dl.skill-list"));
    }
};

skill.generateList(document.querySelector("dl.skill-list"));


sortBtnBlock = document.querySelector("div.skills-sort");
sortBtnBlock.addEventListener('click', (e) => {
    let target = e.target;
    if (target.nodeName === "BUTTON")
    {
        skill.sortList(target.dataset.type);
    } 
});

const nav = document.querySelector('.main-nav');
const btn = document.querySelector('.nav-btn');

const menu = {
    open: function() {
        nav.classList.remove('main-nav_closed');
        btn.classList.add('nav-btn_close');
        btn.classList.remove('nav-btn_open');
        btn.innerHTML = '<span class="visually-hidden">Закрыть меню</span>';
    },
    close: function() {
        nav.classList.add('main-nav_closed');
        btn.classList.remove('nav-btn_close');
        btn.classList.add('nav-btn_open');
        btn.innerHTML = '<span class="visually-hidden">Открыть меню</span>';
    },
};

btn.addEventListener('click', (e) => {
    e.target.classList.contains('nav-btn_open') ? menu.open() : menu.close();
});
menu.close();


