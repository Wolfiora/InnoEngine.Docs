---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cbd6d5e3e3ee02b62cf8c2155618e638042c1bc09f108acbf0be7e275329f6bf
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationResult.#ctor(System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor},System.Collections.Generic.IEnumerable{System.IDisposable})
title: NativeBindingGenerationResult.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: e7c099b40e34549aefa051497df06549f9536dea5c24b52f891bc85c999a3804

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Freezes a complete generation map and accepts its already acquired reading ownership.

## Parameters

**Parameter `generations`:** The complete Native project to generation mapping.

**Parameter `ownership`:** Protection transferred on successful construction; retained by the caller on failure.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Either collection is null.

**Exception `T:System.ArgumentException`:** A generation or protection entry is null.
