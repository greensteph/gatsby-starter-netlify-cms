import React from 'react'
import PropTypes from 'prop-types'
import Flashcard from '../components/Flashcard'

const styles = {
  card: {
    border: '1px solid #eeeeee',
    backgroundColor: '#f3f4f4',
    color: '#57818c',
    fontSize: '2em',
    fontWeight: '600',
    lineHeight: '1.125',
    borderRadius: '8px',
    padding: '15px',
    width: '520px',
    height: '350px',
    boxShadow:  '15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff'
  }
};


const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.question} className="column is-6">
        <section>
          <Flashcard styles={styles} question={item.question} answer={item.answer}/>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string
    })
  ),
}

export default FeatureGrid
