---
uid: api.2b2dfc3090d9375f4e501783a78a0abd82de1e3b0a7f39aa7add315977a4b8f2
symbol: "engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompilationInputs.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String})"
source: xml
reviewed: 238b78d9cc4f3b504d55a36477d3d58b0ffd8685bdcc593850c16ec9e8f3ea53
title: "Constructor"
kind: api
owners: [Inno.Scripting.Compiler]
apiSurface: source-clr
---

Freezes a complete C# 14 and .NET 10 reference contract without retaining SDK objects.

**Parameter `sdkIdentity`:** The exact SDK identity that evaluated this contract.

**Parameter `frameworkReferences`:** Absolute framework assembly paths selected by SDK reference resolution.

**Parameter `predefinedSymbols`:** Framework and configuration symbols produced by SDK target execution.

**Exception `T:System.ArgumentException`:** The identity, reference set or a reference path is invalid.

**Exception `T:System.ArgumentNullException`:** A collection is null.
