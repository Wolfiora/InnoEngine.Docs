---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.610bb042170b5b50a1004d99f07c475c8bbd633ce9115b8307830b8e3ecd7d4c
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.EnterExecutionScope
title: RenderRuntime.EnterExecutionScope
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 4a94efd82562455136d7082f4c73add5ddc262ebf765bf7aa3eddea642ac1e64
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
