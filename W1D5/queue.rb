class Queue
  attr_reader :queue_stack
  def initialize
    @queue_stack = []
  end

  def enqueue(el)
    @queue_stack << el
    el
  end
  def dequeue
    @queue_stack.shift
  end
  def peek
    @queue_stack.first
  end
end
