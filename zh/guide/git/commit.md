# git commit {#getting-started}


## 背景 {#background}
大家的commit message千奇百怪，中英文混合使用、fix bug等各种笼统的message司空见怪，这就导致后续代码维护成本特别大. 希望通过某种方式来监控用户的git commit message，让规范更好的服务于质量，提高大家的研发效率





## 提交规范 {#commit-standardize}

### 格式
Commit message 都包括三个部分: `header`, `body` 和 `footer`。
```html
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
其中，`header 是必需的`，body 和 footer 可以省略。<br />
不管是哪一个部分，任何一行都不得超过`72`个字符(或`100`个字符)。这是为了避免自动换行影响美观。




###### `Header`
Header部分只有一行，包括三个字段：`type(必需)`、`scope(可选)`和`subject(必需)`。
##### `type`
用于说明 commit 的类别，只允许使用下面标识。
- `feat`: 新功能(Feature)

    用于表示引入新功能或特性的变动。这种变动通常是在代码库中新增的功能，而不仅仅是修复错误或进行代码重构。

- `fix/to`: 修复bug。这些bug可能由QA团队发现，或由开发人员在开发过程中识别。

    `fix`关键字用于那些直接解决问题的提交。当创建一个包含必要更改的提交，并且这些更改能够直接修复已识别的bug时，应使用fix。这表明提交的代码引入了解决方案，并且问题已被立即解决。

    `to`关键字则用于那些部分处理问题的提交。在一些复杂的修复过程中，可能需要多个步骤或多次提交来完全解决问题。在这种情况下，初始和中间的提交应使用to标记，表示它们为最终解决方案做出了贡献，但并未完全解决问题。最终解决问题的提交应使用fix标记，以表明问题已被彻底修复。

- `docs`: 文档(Documentation)

    表示对文档的变动，这包括对代码库中的注释、README 文件或其他文档的修改。这个前缀的提交通常用于更新文档以反映代码的变更，或者提供更好的代码理解和使用说明。

- `style`: 格式(Format)

    用于表示对代码格式的变动，这些变动不影响代码的运行。通常包括空格、缩进、换行等风格调整。

- `refactor`: 重构(即不是新增功能，也不是修改bug的代码变动)

    表示对代码的重构，即修改代码的结构和实现方式，但不影响其外部行为。重构的目的是改进代码的可读性、可维护性和性能，而不是引入新功能或修复错误。

- `perf`: 优化相关，比如提升性能、体验

    表示与性能优化相关的变动。这可能包括对算法、数据结构或代码实现的修改，以提高代码的执行效率和用户体验。

- `test`: 增加测试

    表示增加测试，包括单元测试、集成测试或其他类型的测试。

- `chore`: 构建过程或辅助工具的变动

    表示对构建过程或辅助工具的变动。这可能包括更新构建脚本、配置文件或其他与构建和工具相关的内容。

- `revert`: 回滚到上一个版本

    用于回滚到以前的版本，撤销之前的提交。

- `merge`: 代码合并

    表示进行代码合并，通常是在分支开发完成后将代码合并回主线。

- `sync`: 同步主线或分支的Bug

    表示同步主线或分支的 Bug，通常用于解决因为合并而引入的问题。

::: warning
如果`type`为`feat`和`fix`，则该 `commit` 将肯定出现在 `Change log` 之中。
:::


##### `scope`
用于说明 `commit` 影响的范围，比如`数据层`、`控制层`、`视图层`等等，`视项目不同而不同`。<br />
如果修改影响了不止一个scope，你可以使用`*`代替。

##### `subject`
`commit` 目的的简短描述，不超过50个字符。
::: warning
- 以动词开头，`使用第一人称现在时`，比如`change`，而不是`changed`或`changes`
- `第一个字母小写`
- 结尾不加句号`.`
:::

##### `Body`
对本次 commit 的详细描述，可以分成多行。下面是一个范例。
```log
More detailed explanatory text, if necessary.  Wrap it to
about 72 characters or so.

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```

::: warning
- 使用第一人称现在时，比如使用`change`而不是`changed`或`changes`。
- 永远别忘了`第2行是空行`
- 应该说明代码`变动的动机`，以及与以前行为的对比。
:::

##### `Footer`
只用于以下两种情况:
- `不兼容变动`
    如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。
    ```log
    BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.
    ```
- `关闭 Issue`
    如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 `issue` 。
    ```log
    Closes #234
    ```


##### 完整示例
```log
chore(cSpell): cSpell vscode extends add words

Add words to .vscode/settings.json(Spell.words)
- nuxt
- tailwindcss

Closes #234

```
