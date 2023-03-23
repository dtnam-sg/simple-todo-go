export interface ITodo {
    id: string;
    text: string;
    completed: boolean;
}

export interface ITodoFormProps {
    addTodo: (text: string) => void
}

export interface ITodoListProps{
    todos: ITodo[];
    onToggleTodo: (id: string) => void
    onDeleteTodo: (id: string) => void
}

export interface ITodoItemProps {
    todo: ITodo;
    onToggleTodo: (id: string) => void
    onDeleteTodo: (id: string) => void
}



