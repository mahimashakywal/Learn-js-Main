    const user= {id : 1, name : "mahima ", city :'udaipur'};

     let arr = Object.keys(user);
     const results =[];
     for ( let i= 0; i< arr.length; i++){
        const innerArray = [ ];
        const key = arr[i]; 
        innerArray.push(key);
        const value = user[key];
        innerArray.push(value);
        results.push(innerArray);
    }
       console.log(results);



       function isPlayingObject(para1){
        if(typeof(para1) === "object" && Array.isArray(para1)=== false ){
            return true;
        }
        else{
            return false;
        }
       }
       console.log(isPlayingObject({}));
       
 