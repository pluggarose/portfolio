const data = [{
        item: "html",
        level: 100,
        iconPath: "img/html.svg",
    },
    {
        item: "css",
        level: 100,
        iconPath: "img/css.svg",
    },
    {
        item: "figma",
        level: 100,
        iconPath: "img/figma.svg",
    },
        {item: "C++",
        level: 100,
        iconPath: "img/c++.svg",
    },
    {
        item: "java",
        level: 100,
        iconPath: "img/photoshop.svg",
    },
        {item: "photoshop",
        level: 100,
        iconPath: "img/c++.svg",
    }
];

const skillList = document.querySelector("dl.skill-list");

data.forEach(element => {
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
    skillList.appendChild(dtt);
    skillList.appendChild(ddd);
});



