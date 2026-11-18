---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0a2e23e9a69df6e98cee831402abd292a7ab2f25524c57924b6d55eeb25970cb
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeStaticBuildDefinition.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.String)
title: NativeStaticBuildDefinition.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: d4846ced6c6ee88948209afe334c6c8cd946caab6c77843a4301ee90db58b145
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `cmakeFile`:** The portable checkout-relative component definition.

**Parameter `inputPaths`:** The portable checkout-relative source and build dependencies.

**Parameter `logicalOutputs`:** The exact archive file names required after installation.

**Parameter `nativeSourceDirectory`:** The declared checkout-relative root used by the component's native CMake fragment, or null when no such fragment is consumed.

## Exceptions

**Exception `T:System.ArgumentException`:** A path escapes its root or an archive name is invalid or duplicated.

**Exception `T:System.ArgumentNullException`:** A required collection is null.
