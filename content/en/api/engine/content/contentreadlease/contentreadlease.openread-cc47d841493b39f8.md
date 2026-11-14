---
uid: api.cc47d841493b39f8f4c60b5c69cef8282b3093165692c6cb5cff63973912005c
symbol: "engine:Inno.Content:M:Inno.Content.ContentReadLease.OpenRead"
source: xml
reviewed: 2c5126d2a9dd8a29782b1ff38757cee62c82ca483731edd741861fdda48d7020
title: "ContentReadLease.OpenRead"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Opens a new independently pinned stream without transferring this lease's ownership.

**Returns:** A caller-owned stream; disposing this lease or its store does not invalidate the stream.

**Exception `T:System.ObjectDisposedException`:** This lease has already released its pin.

**Exception `T:System.InvalidOperationException`:** The provider did not return a readable stream.
