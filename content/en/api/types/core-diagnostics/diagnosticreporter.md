---
title: "DiagnosticReporter"
description: "Reference for DiagnosticReporter in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.c48e29a31ba5e191
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: source-clr
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
---
# `DiagnosticReporter`

This reference describes `DiagnosticReporter` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Diagnostics.IDiagnosticReporter`, `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-186a983c07450272) | Method |
| [`Publish`](#api-577f72cef0f18868) | Method |
| [`Replace`](#api-a0dc5a8c8e887bcd) | Method |
| [`Resolve`](#api-21cb3130925bac6d) | Method |

## Type declaration

<a id="api-c48e29a31ba5e191"></a>
<!-- api: T:Inno.Core.Diagnostics.DiagnosticReporter 9a12bd946d3eac6c1cd0e797728b7db38f0bec973ca477d90e806e4f347ce20d -->

```csharp
public sealed class Inno.Core.Diagnostics.DiagnosticReporter : Inno.Core.Diagnostics.IDiagnosticReporter, System.IDisposable
```

Owns one revocable diagnostic producer registration and releases its current report on retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticReporter.cs#L10).

## `Dispose`

<a id="api-186a983c07450272"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticReporter.Dispose 6b8f49f1aee519aa89f7872c8eb8e59d70ef6c565fd69e5766ab908c2f241f67 -->

```csharp
public void Inno.Core.Diagnostics.DiagnosticReporter.Dispose()
```

Revokes this registration without clearing a newer registration for the same producer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticReporter.cs#L119).

## `Publish`

<a id="api-577f72cef0f18868"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticReporter.Publish(Inno.Core.Diagnostics.Diagnostic) ee67c505bf92524c085a7006cddfe9a6aa4826c19330a73d88613043c047c734 -->

```csharp
public void Inno.Core.Diagnostics.DiagnosticReporter.Publish(Inno.Core.Diagnostics.Diagnostic diagnostic)
```

Replaces the issue with the same code and target, without using its message as identity.

**Parameter `diagnostic`:** The immutable current issue.

**Throws `System.ObjectDisposedException`:** This producer has retired or been replaced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticReporter.cs#L37).

## `Replace`

<a id="api-a0dc5a8c8e887bcd"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticReporter.Replace(System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic}) c16f3af1e956266371eaa437e17b7dddd0a74e015a23ac7804e14e566552f71e -->

```csharp
public void Inno.Core.Diagnostics.DiagnosticReporter.Replace(System.Collections.Generic.IEnumerable<Inno.Core.Diagnostics.Diagnostic> diagnostics)
```

Atomically replaces this producer's complete current issue set.

**Parameter `diagnostics`:** The full immutable issue set; empty clears the report.

**Throws `System.ArgumentException`:** The supplied issue set contains a duplicate identity.

**Throws `System.ObjectDisposedException`:** This producer has retired or been replaced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticReporter.cs#L96).

## `Resolve`

<a id="api-21cb3130925bac6d"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticReporter.Resolve(System.String,System.String,System.Nullable{System.Guid}) 699854c0959be3835e31dd3b988828a7488a4f80a0188f9405db4d60cfd9c8c8 -->

```csharp
public void Inno.Core.Diagnostics.DiagnosticReporter.Resolve(string code, string? semanticId = null, System.Guid? objectId = null)
```

Resolves an issue after the represented condition no longer exists.

**Parameter `code`:** The stable issue code.

**Parameter `semanticId`:** The optional protocol identifier used at publication.

**Parameter `objectId`:** The optional persistent object identity used at publication.

**Throws `System.ObjectDisposedException`:** This producer has retired or been replaced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticReporter.cs#L70).
