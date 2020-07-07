/*
* Author: Piaypan K
* Date: 8/7/2020 @ 03:52AM
* */

let input_list;
let search_key;
let search_type;
let result;

window.onload = function(){
    input_list  = document.getElementById("txt_input_list");
    search_key  = document.getElementById("txt_search");
    search_type = document.getElementById("sel_search");
    result      = document.getElementById("txt_results");
    document.getElementById("btn_search").addEventListener("click", function()
    {
        result.innerHTML = "";
        let flag = true;
        if(isEmpty(input_list))
        {  result.innerHTML += "Input List is empty.\n\n"; flag = false; }
        if(isEmpty(search_key))
        {  result.innerHTML += "Search Key is empty.\n\n"; flag = false; }
        if(flag === true)
            executeSearch();
    });
};

function executeSearch()
{
    let key  = search_key.value.trim();
    let list = input_list.value.trim().split(",");
    let str  = "List: [" + input_list.value.trim() + "]\n";
    str     += "\nSearch: " + key + "\n";
    str     += "\nRESULT ::: \n\n";
    result.innerHTML = str;
    switch(search_type.value)
    {
        case '0':
            linear_search(key, list);
            break;
        case '1':
            binary_search(key, list, 0);
            break;
        case '2':
            bubble_search(key, list);
            break;
    }
}

function linear_search(key, array)
{
    let flag = false;
    for(let i = 0; i <= array.length - 1; i++)
    {
        if(key !== array[i])
            result.innerHTML += "Round : " + (i+1) + " --> " + key + " != " + array[i] + "\n\n";
        else {
            flag = true;
            result.innerHTML += "Round : " + (i + 1) + " --> " + key + " = " + array[i] + " found!\n\n";
            break;
        }
    }
    if(!flag)
        result.innerHTML += "\n\bSearch Value dose not exist!\b\n";
}

function binary_search(key, array)
{
    let round = 1;
    let left  = 0;
    let right = array.length - 1;
    let a     = array.sort();
    let flag  = false;
    while(left <= right)
    {
        let m = Math.floor((left + right) / 2);
        if(a[m] < key)
            left  = m + 1;
        else if(a[m] > key)
            right = m - 1;
        else {
            result.innerHTML += "Round : " + round + " --> " + key + " = " + a[m] + " found!\n\n";
            flag = true;
            return m;
        }
        result.innerHTML += "Round : " + round + " --> " + key + " != " + a[m] + "\n\n";
        round++;
    }
    if(!flag)
        result.innerHTML += "\n\bSearch Value dose not exist!\b\n";
}

function bubble_search(key, array)
{
    let flag = false;
    let round = 1;
    for(let i = 0; i < array.length - 1; i++)
    {
        for(let j = 0; j < array.length - i - 1; j++)
        {
            if(array[j] > array[j+1])
            {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            if(key === array[j])
            {
                result.innerHTML += "Round : " + (round++) + " --> " + key + " = " + array[j] + " found!\n\n";
                flag = true;
                break;
            }
            else
                result.innerHTML += "Round : " + (round++) + " --> " + key + " != " + array[j] + "\n\n";
        }
        if(flag)
            break;
    }
    console.log(array);
    if(!flag)
        result.innerHTML += "\n\bSearch Value dose not exist!\b\n";
}

function isEmpty(element)
{
    return element.value.length <= 0;
}