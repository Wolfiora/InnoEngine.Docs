---
uid: api.67c6ac8146233225f98bdbe9065afb578c96dd161bb72531cea800e6ea781aec
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.WriteSelection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeLibraryKind})"
source: xml
reviewed: f5c50fc6eba1761a29cc6919db744f152c71be1a7fc08a3474117b7d59a8222f
title: "NativeBindingGenerationDescriptor.WriteSelection"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Writes the exact native binding identities for a subsequent managed build without reselecting generations. Identical content preserves the existing import timestamp; changed content is installed atomically.

## Parameters

**Parameter `path`:** The MSBuild selection document in an intermediate directory exclusively owned by the caller.

**Parameter `generations`:** Explicit checkout-relative native project paths and their complete selected generations.

**Parameter `linkage`:** Explicit linkage of each selected component, used by its managed native initialization boundary.

## Exceptions

**Exception `T:System.ArgumentException`:** A project name is unsafe or repeated, or component linkage is invalid or incomplete.

**Exception `T:System.ArgumentNullException`:** The generation or linkage closure is null.

**Exception `T:System.IO.IOException`:** The selection cannot be read or its complete replacement cannot be installed.
