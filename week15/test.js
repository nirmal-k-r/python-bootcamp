x=[1,2,3,4,5]
y=[5,4,3,2,1]


function test(x,y){
    if (x.length == y.length){
        x=x.sort()
        y=y.sort()

        for (let i=0; i<x.length; i++){
            if (x[i]!=y[i]){
                return false
            }
        }
    }
    return false
}