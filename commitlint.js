module.exports = {
  extends : ['@commitlint/config-conventional'],
  rules   : {
    'header-max-length' :[2, 'always', 180],
    'type-enum'         :[2, 'always', [
      'chore',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'style',
      'tsc',
    ]],
  },
};
