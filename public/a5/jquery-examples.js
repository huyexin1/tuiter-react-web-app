function clickMe(){
    alert('thanks for click')
}

function init(){




    const hello = document.getElementById("hello");
    hello.style.color='red'

    const hello2 = $("#hello")
    hello2.css({'color': 'blue', 'background-color':'yellow'})

    $('#click-me-too').click(
        function(){
            alert('thanks for click')
        }
    )

    const todoList = $('todo');
    const walkDog = $('<li>Walk Dogs</li>')
    todoList.append(walkDogs)
}

jQuery(init)


