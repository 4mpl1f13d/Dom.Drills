document.addEventListener("DOMContentLoaded", function () {
    // Tester to check entry of function
    // console.log('DOM fully loaded and parsed');

    let div = document.createElement('div');
    div.className = "header-container";

    // H1 call
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an H1.');
    h1.appendChild(h1Text);
    div.appendChild(h1);
    document.body.appendChild(div);

    // H2 call
    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an H2.');
    div.className = "header-container";
    h2.appendChild(h2Text);
    div.appendChild(h2);
    document.body.appendChild(div);

    // H3 call
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an H3.');
    div.className = "header-container";
    h3.appendChild(h3Text);
    div.appendChild(h3);
    document.body.appendChild(div);

    // H4 call
    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an H4.');
    div.className = "header-container";
    h4.appendChild(h4Text);
    div.appendChild(h4);
    document.body.appendChild(div);

    // H5 call
    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an H5.');
    div.className = "header-container";
    h5.appendChild(h5Text);
    div.appendChild(h5);
    document.body.appendChild(div);

    // H6 call
    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an H6.');
    div.className = "header-container";
    h6.appendChild(h6Text);
    div.appendChild(h6);
    document.body.appendChild(div);

    // Array of Colors function
    div.addEventListener("dblclick", function (e) {
        const colors = ["#C2272D", "#db7c0f", "#FFFF01", "#009245", "#91c3db", "#ca04ed", "#612F90", "#aeff00"];
        e.target.style.color = colors[Math.floor(Math.random() * colors.length)];
    });

    // Add a List item for Button click Template literal
    let i=1; 
    liCounter=1;
    let button = document.getElementsByClassName('btnClass');
    button[0].addEventListener("click", function () {
        let li = document.createElement('li');
        li.id=i;
        let liText = document.createTextNode(`This is list item ${i}`);
        li.appendChild(liText);
        document.body.appendChild(li);
        i++;

        // li.addEventListener('click', function(){
        //     changeColor(li);
        // });

        li.addEventListener('dblclick', function(){
            removeListItem(li);
        });

        ul.appendChild(li);
        liCounter++;
    })

    function removeListItem(li){
        li.parentNode.removeChild(li);

    }



});

