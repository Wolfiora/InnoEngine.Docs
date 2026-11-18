---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.638d47019538e36092b60f35fc23c0c73ca94f394fdb6373d935f16abfe246fe
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCompilerInputs.#ctor(System.String,System.String,System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String})
title: NativeCompilerInputs.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 56903daa8d2543df8ae917606ac603c86aad4ec00d3854b6c9281ea7a1a459b9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `cCompiler`:** The selected C compiler, or null when this selection does not provide one.

**Parameter `cppCompiler`:** The selected C++ compiler, or null when this selection does not provide one.

**Parameter `sysRoot`:** The SDK root, or null when the compiler does not use a sysroot.

**Parameter `systemIncludeDirectories`:** Ordered system header directories.

**Parameter `cppSystemIncludeDirectories`:** Ordered C++ standard library directories.

**Parameter `defines`:** Ordered target preprocessor definitions.

**Parameter `arguments`:** Ordered parser arguments supplied by the SDK.

## Exceptions

**Exception `T:System.ArgumentException`:** An assigned physical path is not absolute.
