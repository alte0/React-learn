import React from 'react';
import PropTypes from 'prop-types'

class Add extends React.Component {
  state = {
    nameAuthor: '',
    textNews: '',
    bigText: '',
    agree: false
  }
  changeHandler = (e) => {
    const { id, value } = e.currentTarget
    this.setState({ [id]: value })
  }
  changeCheckboxHandler = (e) => {
    this.setState({ agree: e.currentTarget.checked })
  }
  onBtnClickHandler = (e) => {
    e.preventDefault()
    const { nameAuthor, textNews, bigText } = this.state
    this.props.onAddNews({
      id: +new Date(),
      author: nameAuthor,
      text: textNews,
      bigText
    })
  }
  validate = () => {
    return this.state.nameAuthor.trim() && this.state.textNews.trim() && this.state.agree
  }
  render() {
    const { nameAuthor, textNews, bigText } = this.state
    return (
      <React.Fragment>
        <form className='add'>
          <input
            id="nameAuthor"
            type='text'
            className='add__author'
            placeholder='Ваше имя'
            value={nameAuthor}
            onChange={this.changeHandler}
          />
          <textarea
            id="textNews"
            className='add__text'
            placeholder='Текст новости'
            value={textNews}
            onChange={this.changeHandler}
          ></textarea>
          <textarea
            id='bigText'
            onChange={this.changeHandler}
            className='add__text'
            placeholder='Текст новости подробно'
            value={bigText}
          ></textarea>
          <label className='add__checkrule'>
            <input
              type='checkbox'
              onChange={this.changeCheckboxHandler}
            /> Я согласен с правилами
                </label>
          <button
            className='add__btn'
            onClick={this.onBtnClickHandler}
            disabled={!this.validate()}
          >
            Добавить новость
                </button>
        </form>
      </React.Fragment>
    )
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired, // func используется для проверки передачи function
}

export {Add}