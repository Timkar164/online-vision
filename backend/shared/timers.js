//получить текущее время
//передаём bool добавлять ли дату и utc ли время/дата
export function getCurrentDateTime(addDateBool, utcFormatBool) {
    let res = "";
    let data = new Date();
    let hh, mm, ss;

    //добавление даты
    if (addDateBool) {
        switch(utcFormatBool) {
            case false:
                res +=
                data.getFullYear() +
                "-" +
                (data.getMonth() + 1) +
                "-" +
                data.getDate() +
                " ";
                break;
            
            case true:
                res +=
                data.getUTCFullYear() +
                "-" +
                (data.getUTCMonth() + 1) +
                "-" +
                data.getUTCDate() +
                " ";
                break;
    
            default:
                throw "Wrong addDateBool parametr";
        }
    }

    //добавление времени
    switch(utcFormatBool) {
        case false:
            hh = data.getHours();
            mm = data.getMinutes();
            ss = data.getSeconds();
            break;

        case true:
            hh = data.getUTCHours();
            mm = data.getUTCMinutes();
            ss = data.getUTCSeconds();
            break;

        default:
            throw "Wrong utcFormatBool parametr";
    }

    //исправляем форматирование времени
    if (hh < 10) {
        res += "0";
    }
    res += hh + ":";

    if (mm < 10) {
        res += "0";
    }
    res += mm + ":";

    if (ss < 10) {
        res += "0";
    }
    res += ss;
    return res;
}