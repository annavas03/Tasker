/**
 @returns boolean
 * @param n
 **/

const getDayLabel = (n: number): string => {
    const abs=Math.abs(n);
    const lastDigit = abs % 10;
    const lastTwo = abs%100;
    if(lastTwo >= 11 && lastTwo <= 19)return 'днів';
    if(lastDigit ===1 )return 'день';
    if(lastDigit >=2 && lastDigit <= 4) return 'дні';
    return 'днів';
}

export const getDeadlineStatus = (deadlineDate:Date | string) => {

    const now = new Date();
    const deadline = new Date(deadlineDate);

    now.setHours(0,0,0,0)
    deadline.setHours(0,0,0,0)

    const diffInMs = deadline.getTime() - now.getTime();
    const diffInDays =Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays < 0) {
        const absDays = Math.abs(diffInDays);
        return{
            status: absDays >= 2 ? 'overdue': 'critical' ,
            label: `Прострочено на ${absDays} ${getDayLabel(absDays)}`,
        }
    } else if(diffInDays === 0) {
        return {
            status: 'today',
            label: `Сьогодні: ${diffInDays} `
        }
    } else if(diffInDays <= 3){
        return {
            status: 'urgent' ,
            label: `Залишилось: ${diffInDays} ${getDayLabel(diffInDays)}`,
        };
    }return {
            status: 'normal',
            label: deadline.toLocaleDateString('uk-UA')
    }
}