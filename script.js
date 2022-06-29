const skillsBuilder = {
    //можно объединить name и style, функционально будет работать, но неудобно, поэтому name служит как alias
    sortAsc: 1,
    
    skillsBuildData: 
    [],

    getData: async function()
    {
        await fetch('db/skills.json')
        .then(data => data.json())
        .then(json => { 
            this.skillsBuildData = json;
            skillsBuilder.build();
        } )
        .catch(()=> console.error(" Вот что, сэр! Я буду говорить с вами откровенно! Мне не нравится эта экспедиция! Мне не нравятся эти матросы! И вообще.. что? Да! Нет! Мне вообще ничего не нравится, сэр!"));
        
    },

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

skillsBuilder.getData()