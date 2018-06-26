class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1, @name2 = name1, name2
    @cups = Array.new(14) {Array.new}
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each_with_index do |cup, i|
      next if i == 6 || i == 13
      4.times {cup << :stone}
    end
    @cups
  end

  def valid_move?(start_pos)
  raise 'Invalid starting cup' if start_pos > 13 || start_pos < 0
  raise 'Starting cup is empty' if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    hold = @cups[start_pos]
    @cups[start_pos] = []
    cup_idx = start_pos + 1
    until hold.empty?
      if cup_idx == 6
        @cups[6] << hold.pop if current_player_name == @name1
      elsif cup_idx == 13
        @cups[13] << hold.pop if current_player_name == @name2
      else
        @cups[cup_idx % 14] << hold.pop
      end
      cup_idx += 1
    end
    render
    next_turn((cup_idx-1)%14, current_player_name)
  end

  def next_turn(ending_cup_idx, current_player_name)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if current_player_name == @name1 && ending_cup_idx == 6
      return :prompt
    elsif current_player_name == @name2 && ending_cup_idx == 13
      return :prompt
    elsif @cups[ending_cup_idx].length == 1
      return :switch
    elsif 
      return ending_cup_idx

    end



  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..5].all? {|cup| cup.empty?} || @cups[7..12].all? {|cup| cup.empty?}
  end

  def winner
    return :draw if @cups[6] == @cups[13]
    if @cups[6].length > @cups[13].length
      @name1
    else
      @name2
    end
  end
end
