const app = new Vue ({
    el: '#app',

    data:{
        toDoList:[
            {
                object: 'Comprare il latte',
                done: false,
            },

            {
                object: 'Pagare le bollette',
                done: false,
            },

            {
                object: 'Conquistare il mondo',
                done: false,
            },
        ],

        toDo: {
            object: '',
            done: false,
        },

        error: false,

        active:false,
    },

    methods:{
        addTask(){
            if(this.toDo < 1){
                this.error = true;
            } else{
                this.toDoList.push(this.toDo);
                this.toDo = {
                    object: '',
                    done: false,
                };
                this.error = false;
            }
        },

        removeTask(index){
            this.toDoList.splice(index, 1)
        },

        
    }
})