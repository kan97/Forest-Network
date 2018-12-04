const initialState = {
  followingList: [{
      avatar: "https://i.pinimg.com/originals/6a/bc/b6/6abcb6df12595ae4eeb390ebf2610cba.png",
      name: "Eevee",
      isFollowing: true
    },
    {
      avatar: "https://cdn.gamerant.com/wp-content/uploads/new-pokemon-go-additions-datamine.jpg.optimal.jpg",
      name: "Jirachi",
      isFollowing: true
    },
    {
      avatar: "https://pokemongohub.net/wp-content/uploads/2018/03/mew-pokemon-go.jpg",
      name: "Mew mew",
      isFollowing: true
    },
    {
      avatar: "https://d2skuhm0vrry40.cloudfront.net/2018/articles/2018-03-28-11-25/Mareep.jpg/EG11/resize/300x-1/quality/75/format/jpg",
      name: "Mereep beeee",
      isFollowing: true
    },
    {
      avatar: "https://pokemongolive.com/img/posts/unibailsafarizone.jpg",
      name: "GO safari",
      isFollowing: true
    }
  ]
}

const followingList = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default followingList