---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.35ef6b66d49e61fcbdbd340d6208a150264c2a9189a1a99446cdb5188bc8a90c
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.ValidateSelection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeLibraryKind})
title: NativeBindingGenerationDescriptor.ValidateSelection
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: f79b83e3c13813f545c0d1d952610d86ba126ab8765cb3433119490093bbfd4d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The operation-owned selection consumed during managed compilation.

**Parameter `generations`:** The complete current native project closure and its selected generations.

**Parameter `linkage`:** The exact component linkage used to build the native closure.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The selection differs in project closure, fingerprint, source location, linkage, or structure.

**Exception `T:System.ArgumentException`:** The current generation closure has an unsafe or repeated project name.

**Exception `T:System.ArgumentNullException`:** The current generation closure is null.

**Exception `T:System.IO.FileNotFoundException`:** The managed selection is no longer available.

**Exception `T:System.Xml.XmlException`:** The selection is not a valid XML document.
