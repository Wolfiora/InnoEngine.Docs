---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cbd6d5e3e3ee02b62cf8c2155618e638042c1bc09f108acbf0be7e275329f6bf
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationResult.#ctor(System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor},System.Collections.Generic.IEnumerable{System.IDisposable})
title: NativeBindingGenerationResult.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 6270eb71fe820c5d0aaca85f793433f6148851d94944ad06748ec48013a8e922
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `generations`:** The complete Native project to generation mapping.

**Parameter `ownership`:** Protection transferred on successful construction; retained by the caller on failure.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Either collection is null.

**Exception `T:System.ArgumentException`:** A generation or protection entry is null.
