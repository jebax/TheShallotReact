import React from 'react'
import { shallow } from 'enzyme'
import ArticlePreview from '../components/ArticlePreview'

describe('<ArticlePreview />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(
      <ArticlePreview
        id={0}
        imageUrl={'TestThumbnailUrl'}
        headline='TestHeadline'
        url='TestUrl'
      />
    )
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a Headline', () => {
    expect(wrapper.find('Headline').length).toEqual(1)
  })

  it('renders an ArticleImage', () => {
    expect(wrapper.find('ArticleImage').length).toEqual(1)
  })

  it('renders an article preview wrapper', () => {
    expect(wrapper.find('.article-preview').length).toEqual(1)
  })
})
