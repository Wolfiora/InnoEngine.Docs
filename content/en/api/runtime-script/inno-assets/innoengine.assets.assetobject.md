---
title: "AssetObject"
description: "Reference for AssetObject in Inno.Assets."
uid: api.inno.assets.runtime-script.ad9c65e6f5329f45
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetObject`

This reference describes `AssetObject` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Core.IdentityObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3113ebeb02e8cc8f) | Method |
| [`OnRuntimePayloadChanged`](#api-f48e32429d6fef79) | Method |
| [`OnUnloading`](#api-8cfe8897073039da) | Method |
| [```RestoreProperties``1```](#api-e5587f1f69b5b4d3) | Method |
| [`assetPath`](#api-b444feb70d171a7c) | Property |
| [`contentVersion`](#api-6aad0c9b8e7ddd81) | Property |
| [`isMissing`](#api-d0128f7a9c59284c) | Property |
| [`name`](#api-1e083c670aebccb0) | Property |
| [`runtimePayload`](#api-278127e10aaa0b47) | Property |

## Type declaration

<a id="api-ad9c65e6f5329f45"></a>
<!-- api: T:InnoEngine.Assets.AssetObject 2566c78742506e9b9b4cfc5a34b5140a73c9fbc5226a7b11153601844fced942 -->

```csharp
public abstract class InnoEngine.Assets.AssetObject : InnoEngine.Core.IdentityObject, InnoEngine.Serialization.ISerializable
```

Provides the common runtime identity and payload contract for imported assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetObject.cs#L13).

## `#ctor`

<a id="api-3113ebeb02e8cc8f"></a>
<!-- api: M:InnoEngine.Assets.AssetObject.#ctor e06dde0cfdf4630ba571e82f6e16caad4ab749f822f4edc447e3af4cb093bb0d -->

```csharp
protected InnoEngine.Assets.AssetObject.AssetObject()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetObject.cs#L13).

## `OnRuntimePayloadChanged`

<a id="api-f48e32429d6fef79"></a>
<!-- api: M:InnoEngine.Assets.AssetObject.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte}) 0097819715e18801da7ec884694568e87209f6e1d848db0bfd39cb4a3a6482d7 -->

```csharp
protected virtual void InnoEngine.Assets.AssetObject.OnRuntimePayloadChanged(System.ReadOnlyMemory<byte> previousPayload, System.ReadOnlyMemory<byte> currentPayload)
```

Called after a new runtime payload has been committed to this instance.

**Parameter `previousPayload`:** The previously committed payload.

**Parameter `currentPayload`:** The newly committed payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetObject.cs#L89).

## `OnUnloading`

<a id="api-8cfe8897073039da"></a>
<!-- api: M:InnoEngine.Assets.AssetObject.OnUnloading 5450cd1b71695bc43bc9b10bcd9e4a786bb2dbf5d2ca95d639d7f562c2b3ca2a -->

```csharp
protected virtual void InnoEngine.Assets.AssetObject.OnUnloading()
```

Releases the runtime resources owned by this asset without clearing its payload before quiescence.

**Constraints:** An unfinished release may throw RetirementPendingException. The owner retains the asset and retries
this hook; completed steps must not be repeated. Other failures are terminal and are reported by the owner.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Owned work has not quiesced; runtime payload and ownership must remain intact until a later attempt.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetObject.cs#L105).

## ```RestoreProperties``1```

<a id="api-e5587f1f69b5b4d3"></a>
<!-- api: M:InnoEngine.Assets.AssetObject.RestoreProperties``1(System.Guid,System.Byte[],``0) d22ed2cb917e7ad5594b4224482736f9d467461e28edc91ded58ded51741a333 -->

```csharp
public void InnoEngine.Assets.AssetObject.RestoreProperties<TValue>(System.Guid stableTypeId, byte[] propertyData, TValue target) where TValue : class, InnoEngine.Serialization.ISerializable
```

Restores detached extension settings using this asset's actual owner and converter generation.

**Type parameter `TValue`:** Current settings contract with a stable type identity.

**Parameter `stableTypeId`:** Persisted settings type identity.

**Parameter `propertyData`:** Native property payload to restore.

**Parameter `target`:** Detached target, never retained by the asset.

**Throws `System.InvalidOperationException`:** The asset is unowned, retired, or lacks property-state services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetObject.cs#L69).

## `assetPath`

<a id="api-b444feb70d171a7c"></a>
<!-- api: P:InnoEngine.Assets.AssetObject.assetPath 77fc5e2dfda5c60902c9a5601eab8c4542208e20d2c608d8ec33c010e5521e48 -->

```csharp
public InnoEngine.Assets.AssetPath InnoEngine.Assets.AssetObject.assetPath { get; }
```

Gets the isolated source path associated with this asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetObject.cs#L27).

## `contentVersion`

<a id="api-6aad0c9b8e7ddd81"></a>
<!-- api: P:InnoEngine.Assets.AssetObject.contentVersion d857a8fc54b1508d6ec7e16d7e22fa592e1030ae192df8a53641bedb2cc0342b -->

```csharp
public long InnoEngine.Assets.AssetObject.contentVersion { get; }
```

Gets the version of the currently committed runtime content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetObject.cs#L44).

## `isMissing`

<a id="api-d0128f7a9c59284c"></a>
<!-- api: P:InnoEngine.Assets.AssetObject.isMissing 8d1437c7255514d7e5e33872a9ac6186d999bd77fc69f872f4bc1cd6310eb5d0 -->

```csharp
public bool InnoEngine.Assets.AssetObject.isMissing { get; }
```

Gets whether this instance represents an unavailable persistent asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetObject.cs#L39).

## `name`

<a id="api-1e083c670aebccb0"></a>
<!-- api: P:InnoEngine.Assets.AssetObject.name 484ab33c7ad34f8ab145ab404ff7a6b7a03e0591dd61b0815ecbf2a61db0d195 -->

```csharp
public string InnoEngine.Assets.AssetObject.name { get; }
```

Gets a display name derived from the source-local path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetObject.cs#L32).

## `runtimePayload`

<a id="api-278127e10aaa0b47"></a>
<!-- api: P:InnoEngine.Assets.AssetObject.runtimePayload 802872ac20a31bd31af04a7589d5e5eb031a4db398bb93d33394bc591fc798c8 -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.Assets.AssetObject.runtimePayload { get; }
```

Gets the runtime artifact payload produced by the importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetObject.cs#L49).
