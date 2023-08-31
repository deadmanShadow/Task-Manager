
import Modal from '../ui/modal';

const AddTaskModal = ({isOpen , setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid ea asperiores nihil in, reiciendis distinctio iste esse velit aperiam qui quo illo libero repellendus hic dolorum iusto suscipit voluptates?
        </p>
        </Modal>
    );
};

export default AddTaskModal;