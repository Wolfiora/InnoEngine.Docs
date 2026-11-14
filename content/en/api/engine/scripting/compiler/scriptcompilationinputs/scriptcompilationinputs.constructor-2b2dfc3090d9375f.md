---
uid: api.2b2dfc3090d9375f4e501783a78a0abd82de1e3b0a7f39aa7add315977a4b8f2
symbol: "engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompilationInputs.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String})"
source: xml
reviewed: 7150642f49d8aee90181c06ae16bb9a746357421dfe806e3d176effa926283c0
title: "ScriptCompilationInputs.Constructor"
kind: api
owners: [Inno.Scripting.Compiler]
apiSurface: source-clr
---

Freezes a complete C# 14 and .NET 10 reference contract without retaining SDK objects.

## Parameters

**Parameter `sdkIdentity`:** The exact SDK identity that evaluated this contract.

**Parameter `frameworkReferences`:** Absolute framework assembly paths selected by SDK reference resolution.

**Parameter `predefinedSymbols`:** Framework and configuration symbols produced by SDK target execution.

## Exceptions

**Exception `T:System.ArgumentException`:** The identity, reference set or a reference path is invalid.

**Exception `T:System.ArgumentNullException`:** A collection is null.
