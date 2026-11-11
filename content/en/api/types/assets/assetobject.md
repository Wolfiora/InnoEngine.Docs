---
title: "AssetObject"
description: "Reference for AssetObject in Inno.Assets."
uid: api.inno.assets.c349f4a6858ea399
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetObject`

This reference describes `AssetObject` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Identity.IdentityObject`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b63e38367b6251b6) | Method |
| [`OnRuntimePayloadChanged`](#api-329e061ce8d3574b) | Method |
| [`OnUnloading`](#api-9823bc68dfd0135e) | Method |
| [```RestoreProperties``1```](#api-90e82823cb2203d2) | Method |
| [`assetPath`](#api-8f17abdce88a7fb5) | Property |
| [`contentVersion`](#api-2d5d446413325a4d) | Property |
| [`isMissing`](#api-29eea3f355266536) | Property |
| [`name`](#api-3830ac0f06fce813) | Property |
| [`runtimePayload`](#api-a2c14acedc78c5cb) | Property |

## Type declaration

<a id="api-c349f4a6858ea399"></a>
<!-- api: T:Inno.Assets.AssetObject ccccf5d5d8c53f1917e238ca6a0ef10af6f6671cb8c5ab9a2b800ec60d44fd3f -->

```csharp
public abstract class Inno.Assets.AssetObject : Inno.Core.Identity.IdentityObject, Inno.Core.Serialization.ISerializable
```

Provides the common runtime identity and payload contract for imported assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetObject.cs#L13).

## `#ctor`

<a id="api-b63e38367b6251b6"></a>
<!-- api: M:Inno.Assets.AssetObject.#ctor 83dbec7ffe62e0ce0b4b50a7683aa266f92ce89cf8451e282cd700226ae3390c -->

```csharp
protected Inno.Assets.AssetObject.AssetObject()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetObject.cs#L13).

## `OnRuntimePayloadChanged`

<a id="api-329e061ce8d3574b"></a>
<!-- api: M:Inno.Assets.AssetObject.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte}) 72670a4c85c69e7498aa89cf52f4b83cbe76886c546208264837a2a7dfb4c0c1 -->

```csharp
protected virtual void Inno.Assets.AssetObject.OnRuntimePayloadChanged(System.ReadOnlyMemory<byte> previousPayload, System.ReadOnlyMemory<byte> currentPayload)
```

Called after a new runtime payload has been committed to this instance.

**Parameter `previousPayload`:** The previously committed payload.

**Parameter `currentPayload`:** The newly committed payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetObject.cs#L89).

## `OnUnloading`

<a id="api-9823bc68dfd0135e"></a>
<!-- api: M:Inno.Assets.AssetObject.OnUnloading eb9cd76d3b98bde638b3b92176360e482e9d74df33f7ca756a6e9096af5ac929 -->

```csharp
protected virtual void Inno.Assets.AssetObject.OnUnloading()
```

Releases the runtime resources owned by this asset without clearing its payload before quiescence.

**Constraints:** An unfinished release may throw RetirementPendingException. The owner retains the asset and retries
this hook; completed steps must not be repeated. Other failures are terminal and are reported by the owner.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Owned work has not quiesced; runtime payload and ownership must remain intact until a later attempt.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetObject.cs#L105).

## ```RestoreProperties``1```

<a id="api-90e82823cb2203d2"></a>
<!-- api: M:Inno.Assets.AssetObject.RestoreProperties``1(System.Guid,System.Byte[],``0) f9f2e1d6aa161bb48e5d717ef5253b8e5c8b2a350db2b5af13c93f070195a817 -->

```csharp
public void Inno.Assets.AssetObject.RestoreProperties<TValue>(System.Guid stableTypeId, byte[] propertyData, TValue target) where TValue : class, Inno.Core.Serialization.ISerializable
```

Restores detached extension settings using this asset's actual owner and converter generation.

**Type parameter `TValue`:** Current settings contract with a stable type identity.

**Parameter `stableTypeId`:** Persisted settings type identity.

**Parameter `propertyData`:** Native property payload to restore.

**Parameter `target`:** Detached target, never retained by the asset.

**Throws `System.InvalidOperationException`:** The asset is unowned, retired, or lacks property-state services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetObject.cs#L69).

## `assetPath`

<a id="api-8f17abdce88a7fb5"></a>
<!-- api: P:Inno.Assets.AssetObject.assetPath d50a68d17ce8a7686c60924df2b563600bfc439b89dd3fec384e89c9dbd4876b -->

```csharp
public Inno.Assets.AssetPath Inno.Assets.AssetObject.assetPath { get; private set; }
```

Gets the isolated source path associated with this asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetObject.cs#L27).

## `contentVersion`

<a id="api-2d5d446413325a4d"></a>
<!-- api: P:Inno.Assets.AssetObject.contentVersion 9bd603e2f248906196e0ad4ad7eac2f7c725fb6ad6b5e02ffcc190e90a2a5cdb -->

```csharp
public long Inno.Assets.AssetObject.contentVersion { get; }
```

Gets the version of the currently committed runtime content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetObject.cs#L44).

## `isMissing`

<a id="api-29eea3f355266536"></a>
<!-- api: P:Inno.Assets.AssetObject.isMissing 2ead3e19e0f962bafddcc45172dab25400062b4d321e143391fb38ec4c890547 -->

```csharp
public bool Inno.Assets.AssetObject.isMissing { get; }
```

Gets whether this instance represents an unavailable persistent asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetObject.cs#L39).

## `name`

<a id="api-3830ac0f06fce813"></a>
<!-- api: P:Inno.Assets.AssetObject.name 29fc30f6f71388227af1635a7ae828255a022de96e96088e8c2d136164446d7e -->

```csharp
public string Inno.Assets.AssetObject.name { get; }
```

Gets a display name derived from the source-local path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetObject.cs#L32).

## `runtimePayload`

<a id="api-a2c14acedc78c5cb"></a>
<!-- api: P:Inno.Assets.AssetObject.runtimePayload 7b63b0f568de9bbdaf6d2e283b02eec860f64734f740328f6956a415434f4589 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Assets.AssetObject.runtimePayload { get; }
```

Gets the runtime artifact payload produced by the importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetObject.cs#L49).
