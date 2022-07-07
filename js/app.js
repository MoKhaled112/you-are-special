(function newQuote() {
    var Quotes = [
        'I love you. So. Fucking. Much.',
        'You make my days brighter <3',
        'Let\'s be happy forever!',
        'You make my heart go <img src="https://cdn.discordapp.com/emojis/872785260008579092.gif">',
        'You are so pretty!',
        'I love you!',
        'You put a smile on my face :)',
        'I + U = <3',
        'I\'m always thinking about you!',
        'Laugh more often please. You look pretty when you do',
        'I love your eye color!',
        'I\'m lucky to have found you!',
        'Spending time with you is always remarkable.',
        'All I want for Christmas is you!',
        'I like you. Can I keep you forever?',
        'Am I to be blamed for falling in love with you?',
        'Have a nice day today :D',
        'Thanks for being there for me.',
    ];
    var randomQuote = Math.floor(Math.random() * Quotes.length);
    document.getElementById('TextMain').innerHTML = Quotes[randomQuote];
  })();