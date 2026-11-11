---
title: "LogicalScriptingApiAnalyzer"
description: "Reference for LogicalScriptingApiAnalyzer in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.951c55fbe067f0bc
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `LogicalScriptingApiAnalyzer`

This reference describes `LogicalScriptingApiAnalyzer` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Microsoft.CodeAnalysis.Diagnostics.DiagnosticAnalyzer`.

## Members

| Member | Kind |
| --- | --- |
| [`compilationWideUsingDiagnosticId`](#api-d987b349f8ec966b) | Field |
| [`directImplementationNamespaceDiagnosticId`](#api-4d630d8b3febdbd9) | Field |
| [`missingLogicalNamespaceDiagnosticId`](#api-86b02ec2472e01e0) | Field |
| [`#ctor`](#api-838b3a541be8adc7) | Method |
| [`Initialize`](#api-ce5d3008681fca61) | Method |
| [`SupportedDiagnostics`](#api-9b22eb913825f606) | Property |

## Type declaration

<a id="api-951c55fbe067f0bc"></a>
<!-- api: T:Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer 755e4677e7b645f4cba7d131b4c5cedc894e9d0256eae2fbafe0c636c8f0d479 -->

```csharp
public sealed class Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer : Microsoft.CodeAnalysis.Diagnostics.DiagnosticAnalyzer
```

Enforces logical scripting namespaces and rejects direct implementation namespace access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/LogicalScriptingApiAnalyzer.cs#L19).

## `compilationWideUsingDiagnosticId`

<a id="api-d987b349f8ec966b"></a>
<!-- api: F:Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer.compilationWideUsingDiagnosticId 341c5e3c383683a09f60119707fa5be4e4f44582edfd8d33cc51101fabc1ff03 -->

```csharp
public const string Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer.compilationWideUsingDiagnosticId = "INNO2003"
```

Diagnostic identifier for a forbidden compilation-wide namespace import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/LogicalScriptingApiAnalyzer.cs#L34).

## `directImplementationNamespaceDiagnosticId`

<a id="api-4d630d8b3febdbd9"></a>
<!-- api: F:Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer.directImplementationNamespaceDiagnosticId e5eed1f01f5a2d84f17558e89fe71bf29744737e496b8b6a06bc5740034e6712 -->

```csharp
public const string Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer.directImplementationNamespaceDiagnosticId = "INNO2001"
```

Diagnostic identifier for direct implementation namespace access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/LogicalScriptingApiAnalyzer.cs#L24).

## `missingLogicalNamespaceDiagnosticId`

<a id="api-86b02ec2472e01e0"></a>
<!-- api: F:Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer.missingLogicalNamespaceDiagnosticId 71786a38139472a58c0a782b5180c823d4b4c16ed5567f9d62c051aa0723c674 -->

```csharp
public const string Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer.missingLogicalNamespaceDiagnosticId = "INNO2002"
```

Diagnostic identifier for a missing logical namespace import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/LogicalScriptingApiAnalyzer.cs#L29).

## `#ctor`

<a id="api-838b3a541be8adc7"></a>
<!-- api: M:Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer.#ctor 0fac946baf51d905b93415db4be8154840f69e9056d892b0a36972daaa7391c6 -->

```csharp
public Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer.LogicalScriptingApiAnalyzer()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/LogicalScriptingApiAnalyzer.cs#L19).

## `Initialize`

<a id="api-ce5d3008681fca61"></a>
<!-- api: M:Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer.Initialize(Microsoft.CodeAnalysis.Diagnostics.AnalysisContext) ea1bcb4a5eb55466494a7f4ce949683c88fe9afe07fb877302a54050af962c6d -->

```csharp
public override void Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer.Initialize(Microsoft.CodeAnalysis.Diagnostics.AnalysisContext context)
```

Initializes owned resources and establishes the instance's active lifetime.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/LogicalScriptingApiAnalyzer.cs#L75).

## `SupportedDiagnostics`

<a id="api-9b22eb913825f606"></a>
<!-- api: P:Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer.SupportedDiagnostics 589afde8d7091e70f9dbfc4b239d11612b4d3a3424cf1bcfb987ad92dfe3c73a -->

```csharp
public override System.Collections.Immutable.ImmutableArray<Microsoft.CodeAnalysis.DiagnosticDescriptor> Inno.Scripting.Compiler.LogicalScriptingApiAnalyzer.SupportedDiagnostics { get; }
```

Gets the complete compiler diagnostic set enforced by this analyzer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/LogicalScriptingApiAnalyzer.cs#L63).
