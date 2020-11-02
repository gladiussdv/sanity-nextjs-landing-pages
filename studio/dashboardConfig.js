export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fa0054c50b982264fce0a13',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-k7f7z8am',
                  apiId: '2522be37-f465-46ec-86dc-0d873811d476'
                },
                {
                  buildHookId: '5fa0054ce50d1a1ecbd9ad45',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ru3o9q5j',
                  apiId: 'aaf850e6-b50e-40a3-987a-ae2184ffca79'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gladiussdv/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ru3o9q5j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
