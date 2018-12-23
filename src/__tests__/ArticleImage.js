import React from 'react'
import { shallow, mount } from 'enzyme'
import ArticleImage from '../components/ArticleImage'

describe('<ArticleImage />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(<ArticleImage imageUrl={'TestImage'} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders an image wrapper', () => {
    expect(wrapper.find('.image-wrapper').length).toEqual(1)
  })

  it('renders an image', () => {
    expect(wrapper.find('.article-image').length).toEqual(1)
  })

  it('renders its image based on its image url', () => {
    const image = wrapper.find('.article-image')

    expect(image.props().src).toEqual('TestImage')
  })
})
