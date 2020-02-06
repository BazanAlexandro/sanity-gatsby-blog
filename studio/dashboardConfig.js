export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3c1d1c8512aa5f05f8c0cb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yw3ybwxy',
                  apiId: '9afa4baa-24eb-45d7-b474-9ba1ec94de15'
                },
                {
                  buildHookId: '5e3c1d1c930cbedbc2444f86',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-n58kh1pa',
                  apiId: '3eeddc83-a2c0-4f36-8c8d-7ea8a7b8fc45'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BazanAlexandro/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-n58kh1pa.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
