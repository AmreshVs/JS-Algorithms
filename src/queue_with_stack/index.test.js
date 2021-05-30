import QueueWithStack from "./index.js";

test('QueueWithStack Test 1 - enqueue', () => {
  let queue = new QueueWithStack();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.peek()).toBe(1);
});

test('QueueWithStack Test 2 - dequeue', () => {
  let queue = new QueueWithStack();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.peek()).toBe(1);

  queue.dequeue();

  expect(queue.peek()).toBe(2);

  queue.dequeue();
  queue.dequeue();

  expect(() => queue.peek()).toThrow(/empty/i);
});

test('QueueWithStack Test 3 - peek', () => {
  let queue = new QueueWithStack();
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);

  expect(queue.peek()).toBe(3);

  queue.dequeue();

  expect(queue.peek()).toBe(4);

  queue.dequeue();
  queue.dequeue();

  expect(() => queue.dequeue()).toThrow(/empty/i);
  expect(() => queue.peek()).toThrow(/empty/i);
});

test('QueueWithStack Test 4 - isEmpty', () => {
  let queue = new QueueWithStack();
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);

  expect(queue.isEmpty()).toBeFalsy();

  queue.dequeue();
  queue.dequeue();
  queue.dequeue();

  expect(queue.isEmpty()).toBeTruthy();
});