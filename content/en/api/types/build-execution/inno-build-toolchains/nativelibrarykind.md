---
title: "NativeLibraryKind"
description: "Reference for NativeLibraryKind in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.0557f94c44647f8a
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeLibraryKind`

This reference describes `NativeLibraryKind` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Shared`](#api-e1ac5a01f7d31328) | Field |
| [`Static`](#api-dc3c17678976a0c8) | Field |

## Type declaration

<a id="api-0557f94c44647f8a"></a>
<!-- api: T:Inno.Build.Toolchains.NativeLibraryKind 8a2de514646559f3168eb605f9f991e7506b1dde6a653c47abb61bafbf1a17fe -->

```csharp
public enum Inno.Build.Toolchains.NativeLibraryKind : int
```

Specifies the linkage required by a product's native component operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentBuildOptions.cs#L11).

## `Shared`

<a id="api-e1ac5a01f7d31328"></a>
<!-- api: F:Inno.Build.Toolchains.NativeLibraryKind.Shared 6cc21fe5a264b0425a4531817245a169e62ceeab71aa062170d73aa65b62a6b5 -->

```csharp
Inno.Build.Toolchains.NativeLibraryKind.Shared = 1
```

Produces libraries loaded by the deployed product.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentBuildOptions.cs#L21).

## `Static`

<a id="api-dc3c17678976a0c8"></a>
<!-- api: F:Inno.Build.Toolchains.NativeLibraryKind.Static b8d8ef3890df801787f7cf2ac679f581a72951f67207028fb466bcce54c5c97d -->

```csharp
Inno.Build.Toolchains.NativeLibraryKind.Static = 0
```

Produces archives for the selected final linker.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentBuildOptions.cs#L16).
