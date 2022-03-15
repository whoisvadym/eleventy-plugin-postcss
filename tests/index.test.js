const fs = require('fs');
const test = require('ava');
const path = require('path');

const demoFolderRelativePath = 'demo/_site/styles';
const readOutputFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), demoFolderRelativePath, filename), 'utf-8');

test('end-2-end', (t) => {
  const mixinsOutput = readOutputFile('mixins.css');
  const presetOutput = readOutputFile('preset.css');
  const nestingOutput = readOutputFile('nesting.css');

  t.snapshot(mixinsOutput);
  t.snapshot(presetOutput);
  t.snapshot(nestingOutput);
});
