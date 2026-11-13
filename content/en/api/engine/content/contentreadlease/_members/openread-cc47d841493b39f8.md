---
uid: api.cc47d841493b39f8f4c60b5c69cef8282b3093165692c6cb5cff63973912005c
symbol: "engine:Inno.Content:M:Inno.Content.ContentReadLease.OpenRead"
source: xml
reviewed: 3ab5e1387041f6071367dbbbfead4243eed0802db02da346241ef1e3a071a48e
title: "OpenRead"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Opens a new independently pinned stream without transferring this lease's ownership.

**Returns:** A caller-owned stream; disposing this lease or its store does not invalidate the stream.

**Exception `T:System.ObjectDisposedException`:** This lease has already released its pin.

**Exception `T:System.InvalidOperationException`:** The provider did not return a readable stream.
