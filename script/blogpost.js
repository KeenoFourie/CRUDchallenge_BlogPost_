// Admin Object
let  featuredPosts = [
    {
    id: 1,
    title: "2023 Video Game Release Date Calendar",
    imageUrl: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2023%2F01%2F2023-release-gaming-calendar-game-rant.jpg%3Fq%3D50%26fit%3Dcontain%26w%3D1140%26h%3D%26dpr%3D1.5 ",
    description: "Check out this guide to find out the release dates for every major video game coming out in 2023.",
    content: "BY GREYSUN MORALES",
    websiteLink: "https://gamerant.com/video-game-release-dates-2023-new-upcoming/",
    date: new Date( ),
    },
    {
    id: 2,
    title: "Will Smith confronts Chris Rock over Jada Pinkett Smith “joke” at Oscars 2022",
    imageUrl: "https://www.nme.com/wp-content/uploads/2022/03/will-smith-oscars-2022-696x442.jpg",
    description: "The actor later apologised for his actions while collecting the award for Best Actor, saying: `Love will make you do crazy things`",
    content: "By Rhian Daly",
    websiteLink: "https://www.nme.com/news/will-smith-confronts-chris-rock-over-jada-pinkett-smith-joke-at-oscars-2022-3191627",
    date: new Date( ),
    },
    {
    id: 3,
    title: " Declan Rice delivers pulsating final act to push West Ham over the line ",
    imageUrl: " https://i.guim.co.uk/img/media/045af41da88d37ecceb40e56369fd67b368fad0b/0_164_3500_2100/master/3500.jpg?width=620&quality=45&dpr=2&s=none ",
    description: " Fiorentina impressed but David Moyes's side dug deep thanks to their relentless captain who is expected to leave this summer ",
    content: " By Ed Aarons ",
    websiteLink: " https://www.theguardian.com/football/blog/2023/jun/07/declan-rice-delivers-pulsating-final-act-to-push-west-ham-over-the-line ",
    date: new Date( ),
    },
    {
    id: 4,
    title: " The Dark Assailant - A Short Story ",
    imageUrl: " https://thedarkestblog.com/wp-content/uploads/2022/12/dark-assailant-595x448.jpg ",
    description: " A faint ray of light was still burning in the bedroom that evening before the deafening ringing in her ears began. There was a pit of silence in the room […] ",
    content: " By Nadia Schluter ",
    websiteLink: " https://thedarkestblog.com/the-dark-assailant/ ",
    date: new Date( ),
    },
    {
    id: 5,
    title: " WhatsApp launches Channels feature for broadcast messages ",
    imageUrl: " https://techcrunch.com/wp-content/uploads/2023/06/WhatsApp-channels.jpg?w=1390&crop=1 ",
    description: " Meta is rolling out a broadcast-based messaging feature, called Channels, on WhatsApp, similar to a recent update it sent out to Instagram, as the social juggernaut experiments with giving more con... ",
    content: " By Ivan Mehta ",
    websiteLink: " https://techcrunch.com/2023/06/08/whatsapp-launches-channels-feature-for-broadcast-messages/ ",
    date: new Date( ),
    },
    {
    id: 6,
    title: " WOK FRIED PEANUTS / HOW TO FRY PEANUTS ",
    imageUrl: "https://thewoksoflife.com/wp-content/uploads/2022/12/Chinese-fried-peanuts-appetizer-4.jpg",
    description: "  You'll see these fried peanuts often in Cantonese restaurants, served in small dishes around a Lazy Susan along with pots of tea. They're the perfect little appetizer while you wait for your meal to arrive. Wok fried peanuts are an ideal... ",
    content: " By JUDY ",
    websiteLink: " https://thewoksoflife.com/wok-fried-peanuts/ ",
    date: new Date( ),
    }
];

let table = document.querySelector("#blogPostList")
featuredPosts.forEach((buyer)=>{
    table.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${buyer.imageUrl}" alt="${buyer.title}" loading="lazy">
    <div class="card-body">
      <h5 class="card-title">${buyer.title}</h5>
      <p class="card-text">${buyer.description} <span>${buyer.content}</span></p>
      <p class="card-text">${buyer.content}</p>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Full Content
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Content</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h2 class="fs-5">If you want to find out more, click the link below:</h2>
    </div>
    
      <div class="modal-footer">
        <button type="button" class="btn"><a href="${buyer.websiteLink}" data-bs-toggle="tooltip" title="Tooltip">that link</a></button>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  </div>

    `
})