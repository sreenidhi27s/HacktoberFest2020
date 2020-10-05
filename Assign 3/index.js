var text=document.getElementById('text');
var btn= document.getElementById('add');
var removee= document.getElementById('removee');
var remli=document.getElementById('del');
btn.addEventListener('click',function(){
   var ul= document.getElementById('ul');
  

   if(text.value.length==0)
   {
      alert('enter element');
   }
   else{
      var add= document.createElement('li');
      add.className="list";
      var addbtn= document.createElement('button');
      var textarea= document.createTextNode(text.value);
   add.appendChild(textarea);
   add.appendChild(addbtn);
   ul.appendChild(add);
   text.value="";
   addbtn.className='btn btn-grp delete fa fa-trash-o';
   addbtn.id="del";
   }
 
   

});
removee.addEventListener('click', function(){
   
   var ul= document.getElementById('ul');
   if(ul.childElementCount==0)
   {
      alert('No Items Exist');
   }
   else{
      var first= ul.firstChild;
      first.remove();
   }
  
   
})
remli.addEventListener('click',function(){
   var par=remli.parentElement;
   par.remove();

});

