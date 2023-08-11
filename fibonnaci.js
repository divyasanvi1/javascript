function fibonacciGenerator (n) {
    
       var arr1=[];
    
       if(n===1)
       {
           console.log [0];
       }
       else if(n===2)
       {
          console.log [0,1];
       }
      
            arr1=[0,1];
            for(var i=2 ;i<n ;i++)
            {
            arr1.push(arr1[arr1.length-2]+arr1[arr1.length-1]);
            }
            console.log(arr1);
            
    }
    fibonacciGenerator (n);
    
