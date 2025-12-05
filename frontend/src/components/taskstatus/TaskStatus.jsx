import  {React, memo, useEffect } from 'react';
import { Title } from '../../ui/Title';
import { IMAGES } from '../../assets/IMAGES';
import Style from './TaskStatus.module.scss';
import { Progress } from '../../ui/progress/Progress';
import { useSelector } from 'react-redux';
import { TasksRespons,store } from '../../context/UserContext';
export const TaskStatus = memo(() => {
    const {allTasks,isRespons} = useSelector((state) => state.tasks)
    const {updateTaskState} = TasksRespons.actions
    
    useEffect(() => {
        const all = allTasks.length
        const obj = {
            notCompleted : Math.round((allTasks.filter(item => item.status == 'Not Started').length / all) * 100) || 0,
            completed : Math.round((allTasks.filter(item => item.status == 'completed').length / all) * 100) || 0,
            inProgress :Math.round( (allTasks.filter(item => item.status == 'In Progres').length / all) * 100) || 0,
        }
        store.dispatch(updateTaskState(obj))

    },[allTasks,isRespons,updateTaskState])
    return (
        <div className={Style['task-status']}>
            <Title 
                wrappClass={Style['task-status__title-wrapper']}
                txtClass={Style['task-status__title']}
                image={IMAGES.taskStatus}
            > 
                Task Status
            </Title>
            <div className={Style['progress-wrapper']}>
                <Progress color='#05A301' progress='completed'/>
                <Progress color='#0225FF' progress='inProgress'/>
                <Progress 
                    progress='notCompleted'
                    color='#F21E1E'
                    
                />
             
            </div>

        </div>
    );
});
