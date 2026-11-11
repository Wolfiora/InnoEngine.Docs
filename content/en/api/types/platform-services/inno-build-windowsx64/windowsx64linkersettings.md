---
title: "WindowsX64LinkerSettings"
description: "Reference for WindowsX64LinkerSettings in Inno.Build.WindowsX64."
uid: api.inno.build.windowsx64.e73980192e8389a0
kind: api
owners:
  - Inno.Build.WindowsX64
apiSurface: source-clr
contracts:
  - project.inno-build-windowsx64
---
# `WindowsX64LinkerSettings`

This reference describes `WindowsX64LinkerSettings` in `Inno.Build.WindowsX64`. Read the [shared contract](../../../projects/inno-build-windowsx64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-5592924f7051c339) | Method |

## Type declaration

<a id="api-e73980192e8389a0"></a>
<!-- api: T:Inno.Build.WindowsX64.WindowsX64LinkerSettings 50c07749275b5966ecf678f5470f0d94008384f4944b10b8b5c09ca662ef7fe0 -->

```csharp
public static class Inno.Build.WindowsX64.WindowsX64LinkerSettings
```

Owns the target's native library formats and linker policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Native/WindowsX64LinkerSettings.cs#L8).

## `Create`

<a id="api-5592924f7051c339"></a>
<!-- api: M:Inno.Build.WindowsX64.WindowsX64LinkerSettings.Create 78ed7dc87f1c5b3f5260edc30b4190f9c95236a8c2ea6e7882d112c1a694c973 -->

```csharp
public static Inno.Build.Toolchains.NativeLinkPlan Inno.Build.WindowsX64.WindowsX64LinkerSettings.Create()
```

Creates the target linker plan without inspecting component names.

**Returns:** The immutable target linker plan.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Native/WindowsX64LinkerSettings.cs#L16).
