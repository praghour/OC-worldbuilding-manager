import { reactive } from "vue";

const tags = [
    {id: 0, type: 'оружие', 
        tags: ['лук', 'арбалет', 'меч', 'кинжал', 'копьё']},
    {id: 1, type: 'виды', 
        tags: ['человек', 'дворф', 'эльф', 'оборотень', 'вампир']},
    {id: 2, type: 'профессии', 
        tags: ['кузнец', 'сапожник', 'травник', 'госслужащий']}
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