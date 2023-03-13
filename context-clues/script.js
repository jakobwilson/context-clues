for (var i = 1; i < 101; i++) {
    (function (i) {
        setTimeout(function () {
            
        }, i * 1000);
        
        var h3 = document.createElement('h3');
        h3.textContent = `Accusation ${i}`;
        document.body.appendChild(h3);
        h3.addEventListener('click', function () {
            alert(accusationAlert(i));
        });
        function accusationAlert(i) {
            var friend = friends[i % 5];
            var location = locations[i % 10];
            var weapon = weapons[i % 20];
            function getAlert() {
                alert('Accusation ' + i + ': I accuse ' + friend + ' with the ' + weapon + ' in the ' + location + '!');
            }
            getAlert();
        }
    })(i);
}


var friends = ['Jacob', 'Logan', 'Caleb', 'Tim', 'Lauren'];
var locations = ['Gym', 'Library', 'Basement', 'Bathtub', 'Sauna', 'Foam Pit', 'Graveyard', 'Big Kahuna', 'Washing Machine', 'Idaho'];
var weapons = ['Robot Dog', ' Eye-Blinding Rifle', 'Laser Pointer', 'Car Bomb', 'Soviet Attack Dolphin', 'High Pressure Water Hose', 'Shrink Ray', 'Burger King Foot Lettuce', 'Stinky Sock', 'Baby Chainsaw', 'See-Through Backpack', 'Melted Ice Pack', 'Jorts', 'Throwing Knife', 'Pineapple Pizza', 'Diet Soda', 'Nuclear Bomb', 'Sun Gun', 'Harmonica', 'Horse Tranquilizer'];

