---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2b2dfc3090d9375f4e501783a78a0abd82de1e3b0a7f39aa7add315977a4b8f2
symbol: engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompilationInputs.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String})
title: ScriptCompilationInputs.Constructor
kind: api
owners:
- Inno.Scripting.Compiler
apiSurface: source-clr
reviewed: 6bb163597ba5786b2739818d4fc2ec4bc75461b4a31c1573ab31ee5cd4fc4368
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sdkIdentity`:** The exact SDK identity that evaluated this contract.

**Parameter `frameworkReferences`:** Absolute framework assembly paths selected by SDK reference resolution.

**Parameter `predefinedSymbols`:** Framework and configuration symbols produced by SDK target execution.

## Exceptions

**Exception `T:System.ArgumentException`:** The identity, reference set or a reference path is invalid.

**Exception `T:System.ArgumentNullException`:** A collection is null.
