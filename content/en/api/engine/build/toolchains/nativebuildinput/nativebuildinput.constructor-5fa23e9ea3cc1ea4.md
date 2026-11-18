---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5fa23e9ea3cc1ea43f5070d08826a64952ed6398af9c0dbbf80613903828045d
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildInput.#ctor(System.String,System.String)
title: NativeBuildInput.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 750b1e7bd8724de5c7b169e1566ebbff65b39e5f79218de72da133a1d1282987
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `logicalPath`:** A nonempty, slash-separated identity relative to a declared logical root.

**Parameter `physicalPath`:** The absolute file or directory used only for reading and execution.

## Exceptions

**Exception `T:System.ArgumentException`:** An identity is empty, contains a control character or backslash, or the physical path is relative.
