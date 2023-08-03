export const filterEven=(...arr)=>
{
    let li=[];
    arr.forEach(i=>
        {
            if(i%2==0)
            {
                li.push(i);
            }
        });
    return li;
}

export const filterOdd=(...arr)=>
{
    let li = [];
    arr.forEach(i=>
        {
            if(i%2!=0)
            {
                li.push(i);
            }
        });
    return li;
}

export const generateRandomList=(n)=>
{
    let ran = [];
    for (let i=0;i<n;i++)
    {
        ran.push(Math.floor(Math.random()*100));
    }
    return ran;
}

