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

  it('renders an image', () => {
    expect(wrapper.find('.articleImage').length).toEqual(1)
  })

  it('renders its image based on its image url', () => {
    const image = wrapper.find('.articleImage')

    expect(image.props().src).toEqual('TestImage')
  })
})
