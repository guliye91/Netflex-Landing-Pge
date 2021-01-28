const tabItems = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content-item');
const tabOneContents = document.querySelector('.tab-1-contents')
const tabTwoContents = document.querySelector('.tab-2-contents')
const tabThreeContents = document.querySelector('.tab-3-contents')

// select tab content item
function selectItem(e){
    removeBorder();
    removeShow()
    //add border to current tab
    this.classList.add('tab-border');
    // grab content item for dom
    // const tabContentItem = document.querySelector(`#${this.id}-content`);
    // console.log(this.id)
    // tabContentItem.classList.add('show');
    if(this.classList.contains('tab-1')){
        tabOneContents.classList.add('show');
    }else if(this.classList.contains('tab-2')){
        tabTwoContents.classList.add('show');
    }
    else{
        tabThreeContents.classList.add('show');
    }
}

function removeBorder() {
    tabItems.forEach((item)=>{
        item.classList.remove('tab-border');
    })
}
function removeShow(){
    tabContent.forEach((item)=>{
        item.classList.remove('show');
    })
}

// listen for tab click
tabItems.forEach((item)=>{
    item.addEventListener('click', selectItem)
})