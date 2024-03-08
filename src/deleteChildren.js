export { content }
export {  deleteKids }


const content = document.getElementById('content');

function deleteKids(){
  if (content.hasChildNodes()){
    while (content.firstChild){
      content.removeChild(content.firstChild)
    }
  };

};
