---
uid: api.35ef6b66d49e61fcbdbd340d6208a150264c2a9189a1a99446cdb5188bc8a90c
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.ValidateSelection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeLibraryKind})"
source: xml
reviewed: 993f7046ed9aae3df7a38ccb954f34fed539a967ef6d2cd53fb615255dbc5b7a
title: "NativeBindingGenerationDescriptor.ValidateSelection"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Rejects publication when the managed selection differs from the complete native generations to deploy.

**Parameter `path`:** The operation-owned selection consumed during managed compilation.

**Parameter `generations`:** The complete current native project closure and its selected generations.

**Parameter `linkage`:** The exact component linkage used to build the native closure.

**Exception `T:System.IO.InvalidDataException`:** The selection differs in project closure, fingerprint, source location, linkage, or structure.

**Exception `T:System.ArgumentException`:** The current generation closure has an unsafe or repeated project name.

**Exception `T:System.ArgumentNullException`:** The current generation closure is null.

**Exception `T:System.IO.FileNotFoundException`:** The managed selection is no longer available.

**Exception `T:System.Xml.XmlException`:** The selection is not a valid XML document.
