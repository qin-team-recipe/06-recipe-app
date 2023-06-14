module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', {
    description: 'Create a Component.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'input',
        name: 'parentPath',
        message: 'src/components/{path please}? If you do not need it, just press Enter.',
      },
    ],
    actions: function (data) {
      const componentBasePath = data.parentPath
        ? 'src/components/{{parentPath}}'
        : 'src/components';

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
