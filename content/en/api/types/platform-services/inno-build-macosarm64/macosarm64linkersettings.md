---
title: "MacOSArm64LinkerSettings"
description: "Reference for MacOSArm64LinkerSettings in Inno.Build.MacOSArm64."
uid: api.inno.build.macosarm64.d1b6d9b692d190a4
kind: api
owners:
  - Inno.Build.MacOSArm64
apiSurface: source-clr
contracts:
  - project.inno-build-macosarm64
---
# `MacOSArm64LinkerSettings`

This reference describes `MacOSArm64LinkerSettings` in `Inno.Build.MacOSArm64`. Read the [shared contract](../../../projects/inno-build-macosarm64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-e31818ef0ccbfda4) | Method |

## Type declaration

<a id="api-d1b6d9b692d190a4"></a>
<!-- api: T:Inno.Build.MacOSArm64.MacOSArm64LinkerSettings 171b51e2ca97d2afe657e278a6f89c71b9d5431e33304a326f50db4b7d878825 -->

```csharp
public static class Inno.Build.MacOSArm64.MacOSArm64LinkerSettings
```

Owns the target's native library formats and linker policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Native/MacOSArm64LinkerSettings.cs#L9).

## `Create`

<a id="api-e31818ef0ccbfda4"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64LinkerSettings.Create(System.Collections.Generic.IEnumerable{System.String}) 61f4b842a6b7412aa55517a8e052dbcc87ce6849e3a53a1029178e9d7b1ba46f -->

```csharp
public static Inno.Build.Toolchains.NativeLinkPlan Inno.Build.MacOSArm64.MacOSArm64LinkerSettings.Create(System.Collections.Generic.IEnumerable<string>? runtimeSearchPaths = null)
```

Creates the target linker plan without inspecting component names.

**Parameter `runtimeSearchPaths`:** Explicit runtime dependency paths, or null when none are needed.

**Returns:** The immutable target linker plan.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Native/MacOSArm64LinkerSettings.cs#L20).
