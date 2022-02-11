let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const deleteBtn=document.getElementById("delete-btn")
const ulEl=document.getElementById("ul-el")
const tabBtn=document.getElementById("tab-btn")

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click",function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)//.url to log out the url only not the whole object
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
     })
        
    })
function render(leads){
    let listItems=""
    for(i=0; i<leads.length; i++){
        listItems+=`
        <li>
            <a target='_blank' href=${leads[i]}>
                ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML=listItems
}

deleteBtn.addEventListener("click",function(){
    localStorage.clear()
    myLeads=[]
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
})