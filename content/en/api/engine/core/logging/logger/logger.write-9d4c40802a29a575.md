---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9d4c40802a29a575b492161f6eca01942cd638f57d557ed0ea8cbd3bd5a42417
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.Logger.Write(Inno.Core.Logging.LogLevel,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)
title: Logger.Write
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
reviewed: fa3dd2e2e75909c65d7067aa313c3771ea7a09241d149e2dc2ebe5671cc82eb7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `level`:** The severity assigned to the entry.

**Parameter `message`:** The composite format string or final message text.

**Parameter `arguments`:** Optional composite-format arguments.

**Parameter `filePath`:** Source file supplied by the caller information attribute.

**Parameter `lineNumber`:** Source line supplied by the caller information attribute.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `message` is empty.

**Exception `T:System.ObjectDisposedException`:** Thrown after the owning router has been disposed.
