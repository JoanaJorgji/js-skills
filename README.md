# Summary
This repo documents requirements for assessing JS development skills

# Project description

Create a [React](https://reactjs.org/) component that is capable of taking as input a list of files with absolute paths and gives users the ability to explore that list of files hierarchically (tree) - similar to a file explorer. In addition to the `path`, each file will have a list of properties (e.g. size, create time, mod time, owner etc...) which need to be rendered when the files are presented.

# Example input
```
const files = [
{path: '/root.txt', size: 1234, created_at: 1234567890, updated_at: 1234567890, owner: 'elvis', content_type: 'plain/text},
{path: '/a/b.xml', size: 4321, created_at: 1234567890, updated_at: 1234567890, owner: 'elvis', content_type: 'xml/text},
{path: '/a/b/c/d/e/f/someVeryLongDirNameHere/foo.html', size: 222234, created_at: 1234567890, updated_at: 1234567890, owner: 'elvis', content_type: 'html/text},
....
]
```

# Assumptions

You can assume:
1. the file separator is `/`
2. the file separator does not appear in the path segments (ie you can split on `/`)
3. paths are always absolute (ie begin with file separator)

# Requirements 
1. The code must *not* have any external dependencies 
2. The component should be able to operate smoothly with large lists of files, e.g. 50K and large hierarchy depth, 50+ directories deep.
3. The component must allow for the caller to pass in the following listeners:
    1. `directorySelected(path)` - must fire when the user clicks on a directory, `path` must be the absolute path of the directory
    2. `fileSelected(file)` - must fire when the user clicks on a file, `file` must be the file object (from input) the user selected
    
    
# Submission
Please fork this repo and submit a pull request to notify me of the branch you're working on (no PRs will be accepted and merged for obvious reasons) 
