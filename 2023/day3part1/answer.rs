use std::fs;
fn main() {

    let contents = fs::read_to_string("./input.txt");

    let multi_array: Vec<Vec<char>> = contents.unwrap().split_terminator("\n")
        .map(|line| line.chars().collect()).collect();

    for arr in multi_array {
        println!("{:?}", arr);
        for (i, char) in arr.iter().enumerate() {
            println!("{:?}", char.is_numeric());
            if (char.is_numeric()) {
                println!("aksfhkjds");
            }
        }
    }
}
