

user = {
    _id:objectID,
    userName:String,
    isActive: ["offline","online"],
    hasProfile: Boolean
}

artist = {
    user_id:ObjectID("user")
    artistName: String,
    artistHasLabel: Boolean,
    artistHasAlbums: 0,
    newArtist: Boolean,
}


songs = {
    user_id:ObjectID('user'),
    hasSongs: Boolean


}

Album = {
    user_id:ObjectID('user')

}

Genre = {
    user_id:ObjectID('user')
}

Favorites = {
    user_id:ObjectID('user'),
    favoriteSong: Boolean,

    favoriteSongList: [],
}