import { observable } from 'mobx'
import jsonp from 'jsonp'
import profanity from './profanity'

class Store {
  @observable timer = 0
  @observable posts = []
  isUpdating = false
  redditPostsUrl = 'https://www.reddit.com/r/all/rising.json'

  constructor () {
    this.toggle()
  }
  startTimer () {
    this.timerInterval = setInterval(() => {
      this.timer += 1
    }, 1000)
  }
  stopTimer () {
    clearInterval(this.timerInterval)
  }
  startUpdate () {
    this.loadPosts()
    this.updateInterval = setInterval(this.loadPosts, 30 * 1000)
  }
  stopUpdate () {
    clearInterval(this.updateInterval)
  }
  toggle () {
    if (this.isUpdating === false) {
      this.startTimer()
      this.startUpdate()
    } else {
      this.stopTimer()
      this.stopUpdate()
    }
    this.isUpdating = !this.isUpdating
  }

  loadPosts = async () => {
    let posts = await this.load(this.redditPostsUrl)
    this.posts = posts
      .filter(d => !d.data.over_18)
      .filter(d => d.data.subreddit.toLowerCase().indexOf('trump') === -1)
      .filter(d => d.data.subreddit !== 'The_Donald')
      .map(d => {
        d.data.subreddit = profanity.filter(d.data.subreddit)
        d.data.title = profanity.filter(d.data.title)
        return d
      })
      .sort((a, b) => a.data.score - b.data.score)
      .reverse()
  }
  load (url) {
    return new Promise((resolve, reject) => {
      jsonp(url, { param: 'jsonp' }, (err, data) => {
        err ? reject(err) : resolve(data.data.children)
      })
    })
  }
}

export default Store
