"use strict";
/*
 Tyler Green
 CISC 131
 11-18-2014
 Puzzle part 2
*/
window.onload=function()
{
	var button;
	var i;
	var element;
	i=0
	button=document.getElementById("button");
	button.onclick=scrambleTiles;
	for(i=0;i<16;i++)
	{
		element=document.getElementById("tile"+i);
		element.onclick=function(){makeMove(this.id)}
	}

};

function makeMove(id)
{
	var i;
	var count;
	var j;
	var k;
	i=getNumericSuffix(getEmptyTile());
	j=getNumericSuffix(id);
	count=0;
	if(getRowNumber(i)===getRowNumber(j))
	{
		count=1;
	}
	if(getColumnNumber(i)===getColumnNumber(j))
	{
		count=4;
	}
	if(i>j)
	{
		count=count*-1;
	}
	if(count!==0)
	{
		while(i!==j)
		{
			k=i+count;
			swapInfo(getTileElement(i),getTileElement(k));
			i=k;
		}
	}
	return (i!==0);
}

function getRowNumber(number)
{
	return(Math.floor(number/4));
}

function getColumnNumber(number)
{
	return(number%4);
}

function getNumericSuffix(string)
{
	var i;
	var result;
	result="";
	for(i=0;i<string.length;i++)
	{
		if(isNumeric(string.charAt(i))===true)
		{
			result=result+string.charAt(i);
		}
	}
	return Number(result);
}

function scrambleTiles(){makeRandomMove(0,200);}

function makeRandomMove(count,limit)
{
	while(!makeMove("tile"+getRandomInteger(15))){}
	count=count+1;
	if(count<limit)
	{
		window.setTimeout(function(){makeRandomMove(count,limit)},100);
	}
}

/*
function scrambleTiles()
{
	var i;
	i=0
	while(i<100)
	{
		swapInfo(getTileElement(getRandomInteger(16)),getTileElement(getRandomInteger(16)));
		i=i+1
	}
}
*/

function getTileElement(tileNumber)
{
	return(document.getElementById("tile"+tileNumber));
}

function getEmptyTile()
{
	var i;
	i=0;
	var result;
	while(i<16)
	{
		if(getTileElement(i).className==="emptyTile")
		{
			result= getTileElement(i).id
		}
	    i=i+1;
	}
	return result;

}

function swapInfo(element1, element2)
{


	var temp;

    temp=element1.innerHTML;
	element1.innerHTML=element2.innerHTML;
	element2.innerHTML=temp;

    temp=element1.className;
	element1.className=element2.className;
	element2.className=temp;

}

function getRandomInteger(upperLimit)
{
	var result;
	return Math.floor(Math.random()*(upperLimit+1));
    return result;
}

function isNumeric(data)
{
	return (isNaN(trim(data))===false && Number(trim(data)).length===undefined && trim(data)!==null);
}

function trim(data)
{
	var whitespace;
	var start;
	var end;
	var result;
    if(typeof data==="string")   //first if
    {
		whitespace=" \n\r\t\f";
		start=0;
		while(start<data.length && whitespace.indexOf(data.charAt(start))>=0) //first while
		{
			start=start+1;
		}
		end=data.length-1;
		while(end>=0 && whitespace.indexOf(data.charAt(end))>=0)   //second while
		{
			end=end-1;
		}
		if(end<start)    //second if
		{
			result="";
		}
		else         //else to second if
		{
			result= data.substring(start,end+1);
		}

	}
	else
	{
		result=data;
	}
return result;
}
