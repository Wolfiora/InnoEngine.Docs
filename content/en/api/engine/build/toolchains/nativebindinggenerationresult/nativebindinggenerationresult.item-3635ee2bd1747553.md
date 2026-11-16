---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3635ee2bd174755325ea2a9ae9189d27b28430a5a7abd8084dfb6a5dc83287ad
symbol: engine:Inno.Build.Toolchains:P:Inno.Build.Toolchains.NativeBindingGenerationResult.Item(System.String)
title: NativeBindingGenerationResult.Item
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 98f41a038eb547515a7a170be640576f564a5f9c737dc960186725de2cbbe270
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `key`:** The checkout-relative Native owner project.

## Returns

The selected generation; neither its paths nor retained descriptors extend reading ownership.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Reading ownership has ended.

**Exception `T:System.Collections.Generic.KeyNotFoundException`:** The project is outside this closure.
