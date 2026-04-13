import  React, {type FC, useState, } from 'react';
import type {ITask} from "../../../constants/task.ts";
import '../../../styles/addTaskForm.css';

/*Data flow
Користувач тисне кнопку → TasksPage відкриває модалку.

Користувач пише текст → AddTaskForm зберігає його у свій локальний state.

Користувач тисне "Зберегти" → AddTaskForm передає дані "вгору" через функцію onSave.

TasksPage отримує дані → Додає їх у масив tasks → Board перемальовується і показує нову таску.
 */

interface AddTaskModalProps {
    // onSave — це функція-кур'єр. Коли форма готова, вона віддасть дані цій функції.
    // Omit<ITask, 'id'> каже: "Ми передамо все, крім ID"
    onSave: (task: Omit<ITask,'id'>) => void;
}

const AddTask:FC<AddTaskModalProps> = ({onSave}) => {

    const [formData, setFormData] = useState<Omit<ITask, 'id'>>({
        title:'',
        description: '',
        deadline: '',
        status: 'todo',
    });

    const handleSubmit = (e: React.SubmitEvent) =>{
        e.preventDefault(); //зупиняє перезавантаження сторінки (перерендеринг)
        onSave(formData); //віддає дані вище в батьківський компонент

        //очищуємо форму після натискання кнопки підтвердження
        setFormData(
            {
                title: '',
                description: '',
                deadline:'',
                status: 'todo',

            });
    };

    return(
        <form className="add-task-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Назва</label>
                <input
                    type="text"
                    placeholder="Назви нову таску"
                    required={true}
                    value={formData.title}
                    /*копіюємо стан formData і оновлюєму назву те саме робимо і де решта*/
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
            </div>
            <div className="form group deadline-group">
                <label>Дедлайн</label>
                <div className="date-input-wrapper">
                    <input
                        type='date'
                        required
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    />
                </div>
            </div>
            <div className="form-group description-group">
                <label>Опис</label>
                <textarea
                    placeholder='Що потрібно зробити?'
                    required={true}
                    value={formData.description}
                    onChange={(e)=>setFormData({...formData,description:e.target.value})}
                />
            </div>
            <button type="submit" className="save-btn">Додати в To Do</button>
        </form>
    );
}

export default AddTask;