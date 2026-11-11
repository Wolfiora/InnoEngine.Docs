---
title: "DiagnosticSeverity"
description: "Reference for DiagnosticSeverity in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.e7b9d19fb883c024
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: source-clr
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
---
# `DiagnosticSeverity`

This reference describes `DiagnosticSeverity` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Error`](#api-82730bc78aabb06c) | Field |
| [`Info`](#api-8264b74b3108821d) | Field |
| [`Warning`](#api-43c446a3bdcefc7f) | Field |

## Type declaration

<a id="api-e7b9d19fb883c024"></a>
<!-- api: T:Inno.Core.Diagnostics.DiagnosticSeverity 48fbc026d3f5b5ab349a8ab76ac4eff19cb629a39028ee96684d7aad9cd7b1fa -->

```csharp
public enum Inno.Core.Diagnostics.DiagnosticSeverity : int
```

Defines the presentation severity of a diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSeverity.cs#L6).

## `Error`

<a id="api-82730bc78aabb06c"></a>
<!-- api: F:Inno.Core.Diagnostics.DiagnosticSeverity.Error 5ab84645117bb6f77373d31c86fcc8be2cd794be103e135a1e35078b6b0b995e -->

```csharp
Inno.Core.Diagnostics.DiagnosticSeverity.Error = 2
```

Describes an issue that prevents the associated operation from succeeding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSeverity.cs#L21).

## `Info`

<a id="api-8264b74b3108821d"></a>
<!-- api: F:Inno.Core.Diagnostics.DiagnosticSeverity.Info e3faad621cc64cd10fd6fd12ab135c80dd78f482c31bb606b8c9797fb8dcbce2 -->

```csharp
Inno.Core.Diagnostics.DiagnosticSeverity.Info = 0
```

Describes useful information that does not indicate a problem.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSeverity.cs#L11).

## `Warning`

<a id="api-43c446a3bdcefc7f"></a>
<!-- api: F:Inno.Core.Diagnostics.DiagnosticSeverity.Warning f1576435bc1cea00723646b666d6b46c003b843f44037b502860ad25dddb61c7 -->

```csharp
Inno.Core.Diagnostics.DiagnosticSeverity.Warning = 1
```

Describes a recoverable issue that should be reviewed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSeverity.cs#L16).
