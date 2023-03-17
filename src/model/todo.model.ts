export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
}

export interface ITodoFormProps {
    addTodo: (text: string) => void
}

export interface ITodoListProps{
    todos: ITodo[];
    onToggleTodo: (id: number) => void
    onDeleteTodo: (id: number) => void
}

export interface ITodoItemProps {
    todo: ITodo;
    onToggleTodo: (id: number) => void
    onDeleteTodo: (id: number) => void
}



