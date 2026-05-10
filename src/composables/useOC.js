import { reactive } from "vue";

const tags = [
    {id: 0, type: 'weapon', 
        tags: ['bow', 'crossbow', 'sword', 'dagger', 'spear']},
    {id: 1, type: 'species', 
        tags: ['human', 'dwarf', 'elf', 'werewolf', 'vampire']},
    {id: 2, type: 'profession', 
        tags: ['']}
];

const guilds = [
    {id: 0, name: 'орда'},
    {id: 1, name: 'альянс'},
    {id: 2, name: 'коалиция'},
    {id: 3, name: 'анархия'}
];

const defaultCharacterList = [
    {
        id: 0, 
        name: '', 
        age: '',
        description: '',
        tags: [tags.id[0].tags[0], tags.id[0].tags[1]],
        status: '',
        guilds: ['']
    },
    {
        id: 1, 
        name: '', 
        age: '',
        description: '',
        tags: [tags.id[0].tags[2]],
        status: '',
        guilds: ['']
    },
    {
        id: 2, 
        name: '', 
        age: '',
        description: '',
        tags: [tags.id[0].tags[3]],
        status: '',
        guilds: ['']
    },
    {
        id: 3, 
        name: '', 
        age: '',
        description: '',
        tags: [tags.id[0].tags[4]],
        status: '',
        guilds: ['']
    },
    
];

const characterList = reactive([]);