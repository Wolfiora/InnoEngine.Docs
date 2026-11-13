---
uid: api.0a2e23e9a69df6e98cee831402abd292a7ab2f25524c57924b6d55eeb25970cb
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeStaticBuildDefinition.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.String)"
source: xml
reviewed: c7af87108267027ed6008918a15e8edf20866ac29afd5aa46fa2c0698c9e56fd
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Freezes the component's CMake entry point, source dependencies and exact installed archive names.

**Parameter `cmakeFile`:** The portable checkout-relative component definition.

**Parameter `inputPaths`:** The portable checkout-relative source and build dependencies.

**Parameter `logicalOutputs`:** The exact archive file names required after installation.

**Parameter `nativeSourceDirectory`:** The declared checkout-relative root used by the component's native CMake fragment, or null when no such fragment is consumed.

**Exception `T:System.ArgumentException`:** A path escapes its root or an archive name is invalid or duplicated.

**Exception `T:System.ArgumentNullException`:** A required collection is null.
