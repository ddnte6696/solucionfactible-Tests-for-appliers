package com.solucionfactible.dev;

/**
 * persistence takes in a positive parameter num and returns its multiplicative persistence, which is the number 
 * of times you must multiply the digits in num until you reach a single digit.
 * 
 * @author developer
 */
public class Persistence {
	
	public static int persistence(long num) {
            String str1 = Long.toString(num);
            if (str1.length() == 1) {
                return 0;
            }
            var mult = 1;
            var splitStr = str1.split("");
            for (var i = 0; i < splitStr.length; i++) {
                mult *= Float.parseFloat(splitStr[i]);
            }
            return 1 + persistence(mult);
	}

}
