---
title: "BuildSettings"
description: "Reference for BuildSettings in Inno.Build."
uid: api.inno.build.0ebaf3c9612f9740
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `BuildSettings`

This reference describes `BuildSettings` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e254f90d0eef0453) | Method |
| [`Copy`](#api-dac1bcebef4051f3) | Method |
| [`CreateDefault`](#api-ab4fba55500f0140) | Method |
| [`CreateGameProfile`](#api-bfeb1a5a0186370c) | Method |
| [`gameManagedDeployment`](#api-76c0b29ddf84794c) | Property |
| [`gameOutputDirectory`](#api-4173d0b38412ceca) | Property |
| [`gamePersistentDataPath`](#api-f05fa2bfe1ad9953) | Property |
| [`gameProductName`](#api-5803c5263aaadd68) | Property |
| [`gameStartupScene`](#api-48b11d1965da7ab5) | Property |
| [`gameTarget`](#api-18de8c5585bf788a) | Property |
| [`gameWindowHeight`](#api-44751aae07bcee5b) | Property |
| [`gameWindowWidth`](#api-4646b7e5dd264847) | Property |
| [`includePluginDependencies`](#api-b0d05f50099b77b9) | Property |
| [`pluginDisplayName`](#api-b8226573b0ce338b) | Property |
| [`pluginOutputPath`](#api-14219040e26c8e88) | Property |

## Type declaration

<a id="api-0ebaf3c9612f9740"></a>
<!-- api: T:Inno.Build.BuildSettings 18c1917711240ff91cf44308064a1cb61675a831f16290ed758afdd03c591040 -->

```csharp
public sealed class Inno.Build.BuildSettings : Inno.Core.Serialization.ISerializable
```

Defines project-owned defaults copied into each temporary game or Plugin export request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L14).

## `#ctor`

<a id="api-e254f90d0eef0453"></a>
<!-- api: M:Inno.Build.BuildSettings.#ctor 3a3a861434a31a84630030e2c21eab20619b66a1b1f21c707b4c1af7ac21aaee -->

```csharp
public Inno.Build.BuildSettings.BuildSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L14).

## `Copy`

<a id="api-dac1bcebef4051f3"></a>
<!-- api: M:Inno.Build.BuildSettings.Copy 23d22bfc1cf73d328ce797378a754e81fc6e7891f8a8db6699db29bb52f7d440 -->

```csharp
public Inno.Build.BuildSettings Inno.Build.BuildSettings.Copy()
```

Creates an isolated copy suitable for a temporary export draft.

**Returns:** A newly owned settings object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L165).

## `CreateDefault`

<a id="api-ab4fba55500f0140"></a>
<!-- api: M:Inno.Build.BuildSettings.CreateDefault(System.String,System.String,Inno.Build.BuildTargetId) 6317b92efed4e99d189bb05bc3eaa8e5d2c25abde925cd99d2d546563656686b -->

```csharp
public static Inno.Build.BuildSettings Inno.Build.BuildSettings.CreateDefault(string projectName, string startupScene, Inno.Build.BuildTargetId target)
```

Creates canonical defaults for a new project.

**Parameter `projectName`:** The project directory name used for initial labels and output paths.

**Parameter `startupScene`:** The initial mount-qualified startup Scene, or an empty value when unavailable.

**Parameter `target`:** The host-appropriate initial build target.

**Returns:** A newly owned build settings object.

**Throws `System.ArgumentException`:** Thrown when `projectName` is empty or `target` is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L113).

## `CreateGameProfile`

<a id="api-bfeb1a5a0186370c"></a>
<!-- api: M:Inno.Build.BuildSettings.CreateGameProfile(Inno.Core.Settings.ProjectId) e906cba4c18356ad2d3038727aa1e7ea2fd6416a3e5e6194e53b5d43923a9471 -->

```csharp
public Inno.Build.BuildProfile Inno.Build.BuildSettings.CreateGameProfile(Inno.Core.Settings.ProjectId projectId)
```

Creates an isolated game profile from the current defaults.

**Parameter `projectId`:** The authoritative project identity copied into the game profile.

**Returns:** A newly owned profile that may be changed for one build without mutating these settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L146).

## `gameManagedDeployment`

<a id="api-76c0b29ddf84794c"></a>
<!-- api: P:Inno.Build.BuildSettings.gameManagedDeployment dc9cdd7a4aef62b05109eae1c16bd58b2bd83e1447d64d1f6b5fe665cfb7f7b8 -->

```csharp
public Inno.Build.Managed.ManagedDeploymentId? Inno.Build.BuildSettings.gameManagedDeployment { get; set; }
```

Gets or sets the default managed publisher; null follows the selected platform's default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L86).

## `gameOutputDirectory`

<a id="api-4173d0b38412ceca"></a>
<!-- api: P:Inno.Build.BuildSettings.gameOutputDirectory 487d9b2ef0584cfb2d8a3c6bd37690dd7c4212dc53d0f921c61b8124904f5f33 -->

```csharp
public string Inno.Build.BuildSettings.gameOutputDirectory { get; set; }
```

Gets or sets the default game output directory, relative to the project root or absolute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L57).

## `gamePersistentDataPath`

<a id="api-f05fa2bfe1ad9953"></a>
<!-- api: P:Inno.Build.BuildSettings.gamePersistentDataPath 1df50ee27b723991ed1503ede062c698e698dcf3780dda2d30f3cadd6cb81de6 -->

```csharp
public string Inno.Build.BuildSettings.gamePersistentDataPath { get; set; }
```

Gets or sets the default writable data folder below the operating system's local application data directory.
An empty value uses the project ID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L45).

## `gameProductName`

<a id="api-5803c5263aaadd68"></a>
<!-- api: P:Inno.Build.BuildSettings.gameProductName b9e4b7d3c3b11de0b4518dc1cdbd8aa3027f7fea4446a174083a979342a9198a -->

```csharp
public string Inno.Build.BuildSettings.gameProductName { get; set; }
```

Gets or sets the default player-facing product name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L38).

## `gameStartupScene`

<a id="api-48b11d1965da7ab5"></a>
<!-- api: P:Inno.Build.BuildSettings.gameStartupScene 8194bf0a90a4c94cf01bfddd2834ad7a0ef58c13f68e2011d0324d4853b4351a -->

```csharp
public string Inno.Build.BuildSettings.gameStartupScene { get; set; }
```

Gets or sets the default mount-qualified startup Scene path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L51).

## `gameTarget`

<a id="api-18de8c5585bf788a"></a>
<!-- api: P:Inno.Build.BuildSettings.gameTarget e365d5ca89ee1ac16f5d40070587267b08a5f6a52dbffa3de52226e219b4720c -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.BuildSettings.gameTarget { get; set; }
```

Gets or sets the default game build target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L74).

## `gameWindowHeight`

<a id="api-44751aae07bcee5b"></a>
<!-- api: P:Inno.Build.BuildSettings.gameWindowHeight 61e4851d14d9d0ae64581435fd5548e5d338523459ada90d12692662dc2deba6 -->

```csharp
public int Inno.Build.BuildSettings.gameWindowHeight { get; set; }
```

Gets or sets the default initial logical window height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L69).

## `gameWindowWidth`

<a id="api-4646b7e5dd264847"></a>
<!-- api: P:Inno.Build.BuildSettings.gameWindowWidth 0ce2f4c0ea12cf974b0d9e2ff8ab589ecf8f53b56446f63defd4b2189b0ec889 -->

```csharp
public int Inno.Build.BuildSettings.gameWindowWidth { get; set; }
```

Gets or sets the default initial logical window width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L63).

## `includePluginDependencies`

<a id="api-b0d05f50099b77b9"></a>
<!-- api: P:Inno.Build.BuildSettings.includePluginDependencies 89bd83984ae8d6808e05c75115b4751d32d3a84c31b47a5ee44990c9b880f71d -->

```csharp
public bool Inno.Build.BuildSettings.includePluginDependencies { get; set; }
```

Gets or sets whether Plugin dependency packages are embedded by default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L32).

## `pluginDisplayName`

<a id="api-b8226573b0ce338b"></a>
<!-- api: P:Inno.Build.BuildSettings.pluginDisplayName 21b4022105818f4fe396568faa78fc58a2ddbe8a70d50c52f1fad270e629cb76 -->

```csharp
public string Inno.Build.BuildSettings.pluginDisplayName { get; set; }
```

Gets or sets the default user-facing Plugin name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L20).

## `pluginOutputPath`

<a id="api-14219040e26c8e88"></a>
<!-- api: P:Inno.Build.BuildSettings.pluginOutputPath 7db2c2792582b16b28b955f90237d17545111eb257916259231e5057c5ee9b86 -->

```csharp
public string Inno.Build.BuildSettings.pluginOutputPath { get; set; }
```

Gets or sets the default Plugin package destination, relative to the project root or absolute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettings.cs#L26).
