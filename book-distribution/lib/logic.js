
/**
 * issueBook
 * @param {org.bjitgroup.com.issueBook} exchangeBook - the issueBook transaction
 * @transaction
 */
async function issueBook(exchangeBook){
  
    var   aa=exchangeBook.book.Ownership;
     if(aa[0]=='s')
     {
       alert("This book is not availabel");
     }
  else
  {
    exchangeBook.book.Ownership = exchangeBook.student.studentId;
    //exchangeBook.book.issueDate = exchangeBook.timestamp;
    exchangeBook.book.returnDate = exchangeBook.returnDate;
    exchangeBook.book.status = "NotAvailable";
    exchangeBook.library.libraryId=exchangeBook.library.libraryId;
  return getAssetRegistry('org.bjitgroup.com.Book')
        .then(function (assetRegistry) {
            return assetRegistry.update(exchangeBook.book);
        })
    .then(function(){
      return getAssetRegistry('org.bjitgroup.com.Library')
       .then(function (assetRegistry) {
            return assetRegistry.update(exchangeBook.library);
        });
    });
  }
}
/**
 * returnBook
 * @param {org.bjitgroup.com.returnBook} exchangeBook - the returnBook transaction
 * @transaction
 */
async function returnBook(exchangeBook){
  exchangeBook.book.Ownership=exchangeBook.book.bookId;
  exchangeBook.book.status="Available";
  if(exchangeBook.book.returnDate<exchangeBook.timestamp){
    alert("Deadline over and  give fine");
    exchangeBook.amount.amount=exchangeBook.amount.amount+10;
  }
  
 // exchangeBook.book.returnDate=" ";
  
  
  //const obj = await getAssetRegistry('org.bjitgroup.com.Book');
   //await obj.update(exchangeBook.book);
   //const obj2 = await getAssetRegistry('org.bjitgroup.com.Amount');
   //await obj2.update(exchangeBook.amount);
  
   
  
  
  return  getAssetRegistry('org.bjitgroup.com.Book')
  .then(function(assetRegistry){
        return assetRegistry.update(exchangeBook.book);
        })
    .then(function () {
            return  getAssetRegistry('org.bjitgroup.com.Amount')
            .then(function (assetRegistry) {
                return assetRegistry.update(exchangeBook.amount);
            });    
         
  });
     
}
  
  
  





