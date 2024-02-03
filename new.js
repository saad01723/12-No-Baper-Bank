document.getElementById("submit-d-btn").addEventListener("click", function(){
    const depositeElement = document.getElementById("deposite-input-one");
    const depodepo = depositeElement.value ;
    const infodepo = parseFloat(depodepo);



    //////////////////
    
    const depositeTotalElement = document.getElementById("total-deposite");
    const depositeTotal = depositeTotalElement.innerText;
    const priviusDeposite = parseFloat(depositeTotal);


    /////////////////////////////
    const totaTaka = infodepo + priviusDeposite ;
    depositeTotalElement.innerText = totaTaka ;

    const currentBlanceElemant = document.getElementById("total-blance");
    const previousBlanceTotal = currentBlanceElemant.innerText;
    const totalBlance = parseFloat(previousBlanceTotal);
    const newBlance = totalBlance + infodepo ; 

    currentBlanceElemant.innerText = newBlance;
    

    depositeElement.value= "";
})
    

///////////////////////////////// wow ///////

document.getElementById("submit-w-btn").addEventListener("click", function(){

    const widthdrowElement = document.getElementById("Withdrow-input-two");
    widthrowdepo = widthdrowElement.value ;
    infowidthrow = parseFloat(widthrowdepo) ;

    const widthrowTotalElement = document.getElementById("totalWidthrow") ;
    const widthrowTotal = widthrowTotalElement.innerText ;
    const priviusWidthrow = parseFloat(widthrowTotal);

    const totalAmount = infowidthrow + priviusWidthrow ;
    widthrowTotalElement.innerText = totalAmount ; 

    const newCurrentElemant = document.getElementById("total-blance");
    const priviusWidthrowTotal = newCurrentElemant.innerText ; 
    const newTotatlTaka = parseFloat(priviusWidthrowTotal);
    const AnatherBlance = newTotatlTaka - infowidthrow ;

    newCurrentElemant.innerText = AnatherBlance ;

    widthdrowElement.value= "";
})



