//Omdat we Javascript nog niet in detail hebben bestudeerd,
// is deze code via de chat-gpt geschreven,
// maar ik weet hoe het werkt en kan het uitleggen.
// Ik kan ook vol vertrouwen zeggen dat ik heb geleerd
// hoe dit specifieke stukje code werkt
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const textDisplay = document.getElementById('textDisplay');



button1.addEventListener('click', () => {
    textDisplay.textContent = 'Als 18-jarige student uit Oekraïne' +
        ' volg ik een boeiende opleiding in softwareontwikkeling' +
        ' aan het College. Mijn lessen zijn uitdagend, maar niet ' +
        'overweldigend, en mijn vriendelijke klasgenoten maken ' +
        'de reis des te plezieriger. Mijn passie voor' +
        ' technologie groeit met elke dag, en ik ben ' +
        'vastbesloten om mijn kennis en vaardigheden ' +
        'verder te ontwikkelen. Samen met mijn ' +
        'medestudenten wil ik een positieve impact ' +
        'hebben op de wereld van technologie en innovatie,' +
        ' en ik kijk vol enthousiasme uit naar wat de' +
        ' toekomst te bieden heeft.';
    textDisplay.classList.add('textjs');


});

button2.addEventListener('click', () => {
    textDisplay.textContent = 'In mijn vrije tijd omarm' +
        ' ik de digitale avonturen van videogames,' +
        ' waarbij "CS 2" "Dota 2" "PUBG" "AC4: Black Flag"' +
        ' "Far Cry 3" en "Witcher 3" mijn favoriete ' +
        'werelden zijn om te verkennen.' +
        ' Het samenspelen en concurreren met ' +
        'vrienden in deze virtuele universums is een' +
        ' bron van vreugde en verbondenheid. Ik vind het' +
        ' heerlijk om mijn vrije tijd te delen met mijn ' +
        'vrienden, omdat we samen onvergetelijke momenten' +
        ' creëren in zowel de gamewereld als daarbuiten.';
    textDisplay.classList.add('textjs');

});

button3.addEventListener('click', () => {
    textDisplay.textContent = 'Mijn Europese Avontuur: Parijs, Berlijn ' +
        'en Mijn Volgende Bestemming, Praag\n' +
        '\n' +
        'Mijn vakantie ' +
        'in Parijs en Berlijn was werkelijk ' +
        'betoverend. Parijs bracht me in de' +
        ' ban met zijn romantische sfeer en iconische' +
        ' bezienswaardigheden zoals de Eiffeltoren en de ' +
        'prachtige Louvre. De stad van de liefde, met zijn ' +
        'heerlijke croissants en charmante Montmartre, was een droom die uitkwam.\n' +
        '\n' +
        'Berlijn daarentegen betoverde me met zijn rijke' +
        ' geschiedenis en bruisende hedendaagse cultuur. ' +
        'Het verkennen van de Berlijnse Muur, het bewonderen ' +
        'van de architectuur en genieten van de creatieve ' +
        'energie van de stad waren hoogtepunten.\n' +
        '\n' +
        'En nu kijk ik uit naar mijn volgende avontuur in Praag.' +
        ' De betoverende Praagse burcht, de schilderachtige Karelsbrug ' +
        'en de historische oude stad trekken me aan. Ik kan niet wachten ' +
        'om de rijke cultuur en geschiedenis van deze stad te verkennen.\n' +
        '\n' +
        'Elke stad heeft zijn eigen unieke charme en ik voel me ' +
        'bevoorrecht om deze prachtige plaatsen te mogen ontdekken.' +
        ' Op naar nieuwe avonturen en onvergetelijke herinneringen!';
    textDisplay.classList.add('textjs');
});

button4.addEventListener('click', () => {
    textDisplay.textContent = 'Als ober in een strandrestaurant in' +
        ' Hoek van Holland vind ik de balans tussen werk en mijn ' +
        'onderwijsdoelen uiterst belangrijk. Mijn dagen zijn gevuld' +
        ' met het verwelkomen van gasten, het opnemen van bestellingen' +
        ' en het serveren van heerlijke maaltijden met een glimlach. ' +
        'Tegelijkertijd streef ik naar academisch succes en werk ik ' +
        'aan mijn educatieve groei.\n' +
        '\n' +
        'Deze dubbele verantwoordelijkheid heeft me waardevolle ' +
        'vaardigheden geleerd, zoals time-management en klantenservice,' +
        ' die me zowel in mijn huidige werk als in mijn toekomstige carrière' +
        ' van pas zullen komen. Het is een uitdaging, maar ik geniet van de ' +
        'veelzijdigheid van mijn dagelijks leven en het feit dat ik zowel ' +
        'professioneel als academisch groei.';
    textDisplay.classList.add('textjs');
});