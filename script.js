'use strict'
const skillsBuilder = {
    //можно объединить name и style, функционально будет работать, но неудобно, поэтому name служит как alias
    sortAsc: 1,
    
    skillsBuildData: 
    [
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
    ],

    build: function()
    {
        const skillsObjectList = document.querySelector('.skills-list');

        skillsObjectList.innerHTML = '';

        const {skillsBuildData} = this;

        skillsBuildData.forEach(({ name, level, style }) => {

            const dt = document.createElement('dt');    
            dt.classList.add('skill-'+style);          
            dt.textContent = name;
            
            const levelDiv = document.createElement('div');
            levelDiv.style.width = `${level}%`;
            levelDiv.textContent = `${level}%`;

            const dd = document.createElement('dd');    
            dd.classList.add('level');
            
            dd.appendChild(levelDiv);

            skillsObjectList.appendChild(dt);
            skillsObjectList.appendChild(dd);
        });
    },

    
    sortSkills: function(buttonDataField) 
    {   
        const { sortAsc } = this;
        this.sortAsc = -sortAsc; 

        this.skillsBuildData = this.skillsBuildData.sort((a, b) => 
        {
            return (a[buttonDataField] < b[buttonDataField]) ? this.sortAsc : -this.sortAsc;            
        }); 
        this.build();
        
    }

}

skillsBuilder.build();