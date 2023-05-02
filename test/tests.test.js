import { addTask, removeTask } from '../src/assets/scripts/app';

describe('test making elems', () => {
  const task = {
    key: new Date().valueOf(),
    title: 'test',
    completed: false,
  };
  const block = document.createElement('div');
  const listContainer = document.createElement('ul');
  listContainer.innerHTML = `<p class="todo_task-container_list-wrap-no-tasks">You have no tasks</p>`;
  block.append(listContainer);
  const list = block.querySelector('ul');

  test('create item in ls and check element', () => {
    addTask(task, list);
    expect(localStorage.getItem(task.key) === null).toBe(false);
    expect(list.children.length).toBe(2);
  });
  test('remove item from ls and check element', () => {
    const item = list.querySelector('li');
    removeTask(item, task.key, list);
    expect(localStorage.getItem(task.key) === null).toBe(true);
    expect(list.children.length).toBe(1);
  });
});
