const fs = require('fs-extra');
const path = require('path');

const copyFiles = async () => {
  const sourcePath = path.resolve('./node_modules/@pdftron/webviewer/public');
  const destPathYoshie = path.resolve(
    './src/assets/pdftron-lib/'
  );
  const destPathAdmin = path.resolve(
    './src/assets/pdftron-lib/'
  );

  try {
    await fs.copy(sourcePath, destPathYoshie);
    await fs.copy(sourcePath, destPathAdmin);
    console.log('WebViewer files copied over successfully');
  } catch (err) {
    console.error(err);
  }
};

copyFiles();
