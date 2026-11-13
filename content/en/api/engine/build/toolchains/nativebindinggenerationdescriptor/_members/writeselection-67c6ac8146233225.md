---
uid: api.67c6ac8146233225f98bdbe9065afb578c96dd161bb72531cea800e6ea781aec
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.WriteSelection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeLibraryKind})"
source: xml
reviewed: 0911b163db34a91bd5b060fed3ab30823ef6b00e948e1725f98cf3059151ac21
title: "WriteSelection"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Writes the exact native binding identities for a subsequent managed build without reselecting generations. Identical content preserves the existing import timestamp; changed content is installed atomically.

**Parameter `path`:** The MSBuild selection document in an intermediate directory exclusively owned by the caller.

**Parameter `generations`:** Explicit checkout-relative native project paths and their complete selected generations.

**Parameter `linkage`:** Explicit linkage of each selected component, used by its managed native initialization boundary.

**Exception `T:System.ArgumentException`:** A project name is unsafe or repeated, or component linkage is invalid or incomplete.

**Exception `T:System.ArgumentNullException`:** The generation or linkage closure is null.

**Exception `T:System.IO.IOException`:** The selection cannot be read or its complete replacement cannot be installed.
