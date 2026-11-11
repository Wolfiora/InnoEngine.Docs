---
title: "BuildDiagnostic"
description: "Reference for BuildDiagnostic in Inno.Build."
uid: api.inno.build.612f22dbfa0296fc
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `BuildDiagnostic`

This reference describes `BuildDiagnostic` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7f5435e6c70c5bbb) | Method |
| [`code`](#api-c44689301c1ada4a) | Property |
| [`message`](#api-6cede50506a85af4) | Property |
| [`severity`](#api-4ccabb4c665aaebc) | Property |

## Type declaration

<a id="api-612f22dbfa0296fc"></a>
<!-- api: T:Inno.Build.BuildDiagnostic a2238b1ebf482c65340fafea0a69452d98dc4a9238c230fc4f446a94712f0fb4 -->

```csharp
public sealed class Inno.Build.BuildDiagnostic
```

Describes one stable machine-readable build problem or informational event.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildDiagnostic.cs#L29).

## `#ctor`

<a id="api-7f5435e6c70c5bbb"></a>
<!-- api: M:Inno.Build.BuildDiagnostic.#ctor(Inno.Build.BuildDiagnosticSeverity,System.String,System.String) c425ca94ef52df3e7d8b858ae0f8811140ca86108b2dceb70cfbf6d5026707bf -->

```csharp
public Inno.Build.BuildDiagnostic.BuildDiagnostic(Inno.Build.BuildDiagnosticSeverity severity, string code, string message)
```

Creates an immutable build diagnostic.

**Parameter `severity`:** The impact of the diagnostic on build success.

**Parameter `code`:** The stable diagnostic code.

**Parameter `message`:** The human-readable explanation.

**Throws `System.ArgumentException`:** Thrown when code or message is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildDiagnostic.cs#L46).

## `code`

<a id="api-c44689301c1ada4a"></a>
<!-- api: P:Inno.Build.BuildDiagnostic.code 4322757285143d2ab6d8feaeaa3b8f3d584030b8cde2644bba867c17d2a56a95 -->

```csharp
public string Inno.Build.BuildDiagnostic.code { get; }
```

Gets the stable diagnostic code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildDiagnostic.cs#L66).

## `message`

<a id="api-6cede50506a85af4"></a>
<!-- api: P:Inno.Build.BuildDiagnostic.message 432f3345b5676b9f1000652ae7a6d55a9a6fee23d0f3e14ad198de3f0ca51d4c -->

```csharp
public string Inno.Build.BuildDiagnostic.message { get; }
```

Gets the human-readable explanation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildDiagnostic.cs#L71).

## `severity`

<a id="api-4ccabb4c665aaebc"></a>
<!-- api: P:Inno.Build.BuildDiagnostic.severity e19cea421a5e9c082dcec607603faf95b56216a42d935a4bd05df928a85bcb9e -->

```csharp
public Inno.Build.BuildDiagnosticSeverity Inno.Build.BuildDiagnostic.severity { get; }
```

Gets the impact of the diagnostic on build success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildDiagnostic.cs#L61).
