const skill = {
    data: [{
        item: "html",
        level: 15,
        iconPath: "img/html.svg",
    },
    {
        item: "css",
        level: 15,
        iconPath: "img/css.svg",
    },
    {
        item: "figma",
        level: 15,
        iconPath: "img/figma.svg",
    },
        {item: "C++",
        level: 15,
        iconPath: "img/c++.svg",
    },
    {
        item: "java",
        level: 15,
        iconPath: "img/photoshop.svg",
    },
        {item: "photoshop",
        level: 15,
        iconPath: "img/c++.svg",
    }],
    generateList: function(parentElement) {
        this.data.forEach(function(element) {
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
            parentElement.appendChild(dtt);
            parentElement.appendChild(ddd);
        });
    }
};

skill.generateList(document.querySelector("dl.skill-list"));




