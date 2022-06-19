'use strict'

//можно объединить name и style, функционально будет работать, но неудобно, поэтому name служит как alias
let skillsData = [
        {
            name: 'HTML',
            level: 70,
            style: 'html'
        },
        {
            name: 'CSS',
            level: 50,
            style: 'css'
        },
        {
            name: 'Python',
            level: 70,
            style: 'python'
        },
        {
            name: 'C#',
            level: 90,
            style: 'csharp'
        },
        {
            name: 'Жабы',
            level: 100,
            style: 'jabka'
        }
    ];

const skillList = document.querySelector('.skills-list');

skillsData.forEach(({ name, level, style }) => {

    const dt = document.createElement('dt');    
    dt.classList.add('skill-'+style);          
    dt.textContent = name;
       
    const levelDiv = document.createElement('div');
    levelDiv.style.width = `${level}%`;
    levelDiv.textContent = `${level}%`;

    const dd = document.createElement('dd');    
    dd.classList.add('level');
    
    dd.appendChild(levelDiv);

    skillList.appendChild(dt);
    skillList.appendChild(dd);
});
