import { workspace } from 'vscode';
const fs = require('fs');
const path = require('path');

export function loadGlobalVariables(options) {
  let result = '';
  try {
    options.globalPaths?.forEach(item=> {
      const absolutePath = path.join(workspace.rootPath, item);
      const content = fs.readFileSync(absolutePath);
      result += content;
    });  
  } catch (error) {
    
  }

  return result;
}