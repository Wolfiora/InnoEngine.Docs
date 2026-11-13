---
uid: api.cbd6d5e3e3ee02b62cf8c2155618e638042c1bc09f108acbf0be7e275329f6bf
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationResult.#ctor(System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor},System.Collections.Generic.IEnumerable{System.IDisposable})"
source: xml
reviewed: be615e0c9aba7292cf9927435c19007f2b0aa1a97a78cdfc69fffb77c0f8ea76
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Freezes a complete generation map and accepts its already acquired reading ownership.

**Parameter `generations`:** The complete Native project to generation mapping.

**Parameter `ownership`:** Protection transferred on successful construction; retained by the caller on failure.

**Exception `T:System.ArgumentNullException`:** Either collection is null.

**Exception `T:System.ArgumentException`:** A generation or protection entry is null.
