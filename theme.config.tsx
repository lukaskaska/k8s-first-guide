import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>K8s first guide</span>,
  project: {
    link: 'https://github.com/lukaskaska/k8s-first-guide',
  },
  docsRepositoryBase: 'https://github.com/lukaskaska/k8s-first-guide',
  footer: {
    text: 'Kubernetes first guide',
  },
}

export default config
