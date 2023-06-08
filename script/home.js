// featured_post
let featured_post = document.querySelector("#cards_list");
let post = [
    {
        title: " 2023 Video Game Release Date Calendar ",
        imageUrl: " https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2023%2F01%2F2023-release-gaming-calendar-game-rant.jpg%3Fq%3D50%26fit%3Dcontain%26w%3D1140%26h%3D%26dpr%3D1.5 ",
        description: " Check out this guide to find out the release dates for every major video game coming out in 2023. ",
        },
        {
        title: " Will Smith confronts Chris Rock over Jada Pinkett Smith “joke” at Oscars 2022 ",
        imageUrl: " https://www.nme.com/wp-content/uploads/2022/03/will-smith-oscars-2022-696x442.jpg ",
        description: " The actor later apologised for his actions while collecting the award for Best Actor, saying: `Love will make you do crazy things`",
        },
        {
        title: " Declan Rice delivers pulsating final act to push West Ham over the line ",
        imageUrl: " https://i.guim.co.uk/img/media/045af41da88d37ecceb40e56369fd67b368fad0b/0_164_3500_2100/master/3500.jpg?width=620&quality=45&dpr=2&s=none ",
        description: " Fiorentina impressed but David Moyes's side dug deep thanks to their relentless captain who is expected to leave this summer ",
        },
        {
        title: " The Dark Assailant - A Short Story ",
        imageUrl: " https://thedarkestblog.com/wp-content/uploads/2022/12/dark-assailant-595x448.jpg ",
        description: " A faint ray of light was still burning in the bedroom that evening before the deafening ringing in her ears began. There was a pit of silence in the room […] ",
        },
        {
        title: " WhatsApp launches Channels feature for broadcast messages ",
        imageUrl: " https://techcrunch.com/wp-content/uploads/2023/06/WhatsApp-channels.jpg?w=1390&crop=1 ",
        description: " Meta is rolling out a broadcast-based messaging feature, called Channels, on WhatsApp, similar to a recent update it sent out to Instagram, as the social juggernaut experiments with giving more con... ",
        },
        {
        title: " WOK FRIED PEANUTS / HOW TO FRY PEANUTS ",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcUKyFaWBPl8AD3oYBQMK0-5o_CHY3HJvyJw&usqp=CAU",
        description: "  You'll see these fried peanuts often in Cantonese restaurants, served in small dishes around a Lazy Susan along with pots of tea. They're the perfect little appetizer while you wait for your meal to arrive. Wok fried peanuts are an ideal... ",
        }
]

post.forEach( (post)=>{
    featured_post.innerHTML += `
    <div id="featured_post_cards">
        <div class="card" style="width: 18rem;">
            <img src="${post.imageUrl}" class="card-img-top" alt="features">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.description}</p>
            </div>
        </div>
    </div>  
    `
})