interface ITask{
    id?:string,
    title:String,
    type:String,
    dueDate:Date,
    description:string;


}
interface ITaskTypeOption{
    type:string;
}
export { ITask,  ITaskTypeOption};