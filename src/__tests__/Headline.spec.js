import React from 'react'
import { shallow } from 'enzyme'
import Headline from '../components/Headline'

describe('<Headline />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(
      <Headline
        id={0}
        imageUrl='TestThumbnailUrl'
        headline='TestHeadline'
        url='TestUrl'
      />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a headline', () => {
    expect(wrapper.find('.headline').length).toEqual(1)
  })
})
