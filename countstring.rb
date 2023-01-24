def countstring(str)
    puts str.count("e")
end
countstring("select")

def check_again(word,character)
    count = 0
    word.each_char{|c|
    if character == c 
        count +=1
    else
        0
    end
 }
puts count
end
check_again("word","r")