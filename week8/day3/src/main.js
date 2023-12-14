
const quotesArray = [
    { "id": 0, "author": "Albert Einstein", "quote": "Imagination is more important than knowledge." },
    { "id": 1, "author": "Mark Twain", "quote": "The secret of getting ahead is getting started." },
    { "id": 2, "author": "Maya Angelou", "quote": "You can't use up creativity. The more you use, the more you have." },
    { "id": 3, "author": "Aristotle", "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit." },
    { "id": 4, "author": "Confucius", "quote": "It does not matter how slowly you go as long as you do not stop." },
    { "id": 5, "author": "Oscar Wilde", "quote": "Be yourself; everyone else is already taken." },
    { "id": 6, "author": "Nelson Mandela", "quote": "It always seems impossible until it's done." },
    { "id": 7, "author": "Winston Churchill", "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts." },
    { "id": 8, "author": "Steve Jobs", "quote": "Innovation distinguishes between a leader and a follower." },
    { "id": 9, "author": "Helen Keller", "quote": "The only thing worse than being blind is having sight but no vision." },
    { "id": 10, "author": "Martin Luther King Jr.", "quote": "Faith is taking the first step even when you don't see the whole staircase." },
    { "id": 11, "author": "Leonardo da Vinci", "quote": "Learning never exhausts the mind." },
    { "id": 12, "author": "Vincent Van Gogh", "quote": "I am seeking, I am striving, I am in it with all my heart." },
    { "id": 13, "author": "Pablo Picasso", "quote": "Every child is an artist. The problem is how to remain an artist once we grow up." },
    { "id": 14, "author": "Socrates", "quote": "An unexamined life is not worth living." },
    { "id": 15, "author": "Marie Curie", "quote": "Be less curious about people and more curious about ideas." },
    { "id": 16, "author": "Galileo Galilei", "quote": "You cannot teach a man anything; you can only help him find it within himself." },
    { "id": 17, "author": "George Bernard Shaw", "quote": "Life isn't about finding yourself. Life is about creating yourself." },
    { "id": 18, "author": "William Shakespeare", "quote": "We know what we are, but know not what we may be." },
    { "id": 19, "author": "Jane Austen", "quote": "It isn't what we say or think that defines us, but what we do." },
    { "id": 20, "author": "Steve Jobs", "quote": "Second quote" },
    { "id": 21, "author": "Steve Jobs", "quote": "Third quote" },
];


for (quote of quotesArray){
    quote.likes=0;
}

var current_counter=0;
var id=0;

function generate(event){
    event.preventDefault();

    id=Math.floor(Math.random() * (quotesArray.length));

    while (id==current_counter){
        id=Math.floor(Math.random() * (quotesArray.length));
    }
    // console.log(id);
    // console.log(quotesArray[id]);
    document.querySelector('#quote').innerHTML=quotesArray[id].quote;
    document.querySelector('#author').innerHTML=quotesArray[id].author;

    current_counter=id;

    document.querySelector('#count_characters').removeAttribute('disabled');
    document.querySelector('#count_characters_spaces').removeAttribute('disabled');
    document.querySelector('#count_words').removeAttribute('disabled');
    document.querySelector('#like_button').removeAttribute('disabled');

    document.querySelector('#characters').innerHTML="";
    document.querySelector('#characters_space').innerHTML="";
    document.querySelector('#words').innerHTML="";
    document.querySelector('#like_counter').innerHTML="";

}


function add(event){
    event.preventDefault();
    var quote=document.querySelector('#quote_entered').value;
    var author=document.querySelector('#author_entered').value;
    
    entry=new Object();
    entry.id=quotesArray.length;
    entry.author=author;
    entry.quote=quote;
    entry.likes=0;
    quotesArray.push(entry);
    console.log(quotesArray);
}

document.querySelector('#generate').addEventListener('click', generate);
document.querySelector('#add').addEventListener('click', add);

document.querySelector('#count_characters').addEventListener('click', function (event){
    event.preventDefault();
    var quote=quotesArray[id].quote;
    var words=quote.split(" ");
    var quote_no_spaces=words.join("");
    document.querySelector('#characters').innerHTML=quote_no_spaces.length;
    console.log('workds');

});
document.querySelector('#count_characters_spaces').addEventListener('click',  function (event){
    event.preventDefault();
    var quote=quotesArray[id].quote;
    document.querySelector('#characters_space').innerHTML=quote.length;
});
// 'the man is singing'
// ['the','man','is','singing']
document.querySelector('#count_words').addEventListener('click', function (event){
    event.preventDefault();
    var quote=quotesArray[id].quote;
    var words=quote.split(" ");
    document.querySelector('#words').innerHTML=words.length;
});
document.querySelector('#like_button').addEventListener('click', function (event){
    event.preventDefault();
    var quote=quotesArray[id];
    quote.likes=quote.likes+1;
    document.querySelector('#like_counter').innerHTML= quote.likes;

    // var quote=
});

var current_search_position=0;
let results=[];
document.querySelector('#search_button').addEventListener('click', function (event){
    event.preventDefault();
    var keyword=document.querySelector("#search_author").value;
    keyword=keyword.toLowerCase();

    // document.querySelector('#next').removeAttribute('disabled');
    // document.querySelector('#previous').removeAttribute('disabled');

    document.querySelector("#search_buttons").classList.remove('hidden');
    for (quote of quotesArray){
        var current_author=quote.author.toLowerCase();
        if (current_author==keyword){
            results.push(quote.quote);
        }
    }
    quotes_list=document.querySelector('#search_results');
    document.querySelector('#search_results').innerHTML="";
    for (result of results){
        new_element=document.createElement('li');
        new_element.innerHTML=result;
        quotes_list.appendChild(new_element);
    }

    if (results.length>1){
        document.querySelector('#next').removeAttribute('disabled');
        document.querySelector('#previous').removeAttribute('disabled');
    }
   

    // var quote=
});

document.querySelector('#next').addEventListener('click', function (event){
    current_search_position=current_search_position+1;
    if (current_search_position>=results.length){
        current_search_position=0;
    };    
    document.querySelector("#current_quote").innerHTML=results[current_search_position];
});

document.querySelector('#previous').addEventListener('click', function (event){
    current_search_position=current_search_position-1;
    if (current_search_position<0){
        current_search_position=results.length-1;
    }; 

    document.querySelector("#current_quote").innerHTML=results[current_search_position];
});