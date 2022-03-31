import React from 'react'
import { render } from '@testing-library/react'
import Home from '../index'
import projects from '../../../jest/__fixtures__/projects.json'
import projectImageFiles from '../../../jest/__fixtures__/projectImageFiles.json'

describe('Home', () => {
  const data = {
    ...projects,
    ...projectImageFiles
  }

  const pageContext = {
    repos: [
      {
        name: 'hello',
        full_name: 'kremalicious/hello'
      }
    ]
  }

  it('renders correctly from data file values', () => {
    const { container } = render(<Home data={data} pageContext={pageContext} />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
