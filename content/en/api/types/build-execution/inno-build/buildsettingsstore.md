---
title: "BuildSettingsStore"
description: "Reference for BuildSettingsStore in Inno.Build."
uid: api.inno.build.373d844fdec060b6
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `BuildSettingsStore`

This reference describes `BuildSettingsStore` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-66f652c6d554f4eb) | Method |
| [`CaptureDocument`](#api-17437a7080c999db) | Method |
| [`Load`](#api-c1b91159cbff1433) | Method |
| [`RestoreDocument`](#api-f5208248e391fe01) | Method |
| [`Save`](#api-c1597ebc1f160e02) | Method |
| [`ValidateDocument`](#api-f238675d651efa17) | Method |
| [`defaultSettings`](#api-c51dad9fd24dc1ba) | Property |
| [`exists`](#api-9917bae68863cd58) | Property |

## Type declaration

<a id="api-373d844fdec060b6"></a>
<!-- api: T:Inno.Build.BuildSettingsStore 704c1166698ebc5bf419a20ca3c2ff9192d5b51eaf99bd709cce6f5db964ac1a -->

```csharp
public sealed class Inno.Build.BuildSettingsStore
```

Persists project-owned export defaults independently from temporary export requests.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettingsStore.cs#L13).

## `#ctor`

<a id="api-66f652c6d554f4eb"></a>
<!-- api: M:Inno.Build.BuildSettingsStore.#ctor(System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Build.BuildSettings) 511ea56a50e56188da84f8fe3b07114e13e2f9a7dedca89ec3c964ae3062ce50 -->

```csharp
public Inno.Build.BuildSettingsStore.BuildSettingsStore(string path, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Build.BuildSettings defaultSettings)
```

Creates a store for one project's current build settings document.

**Parameter `path`:** The project-owned `Settings.Build.inno` path.

**Parameter `serialization`:** The active engine serialization registry.

**Parameter `defaultSettings`:** Canonical project defaults used while no document exists.

**Throws `System.ArgumentException`:** Thrown when `path` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `serialization` or `defaultSettings` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettingsStore.cs#L37).

## `CaptureDocument`

<a id="api-17437a7080c999db"></a>
<!-- api: M:Inno.Build.BuildSettingsStore.CaptureDocument d8c3afdd7e276c3dfe8bbf6c29a63f5491bc00e061f651d937efa3b5567215cb -->

```csharp
public byte[] Inno.Build.BuildSettingsStore.CaptureDocument()
```

Captures the current effective build defaults as a native document.

**Returns:** A newly owned current-format document payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettingsStore.cs#L122).

## `Load`

<a id="api-c1b91159cbff1433"></a>
<!-- api: M:Inno.Build.BuildSettingsStore.Load 1df765c23db032610e8b200b1262a8bc95a7c7b23d576d23046a6a539ad3b88a -->

```csharp
public Inno.Build.BuildSettings Inno.Build.BuildSettingsStore.Load()
```

Loads the saved settings or returns an isolated copy of the canonical defaults.

**Returns:** A newly owned settings object.

**Throws `System.IO.InvalidDataException`:** Thrown when the saved document is malformed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettingsStore.cs#L87).

## `RestoreDocument`

<a id="api-f5208248e391fe01"></a>
<!-- api: M:Inno.Build.BuildSettingsStore.RestoreDocument(System.ReadOnlySpan{System.Byte}) 6d1118e4f273b87b26ab619a8dc6ab4ca6d8f22f7e0dd0785e1663b541414b09 -->

```csharp
public void Inno.Build.BuildSettingsStore.RestoreDocument(System.ReadOnlySpan<byte> document)
```

Validates and atomically restores a native build settings document.

**Parameter `document`:** The complete document payload.

**Throws `System.IO.InvalidDataException`:** Thrown when the document is malformed.

**Throws `System.IO.IOException`:** Thrown when the document cannot be committed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettingsStore.cs#L140).

## `Save`

<a id="api-c1597ebc1f160e02"></a>
<!-- api: M:Inno.Build.BuildSettingsStore.Save(Inno.Build.BuildSettings) d40b3428b563941136c036845e5b48b18d7627ba49b417ca4c0b82e65b36ccdb -->

```csharp
public void Inno.Build.BuildSettingsStore.Save(Inno.Build.BuildSettings settings)
```

Atomically replaces the project-owned build defaults.

**Parameter `settings`:** The complete defaults to persist.

**Throws `System.ArgumentNullException`:** Thrown when `settings` is null.

**Throws `System.IO.InvalidDataException`:** Thrown when the settings document is malformed.

**Throws `System.IO.IOException`:** Thrown when the candidate cannot be committed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettingsStore.cs#L108).

## `ValidateDocument`

<a id="api-f238675d651efa17"></a>
<!-- api: M:Inno.Build.BuildSettingsStore.ValidateDocument(System.ReadOnlySpan{System.Byte}) b406f6791d0ab8814474e14bbad4bec7feb0c0527ec3ea8bdce4f3d849f5bc35 -->

```csharp
public void Inno.Build.BuildSettingsStore.ValidateDocument(System.ReadOnlySpan<byte> document)
```

Validates a native build settings document without changing the active file.

**Parameter `document`:** The document payload to inspect.

**Throws `System.IO.InvalidDataException`:** Thrown when the document is malformed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettingsStore.cs#L156).

## `defaultSettings`

<a id="api-c51dad9fd24dc1ba"></a>
<!-- api: P:Inno.Build.BuildSettingsStore.defaultSettings 0de44fdc532465706a08b24f6825c2155a0058fd70233613b1bce3dc7ff897e5 -->

```csharp
public Inno.Build.BuildSettings Inno.Build.BuildSettingsStore.defaultSettings { get; }
```

Gets an isolated copy of the canonical project defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettingsStore.cs#L69).

## `exists`

<a id="api-9917bae68863cd58"></a>
<!-- api: P:Inno.Build.BuildSettingsStore.exists edd049517bdd20d5cd0c1d749692213d060cc1e2b30e5eaf5e2ee316583caac8 -->

```csharp
public bool Inno.Build.BuildSettingsStore.exists { get; }
```

Gets whether a project-owned build settings document exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildSettingsStore.cs#L57).
