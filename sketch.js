var canvas;

var total,total2,total3;

var sound;

function preload(){
    sound = loadSound("Music.mp3");
}

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);

    sound.play();

    text = createElement('h2');

    text2 = createElement('h3');
    button = createButton("Metro");
    button2 = createButton("Urban");
    button3 = createButton("Semi-Urban");

    button4 = createButton("Calculate");

    text3 = createElement('h4');

    text4 = createElement('h2');
    text5 = createElement('h4');
    text6 = createElement('h4');

    text7 = createElement('h2');
    text8 = createElement('h4');
    text9 = createElement('h4');
    
    text10 = createElement('h2');
    text11 = createElement('h4');
    text12 = createElement('h4');

    text13 = createElement('h2');
    text14 = createElement('h4');
    text15 = createElement('h4');

    text16 = createElement('h2');
    text17 = createElement('h4');
    text18 = createElement('h4');

    text19 = createElement('h2');
    text20 = createElement('h4');
    text21 = createElement('h4');

    text22 = createElement('h2');
    text23 = createElement('h4');
    text24 = createElement('h4');

    text25 = createElement('h2');
    text26 = createElement('h4');
    text27 = createElement('h4');

    text28 = createElement('h2');
    text29 = createElement('h4');
    text30 = createElement('h4');

    text31 = createElement('h2');
    text32 = createElement('h4');
    text33 = createElement('h4');

    text34 = createElement('h3');

    text35 = createElement('h1');
    text36 = createElement('h4');
    text37 = createElement('h4');
    text38 = createElement('h4');
    text39 = createElement('h4');
    text40 = createElement('h4');
    text41 = createElement('h4');
    text42 = createElement('h4');
    text43 = createElement('h4');
    text44 = createElement('h4');
    text45 = createElement('h4');
    text46 = createElement('h3');

    input = createInput("");
}

function draw(){
    background("#20B2AA");

    text.html("Construction Cost according to location(all calculations are according to 1 sq.ft of land.)(Get knowledge about your House Construction Cost by entering your house area after choosing the location of your house.) ");
    text.position(displayWidth/2-500,displayHeight/2+175);
    text.style("font-family","Berlin Sans FB");
    text.style("textDecoration","underline");
    text.style("background-color","#e4e4a1");

    text2.html("Please select the location of the plot:");
    text2.position(200,displayHeight/2+350);
    text2.style("font-family","Courier New");
    text2.style("textDecoration","underline");
    text2.style("background-color","#e4e4a1");

    button.position(650,displayHeight/2+365);
    button.style("font-family","Berlin Sans FB");
    button.style("background-color","crimson");
    button.style("color","#000000");
    button.style("width","160px");
    button.style("height","30px");
    button.style("font-size","22px");

    button2.position(830,displayHeight/2+365);
    button2.style("font-family","Berlin Sans FB");
    button2.style("background-color","crimson");
    button2.style("color","#000000");
    button2.style("width","160px");
    button2.style("height","30px");
    button2.style("font-size","22px");

    button3.position(1010,displayHeight/2+365);
    button3.style("font-family","Berlin Sans FB");
    button3.style("background-color","crimson");
    button3.style("color","#000000");
    button3.style("width","160px");
    button3.style("height","30px");
    button3.style("font-size","22px");

    button.mousePressed(()=>{
        text4.html("Foundation:");
        text4.position(displayWidth/2-450,displayHeight/2+400);
        text4.style("font-family","Courier New");
        text4.style("textDecoration","underline");
        text4.style("background-color","#c0aee0");
        text4.style("background-color","#e4e4a1");

        text5.html("Including excavation and construction upto plinth.It takes 13% of the total house construction cost.");
        text5.position(displayWidth/2-285,displayHeight/2+395);
        text5.style("font-family","Courier New");
        text5.style("textDecoration","underline");
        text5.style("background-color","pink");

        text6.html("Therefore, the cost of foundation(including excavation and plinth) will be Rs.195.");
        text6.position(displayWidth/2-400,displayHeight/2 + 435);
        text6.style("font-family","Courier New");
        text6.style("textDecoration","underline");
        text6.style("background-color","pink");

        text7.html("Superstructure in brickwall:");
        text7.position(displayWidth/2-450,displayHeight/2+480);
        text7.style("font-family","Courier New");
        text7.style("textDecoration","underline");
        text7.style("background-color","#e4e4a1");

        text8.html("It will cost 25% of the total house construction cost.");
        text8.position(displayWidth/2-40,displayHeight/2+485);
        text8.style("font-family","Courier New");
        text8.style("textDecoration","underline");
        text8.style("background-color","pink");

        text9.html("Therefore, the cost of Superstructure in brickwall will be Rs.375.");
        text9.position(displayWidth/2-350,displayHeight/2+515);
        text9.style("font-family","Courier New");
        text9.style("textDecoration","underline");
        text9.style("background-color","pink");

        text10.html("Roofing including water proofing:");
        text10.position(displayWidth/2-450,displayHeight/2+560);
        text10.style("font-family","Courier New");
        text10.style("textDecoration","underline");
        text10.style("background-color","#e4e4a1");

        text11.html("It will cost 17% of the total house construction cost.");
        text11.position(displayWidth/2+30,displayHeight/2+565);
        text11.style("font-family","Courier New");
        text11.style("textDecoration","underline");
        text11.style("background-color","pink");

        text12.html("Therefore, the cost of Roofing and Waterproofing will be Rs.255.");
        text12.position(displayWidth/2-340,displayHeight/2+595);
        text12.style("font-family","Courier New");
        text12.style("textDecoration","underline");
        text12.style("background-color","pink");

        text13.html("Flooring:");
        text13.position(displayWidth/2-450,displayHeight/2+640);
        text13.style("font-family","Courier New");
        text13.style("textDecoration","underline");
        text13.style("background-color","#e4e4a1");

        text14.html("It will cost 6% of the total house construction cost.");
        text14.position(displayWidth/2-317,displayHeight/2+645);
        text14.style("font-family","Courier New");
        text14.style("textDecoration","underline");
        text14.style("background-color","pink");

        text15.html("Therefore, the cost of Flooring will be Rs.90.");
        text15.position(displayWidth/2-317,displayHeight/2+675);
        text15.style("font-family","Courier New");
        text15.style("textDecoration","underline");
        text15.style("background-color","pink");

        text16.html("Wood work(Joinery, Doors and Windows):");
        text16.position(displayWidth/2-450,displayHeight/2+720);
        text16.style("font-family","Courier New");
        text16.style("textDecoration","underline");
        text16.style("background-color","#e4e4a1");

        text17.html("It will cost 13% of the total house construction cost.");
        text17.position(displayWidth/2+100,displayHeight/2+725);
        text17.style("font-family","Courier New");
        text17.style("textDecoration","underline");
        text17.style("background-color","pink");

        text18.html("Therefore, the cost of Wood work will be Rs.195.");
        text18.position(displayWidth/2-350, displayHeight/2+755);
        text18.style("font-family","Courier New");
        text18.style("textDecoration","underline");
        text18.style("background-color","pink");

        text19.html("Internal Finishes:");
        text19.position(displayWidth/2-450,displayHeight/2+800);
        text19.style("font-family","Courier New");
        text19.style("textDecoration","underline");
        text19.style("background-color","#e4e4a1");

        text20.html("It will cost 6% of the total house construction cost.");
        text20.position(displayWidth/2-185,displayHeight/2+805);
        text20.style("font-family","Courier New");
        text20.style("textDecoration","underline");
        text20.style("background-color","pink");

        text21.html("Therefore, the cost of Internal Finishes will be Rs.90.");
        text21.position(displayWidth/2-205,displayHeight/2+835);
        text21.style("font-family","Courier New");
        text21.style("textDecoration","underline");
        text21.style("background-color","pink");

        text22.html("External Finishes:");
        text22.position(displayWidth/2-450,displayHeight/2+880);
        text22.style("font-family","Courier New");
        text22.style("textDecoration","underline");
        text22.style("background-color","#e4e4a1");

        text23.html("It will cost 3% of the total house construction cost.");
        text23.position(displayWidth/2-185,displayHeight/2+885);
        text23.style("font-family","Courier New");
        text23.style("textDecoration","underline");
        text23.style("background-color","pink");

        text24.html("Therefore, the cost of External Fnishes will be Rs.45.");
        text24.position(displayWidth/2-205,displayHeight/2+915);
        text24.style("font-family","Courier New");
        text24.style("textDecoration","underline");
        text24.style("background-color","pink");

        text25.html("Water Supply:");
        text25.position(displayWidth/2-450,displayHeight/2+965);
        text25.style("font-family","Courier New");
        text25.style("textDecoration","underline");
        text25.style("background-color","#e4e4a1");

        text26.html("It will cost 4% of the total house construction cost.");
        text26.position(displayWidth/2-240,displayHeight/2+970);
        text26.style("font-family","Courier New");
        text26.style("textDecoration","underline");
        text26.style("background-color","pink");

        text27.html("Therefore, the cost of Water Supply will be Rs.60.");
        text27.position(displayWidth/2-185,displayHeight/2+1000);
        text27.style("font-family","Courier New");
        text27.style("textDecoration","underline");
        text27.style("background-color","pink");

        text28.html("Sanitary Work:");
        text28.position(displayWidth/2-450,displayHeight/2+1040);
        text28.style("font-family","Courier New");
        text28.style("textDecoration","underline");
        text28.style("background-color","#e4e4a1");

        text29.html("It will cost 8% of the total house construction cost.");
        text29.position(displayWidth/2-240,displayHeight/2+1045);
        text29.style("font-family","Courier New");
        text29.style("textDecoration","underline");
        text29.style("background-color","pink");

        text30.html("Therefore, the cost of Sanitary Work will be Rs.120.");
        text30.position(displayWidth/2-185,displayHeight/2+1075);
        text30.style("font-family","Courier New");
        text30.style("textDecoration","underline");
        text30.style("background-color","pink");
    
        text31.html("Electrification:");
        text31.position(displayWidth/2-450,displayHeight/2+1115);
        text31.style("font-family","Courier New");
        text31.style("textDecoration","underline");
        text31.style("background-color","#e4e4a1");

        text32.html("It will cost 5% of the total house construction cost.");
        text32.position(displayWidth/2-215,displayHeight/2+1120);
        text32.style("font-family","Courier New");
        text32.style("textDecoration","underline");
        text32.style("background-color","pink");

        text33.html("Therefore, the cost of Electrification will be Rs.75.");
        text33.position(displayWidth/2-185,displayHeight/2+1150);
        text33.style("font-family","Courier New");
        text33.style("textDecoration","underline");
        text33.style("background-color","pink");

        text35.html("Calulate your House Construction Cost");
        text35.position(displayWidth/2-300,displayHeight/2+1200);
        text35.style("font-family","Berlin Sans FB");
        text35.style("textDecoration","underline");
        text35.style("background-color","#e4e4a1");

        text34.html("Enter your plot area(in sq.ft) : ");
        text34.position(displayWidth/2-280,displayHeight/2+1320);
        text34.style("font-family","Courier New");
        text34.style("textDecoration","underline");
        text35.style("background-color","#e4e4a1");

        input.position(displayWidth/2+90,displayHeight/2+1340);
        input.style("font-family","Comic Sans MS");
        input.style("background-color","#cd00cd");
        input.style("color","#000000");

        button4.position(displayWidth/2-150,displayHeight/2+1370);
        button4.style("font-family","Berlin Sans FB");
        button4.style("background-color","crimson");
        button4.style("color","#000000");
        button4.style("width","200px");
        button4.style("height","40px");
        button4.style("font-size","22px");

        button4.mousePressed(()=>{
            if(input.value()){
                text36.html("Foundation Cost(including excavation and construction upto plinth) : Rs." + input.value()*195);
                text36.position(displayWidth/2-350,displayHeight/2+1420);
                text36.style("font-family","Courier New");
                text36.style("textDecoration","underline");
                text36.style("background-color","pink");

                text37.html("Superstructure in brickwork : Rs." + input.value()*375);
                text37.position(displayWidth/2-170,displayHeight/2+1440);
                text37.style("font-family","Courier New");
                text37.style("textDecoration","underline");
                text37.style("background-color","pink");

                text38.html("Roofing including water proofing : Rs." + input.value()*255);
                text38.position(displayWidth/2-200,displayHeight/2+1460);
                text38.style("font-family","Courier New");
                text38.style("textDecoration","underline");
                text38.style("background-color","pink");

                text39.html("Flooring : Rs." + input.value()*90);
                text39.position(displayWidth/2-120,displayHeight/2+1480);
                text39.style("font-family","Courier New");
                text39.style("textDecoration","underline");
                text39.style("background-color","pink");

                text40.html("Wood Work : Rs." + input.value()*195);
                text40.position(displayWidth/2-125,displayHeight/2+1500);
                text40.style("font-family","Courier New");
                text40.style("textDecoration","underline");
                text40.style("background-color","pink");

                text41.html("Internal Finishes : Rs." + input.value()*90);
                text41.position(displayWidth/2-120,displayHeight/2+1520);
                text41.style("font-family","Courier New");
                text41.style("textDecoration","underline");
                text41.style("background-color","pink");

                text42.html("External Finishes : Rs." + input.value()*45);
                text42.position(displayWidth/2-140,displayHeight/2+1540);
                text42.style("font-family","Courier New");
                text42.style("textDecoration","underline");
                text42.style("background-color","pink");

                text43.html("Water Supply : Rs." + input.value()*60);
                text43.position(displayWidth/2-140,displayHeight/2+1560);
                text43.style("font-family","Courier New");
                text43.style("textDecoration","underline");
                text43.style("background-color","pink");

                text44.html("Sanitary Work : Rs." + input.value()*120);
                text44.position(displayWidth/2-140,displayHeight/2+1580);
                text44.style("font-family","Courier New");
                text44.style("textDecoration","underline");
                text44.style("background-color","pink");

                text45.html("Electrification : Rs." + input.value()*75);
                text45.position(displayWidth/2-150,displayHeight/2+1600);
                text45.style("font-family","Courier New");
                text45.style("textDecoration","underline");
                text45.style("background-color","pink");

                total = input.value()*195 + input.value()*375 + input.value()*255 + input.value()*90 + input.value()*195 + input.value()*90 + input.value()*45 + input.value()*60 + input.value()*120 + input.value()*75;

                text46.html("Total Cost : Rs." + total);
                text46.position(displayWidth/2-150,displayHeight/2+ 1640);
                text46.style("font-family","Courier New");
                text46.style("textDecoration","underline");
                text46.style("background-color","#8e6bbd");
            }
        })
    })

    button2.mousePressed(()=>{
        text4.html("Foundation:");
        text4.position(displayHeight/2-150,displayHeight/2+400);
        text4.style("font-family","Courier New");
        text4.style("textDecoration","underline");
        text4.style("background-color","#e4e4a1");

        text5.html("Including excavation and construction upto plinth.It takes 13% of the total house construction cost.");
        text5.position(displayWidth/2-285,displayHeight/2+395);
        text5.style("font-family","Courier New");
        text5.style("textDecoration","underline");
        text5.style("background-color","pink");

        text6.html("Therefore, the cost of foundation(including excavation and plinth) will be Rs.156.");
        text6.position(displayWidth/2-400,displayHeight/2+435);
        text6.style("font-family","Courier New");
        text6.style("textDecoration","underline");
        text6.style("background-color","pink");

        text7.html("Superstructure in brickwall:");
        text7.position(displayWidth/2-450,displayHeight/2+480);
        text7.style("font-family","Courier New");
        text7.style("textDecoration","underline");
        text7.style("background-color","#e4e4a1");

        text8.html("It will cost 25% of the total house construction cost.");
        text8.position(displayWidth/2-40,displayHeight/2+485);
        text8.style("font-family","Courier New");
        text8.style("textDecoration","underline");
        text8.style("background-color","pink");

        text9.html("Therefore, the cost of Superstructure in brickwall will be Rs.300.");
        text9.position(displayWidth/2-350,displayHeight/2+515);
        text9.style("font-family","Courier New");
        text9.style("textDecoration","underline");
        text9.style("background-color","pink");

        text10.html("Roofing including water proofing:");
        text10.position(displayWidth/2-450,displayHeight/2+560);
        text10.style("font-family","Courier New");
        text10.style("textDecoration","underline");
        text10.style("background-color","#e4e4a1");

        text11.html("It will cost 17% of the total house construction cost.");
        text11.position(displayWidth/2+30,displayHeight/2+565);
        text11.style("font-family","Courier New");
        text11.style("textDecoration","underline");
        text11.style("background-color","pink");

        text12.html("Therefore, the cost of Roofing and Waterproofing will be Rs.204.");
        text12.position(displayWidth/2-340,displayHeight/2+595);
        text12.style("font-family","Courier New");
        text12.style("textDecoration","underline");
        text12.style("background-color","pink");

        text13.html("Flooring:");
        text13.position(displayWidth/2-450,displayHeight/2+640);
        text13.style("font-family","Courier New");
        text13.style("textDecoration","underline");
        text13.style("background-color","#e4e4a1");

        text14.html("It will cost 6% of the total house construction cost.");
        text14.position(displayWidth/2-317,displayHeight/2+645);
        text14.style("font-family","Courier New");
        text14.style("textDecoration","underline");
        text14.style("background-color","pink");

        text15.html("Therefore, the cost of Flooring will be Rs.72.");
        text15.position(displayWidth/2-317,displayHeight/2+675);
        text15.style("font-family","Courier New");
        text15.style("textDecoration","underline");
        text15.style("background-color","pink");

        text16.html("Wood work(Joinery, Doors and Windows):");
        text16.position(displayWidth/2-450,displayHeight/2+720);
        text16.style("font-family","Courier New");
        text16.style("textDecoration","underline");
        text16.style("background-color","#e4e4a1");

        text17.html("It will cost 13% of the total house construction cost.");
        text17.position(displayWidth/2+100,displayHeight/2+725);
        text17.style("font-family","Courier New");
        text17.style("textDecoration","underline");
        text17.style("background-color","pink");

        text18.html("Therefore, the cost of Wood work will be Rs.156.");
        text18.position(displayWidth/2-295, displayHeight/2+755);
        text18.style("font-family","Courier New");
        text18.style("textDecoration","underline");
        text18.style("background-color","pink");

        text19.html("Internal Finishes:");
        text19.position(displayWidth/2-450,displayHeight/2+800);
        text19.style("font-family","Courier New");
        text19.style("textDecoration","underline");
        text19.style("background-color","#e4e4a1");

        text20.html("It will cost 6% of the total house construction cost.");
        text20.position(displayWidth/2-185,displayHeight/2+805);
        text20.style("font-family","Courier New");
        text20.style("textDecoration","underline");
        text20.style("background-color","pink");

        text21.html("Therefore, the cost of Internal Finishes will be Rs.72.");
        text21.position(displayWidth/2-205,displayHeight/2+835);
        text21.style("font-family","Courier New");
        text21.style("textDecoration","underline");
        text21.style("background-color","pink");

        text22.html("External Finishes:");
        text22.position(displayWidth/2-450,displayHeight/2+880);
        text22.style("font-family","Courier New");
        text22.style("textDecoration","underline");
        text22.style("background-color","#e4e4a1");

        text23.html("It will cost 3% of the total house construction cost.");
        text23.position(displayWidth/2-185,displayHeight/2+885);
        text23.style("font-family","Courier New");
        text23.style("textDecoration","underline");
        text23.style("background-color","pink");

        text24.html("Therefore, the cost of External Fnishes will be Rs.36.");
        text24.position(displayWidth/2-205,displayHeight/2+915);
        text24.style("font-family","Courier New");
        text24.style("textDecoration","underline");
        text24.style("background-color","pink");

        text25.html("Water Supply:");
        text25.position(displayWidth/2-450,displayHeight/2+965);
        text25.style("font-family","Courier New");
        text25.style("textDecoration","underline");
        text25.style("background-color","#e4e4a1");

        text26.html("It will cost 4% of the total house construction cost.");
        text26.position(displayWidth/2-240,displayHeight/2+970);
        text26.style("font-family","Courier New");
        text26.style("textDecoration","underline");
        text26.style("background-color","pink");

        text27.html("Therefore, the cost of Water Supply will be Rs.48.");
        text27.position(displayWidth/2-205,displayHeight/2+1000);
        text27.style("font-family","Courier New");
        text27.style("textDecoration","underline");
        text27.style("background-color","pink");

        text28.html("Sanitary Work:");
        text28.position(displayWidth/2-450,displayHeight/2+1040);
        text28.style("font-family","Courier New");
        text28.style("textDecoration","underline");
        text28.style("background-color","#e4e4a1");

        text29.html("It will cost 8% of the total house construction cost.");
        text29.position(displayWidth/2-240,displayHeight/2+1045);
        text29.style("font-family","Courier New");
        text29.style("textDecoration","underline");
        text29.style("background-color","pink");

        text30.html("Therefore, the cost of Sanitary Work will be Rs.96.");
        text30.position(displayWidth/2-205,displayHeight/2+1075);
        text30.style("font-family","Courier New");
        text30.style("textDecoration","underline");
        text30.style("background-color","pink");
    
        text31.html("Electrification:");
        text31.position(displayWidth/2-450,displayHeight/2+1115);
        text31.style("font-family","Courier New");
        text31.style("textDecoration","underline");
        text31.style("background-color","#e4e4a1");

        text32.html("It will cost 5% of the total house construction cost.");
        text32.position(displayWidth/2-215,displayHeight/2+1120);
        text32.style("font-family","Courier New");
        text32.style("textDecoration","underline");
        text32.style("background-color","pink");

        text33.html("Therefore, the cost of Electrification will be Rs.60.");
        text33.position(displayWidth/2-205,displayHeight/2+1150);
        text33.style("font-family","Courier New");
        text33.style("textDecoration","underline");
        text33.style("background-color","pink");

        text35.html("Calulate your House Construction Cost");
        text35.position(displayWidth/2-300,displayHeight/2+1200);
        text35.style("font-family","Berlin Sans FB");
        text35.style("textDecoration","underline");
        text35.style("background-color","#e4e4a1");

        text34.html("Enter your plot area(in sq.ft) : ");
        text34.position(displayWidth/2-280,displayHeight/2+1320);
        text34.style("font-family","Courier New");
        text34.style("textDecoration","underline");
        text34.style("background-color","#e4e4a1");

        input.position(displayWidth/2+90,displayHeight/2+1340);
        input.style("font-family","Comic Sans MS");
        input.style("background-color","#cd00cd");
        input.style("color","#000000");

        button4.position(displayWidth/2-150,displayHeight/2+1370);
        button4.style("font-family","Berlin Sans FB");
        button4.style("background-color","crimson");
        button4.style("color","#000000");
        button4.style("width","200px");
        button4.style("height","40px");
        button4.style("font-size","22px");

        button4.mousePressed(()=>{
            if(input.value()){
                text36.html("Foundation Cost(including excavation and construction upto plinth) : Rs." + input.value()*156);
                text36.position(displayWidth/2-350,displayHeight/2+1420);
                text36.style("font-family","Courier New");
                text36.style("textDecoration","underline");
                text36.style("background-color","pink");

                text37.html("Superstructure in brickwork : Rs." + input.value()*300);
                text37.position(displayWidth/2-170,displayHeight/2+1440);
                text37.style("font-family","Courier New");
                text37.style("textDecoration","underline");
                text37.style("background-color","pink");

                text38.html("Roofing including water proofing : Rs." + input.value()*204);
                text38.position(displayWidth/2-200,displayHeight/2+1460);
                text38.style("font-family","Courier New");
                text38.style("textDecoration","underline");
                text38.style("background-color","pink");

                text39.html("Flooring : Rs." + input.value()*72);
                text39.position(displayWidth/2-120,displayHeight/2+1480);
                text39.style("font-family","Courier New");
                text39.style("textDecoration","underline");
                text39.style("background-color","pink");

                text40.html("Wood Work : Rs." + input.value()*156);
                text40.position(displayWidth/2-125,displayHeight/2+1500);
                text40.style("font-family","Courier New");
                text40.style("textDecoration","underline");
                text40.style("background-color","pink");

                text41.html("Internal Finishes : Rs." + input.value()*72);
                text41.position(displayWidth/2-120,displayHeight/2+1520);
                text41.style("font-family","Courier New");
                text41.style("textDecoration","underline");
                text41.style("background-color","pink");

                text42.html("External Finishes : Rs." + input.value()*36);
                text42.position(displayWidth/2-140,displayHeight/2+1540);
                text42.style("font-family","Courier New");
                text42.style("textDecoration","underline");
                text42.style("background-color","pink");

                text43.html("Water Supply : Rs." + input.value()*48);
                text43.position(displayWidth/2-140,displayHeight/2+1560);
                text43.style("font-family","Courier New");
                text43.style("textDecoration","underline");
                text43.style("background-color","pink");

                text44.html("Sanitary Work : Rs." + input.value()*96);
                text44.position(displayWidth/2-140,displayHeight/2+1580);
                text44.style("font-family","Courier New");
                text44.style("textDecoration","underline");
                text44.style("background-color","pink");

                text45.html("Electrification : Rs." + input.value()*60);
                text45.position(displayWidth/2-150,displayHeight/2+1600);
                text45.style("font-family","Courier New");
                text45.style("textDecoration","underline");
                text45.style("background-color","pink");

                total = input.value()*156+input.value()*300+input.value()*204+input.value()*72+input.value()*156+input.value()*72+input.value()*36+input.value()*48+input.value()*96+input.value()*60;

                text46.html("Total Cost : Rs." + total);
                text46.position(displayWidth/2-150,displayHeight/2+1640);
                text46.style("font-family","Courier New");
                text46.style("textDecoration","underline");
                text46.style("background-color","#8e6bbd");
            }
    
        })
    })   

    button3.mousePressed(()=>{
        text4.html("Foundation:");
        text4.position(displayHeight/2-150,displayHeight/2+400);
        text4.style("font-family","Courier New");
        text4.style("textDecoration","underline");
        text4.style("background-color","#e4e4a1");

        text5.html("Including excavation and construction upto plinth.It takes 13% of the total house construction cost.");
        text5.position(displayWidth/2-285,displayHeight/2+405);
        text5.style("font-family","Courier New");
        text5.style("textDecoration","underline");
        text5.style("background-color","pink");

        text6.html("Therefore, the cost of foundation(including excavation and plinth) will be Rs.104.");
        text6.position(displayWidth/2-400,displayHeight/2 + 435);
        text6.style("font-family","Courier New");
        text6.style("textDecoration","underline");
        text6.style("background-color","pink");

        text7.html("Superstructure in brickwall:");
        text7.position(displayWidth/2-450,displayHeight/2+480);
        text7.style("font-family","Courier New");
        text7.style("textDecoration","underline");
        text7.style("background-color","#e4e4a1");

        text8.html("It will cost 25% of the total house construction cost.");
        text8.position(displayWidth/2-40,displayHeight/2+485);
        text8.style("font-family","Courier New");
        text8.style("textDecoration","underline");
        text8.style("background-color","pink");

        text9.html("Therefore, the cost of Superstructure in brickwall will be Rs.200.");
        text9.position(displayWidth/2-350,displayHeight/2+515);
        text9.style("font-family","Courier New");
        text9.style("textDecoration","underline");
        text9.style("background-color","pink");

        text10.html("Roofing including water proofing:");
        text10.position(displayWidth/2-450,displayHeight/2+560);
        text10.style("font-family","Courier New");
        text10.style("textDecoration","underline");
        text10.style("background-color","#e4e4a1");

        text11.html("It will cost 17% of the total house construction cost.");
        text11.position(displayWidth/2-30,displayHeight/2+565);
        text11.style("font-family","Courier New");
        text11.style("textDecoration","underline");
        text11.style("background-color","pink");

        text12.html("Therefore, the cost of Roofing and Waterproofing will be Rs.136.");
        text12.position(displayWidth/2-340,displayHeight/2+595);
        text12.style("font-family","Courier New");
        text12.style("textDecoration","underline");
        text12.style("background-color","pink");

        text13.html("Flooring:");
        text13.position(displayWidth/2-450,displayHeight/2+640);
        text13.style("font-family","Courier New");
        text13.style("textDecoration","underline");
        text13.style("background-color","#e4e4a1");

        text14.html("It will cost 6% of the total house construction cost.");
        text14.position(displayWidth/2-317,displayHeight/2+645);
        text14.style("font-family","Courier New");
        text14.style("textDecoration","underline");
        text14.style("background-color","pink");

        text15.html("Therefore, the cost of Flooring will be Rs.48.");
        text15.position(displayWidth/2-317,displayHeight/2+675);
        text15.style("font-family","Courier New");
        text15.style("textDecoration","underline");
        text15.style("background-color","pink");

        text16.html("Wood work(Joinery, Doors and Windows):");
        text16.position(displayWidth/2-450,displayHeight/2+720);
        text16.style("font-family","Courier New");
        text16.style("textDecoration","underline");
        text16.style("background-color","#e4e4a1");

        text17.html("It will cost 13% of the total house construction cost.");
        text17.position(displayWidth/2+100,displayHeight/2+725);
        text17.style("font-family","Courier New");
        text17.style("textDecoration","underline");
        text17.style("background-color","pink");

        text18.html("Therefore, the cost of Wood work will be Rs.104.");
        text18.position(displayWidth/2-295, displayHeight/2+755);
        text18.style("font-family","Courier New");
        text18.style("textDecoration","underline");
        text18.style("background-color","pink");

        text19.html("Internal Finishes:");
        text19.position(displayWidth/2-450,displayHeight/2+800);
        text19.style("font-family","Courier New");
        text19.style("textDecoration","underline");
        text19.style("background-color","#e4e4a1");

        text20.html("It will cost 6% of the total house construction cost.");
        text20.position(displayWidth/2-185,displayHeight/2+805);
        text20.style("font-family","Courier New");
        text20.style("textDecoration","underline");
        text20.style("background-color","pink");

        text21.html("Therefore, the cost of Internal Finishes will be Rs.48.");
        text21.position(displayWidth/2-205,displayHeight/2+835);
        text21.style("font-family","Courier New");
        text21.style("textDecoration","underline");
        text21.style("background-color","pink");

        text22.html("External Finishes:");
        text22.position(displayWidth/2-450,displayHeight/2+880);
        text22.style("font-family","Courier New");
        text22.style("textDecoration","underline");
        text22.style("background-color","#e4e4a1");

        text23.html("It will cost 3% of the total house construction cost.");
        text23.position(displayWidth/2-185,displayHeight/2+885);
        text23.style("font-family","Courier New");
        text23.style("textDecoration","underline");
        text23.style("background-color","pink");

        text24.html("Therefore, the cost of External Fnishes will be Rs.24.");
        text24.position(displayWidth/2-205,displayHeight/2+915);
        text24.style("font-family","Courier New");
        text24.style("textDecoration","underline");
        text24.style("background-color","pink");

        text25.html("Water Supply:");
        text25.position(displayWidth/2-450,displayHeight/2+965);
        text25.style("font-family","Courier New");
        text25.style("textDecoration","underline");
        text25.style("background-color","#e4e4a1");

        text26.html("It will cost 4% of the total house construction cost.");
        text26.position(displayWidth/2-240,displayHeight/2+970);
        text26.style("font-family","Courier New");
        text26.style("textDecoration","underline");
        text26.style("background-color","pink");

        text27.html("Therefore, the cost of Water Supply will be Rs.32.");
        text27.position(displayWidth/2-185,displayHeight/2+1000);
        text27.style("font-family","Courier New");
        text27.style("textDecoration","underline");
        text27.style("background-color","pink");

        text28.html("Sanitary Work:");
        text28.position(displayWidth/2-450,displayHeight/2+1040);
        text28.style("font-family","Courier New");
        text28.style("textDecoration","underline");
        text28.style("background-color","#e4e4a1");

        text29.html("It will cost 8% of the total house construction cost.");
        text29.position(displayWidth/2-240,displayHeight/2+1045);
        text29.style("font-family","Courier New");
        text29.style("textDecoration","underline");
        text29.style("background-color","pink");

        text30.html("Therefore, the cost of Sanitary Work will be Rs.64.");
        text30.position(displayWidth/2-185,displayHeight/2+1075);
        text30.style("font-family","Courier New");
        text30.style("textDecoration","underline");
        text30.style("background-color","pink");
    
        text31.html("Electrification:");
        text31.position(displayWidth/2-450,displayHeight/2+1115);
        text31.style("font-family","Courier New");
        text31.style("textDecoration","underline");
        text31.style("background-color","#e4e4a1");

        text32.html("It will cost 5% of the total house construction cost.");
        text32.position(displayWidth/2-215,displayHeight/2+1120);
        text32.style("font-family","Courier New");
        text32.style("textDecoration","underline");
        text32.style("background-color","pink");

        text33.html("Therefore, the cost of Electrification will be Rs.40.");
        text33.position(displayWidth/2-185,displayHeight/2+1150);
        text33.style("font-family","Courier New");
        text33.style("textDecoration","underline");
        text33.style("background-color","pink");

        text35.html("Calulate your House Construction Cost");
        text35.position(displayWidth/2-300,displayHeight/2+1200);
        text35.style("font-family","Berlin Sans FB");
        text35.style("textDecoration","underline");
        text35.style("background-color","#e4e4a1");

        text34.html("Enter your plot area(in sq.ft) : ");
        text34.position(displayWidth/2-280,displayHeight/2+1320);
        text34.style("font-family","Courier New");
        text34.style("textDecoration","underline");
        text35.style("background-color","#e4e4a1");

        input.position(displayWidth/2+90,displayHeight/2+1340);
        input.style("font-family","Comic Sans MS");
        input.style("background-color","#cd00cd");
        input.style("color","#000000");

        button4.position(displayWidth/2-150,displayHeight/2+1370);
        button4.style("font-family","Berlin Sans FB");
        button4.style("background-color","crimson");
        button4.style("color","#000000");
        button4.style("width","200px");
        button4.style("height","40px");
        button4.style("font-size","22px");

        button4.mousePressed(()=>{
            if(input.value()){
                text36.html("Foundation Cost(including excavation and construction upto plinth) : Rs." + input.value()*104);
                text36.position(displayWidth/2-350,displayHeight/2+1420);
                text36.style("font-family","Courier New");
                text36.style("textDecoration","underline");
                text36.style("background-color","pink");

                text37.html("Superstructure in brickwork : Rs." + input.value()*200);
                text37.position(displayWidth/2-170,displayHeight/2+1440);
                text37.style("font-family","Courier New");
                text37.style("textDecoration","underline");
                text37.style("background-color","pink");

                text38.html("Roofing including water proofing : Rs." + input.value()*136);
                text38.position(displayWidth/2-200,displayHeight/2+1460);
                text38.style("font-family","Courier New");
                text38.style("textDecoration","underline");
                text38.style("background-color","pink");

                text39.html("Flooring : Rs." + input.value()*48);
                text39.position(displayWidth/2-120,displayHeight/2+1480);
                text39.style("font-family","Courier New");
                text39.style("textDecoration","underline");
                text39.style("background-color","pink");

                text40.html("Wood Work : Rs." + input.value()*104);
                text40.position(displayWidth/2-125,displayHeight/2+1500);
                text40.style("font-family","Courier New");
                text40.style("textDecoration","underline");
                text40.style("background-color","pink");

                text41.html("Internal Finishes : Rs." + input.value()*48);
                text41.position(displayWidth/2-120,displayHeight/2+1520);
                text41.style("font-family","Courier New");
                text41.style("textDecoration","underline");
                text41.style("background-color","pink");

                text42.html("External Finishes : Rs." + input.value()*24);
                text42.position(displayWidth/2-140,displayHeight/2+1540);
                text42.style("font-family","Courier New");
                text42.style("textDecoration","underline");
                text42.style("background-color","pink");

                text43.html("Water Supply : Rs." + input.value()*32);
                text43.position(displayWidth/2-140,displayHeight/2+1560);
                text43.style("font-family","Courier New");
                text43.style("textDecoration","underline");
                text43.style("background-color","pink");

                text44.html("Sanitary Work : Rs." + input.value()*64);
                text44.position(displayWidth/2-140,displayHeight/2+1580);
                text44.style("font-family","Courier New");
                text44.style("textDecoration","underline");
                text44.style("background-color","pink");

                text45.html("Electrification : Rs." + input.value()*40);
                text45.position(displayWidth/2-150,displayHeight/2+1600);
                text45.style("font-family","Courier New");
                text45.style("textDecoration","underline");
                text45.style("background-color","pink");

                total = input.value()*104+input.value()*200+input.value()*136+input.value()*48+input.value()*104+input.value()*48+input.value()*24+input.value()*32+input.value()*64+input.value()*40;

                text46.html("Total Cost : Rs." + total);
                text46.position(displayWidth/2-150,displayHeight/2+1640);
                text46.style("font-family","Courier New");
                text46.style("textDecoration","underline");
                text46.style("background-color","#8e6bbd");
            }
        })    
    })
}