basic.showString("A:")
let Terning_1 = 1 + Math.randomRange(0, 5)
let Terning_2 = 1 + Math.randomRange(0, 5)
basic.showNumber(Terning_1)
basic.showString("+")
basic.showNumber(Terning_2)
let sum_a = Terning_1 + Terning_2
basic.showString("=")
basic.showNumber(sum_a)
basic.showString("B:")
Terning_1 = 1 + Math.randomRange(0, 5)
Terning_2 = 1 + Math.randomRange(0, 5)
basic.showNumber(Terning_1)
basic.showString("+")
basic.showNumber(Terning_2)
let sum_b = Terning_1 + Terning_2
basic.showString("=")
basic.showNumber(sum_b)
basic.showString("C:")
Terning_1 = 1 + Math.randomRange(0, 5)
Terning_2 = 1 + Math.randomRange(0, 5)
basic.showNumber(Terning_1)
basic.showString("+")
basic.showNumber(Terning_2)
let sum_c = Terning_1 + Terning_2
basic.showString("=")
basic.showNumber(sum_c)
if (sum_a < sum_c && sum_b < sum_c) {
   basic.showString("C vinner:")
   basic.showNumber(sum_c)
} else if (sum_a < sum_b && sum_c < sum_b) {
   basic.showString("B vinner:")
   basic.showNumber(sum_b)
} else if (sum_b < sum_a && sum_c < sum_a) {
   basic.showString("A vinner:")
   basic.showNumber(sum_a)
} else {
   basic.showString("Uavgjort mellom 2 eller flere, trill på nytt")
}



