---
title: "RuntimeContentCatalog"
description: "Reference for RuntimeContentCatalog in Inno.Runtime."
uid: api.inno.runtime.ffffdadca72c0d81
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `RuntimeContentCatalog`

This reference describes `RuntimeContentCatalog` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-12241bb08d656ba4) | Method |
| [`Validate`](#api-cecbc6d760de1531) | Method |
| [`artifactBundleCount`](#api-665dd38df4da9b7c) | Property |
| [`assetCount`](#api-d6e12172765dec0b) | Property |
| [`contentHash`](#api-45afedc8acd93939) | Property |
| [`packFileName`](#api-9f85ac70dd476458) | Property |
| [`runtimeAssemblyCount`](#api-b1cd2e15dfb3ff3b) | Property |
| [`snapshotFingerprint`](#api-35c921aa5ed8c474) | Property |

## Type declaration

<a id="api-ffffdadca72c0d81"></a>
<!-- api: T:Inno.Runtime.RuntimeContentCatalog 10cea87f72cff896afff7c45f964cb632c65b4cc3c453cd93988b4491f41c03f -->

```csharp
public sealed class Inno.Runtime.RuntimeContentCatalog : Inno.Core.Serialization.ISerializable
```

Describes the single immutable content pack deployed with a Player build.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeContentCatalog.cs#L11).

## `#ctor`

<a id="api-12241bb08d656ba4"></a>
<!-- api: M:Inno.Runtime.RuntimeContentCatalog.#ctor 41914f02dfed9e90fbba9c6318f9a14e48811f0b3b5de40fc8bc5a0c541e10fd -->

```csharp
public Inno.Runtime.RuntimeContentCatalog.RuntimeContentCatalog()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeContentCatalog.cs#L11).

## `Validate`

<a id="api-cecbc6d760de1531"></a>
<!-- api: M:Inno.Runtime.RuntimeContentCatalog.Validate 5b283687a64788a04913f5f0272453a2a6846af4d7cbb82d358c971832737f0a -->

```csharp
public void Inno.Runtime.RuntimeContentCatalog.Validate()
```

Validates content identity, file naming, snapshot identity, and counts.

**Throws `System.IO.InvalidDataException`:** Thrown when the catalog cannot identify one complete content-addressed deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeContentCatalog.cs#L55).

## `artifactBundleCount`

<a id="api-665dd38df4da9b7c"></a>
<!-- api: P:Inno.Runtime.RuntimeContentCatalog.artifactBundleCount 7c27202a700328fdb467e878cf85e8d5ec1a9064221ec3f14ac29c5fb45c9579 -->

```csharp
public int Inno.Runtime.RuntimeContentCatalog.artifactBundleCount { get; set; }
```

Gets or sets the number of content-addressed artifact bundles in the pack.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeContentCatalog.cs#L41).

## `assetCount`

<a id="api-d6e12172765dec0b"></a>
<!-- api: P:Inno.Runtime.RuntimeContentCatalog.assetCount e2ef88e0a8370a4936863d1c2f9f16b2a55542f481b9ff62eb1309fb64ed9c97 -->

```csharp
public int Inno.Runtime.RuntimeContentCatalog.assetCount { get; set; }
```

Gets or sets the number of runtime assets in the enclosed asset catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeContentCatalog.cs#L35).

## `contentHash`

<a id="api-45afedc8acd93939"></a>
<!-- api: P:Inno.Runtime.RuntimeContentCatalog.contentHash 6b846e47caa942747ed327a86a8d120f2367358c2ccc148d86c160cddc854992 -->

```csharp
public string Inno.Runtime.RuntimeContentCatalog.contentHash { get; set; }
```

Gets or sets the SHA-256 identity of the complete content pack bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeContentCatalog.cs#L17).

## `packFileName`

<a id="api-9f85ac70dd476458"></a>
<!-- api: P:Inno.Runtime.RuntimeContentCatalog.packFileName 3c0b237bf9a2b4513a10b58d0bf56a15a5ed5f4646e3b40c62569b1c538bcc8d -->

```csharp
public string Inno.Runtime.RuntimeContentCatalog.packFileName { get; set; }
```

Gets or sets the content pack file name relative to the packaged Content directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeContentCatalog.cs#L23).

## `runtimeAssemblyCount`

<a id="api-b1cd2e15dfb3ff3b"></a>
<!-- api: P:Inno.Runtime.RuntimeContentCatalog.runtimeAssemblyCount 0b00e0099a4dd69376d2ca14820310863ad5718b10ed2a3f27e7b53db317c777 -->

```csharp
public int Inno.Runtime.RuntimeContentCatalog.runtimeAssemblyCount { get; set; }
```

Gets or sets the number of runtime assemblies in the pack.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeContentCatalog.cs#L47).

## `snapshotFingerprint`

<a id="api-35c921aa5ed8c474"></a>
<!-- api: P:Inno.Runtime.RuntimeContentCatalog.snapshotFingerprint b69a6cb4ddc1243b9c98e8c6f709e2a247d6b0573ec1224a091272b4289270ea -->

```csharp
public string Inno.Runtime.RuntimeContentCatalog.snapshotFingerprint { get; set; }
```

Gets or sets the combined build input snapshot fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeContentCatalog.cs#L29).
