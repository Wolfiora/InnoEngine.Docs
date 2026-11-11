---
title: "PresentationFeatures"
description: "Reference for PresentationFeatures in Inno.Adapter.Presentation."
uid: api.inno.adapter.presentation.67446136bde68444
kind: api
owners:
  - Inno.Adapter.Presentation
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation
---
# `PresentationFeatures`

This reference describes `PresentationFeatures` in `Inno.Adapter.Presentation`. Read the [shared contract](../../../projects/inno-adapter-presentation.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Docking`](#api-d5c997cabd4af836) | Field |
| [`MultipleWindows`](#api-c1b74af8b4809a71) | Field |
| [`None`](#api-696d1e047d85d6b0) | Field |
| [`SmoothResize`](#api-48d22d9898702369) | Field |

## Type declaration

<a id="api-67446136bde68444"></a>
<!-- api: T:Inno.Adapter.Presentation.PresentationFeatures 6f9fe823d4e2115a065dd116ba253dabbcdf6d40f3cd250055e8893aa77cd92e -->

```csharp
public enum Inno.Adapter.Presentation.PresentationFeatures : int
```

Describes optional capabilities requested from a host presentation backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationFeatures.cs#L9).

## `Docking`

<a id="api-d5c997cabd4af836"></a>
<!-- api: F:Inno.Adapter.Presentation.PresentationFeatures.Docking c31a09f67010d5aed820dcffbd20a893bfc29cea65c26adbcee8767d3d4d5b85 -->

```csharp
Inno.Adapter.Presentation.PresentationFeatures.Docking = 2
```

Enables dockable host surfaces when supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationFeatures.cs#L24).

## `MultipleWindows`

<a id="api-c1b74af8b4809a71"></a>
<!-- api: F:Inno.Adapter.Presentation.PresentationFeatures.MultipleWindows 11b7c9f814f9484b353b77e32e89970ec841a8c22c0fd7a742b006bcf5999d54 -->

```csharp
Inno.Adapter.Presentation.PresentationFeatures.MultipleWindows = 1
```

Allows the presentation to create detached native windows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationFeatures.cs#L19).

## `None`

<a id="api-696d1e047d85d6b0"></a>
<!-- api: F:Inno.Adapter.Presentation.PresentationFeatures.None 38d8827dd5fe329625b4cbd8e9e95a5ea71e11a4125d6d9f8892696e0b496ff1 -->

```csharp
Inno.Adapter.Presentation.PresentationFeatures.None = 0
```

Requests no optional presentation features.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationFeatures.cs#L14).

## `SmoothResize`

<a id="api-48d22d9898702369"></a>
<!-- api: F:Inno.Adapter.Presentation.PresentationFeatures.SmoothResize 5bce5d193390c3bbc6ebe2a567e1dd15ca1ae496b5c3ee932c0d9dcb52d7db2d -->

```csharp
Inno.Adapter.Presentation.PresentationFeatures.SmoothResize = 4
```

Enables smooth rendering while native windows are being resized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationFeatures.cs#L29).
