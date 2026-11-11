---
title: "BuildDiagnosticSeverity"
description: "Reference for BuildDiagnosticSeverity in Inno.Build."
uid: api.inno.build.fcf00cfcc1d282aa
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `BuildDiagnosticSeverity`

This reference describes `BuildDiagnosticSeverity` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Error`](#api-43d16074cf675712) | Field |
| [`Information`](#api-4e0481b3b1ceef79) | Field |
| [`Warning`](#api-13e01bfbe217035d) | Field |

## Type declaration

<a id="api-fcf00cfcc1d282aa"></a>
<!-- api: T:Inno.Build.BuildDiagnosticSeverity 93d5283e8ae2c94e2e19ab3e4a783497727966302148cf9c0b79a7287df52509 -->

```csharp
public enum Inno.Build.BuildDiagnosticSeverity : int
```

Identifies the severity of one structured build diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildDiagnostic.cs#L8).

## `Error`

<a id="api-43d16074cf675712"></a>
<!-- api: F:Inno.Build.BuildDiagnosticSeverity.Error 2f4be1d3321469be46021a3efa3a9d6891c8dd5f4a16c72ecc59caa4958779b0 -->

```csharp
Inno.Build.BuildDiagnosticSeverity.Error = 2
```

Reports a condition that prevented a valid build.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildDiagnostic.cs#L23).

## `Information`

<a id="api-4e0481b3b1ceef79"></a>
<!-- api: F:Inno.Build.BuildDiagnosticSeverity.Information 1191cb4d0d9265723925493b900dc80072fb252782fc71bfedd16b1ace92c3ce -->

```csharp
Inno.Build.BuildDiagnosticSeverity.Information = 0
```

Provides non-failing build context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildDiagnostic.cs#L13).

## `Warning`

<a id="api-13e01bfbe217035d"></a>
<!-- api: F:Inno.Build.BuildDiagnosticSeverity.Warning c3345a8887c9a4848a84f3d110c8bcf9292d7791ac49df12ad88a731ed3e4b63 -->

```csharp
Inno.Build.BuildDiagnosticSeverity.Warning = 1
```

Reports a condition that did not prevent output creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildDiagnostic.cs#L18).
