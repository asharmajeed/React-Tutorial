import { Button, Modal, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { updateTodo } from '../features/todo/todoSlice'

function TodoModal({todo}) {
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    if(todo) {
      setText(todo.text)
    }
  }, [todo])

  function onCloseModal() {
    setOpenModal(false);
    setText('');
  }

  const editTodo = (e) => {
    e.preventDefault()
    dispatch(updateTodo({...todo, text}));
    onCloseModal()
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>✏️</Button>
      <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Todo</h3>
            <form onSubmit={editTodo} style={{marginTop: '12px'}}>
              <div>
                <label htmlFor="todo" className='text-white'>Todo</label>
                <TextInput
                  id='todo'
                  placeholder="Write text..."
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  required
                />
              </div>
              <div className="w-full mt-4">
                <Button type='submit'>Update Todo</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TodoModal