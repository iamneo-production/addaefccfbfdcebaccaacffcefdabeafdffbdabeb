export const filterEven=(...arr)=>
{
    let li=[];
    arr.forEach(i=>
        {
            if(i%2==0)
            li.push(i);
        });
    return li;
}

export const filterOdd(...arr)=>
{
    let li = [];
    arr.forEach(i=>
        {
            if(i%2!=0)
            li.push(i);
        });
    return li;
}
