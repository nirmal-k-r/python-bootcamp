var nums=[5,0,9,1,7,4,2,6,3,8];

j=0;
do{
    swapped=false;
    
    for (let i=0; i<nums.length;i++){
        if (nums[i]>nums[i+1]){
            temp=nums[i];
            nums[i]=nums[i+1];
            nums[i+1]=temp;
            swapped=true;
        }
    }
    j=j+1;
    console.log('Pass '+j.toString()+' \t'+nums.toString());
} while(swapped==true);
