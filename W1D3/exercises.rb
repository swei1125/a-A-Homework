def sum_to(num)
  return num if num == 1
  num + sum_to(num - 1)
end

def add_numbers(nums_arr)
  return nums_arr[0] if nums_arr.length <= 1
  nums_arr[0] + add_numbers(nums_arr[1..-1])
end

def gamma_fnc(num)
  return nil if num < 1
  return 1 if num < 3
  (num - 1) * gamma_fnc(num - 1)
end

def ice_cream_shop(flavors, favorite)
  return true if flavors[0] == favorite
  return false if flavors.length < 1
  ice_cream_shop(flavors[1..-1], favorite)
end

def reverse(str)
  return str if str.length <= 1
  reverse(str[1..-1]) + str[0]
end



if $PROGRAM_NAME == __FILE__
  p reverse("id")
end
