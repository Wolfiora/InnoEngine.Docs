---
title: "RuntimeManifestEnvelope"
description: "Reference for RuntimeManifestEnvelope in Inno.Runtime."
uid: api.inno.runtime.89d8314626c3a524
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `RuntimeManifestEnvelope`

This reference describes `RuntimeManifestEnvelope` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Decode`](#api-0dfdaa86fae48964) | Method |
| [`Encode`](#api-3a321cd411492037) | Method |
| [`ReadApplicationId`](#api-33d7d18033aa2444) | Method |
| [`ReadPersistentDataPath`](#api-c3835af6b383615f) | Method |

## Type declaration

<a id="api-89d8314626c3a524"></a>
<!-- api: T:Inno.Runtime.RuntimeManifestEnvelope 275ac0d1e091ecbe65d5eedd2e4e3b83edd6758b8bb990e126612ff350e3c276 -->

```csharp
public static class Inno.Runtime.RuntimeManifestEnvelope
```

Frames the serialized runtime manifest with the application identity required before engine startup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeManifestEnvelope.cs#L12).

## `Decode`

<a id="api-0dfdaa86fae48964"></a>
<!-- api: M:Inno.Runtime.RuntimeManifestEnvelope.Decode(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationGeneration) 04fafcd8ca20c85b228eb246f9c31d9c8bb5468895b338c06f37f7caf78cd1be -->

```csharp
public static Inno.Runtime.GameRuntimeManifest Inno.Runtime.RuntimeManifestEnvelope.Decode(System.ReadOnlySpan<byte> data, Inno.Core.Serialization.SerializationGeneration serialization)
```

Deserializes and validates the complete runtime manifest after engine serialization is available.

**Parameter `data`:** The complete runtime manifest envelope.

**Parameter `serialization`:** The immutable converter generation selected for Player startup.

**Returns:** The validated runtime manifest.

**Throws `System.IO.InvalidDataException`:** Thrown when the envelope or manifest is malformed, or when the framed identity disagrees with the payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeManifestEnvelope.cs#L118).

## `Encode`

<a id="api-3a321cd411492037"></a>
<!-- api: M:Inno.Runtime.RuntimeManifestEnvelope.Encode(Inno.Runtime.GameRuntimeManifest,Inno.Core.Serialization.SerializationGeneration) c19cd8a1cbba0ef6d2a4032cd663668472c0b7433af0ceb5fb626be776e2203f -->

```csharp
public static byte[] Inno.Runtime.RuntimeManifestEnvelope.Encode(Inno.Runtime.GameRuntimeManifest manifest, Inno.Core.Serialization.SerializationGeneration serialization)
```

Encodes a validated runtime manifest into the strict deployment envelope.

**Parameter `manifest`:** The manifest whose application identity and serialized payload must agree.

**Parameter `serialization`:** The immutable converter generation captured for the surrounding build transaction.

**Returns:** The complete deterministic deployment envelope.

**Throws `System.ArgumentNullException`:** Thrown when `manifest` is `null`.

**Throws `System.IO.InvalidDataException`:** Thrown when the manifest is not valid for Player startup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeManifestEnvelope.cs#L34).

## `ReadApplicationId`

<a id="api-33d7d18033aa2444"></a>
<!-- api: M:Inno.Runtime.RuntimeManifestEnvelope.ReadApplicationId(System.ReadOnlySpan{System.Byte}) 9ee880560dbaa8a5041e7e036e8f485c56777d0aa643c9a8effe6720f4d35883 -->

```csharp
public static string Inno.Runtime.RuntimeManifestEnvelope.ReadApplicationId(System.ReadOnlySpan<byte> data)
```

Reads and validates the application identity without requiring serialization services to be initialized.

**Parameter `data`:** The complete runtime manifest envelope.

**Returns:** The stable application identity declared by the Player build.

**Throws `System.IO.InvalidDataException`:** Thrown when the envelope is truncated, malformed, or contains an invalid application identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeManifestEnvelope.cs#L76).

## `ReadPersistentDataPath`

<a id="api-c3835af6b383615f"></a>
<!-- api: M:Inno.Runtime.RuntimeManifestEnvelope.ReadPersistentDataPath(System.ReadOnlySpan{System.Byte}) eb000df58f5bb6e02baa45f4eb5a623e5ce2add4fed0c1b7a8cdd9d4d1bbe735 -->

```csharp
public static string Inno.Runtime.RuntimeManifestEnvelope.ReadPersistentDataPath(System.ReadOnlySpan<byte> data)
```

Reads the validated writable data folder before engine serialization is initialized.

**Parameter `data`:** The complete runtime manifest envelope.

**Returns:** A portable folder path relative to the operating system's local application data directory.

**Throws `System.IO.InvalidDataException`:** Thrown when the envelope or persistent data path is malformed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/RuntimeManifestEnvelope.cs#L95).
