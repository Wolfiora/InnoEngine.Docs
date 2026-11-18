---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.071e478ce4860867b783d57129492deda9b802579f6c201ef02d1bcbf87a9423
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.DotNetSdkEnvironment.Create(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})
title: DotNetSdkEnvironment.Create
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 2557201399cba8946ed406b441f63e471266557c3c413e9cc1d8a2a44bc18ac4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `hostPath`:** The explicitly selected managed executable, resolved to an absolute path before invocation.

**Parameter `environment`:** Additional selected toolchain variables to copy, or null when no native SDK environment is required.

## Returns

A read-only child environment that preserves selected toolchain settings and never changes the parent.

## Exceptions

**Exception `T:System.ArgumentException`:** The managed executable is blank.

**Exception `T:System.IO.FileNotFoundException`:** The selected managed executable cannot be resolved.
