---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.67c6ac8146233225f98bdbe9065afb578c96dd161bb72531cea800e6ea781aec
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.WriteSelection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeLibraryKind})
title: NativeBindingGenerationDescriptor.WriteSelection
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 8c5f858608e0231aefc59cf8cb03db01a532f098334d79910835df286fe8e9c5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The MSBuild selection document in an intermediate directory exclusively owned by the caller.

**Parameter `generations`:** Explicit checkout-relative native project paths and their complete selected generations.

**Parameter `linkage`:** Explicit linkage of each selected component, used by its managed native initialization boundary.

## Exceptions

**Exception `T:System.ArgumentException`:** A project name is unsafe or repeated, or component linkage is invalid or incomplete.

**Exception `T:System.ArgumentNullException`:** The generation or linkage closure is null.

**Exception `T:System.IO.IOException`:** The selection cannot be read or its complete replacement cannot be installed.
