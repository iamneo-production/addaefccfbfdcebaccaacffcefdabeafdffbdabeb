export const filterOdd=(...arr)=>
{
    let li=[];
    arr.forEach(i=>{
        if(i%2!=0)
        {
            li.push(i);
        }
    });
    return li;
}
export const filterEven=(...arr)=>
{
    let li=[];
    arr.forEach(i=>{
        if(i%2==0)
        {
            ans.push(ele);
        }
    });
    return ans;
}
export const generateRandomList=(n=7)=>
{
    let res=[];
    for(let i=0;i<n;i++)
    {
        res.push(Math.floor(Math.random()*100));
    }
    return res;
}