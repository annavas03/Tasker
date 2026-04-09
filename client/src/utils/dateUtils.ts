/**
@param deadlineDate
@returns boolean
 **/

export const getDeadlineStatus = (deadlineDate:Date | string) => {

    const now = new Date();
    const deadline = new Date(deadlineDate);

    now.setHours(0,0,0,0)
    deadline.setHours(0,0,0,0)

    const diffInMs = deadline.getTime() - now.getTime();
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays < 0) {
        return{
            status: 'overdue' ,
            label: `${Math.abs(diffInDays)} days late`
        }
    } else if(diffInDays <= 3){
        return {
            status: 'urgent' ,
            label: `${diffInDays} days left`
        };
    } else{
        return {
            status: 'normal',
            label: deadline.toLocaleDateString('uk-UA')
        }
    }
}