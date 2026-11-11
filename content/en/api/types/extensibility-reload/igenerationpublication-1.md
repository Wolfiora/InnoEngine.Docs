---
title: "IGenerationPublication`1"
description: "Reference for IGenerationPublication`1 in Inno.Extensibility.Reload."
uid: api.inno.extensibility.reload.ba3107770141df84
kind: api
owners:
  - Inno.Extensibility.Reload
apiSurface: source-clr
contracts:
  - project.inno-extensibility-reload#shared-admission-and-retirement-contract
---
# ``IGenerationPublication`1``

This reference describes ``IGenerationPublication`1`` in `Inno.Extensibility.Reload`. Read the [shared contract](../../projects/inno-extensibility-reload.md#shared-admission-and-retirement-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Activate`](#api-52766f426905fd33) | Method |
| [`Complete`](#api-5fa4f46f07a3ca09) | Method |
| [`Rollback`](#api-ad517575fe950f43) | Method |

## Type declaration

<a id="api-ba3107770141df84"></a>
<!-- api: T:Inno.Extensibility.Reload.IGenerationPublication`1 e8cfe0d41fb8e2cc465b9311416c9f36c9138318f804146c7156b1b8265d912e -->

```csharp
public interface Inno.Extensibility.Reload.IGenerationPublication<TProbe> where TProbe : Inno.Extensibility.Reload.IAssemblyUnloadProbe
```

Publishes a candidate and supplies a weak retirement monitor at the irreversible commit boundary.

**Type parameter `TProbe`:** The non-owning probe used to verify retired collectible contexts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IGenerationPublication.cs#L9).

## `Activate`

<a id="api-52766f426905fd33"></a>
<!-- api: M:Inno.Extensibility.Reload.IGenerationPublication`1.Activate fedf0399b958f0a36234104bc55ddc3fcc91d29dca6b8870ecf381b803d1c056 -->

```csharp
void Inno.Extensibility.Reload.IGenerationPublication<TProbe>.Activate()
```

Makes the fully prepared candidate provisionally visible at an owner-thread safe point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IGenerationPublication.cs#L14).

## `Complete`

<a id="api-5fa4f46f07a3ca09"></a>
<!-- api: M:Inno.Extensibility.Reload.IGenerationPublication`1.Complete 36bff90b9975228e5cb0b19e5689ca483af6524aac3d7b82c63c2910a75fe078 -->

```csharp
TProbe Inno.Extensibility.Reload.IGenerationPublication<TProbe>.Complete()
```

Commits publication after all dependent changes apply successfully.

**Returns:** A weak probe observing retired contexts; success is not reported until it completes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IGenerationPublication.cs#L25).

## `Rollback`

<a id="api-ad517575fe950f43"></a>
<!-- api: M:Inno.Extensibility.Reload.IGenerationPublication`1.Rollback 45adaa3068b3f7fe3e321a9d4d04b03dac8a18f1a2608c73efdea31ce1551071 -->

```csharp
void Inno.Extensibility.Reload.IGenerationPublication<TProbe>.Rollback()
```

Restores the previous publication and retires discarded candidates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IGenerationPublication.cs#L18).
