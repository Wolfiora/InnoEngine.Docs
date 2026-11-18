---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.610bb042170b5b50a1004d99f07c475c8bbd633ce9115b8307830b8e3ecd7d4c
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.EnterExecutionScope
title: RenderRuntime.EnterExecutionScope
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 8271ffc5c36a4a92a0f57756e3a95cf065fe67add49bc0eb7962888c1624c8ed
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A strict last-in-first-out execution scope owned by the caller.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this rendering runtime has been disposed.

**Exception `T:System.InvalidOperationException`:** Retirement has started or generation cleanup has faulted the owner.
