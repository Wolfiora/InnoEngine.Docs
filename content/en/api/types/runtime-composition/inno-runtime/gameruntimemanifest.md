---
title: "GameRuntimeManifest"
description: "Reference for GameRuntimeManifest in Inno.Runtime."
uid: api.inno.runtime.9cb45ed79e2262b3
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `GameRuntimeManifest`

This reference describes `GameRuntimeManifest` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0697a3ef7237c373) | Method |
| [`CreateSettingContributors`](#api-93229ae387bc763e) | Method |
| [`Validate`](#api-1a8712a398a7543a) | Method |
| [`applicationId`](#api-19046f1c972e85da) | Property |
| [`modules`](#api-6cd722d74c1c47cb) | Property |
| [`persistentDataPath`](#api-d62f803b165a6ecc) | Property |
| [`plugins`](#api-ba6bb9dd431539e6) | Property |
| [`productName`](#api-2a7424cfd371bf27) | Property |
| [`startupScene`](#api-150cdcdcf212fc6a) | Property |
| [`windowHeight`](#api-777a9905bfceac3c) | Property |
| [`windowWidth`](#api-f5b57b32212d13b9) | Property |

## Type declaration

<a id="api-9cb45ed79e2262b3"></a>
<!-- api: T:Inno.Runtime.GameRuntimeManifest fdd57a41e1dd4505b42676e64193157e4c6cb582ac5fe9c502f4bde440d6a943 -->

```csharp
public sealed class Inno.Runtime.GameRuntimeManifest : Inno.Core.Serialization.ISerializable
```

Stores the immutable startup contract consumed by a deployed game Player.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeManifest.cs#L13).

## `#ctor`

<a id="api-0697a3ef7237c373"></a>
<!-- api: M:Inno.Runtime.GameRuntimeManifest.#ctor ef7919dd112f6b3e0519190e67a0bd7b3dfb67baaa996421f3d90b1c4a82eab4 -->

```csharp
public Inno.Runtime.GameRuntimeManifest.GameRuntimeManifest()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeManifest.cs#L13).

## `CreateSettingContributors`

<a id="api-93229ae387bc763e"></a>
<!-- api: M:Inno.Runtime.GameRuntimeManifest.CreateSettingContributors 0e06de42ecff12e8257cc2e21cd0900e34e4e4da5f29b5c9f1ef448c356baf5d -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingsContributor> Inno.Runtime.GameRuntimeManifest.CreateSettingContributors()
```

Creates current-generation setting contributors from neutral manifest data.

**Returns:** Dependency-ordered contributors ready for `Inno.Core.Settings.ProjectSettingsStore`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeManifest.cs#L132).

## `Validate`

<a id="api-1a8712a398a7543a"></a>
<!-- api: M:Inno.Runtime.GameRuntimeManifest.Validate 455801b198414d62e2bbd3d1cf235199bf09c0ecdfb79c469691b7c99d8895ba -->

```csharp
public void Inno.Runtime.GameRuntimeManifest.Validate()
```

Validates startup identity, dimensions, scene, and Plugin ordering.

**Throws `System.IO.InvalidDataException`:** Thrown when manifest data cannot be executed safely.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeManifest.cs#L69).

## `applicationId`

<a id="api-19046f1c972e85da"></a>
<!-- api: P:Inno.Runtime.GameRuntimeManifest.applicationId 3457bb7d21e4d99e8b2ade7ed90304398e3198db7f07cd7bcf518073b7801080 -->

```csharp
public string Inno.Runtime.GameRuntimeManifest.applicationId { get; set; }
```

Gets or sets the stable lowercase application identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeManifest.cs#L19).

## `modules`

<a id="api-6cd722d74c1c47cb"></a>
<!-- api: P:Inno.Runtime.GameRuntimeManifest.modules 2d3cf8dc8105254ddbc74f821cbd02d6dc81aa8d1c05a1bcd3a59b513fad5f8d -->

```csharp
public Inno.Runtime.GameRuntimeModule[] Inno.Runtime.GameRuntimeManifest.modules { get; set; }
```

Gets or sets the dependency-ordered managed modules in the frozen Player generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeManifest.cs#L61).

## `persistentDataPath`

<a id="api-d62f803b165a6ecc"></a>
<!-- api: P:Inno.Runtime.GameRuntimeManifest.persistentDataPath 7af39e412437c906b14069ee81e6f362f8d6ebb1eb8bdbac6e72fec7ad883423 -->

```csharp
public string Inno.Runtime.GameRuntimeManifest.persistentDataPath { get; set; }
```

Gets or sets the writable data folder below local application data; empty uses the application ID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeManifest.cs#L31).

## `plugins`

<a id="api-ba6bb9dd431539e6"></a>
<!-- api: P:Inno.Runtime.GameRuntimeManifest.plugins d591a8ffc341da3710e77b38f44dbc60225d5baacfd9619ad866eb25b78b23d5 -->

```csharp
public Inno.Runtime.GameRuntimePlugin[] Inno.Runtime.GameRuntimeManifest.plugins { get; set; }
```

Gets or sets dependency-ordered runtime Plugin setting contributions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeManifest.cs#L55).

## `productName`

<a id="api-2a7424cfd371bf27"></a>
<!-- api: P:Inno.Runtime.GameRuntimeManifest.productName b28bfc9bb101c74f5965880275ef3fc447b36086ccd9f3c34e9b982460097d1d -->

```csharp
public string Inno.Runtime.GameRuntimeManifest.productName { get; set; }
```

Gets or sets the player-facing product name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeManifest.cs#L25).

## `startupScene`

<a id="api-150cdcdcf212fc6a"></a>
<!-- api: P:Inno.Runtime.GameRuntimeManifest.startupScene 5b255737263b66fd9e39005879ad6e9578e3f5e6fd77bba25dbbef52728208b5 -->

```csharp
public string Inno.Runtime.GameRuntimeManifest.startupScene { get; set; }
```

Gets or sets the mount-qualified startup scene path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeManifest.cs#L37).

## `windowHeight`

<a id="api-777a9905bfceac3c"></a>
<!-- api: P:Inno.Runtime.GameRuntimeManifest.windowHeight 5e9d38249d00566802cdb45a88480a15b5720578c26b14b0be4e14207366ddba -->

```csharp
public int Inno.Runtime.GameRuntimeManifest.windowHeight { get; set; }
```

Gets or sets the initial logical window height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeManifest.cs#L49).

## `windowWidth`

<a id="api-f5b57b32212d13b9"></a>
<!-- api: P:Inno.Runtime.GameRuntimeManifest.windowWidth 30add5ccb4abf3dc3997a69cb471ab56e15418a37d13ede066ff460261cccc49 -->

```csharp
public int Inno.Runtime.GameRuntimeManifest.windowWidth { get; set; }
```

Gets or sets the initial logical window width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeManifest.cs#L43).
