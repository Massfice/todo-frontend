import Todo from "./Todo";

export default interface TodoOperation {
    todo: Todo,
    operation: string,
    redirect: any | null,
}