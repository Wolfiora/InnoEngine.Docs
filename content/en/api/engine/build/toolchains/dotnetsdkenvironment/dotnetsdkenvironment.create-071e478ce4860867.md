---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.071e478ce4860867b783d57129492deda9b802579f6c201ef02d1bcbf87a9423
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.DotNetSdkEnvironment.Create(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})
title: DotNetSdkEnvironment.Create
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: b02b5e53ca8182d05028d89c35b84d3ceeaa4ba8d23ee9a7947e7c793f5b9826
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
