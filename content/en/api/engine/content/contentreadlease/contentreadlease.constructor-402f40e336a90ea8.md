---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.402f40e336a90ea8637b18dacf817059908ac95380e56bd408e0c35b8198d2c1
symbol: engine:Inno.Content:M:Inno.Content.ContentReadLease.#ctor(Inno.Content.ContentEntry,System.Func{System.IO.Stream},System.Action)
title: ContentReadLease.Constructor
kind: api
owners:
- Inno.Content
apiSurface: source-clr
reviewed: 0acf12e1612c07de43d5007acb589f73ce242cc2d5d26d491cc025f7a6f78ab2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `entry`:** Immutable metadata identifying the pinned bytes.

**Parameter `openRead`:** Opens a stream with its own provider pin; stream disposal must release that pin.

**Parameter `release`:** Releases this lease's provider pin exactly once, independently of any open stream.
