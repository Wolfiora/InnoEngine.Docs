---
title: "NativeArtifactRole"
description: "Reference for NativeArtifactRole in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.0cee53fe25c72142
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeArtifactRole`

This reference describes `NativeArtifactRole` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ImportLibrary`](#api-bf32a985c032d190) | Field |
| [`SharedLibrary`](#api-5bc51ad35bfc6289) | Field |
| [`StaticArchive`](#api-b0e6a57ceb26f6f4) | Field |
| [`SupportFile`](#api-dacde75ed5df66b2) | Field |

## Type declaration

<a id="api-0cee53fe25c72142"></a>
<!-- api: T:Inno.Build.Toolchains.NativeArtifactRole 26436445fc6c8a3c75e014b6a4a043a239eacb7055e206c3b373ea8184740348 -->

```csharp
public enum Inno.Build.Toolchains.NativeArtifactRole : int
```

Describes the link or deployment role explicitly assigned by a native producer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L13).

## `ImportLibrary`

<a id="api-bf32a985c032d190"></a>
<!-- api: F:Inno.Build.Toolchains.NativeArtifactRole.ImportLibrary 04070080234d26b66ec52239bdb773ca53dd1766cdaa1e998e92e35bd1a77785 -->

```csharp
Inno.Build.Toolchains.NativeArtifactRole.ImportLibrary = 1
```

A separate linker input referring to a shared library.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L22).

## `SharedLibrary`

<a id="api-5bc51ad35bfc6289"></a>
<!-- api: F:Inno.Build.Toolchains.NativeArtifactRole.SharedLibrary 8feafc347ac0e0d8135ef5d1ce64ef88f7d9647ab812fea75175bf8a5843d6e8 -->

```csharp
Inno.Build.Toolchains.NativeArtifactRole.SharedLibrary = 0
```

A library loaded by the runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L18).

## `StaticArchive`

<a id="api-b0e6a57ceb26f6f4"></a>
<!-- api: F:Inno.Build.Toolchains.NativeArtifactRole.StaticArchive ba7083766d69e8af9c519a9052a38dc1153b4f7eda5d5531ff58cdadebc7a5ee -->

```csharp
Inno.Build.Toolchains.NativeArtifactRole.StaticArchive = 2
```

An archive linked into the final executable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L26).

## `SupportFile`

<a id="api-dacde75ed5df66b2"></a>
<!-- api: F:Inno.Build.Toolchains.NativeArtifactRole.SupportFile 7353214c893dd4a75b9ae888f2b7ca4611049f3b7e51423251c5389c3b929f4b -->

```csharp
Inno.Build.Toolchains.NativeArtifactRole.SupportFile = 3
```

A tool, header or other supporting payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifact.cs#L30).
