---
title: "GameRuntimeAssembly"
description: "Reference for GameRuntimeAssembly in Inno.Runtime."
uid: api.inno.runtime.01536293a9a3df7a
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `GameRuntimeAssembly`

This reference describes `GameRuntimeAssembly` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-521ab7184150084d) | Method |
| [`Validate`](#api-562b3bda87f068b9) | Method |
| [`contentFingerprint`](#api-2e0004b1cf867463) | Property |
| [`name`](#api-4333ce0305159744) | Property |

## Type declaration

<a id="api-01536293a9a3df7a"></a>
<!-- api: T:Inno.Runtime.GameRuntimeAssembly 83787b25009649b84b3ce7eee704f99d5abdaf1ec7b9ee4282ec247166174d95 -->

```csharp
public sealed class Inno.Runtime.GameRuntimeAssembly : Inno.Core.Serialization.ISerializable
```

Records a logical assembly identity and the content fingerprint of its build input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeAssembly.cs#L12).

## `#ctor`

<a id="api-521ab7184150084d"></a>
<!-- api: M:Inno.Runtime.GameRuntimeAssembly.#ctor a8313fc78e39c41ae42a8506d1fd04f75df1d25dedee5fd6c02a23c7960b47ce -->

```csharp
public Inno.Runtime.GameRuntimeAssembly.GameRuntimeAssembly()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeAssembly.cs#L12).

## `Validate`

<a id="api-562b3bda87f068b9"></a>
<!-- api: M:Inno.Runtime.GameRuntimeAssembly.Validate 7245b9b515cd19ee774273ef2081462c071640517d537ccdc758c224dafc7015 -->

```csharp
public void Inno.Runtime.GameRuntimeAssembly.Validate()
```

Rejects identities or fingerprints that cannot describe a frozen code input.

**Throws `System.IO.InvalidDataException`:** The assembly name is empty or nonportable, or the fingerprint is not a SHA-256 value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeAssembly.cs#L32).

## `contentFingerprint`

<a id="api-2e0004b1cf867463"></a>
<!-- api: P:Inno.Runtime.GameRuntimeAssembly.contentFingerprint 7bcb1775d7e02376eb5755cb9b4a7df11496ab00d1b0b9822c2d69090f5de318 -->

```csharp
public string Inno.Runtime.GameRuntimeAssembly.contentFingerprint { get; set; }
```

Gets or sets the lowercase SHA-256 fingerprint of the frozen compiler output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeAssembly.cs#L24).

## `name`

<a id="api-4333ce0305159744"></a>
<!-- api: P:Inno.Runtime.GameRuntimeAssembly.name 4ae294dc26fde17f727b9248f766d2ca3886520a89f8824cbb23e7255b7956d1 -->

```csharp
public string Inno.Runtime.GameRuntimeAssembly.name { get; set; }
```

Gets or sets the exact simple assembly name, independent of deployment file layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeAssembly.cs#L18).
