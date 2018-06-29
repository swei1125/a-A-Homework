class LRUCache

  def initialize(size)
    @size = size
    @cache = []
  end

  def count
    @cache.count
  end

  def add(el)
    if @cache.include?(el)
      @cache.delete(el)
      @cache << el
    else
      @cache << el
      @cache.shift if count > @size
    end
  end

  def show
    p @cache
  end


  private

end
