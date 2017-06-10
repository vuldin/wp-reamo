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
          <Post key={post.data.id} post={post} />
        )}
      </FlipMove>
    )
  }
}

class Post extends Component {
  render () {
    let data = this.props.post.data
    return (
      <li>
        <a
          href={data.url}
          target='_blank'
          rel='noopener noreferrer'
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '40px',
            margin: 0,
            color: 'inherit',
            textDecoration: 'inherit'
          }}
        >
          <Score>{`${data.score}: `}</Score>
          <Subreddit>{data.subreddit}</Subreddit>
          <div>{data.title}</div>
        </a>
      </li>
    )
  }
}
const Score = styled.div`
  flex: 0 0 55px;
  text-align: right;
  margin-right: 8px;
`
const Subreddit = styled.div`
  flex: 0 0 200px;
`
