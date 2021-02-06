# Javascript Master Class

## Fundamentals

0. Code and Debug with VSCode


```js
// .vscode/launch.json
// https://code.visualstudio.com/docs/editor/variables-reference
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/${fileBasename}"
    }
  ]
}
```

1. Values, Types, Variables



2. Operators
  
3. Arithmetic - Số học

## CSS

<a href="https://specificity.keegan.st/">specificity</a>
https://css-tricks.com/specifics-on-css-specificity/
In otherwords:

If the element has inline styling, that automatically1 wins (1,0,0,0 points)
For each ID value, apply 0,1,0,0 points
For each class value (or pseudo-class or attribute selector), apply 0,0,1,0 points
For each element reference, apply 0,0,0,1 point