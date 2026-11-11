---
title: "IDiagnosticReporter"
description: "Reference for IDiagnosticReporter in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.ffa0028db2d92064
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: source-clr
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
---
# `IDiagnosticReporter`

This reference describes `IDiagnosticReporter` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Publish`](#api-ea79c51d658aab42) | Method |
| [`Replace`](#api-33e56dd36b009140) | Method |
| [`Resolve`](#api-888fb4a5250ed9bf) | Method |

## Type declaration

<a id="api-ffa0028db2d92064"></a>
<!-- api: T:Inno.Core.Diagnostics.IDiagnosticReporter adf5ea7d23d1b2a7e9b7353918668b8181c879e0b6ad07446e8ff4bc33ff2d4d -->

```csharp
public interface Inno.Core.Diagnostics.IDiagnosticReporter
```

Publishes current issues through an owner-bound producer, independently of presentation sinks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/IDiagnosticReporter.cs#L9).

## `Publish`

<a id="api-ea79c51d658aab42"></a>
<!-- api: M:Inno.Core.Diagnostics.IDiagnosticReporter.Publish(Inno.Core.Diagnostics.Diagnostic) 6bb71c0af6c19aef669812cbaebb52bec725a7047f510bde5df800e15d6ab9ec -->

```csharp
void Inno.Core.Diagnostics.IDiagnosticReporter.Publish(Inno.Core.Diagnostics.Diagnostic diagnostic)
```

Replaces the issue with the same code and target, without using its message as identity.

**Parameter `diagnostic`:** The immutable current issue.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/IDiagnosticReporter.cs#L17).

## `Replace`

<a id="api-33e56dd36b009140"></a>
<!-- api: M:Inno.Core.Diagnostics.IDiagnosticReporter.Replace(System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic}) 8e7a25ab27fae0492ac9a3e7441662c3466448c994ee2fa158a44742f7859405 -->

```csharp
void Inno.Core.Diagnostics.IDiagnosticReporter.Replace(System.Collections.Generic.IEnumerable<Inno.Core.Diagnostics.Diagnostic> diagnostics)
```

Atomically replaces this producer's complete current issue set.

**Parameter `diagnostics`:** The full immutable issue set; empty clears the report.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/IDiagnosticReporter.cs#L43).

## `Resolve`

<a id="api-888fb4a5250ed9bf"></a>
<!-- api: M:Inno.Core.Diagnostics.IDiagnosticReporter.Resolve(System.String,System.String,System.Nullable{System.Guid}) c11548bfd6533517b42c648a3f89e6ecc5ecbf639f7d47ec39ee2a04778e4fe5 -->

```csharp
void Inno.Core.Diagnostics.IDiagnosticReporter.Resolve(string code, string? semanticId = null, System.Guid? objectId = null)
```

Resolves an issue after the represented condition no longer exists.

**Parameter `code`:** The stable issue code.

**Parameter `semanticId`:** The optional protocol identifier used at publication.

**Parameter `objectId`:** The optional persistent object identity used at publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/IDiagnosticReporter.cs#L31).
