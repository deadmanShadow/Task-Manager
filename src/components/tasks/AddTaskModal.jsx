
import { useForm } from 'react-hook-form';
import Modal from '../ui/modal';
const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const { register, handleSubmit, reset } = useForm();
    const onCancel = () => {
        reset();
        setIsOpen(false);
    }
    const onSubmit = (data) => {
        console.log(data);
        onCancel();
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="title">Title</label>
                    <input className='w-full rounded-md' type="text" {...register('title')} />

                    <label htmlFor="description">Description</label>
                    <textarea className='w-full rounded-md' {...register('description')} />

                    <label htmlFor="dueDate">Due Date</label>
                    <input className='w-full rounded-md' type="date" {...register('dueDate')} />

                    <label htmlFor="assignedTo">Assigned To</label>
                    <select className='w-full rounded-md' {...register('assignedTo')}>
                        <option value="raihan">Raihan</option>
                        <option value="mir">Mir</option>
                        <option value="siam">Siam</option>
                        <option value="shamil">Shamil</option>
                        <option value="hridoy">Hridoy</option>
                        <option value="sheon">Sheon</option>
                        <option value="alex">Alex</option>
                        <option value="olivia">Olivia</option>
                        <option value="david">David</option>
                        <option value="susan">Susan</option>
                    </select>

                    <label htmlFor="priority">Priority</label>
                    <select className='w-full rounded-md' {...register('priority')}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                {/* <button type='submit'>Submit</button> */}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" 
                >
                    Submit
                </button>
                <button
                    type="button"
                    onClick={()=>onCancel()}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ms-5"
                >
                    Cancel
                </button>
            </form>
        </Modal>
    );
};

export default AddTaskModal;