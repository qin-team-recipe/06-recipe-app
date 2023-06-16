module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require('fs');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const path = require('path');

  const BASE_DIR = 'src';

  const files = fs.readdirSync(BASE_DIR);
  const dirListOptions = files
    .filter((file) => fs.statSync(path.join(BASE_DIR, file)).isDirectory())
    .map((dir) => ({
      name: dir,
      value: dir,
    }));

  plop.setGenerator('component', {
    description: 'Create a Component.',
    prompts: [
      {
        type: 'list',
        name: 'baseDir',
        message: 'What is baseDir ? - src/{baseDir}',
        choices: dirListOptions,
      },
      {
        type: 'input',
        name: 'parentPath',
        message: 'src/{baseDir}/{path please}? If you do not need it, just press Enter.',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name? - src/{baseDir}/{component name}?',
      },
    ],
    actions: function (data) {
      const componentBasePath = data.parentPath
        ? 'src/{{baseDir}}/{{parentPath}}'
        : 'src/{{baseDir}}';

      return [
        {
          type: 'add',
          path: `${componentBasePath}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: 'src/templates/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${componentBasePath}/{{pascalCase name}}/{{pascalCase name}}.stories.ts`,
          templateFile: 'src/templates/Component.stories.ts.hbs',
        },
        {
          type: 'add',
          path: `${componentBasePath}/{{pascalCase name}}/index.tsx`,
          templateFile: 'src/templates/index.tsx.hbs',
        },
      ];
    },
  });
};
