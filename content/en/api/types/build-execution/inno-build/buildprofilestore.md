---
title: "BuildProfileStore"
description: "Reference for BuildProfileStore in Inno.Build."
uid: api.inno.build.9ebaa157dd76d997
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `BuildProfileStore`

This reference describes `BuildProfileStore` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d207c94b0fcc1823) | Method |
| [`Load`](#api-2a19c8cf235a43c9) | Method |
| [`Save`](#api-0d896fb82ddf8677) | Method |
| [`exists`](#api-a87d2138a87ea198) | Property |

## Type declaration

<a id="api-9ebaa157dd76d997"></a>
<!-- api: T:Inno.Build.BuildProfileStore e7c04989e5beec822f9881221b33b64e80359d1f69dff08f350813a3150bb83b -->

```csharp
public sealed class Inno.Build.BuildProfileStore
```

Persists one project's current game build profile through the engine serialization contract.

**Constraints:** The store writes a complete candidate beside the destination and replaces the active document
only after serialization and validation succeed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfileStore.cs#L16).

## `#ctor`

<a id="api-d207c94b0fcc1823"></a>
<!-- api: M:Inno.Build.BuildProfileStore.#ctor(System.String,Inno.Core.Serialization.SerializationRegistry) cdf0a0f74084482bafe60becb077357eac0898df4e3c6f31a146e9d5d53b15f0 -->

```csharp
public Inno.Build.BuildProfileStore.BuildProfileStore(string path, Inno.Core.Serialization.SerializationRegistry serialization)
```

Creates a store for one current-format build profile document.

**Parameter `path`:** The project-owned path of the build profile document.

**Parameter `serialization`:** The serialization registry whose active generation owns the generated converter.

**Throws `System.ArgumentException`:** Thrown when `path` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `serialization` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfileStore.cs#L36).

## `Load`

<a id="api-2a19c8cf235a43c9"></a>
<!-- api: M:Inno.Build.BuildProfileStore.Load 002040fdebbc717c2b0ee3d78f081433c91db89446533ec85275ec8aadcaabab -->

```csharp
public Inno.Build.BuildProfile Inno.Build.BuildProfileStore.Load()
```

Loads and validates the current build profile document.

**Returns:** A newly owned build profile that callers may edit independently.

**Throws `System.IO.FileNotFoundException`:** Thrown when the project does not contain a build profile document.

**Throws `System.IO.InvalidDataException`:** Thrown when the document is corrupt or contains an invalid profile.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfileStore.cs#L63).

## `Save`

<a id="api-0d896fb82ddf8677"></a>
<!-- api: M:Inno.Build.BuildProfileStore.Save(Inno.Build.BuildProfile) 6cc366fcd716ab0b9bcee40f0c53606c32829380331bdb4a9c26ed32bd5954a9 -->

```csharp
public void Inno.Build.BuildProfileStore.Save(Inno.Build.BuildProfile profile)
```

Validates and atomically saves the supplied build profile.

**Parameter `profile`:** The complete current profile to persist.

**Throws `System.ArgumentNullException`:** Thrown when `profile` is `null`.

**Throws `System.IO.InvalidDataException`:** Thrown when the profile cannot produce a supported Player deployment.

**Throws `System.IO.IOException`:** Thrown when the candidate document cannot be written or atomically installed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfileStore.cs#L99).

## `exists`

<a id="api-a87d2138a87ea198"></a>
<!-- api: P:Inno.Build.BuildProfileStore.exists 02e85ef0ef748d5f659c98bfea95d036d31b6b8b75044eefacba7af4cb2ead7c -->

```csharp
public bool Inno.Build.BuildProfileStore.exists { get; }
```

Gets whether the current project contains a build profile document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfileStore.cs#L49).
