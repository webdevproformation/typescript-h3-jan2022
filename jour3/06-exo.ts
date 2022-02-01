interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoSansDate = Omit<Todo, "createdAt"> ;

type TodoLight = Partial<Pick<Todo , "description" | "completed">> ;

function calcul() : string | number | Todo | null{
    return ;
}
const c = calcul()

type calculSansNull = Exclude<typeof c , null>

// décorateur 