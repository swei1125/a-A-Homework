def find_longest_fish(arr)# O(n^2)
  arr.each_with_index do |fish|
    longest = true
    arr.each do |fish2|
      longest = false if fish2.length > fish.length
    end
    return fish if longest
  end

end

class Array
  def merge_sort(&prc)
    prc ||= Proc.new {|a,b| a<=>b}
    return self if length <= 1

    middle = length / 2
    left = self[0...middle].merge_sort(&prc)
    right = self[middle..-1].merge_sort(&prc)
    Array.merge(left, right, &prc)
  end

  def self.merge(left, right, &prc)
    result = []
    until left.empty? || right.empty?
      if prc.call(left[0], right[0]) <= 0
        result << left.shift
      else
        result << right.shift
      end
    end
    result + left + right
  end
end

def dominant_octopus(arr)
  prc = Proc.new {|a,b| a.length<=>b.length}
  arr.merge_sort(&prc).last
end

def clever_octopus(arr)
  longest = arr[0]
  arr.each do |fish|
    longest = fish if fish.length > longest.length
  end
  longest
end

tiles_array = [
  "up",
  "right-up",
  "right",
  "right-down",
  "down",
  "left-down",
  "left",
  "left-up"
]

def slow_dance(dir, tiles_array)
  tiles_array.each_index do |i|
    return i if dir == tiles_array[i]
  end
end

def fast_dance(dir, tiles_array)
  tiles_array.index(dir)

end

p fast_dance("up", tiles_array)
