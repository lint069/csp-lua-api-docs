# Style guidelines

## General
- Enclose all parameter names, types, paths, and literal values in backticks ( `` ) to make them stand out.
- Use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to format your code.

## Tables

### Keep tables clean
This keeps tables readable and prevents them from turning into an unmaintainable mess later.

Bad:
```mdx
|Parameter|Type|Required|Default|Description|
|---------|----|--------|-------|-----------|
|`callback`|`function`|Yes|-|Function to be called after the delay.|
|`delay`|`number`|No|`0`|Delay time in seconds.|
|`uniqueKey`|`any`|No|`nil`|Unique key to identify the timeout.|
```

Good:
```mdx
| Parameter   | Type       | Required | Default | Description                            |
| ----------- | ---------- | -------- | ------- | -------------------------------------- |
| `callback`  | `function` | Yes      | -       | Function to be called after the delay. |
| `delay`     | `number`   | No       | `0`     | Delay time in seconds.                 |
| `uniqueKey` | `any`      | No       | `nil`   | Unique key to identify the timeout.    |
```

### Keep a space between columns
This is expected formatting. While tables technically work without it, adding spaces keeps them visually clear and easier to scan.  
If you use a table generator like https://www.tablesgenerator.com/markdown_tables, add the spaces manually to keep the formatting consistent.

Good:
`| ------ |`  
Bad:
`|--------|`
