const initialState = {
  followerList: [{
      avatar: "https://instagram.fsgn2-3.fna.fbcdn.net/vp/47ec7e42667162b88ee6edad54156584/5CA352F1/t51.2885-19/s150x150/44377321_281267495857242_1536691637256716288_n.jpg",
      name: "KTT",
      isFollowing: true
    },
    {
      avatar: "https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
      name: "Miao Miao",
      isFollowing: false
    },
    {
      avatar: "https://www.wonderplugin.com/videos/demo-image0.jpg",
      name: "Sight",
      isFollowing: true
    },
    {
      avatar: "https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg?auto=compress&cs=tinysrgb&h=350",
      name: "Rosike",
      isFollowing: true
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGU91BKoHbBa9bry8Go-TTW9t263vcG9aqzaIwrBfNtWanOeq9Q",
      name: "Sunflower",
      isFollowing: false
    }
  ]
}

const followerList = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default followerList