class Map
  attr_reader :map
  def initialize
    @map = []
  end

  def set(k, v)
    if @map.find {|pair| pair[0] == k}
      @map.map {|pair| [k, v] if pair[0] == k}
    else
      @map << [k, v]
    end
    [k, v]
  end

  def get(key)
    result = @map.find {|pair| pair[0] == key}
    return result.nil? ? nil : result[1]
  end

  def delete(key)
    @map.reject! {|pair| pair[0] == key}
  end

  def show
    @map
  end
end

m = Map.new
m.set("a", 1)
m.set("b", 2)
p m.show
