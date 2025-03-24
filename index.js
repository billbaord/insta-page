const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492,
        isLiked: false 
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false 
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false 
    }
]

// Get DOM elements
const painterAv = document.getElementById("post-av-img")
const painterName = document.getElementById("painter-name")
const painterLocation = document.getElementById("painter-location")
const painterImage = document.getElementById("post-img")
const userComment = document.getElementById("user-comment")
const userName = document.getElementById("user-name")
const userLikes = document.getElementById("user-likes")
const likeBtn = document.getElementById("like-btn")
const nextBtn = document.getElementById("next-btn")

let currentIndex = 0

function renderPost(index) {
    const post = posts[index]
    painterAv.src = post.avatar
    painterName.textContent = post.name
    painterLocation.textContent = post.location
    painterImage.src = post.post
    userLikes.textContent = `${post.likes.toLocaleString()} likes`
    userName.textContent = post.username
    userComment.textContent = post.comment
    likeBtn.textContent = post.isLiked
}

likeBtn.addEventListener("click", function () {
    const post = posts[currentIndex]

    if (!post.isLiked) {
        post.likes += 1
        post.isLiked = true
    } else {
        post.likes -= 1
        post.isLiked = false
    }

    renderPost(currentIndex)
})

nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % posts.length
    renderPost(currentIndex)
})

renderPost(currentIndex)
