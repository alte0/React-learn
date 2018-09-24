import React from 'react';
import { Article } from './Article'

class News extends React.Component {
  renderNews = () => {
    const { data } = this.props
    let newsTemplate = null

    if (data.length) {
      newsTemplate = data.map(function (item, index) {
        return <Article key={item.id} data={item} />
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return newsTemplate
  }

  render() {
    const { data } = this.props

    return (
      <main className="news">
        {this.renderNews()}
        {data.length ? <strong>Всего новостей: {data.length}</strong> : null}
      </main>
    )
  }
}

export {News}