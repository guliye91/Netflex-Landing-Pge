const tabItems = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content-item');

// select tab content item
function selectItem(e){
    removeBorder();
    removeShow()
    //add border to current tab
    this.classList.add('tab-border');
    // grab content item for dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    console.log(this.id)
    tabContentItem.classList.add('show');
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