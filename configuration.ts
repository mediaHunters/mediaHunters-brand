const configuration = {
    site: {
      name: 'Blog',
      description:
        'Blog o tematyce tworzenia stron internetowych i marketing\'u w Internecie',
      themeColor: '#efee00',
      siteUrl: 'https://mediahunters.pl',
      siteName: 'MediaHunters',
      twitterHandle: 'none',
      githubHandle: 'mediahunters',
      language: 'pl',
    },
    blog: {
      maxReadMorePosts: 6,
    },
    production: process.env.NODE_ENV === 'production',
  };
  
  export default configuration;
  