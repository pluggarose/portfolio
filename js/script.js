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
    generateList: function(parentElement) {
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
    }
};

skill.generateList(document.querySelector("dl.skill-list"));




