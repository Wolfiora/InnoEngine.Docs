---
title: "GameRuntimePlugin"
description: "Reference for GameRuntimePlugin in Inno.Runtime."
uid: api.inno.runtime.4a374a0ab0e62719
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `GameRuntimePlugin`

This reference describes `GameRuntimePlugin` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8d32aa40cf539185) | Method |
| [`Validate`](#api-66159b3cd5b34602) | Method |
| [`dependencies`](#api-7b82fcd480260ec0) | Property |
| [`id`](#api-b84949da5651775d) | Property |
| [`overrides`](#api-532cf236315bf6d7) | Property |
| [`settings`](#api-ce65c5cd462b5c6b) | Property |

## Type declaration

<a id="api-4a374a0ab0e62719"></a>
<!-- api: T:Inno.Runtime.GameRuntimePlugin 48569ed4d0a77c8c98e6bcc93d28a799123e23a8bd7f1797ff3fe16a611f798c -->

```csharp
public sealed class Inno.Runtime.GameRuntimePlugin : Inno.Core.Serialization.ISerializable
```

Stores one Plugin's runtime-only project setting contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimePlugin.cs#L13).

## `#ctor`

<a id="api-8d32aa40cf539185"></a>
<!-- api: M:Inno.Runtime.GameRuntimePlugin.#ctor eb003999fcc80a8646affdb09f16aa801e9dcc82eda809b50f3c59c9127a08f2 -->

```csharp
public Inno.Runtime.GameRuntimePlugin.GameRuntimePlugin()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimePlugin.cs#L13).

## `Validate`

<a id="api-66159b3cd5b34602"></a>
<!-- api: M:Inno.Runtime.GameRuntimePlugin.Validate b6fb3159fa3bff1fed46609433377b603a700f0373260034bbea940175d1472c -->

```csharp
public void Inno.Runtime.GameRuntimePlugin.Validate()
```

Validates identity and ownership declarations.

**Throws `System.IO.InvalidDataException`:** Thrown when the contribution is malformed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimePlugin.cs#L45).

## `dependencies`

<a id="api-7b82fcd480260ec0"></a>
<!-- api: P:Inno.Runtime.GameRuntimePlugin.dependencies 839ea3627572d8682c32fe350c8e73accd393b1b451af36be857e86519a00259 -->

```csharp
public string[] Inno.Runtime.GameRuntimePlugin.dependencies { get; set; }
```

Gets or sets Plugin IDs that must precede this Plugin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimePlugin.cs#L25).

## `id`

<a id="api-b84949da5651775d"></a>
<!-- api: P:Inno.Runtime.GameRuntimePlugin.id 2890b6b649933194ee5d2b8ab89171943886054a0a120244854defc890c2502c -->

```csharp
public string Inno.Runtime.GameRuntimePlugin.id { get; set; }
```

Gets or sets the stable Plugin identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimePlugin.cs#L19).

## `overrides`

<a id="api-532cf236315bf6d7"></a>
<!-- api: P:Inno.Runtime.GameRuntimePlugin.overrides c18f5bd1acf562f0c3684f48dd7bcbb38f63b18e9b413704bf7925118ac3d506 -->

```csharp
public string[] Inno.Runtime.GameRuntimePlugin.overrides { get; set; }
```

Gets or sets dependencies whose setting defaults may be replaced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimePlugin.cs#L31).

## `settings`

<a id="api-ce65c5cd462b5c6b"></a>
<!-- api: P:Inno.Runtime.GameRuntimePlugin.settings 25c4a5cbf527401455447418d8c1971fc65844dade295fd5a4dd75fc8a05d7b0 -->

```csharp
public Inno.Core.Settings.ProjectSettingRecord[] Inno.Runtime.GameRuntimePlugin.settings { get; set; }
```

Gets or sets neutral setting contribution records.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimePlugin.cs#L37).
