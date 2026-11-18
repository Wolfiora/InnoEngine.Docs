---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cc47d841493b39f8f4c60b5c69cef8282b3093165692c6cb5cff63973912005c
symbol: engine:Inno.Content:M:Inno.Content.ContentReadLease.OpenRead
title: ContentReadLease.OpenRead
kind: api
owners:
- Inno.Content
apiSurface: source-clr
sourceFingerprint: 806afc082877cc037a3096440cc8462cc2b43798c76fc3a31fda2996616afbc0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A caller-owned stream; disposing this lease or its store does not invalidate the stream.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** This lease has already released its pin.

**Exception `T:System.InvalidOperationException`:** The provider did not return a readable stream.
