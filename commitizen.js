module.exports = {
  types: [
    { value: 'feat',     name: 'feat     : A new feature' },
    { value: 'fix',      name: 'fix      : A bug fix' },
    { value: 'refactor', name: 'refactor : A code change that neither fixes a bug or adds a feature' },
    { value: 'perf',     name: 'perf     : A code change that improves performance' },
    { value: 'style',    name: 'style    : Markup, white-space, formatting, missing semi-colons etc.' },
    { value: 'docs',     name: 'docs     : Documentation only changes' },
  ],

  scopes: [
    { name: 'components' },
    { name: 'modules' },
  ],

  messages: {
    type          : 'What changes do you make?',
    scope         : 'Select scope that you changed (optional):',
    customScope   : 'Specify your scope:',
    subject       : 'Provide a short description in Present Perfect tense:\n',
    body          : 'Write a detailed description (optional). Use "|" for new line:\n',
    footer        : 'Place for meta data (tickets, links and other) (optional):\n',
    confirmCommit : 'Are you satisfied with the resulting commit?',
  },

  allowCustomScopes    : true,
  allowBreakingChanges : false,
  footerPrefix         : 'Meta:',
  subjectLimit         : 180,
};
