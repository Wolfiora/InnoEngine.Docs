---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3635ee2bd174755325ea2a9ae9189d27b28430a5a7abd8084dfb6a5dc83287ad
symbol: engine:Inno.Build.Toolchains:P:Inno.Build.Toolchains.NativeBindingGenerationResult.Item(System.String)
title: NativeBindingGenerationResult.Item
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 1295d4a2035db15721a84ad395376132522f57e2e16a548ad9f5ea50eeb1a3e3
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
