type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};

function callback(err: Error, result?: undefined): Error;
function callback(err: null, result: number): number;

function callback(err: Error | null, result: any): Error | number {
    if (err) {
        console.log(err.message);
        return err;
    }
    console.log(`Result: ${result}`);
    return result;
}

enum enumeration {
    addition = '+',
    souus = '-',
    division = '/',
    multiplication = '*',
    modulo ='%',
}

function superComputer(number1:number, sign:enumeration, number2:number,cb:Callback) {
    if (sign == enumeration.addition)
        return cb(null, number1 + number2);
    if (sign == enumeration.souus)
        return cb(null, number1 - number2);
    if (sign == enumeration.division) {
        if (number2 == 0) {
            return (cb(new Error("divided by zero")));
        }
        return cb(null, number1 / number2);
    }
    if (sign == enumeration.multiplication)
        return cb(null, number1 * number2);
    if (sign == enumeration.modulo)
        return cb(null, number1 % number2);
    else
        return (cb(new Error("Bad opérator")));
}

superComputer(1, enumeration.addition, 1, callback);
superComputer(1, enumeration.souus, 1, callback);
superComputer(1, enumeration.multiplication, 1, callback);
