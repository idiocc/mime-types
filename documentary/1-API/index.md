## API

The package is available by importing its default function:

```js
import { lookup, contentType, extension, charset, types } from '@goa/mime-types'
```

All functions return `false` if input is invalid or not found.

%~%

```## lookup => string
[
  ["path", "string"]
]
```

Lookup the content-type associated with a file.

%EXAMPLE: example/lookup, ../src => @goa/mime-types%
%FORK example/lookup%

%~%

```## contentType => string
[
  ["type", "string"]
]
```

Create a full content-type header given a content-type or extension. When given an extension, `mime.lookup` is used to get the matching content-type, otherwise the given content-type is used. Then if the content-type does not already have a `charset` parameter, `mime.charset` is used to get the default charset and add to the returned content-type.

%EXAMPLE: example/content-type, ../src => @goa/mime-types%
%FORK example/content-type%

%~%

```## extension => string
[
  ["type", "string"]
]
```

Get the default extension for a content-type.

%EXAMPLE: example/extension, ../src => @goa/mime-types%
%FORK example/extension%

%~%

```## charset => string
[
  ["type", "string"]
]
```

Lookup the implied default charset of a content-type.

%EXAMPLE: example/charset, ../src => @goa/mime-types%
%FORK example/charset%

%~%

## `types`

A map of content-types by extension.

%EXAMPLE: example/types, ../src => @goa/mime-types%
%FORK example/types%

%~%