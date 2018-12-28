import React from 'react'
import { shallow } from 'enzyme'
import SummaryText from '../components/SummaryText'

describe('<SummaryText />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(
      <SummaryText
        sentences={['One', 'Two', 'Three', 'Four', 'Five']}
      />
    )
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders each sentence', () => {
    const summaryText = wrapper.find('.summary-text')

    expect(summaryText.text()).toEqual('OneTwoThreeFourFive')
  })

  it('displays a "loading" message if there are no sentences loaded', () => {
    const secondWrapper = shallow(<SummaryText sentences={[]}/>)
    const summaryText = secondWrapper.find('.summary-text')

    expect(summaryText.text()).toEqual('Loading summary...')
  })
})
