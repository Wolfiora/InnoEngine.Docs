---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.638d47019538e36092b60f35fc23c0c73ca94f394fdb6373d935f16abfe246fe
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCompilerInputs.#ctor(System.String,System.String,System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String})
title: NativeCompilerInputs.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 103689bc1a356b6ff7b4e2f210a6b15a4cd5080d0dc6a7c945c3b892a469b17b
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
