# MaterialR List

**@materialr/list**

[![Build Status](https://travis-ci.org/materialr/list.svg?branch=master)](https://travis-ci.org/materialr/list)
[![Coverage Status](https://coveralls.io/repos/github/materialr/list/badge.svg?branch=master)](https://coveralls.io/github/materialr/list?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/materialr/projects/781e1159-7da9-4317-87ca-bffa2b49d70b/badge)](https://nodesecurity.io/orgs/materialr/projects/781e1159-7da9-4317-87ca-bffa2b49d70b)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

React Material list implementation.

## Installation

```sh
$ npm install --save @materialr/list
```

## Demo

A full demo is available on the [MaterialR website](https://materialr.github.io/components/list)
showcasing all variants.

## Components

### Named exports

```js
import { List } from '@materialr/list';
```

**Props**

| Prop        | Type            | Required | Default   | Description                                          |
| ----------- | --------------- | -------- | --------- | ---------------------------------------------------- |
| `avatar`    | bool            | No       | false     | Whether the list contains avatar as opposed to icons |
| `children`  | node            | Yes      | N/A       | The child elements to render inside the list         |
| `className` | string          | No       | undefined | Additional classNames to add                         |
| `dense`     | bool            | No       | false     | Whether a dense list is to be rendered               |
| `display`   | enum (list/nav) | No       | list      | Whether to render a list (`<ul>`) or nav (`<nav>`)   |
| `twoLines`  | bool            | No       | false     | Whether this is a list with two-line list items      |

```js
import { ListGroup } from '@materialr/list';
```

| Prop        | Type        | Required | Default   | Description                   |
| ----------- | ----------- | -------- | --------- | ----------------------------- |
| `children`  | node        | Yes      | undefined | The children to render within |
| `className` | string      | No       | undefined | Additional classNames to add  |

```js
import { ListGroupSubheader } from '@materialr/list';
```

| Prop        | Type        | Required | Default   | Description                  |
| ----------- | ----------- | -------- | --------- | ---------------------------- |
| `className` | string      | No       | undefined | Additional classNames to add |
| `title`     | string      | Yes      | undefined | The title to render within   |

```js
import { ListItem } from '@materialr/list';
```

| Prop              | Type        | Required | Default   | Description                                             |
| ----------------- | ----------- | -------- | --------- | ------------------------------------------------------- |
| `activated`       | bool        | No       | false     | Whether this item is activated                          |
| `AnchorComponent` | func        | No       | undefined | A React component to render instead of an `<a>` element |
| `anchorProps`     | shape       | No       | {}        | Additional props to pass to the anchor component        |
| `className`       | string      | No       | undefined | Additional classNames to add                            |
| `children`        | node        | Yes      | undefined | The children to render within                           |
| `href`            | string      | No       | undefined | The url where the list item should navigate to          |

```js
import { listItemDivider } from '@materialr/list';
```

| Prop        | Type   | Required | Default   | Description                                |
| ----------- | ------ | -------- | --------- | ------------------------------------------ |
| `className` | string | No       | undefined | Additional classNames to add               |
| `inset`     | bool   | No       | false     | Whether the divider is inset from the side |

```js
import { ListItemGraphic } from '@materialr/list';
```

| Prop        | Type        | Required         | Default   | Description                  |
| ----------- | ----------- | ---------------- | --------- | ---------------------------- |
| `avatar`    | string      | without `icon`   | undefined | An avatar image to render    |
| `className` | string      | No               | undefined | Additional classNames to add |
| `icon`      | string      | without `avatar` | undefined | A material icon to render    |
| `title`     | string      | with `avatar`    | undefined | A title to add to an avatar  |

```js
import { listItemMeta } from '@materialr/list';
```

| Prop        | Type        | Required | Default   | Description                  |
| ----------- | ----------- | -------- | --------- | ---------------------------- |
| `className` | string      | No       | undefined | Additional classNames to add |
| `icon`      | string      | Yes      | N/A       | A material icon to render    |
| `onClick`   | func        | No       | undefined | A click handler method       |
| `title`     | string      | Yes      | N/A       | The title attribute          |

```js
import { ListItemSecondaryText } from '@materialr/list';
```

| Prop        | Type   | Required | Default   | Description                  |
| ----------- | ------ | -------- | --------- | ---------------------------- |
| `className` | string | No       | undefined | Additional classNames to add |
| `text`      | string | Yes      | N/A       | The text to add              |

```js
import { ListItemText } from '@materialr/list';
```

| Prop        | Type        | Required | Default   | Description                   |
| ----------- | ----------- | -------- | --------- | ----------------------------- |
| `children`  | node        | Yes      | undefined | The children to render within |
| `className` | string      | No       | undefined | Additional classNames to add  |
