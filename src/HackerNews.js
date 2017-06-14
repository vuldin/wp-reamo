import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import FlipMove from 'react-flip-move'

@inject('store')
@observer
export default class extends Component {
  render () {
    return (
      <FlipMove
        duration={500}
        easing='ease-in-out'
        typeName='ul'
        enterAnimation={'accordianVertical'}
        leaveAnimation={'accordianVertical'}
        style={{
          listStyle: 'none',
          padding: 0
        }}
      >
        {this.props.store.posts.map((post, i) =>
          <Post key={post.id} post={post} />
        )}
      </FlipMove>
    )
  }
}

class Post extends Component {
  render () {
    let post = this.props.post
    return (
      <li>
        <a
          href={post.url}
          target='_blank'
          rel='noopener noreferrer'
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '70px',
            margin: 0,
            color: 'inherit',
            textDecoration: 'inherit'
          }}
        >
          {/*
          <Score>{`${data.score}: `}</Score>
          <Subreddit>{data.subreddit}</Subreddit>
          */}
          <div>{post.text}</div>
        </a>
      </li>
    )
  }
}
