---
title: "EngineSessionComposition"
description: "Reference for EngineSessionComposition in Inno.Engine.Default."
uid: api.inno.engine.default.7559557c8e79266e
kind: api
owners:
  - Inno.Engine.Default
apiSurface: source-clr
contracts:
  - project.inno-engine-default
---
# `EngineSessionComposition`

This reference describes `EngineSessionComposition` in `Inno.Engine.Default`. Read the [shared contract](../../../projects/inno-engine-default.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f0c4df947b3b4aa5) | Method |
| [`adapters`](#api-6debef8063816167) | Property |
| [`artifacts`](#api-5c1dfca6dce3164e) | Property |
| [`audioOverride`](#api-3a8cb042f6c34534) | Property |
| [`audioSettings`](#api-9a4b59ad168794c4) | Property |
| [`createStorage`](#api-648b56d4802cf8a7) | Property |
| [`inputSource`](#api-aa15d1190380e2a9) | Property |
| [`selection`](#api-f5f18f301a1a1985) | Property |
| [`session`](#api-4fef130c855dc281) | Property |

## Type declaration

<a id="api-7559557c8e79266e"></a>
<!-- api: T:Inno.Engine.Default.EngineSessionComposition f843297337d221158c66046e816a030a56ff6bbdc25026fa6ed25f6833e3fbce -->

```csharp
public sealed class Inno.Engine.Default.EngineSessionComposition
```

Supplies strongly typed product-owned inputs to the default engine composition without exposing concrete backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/EngineSessionComposition.cs#L15).

## `#ctor`

<a id="api-f0c4df947b3b4aa5"></a>
<!-- api: M:Inno.Engine.Default.EngineSessionComposition.#ctor(Inno.Runtime.RuntimeSession,Inno.Adapter.IAdapterCatalog,Inno.Adapter.AdapterSelection,Inno.Adapter.Input.IInputEventSource,Inno.Assets.IAssetArtifactLookup,System.Func{Inno.Audio.AudioProjectSettings},System.Func{Inno.Storage.IApplicationStorage},Inno.Runtime.Contracts.IRuntimeSubsystemFactory) 0ef6c0c2e8c172c61365c54bfd3c0e40ffacd4f5da1ddc3826e42393b763963b -->

```csharp
public Inno.Engine.Default.EngineSessionComposition.EngineSessionComposition(Inno.Runtime.RuntimeSession session, Inno.Adapter.IAdapterCatalog adapters, Inno.Adapter.AdapterSelection selection, Inno.Adapter.Input.IInputEventSource inputSource, Inno.Assets.IAssetArtifactLookup artifacts, System.Func<Inno.Audio.AudioProjectSettings> audioSettings, System.Func<Inno.Storage.IApplicationStorage> createStorage, Inno.Runtime.Contracts.IRuntimeSubsystemFactory? audioOverride = null)
```

Captures the inputs borrowed during synchronous default subsystem construction.

**Parameter `session`:** The isolated owner receiving these subsystems.

**Parameter `adapters`:** The host's neutral adapter catalog.

**Parameter `selection`:** The user's backend selections interpreted only by adapter factories.

**Parameter `inputSource`:** The host input source used to create isolated session readers.

**Parameter `artifacts`:** The selected authoring or deployed artifact lookup.

**Parameter `audioSettings`:** The portable audio defaults, captured during factory activation.

**Parameter `audioOverride`:** An optional product-specific audio owner, such as Editor preview/Play isolation.

**Parameter `createStorage`:** The host factory transferring one isolated storage service to the session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/EngineSessionComposition.cs#L44).

## `adapters`

<a id="api-6debef8063816167"></a>
<!-- api: P:Inno.Engine.Default.EngineSessionComposition.adapters 346590c8001e0eb2c3b2139306252a0c1605373817beb038d934f93da68eedc2 -->

```csharp
public Inno.Adapter.IAdapterCatalog Inno.Engine.Default.EngineSessionComposition.adapters { get; }
```

Gets the backend-neutral adapter factory catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/EngineSessionComposition.cs#L71).

## `artifacts`

<a id="api-5c1dfca6dce3164e"></a>
<!-- api: P:Inno.Engine.Default.EngineSessionComposition.artifacts a3793c1f7d1ada1698950b0af6deeb4b86d844ad25e18dbe8f12114e0355a6a9 -->

```csharp
public Inno.Assets.IAssetArtifactLookup Inno.Engine.Default.EngineSessionComposition.artifacts { get; }
```

Gets immutable encoded content artifacts from the selected host environment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/EngineSessionComposition.cs#L83).

## `audioOverride`

<a id="api-3a8cb042f6c34534"></a>
<!-- api: P:Inno.Engine.Default.EngineSessionComposition.audioOverride 03499b953a0f4f7ddaf9452898ca10cb637484fc3c6fd2d7a97c9cbc19e4db32 -->

```csharp
public Inno.Runtime.Contracts.IRuntimeSubsystemFactory? Inno.Engine.Default.EngineSessionComposition.audioOverride { get; }
```

Gets an optional product-specific audio owner factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/EngineSessionComposition.cs#L95).

## `audioSettings`

<a id="api-9a4b59ad168794c4"></a>
<!-- api: P:Inno.Engine.Default.EngineSessionComposition.audioSettings 367f33a4e8ccf840d84f414ce3fc34ada8b860cb2f44d700cd748319df657a63 -->

```csharp
public System.Func<Inno.Audio.AudioProjectSettings> Inno.Engine.Default.EngineSessionComposition.audioSettings { get; }
```

Gets the control-thread source of portable audio defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/EngineSessionComposition.cs#L87).

## `createStorage`

<a id="api-648b56d4802cf8a7"></a>
<!-- api: P:Inno.Engine.Default.EngineSessionComposition.createStorage aa17becbd076744b7eecdd7ac69b8861ef335187050e80820a2a0065238de8fe -->

```csharp
public System.Func<Inno.Storage.IApplicationStorage> Inno.Engine.Default.EngineSessionComposition.createStorage { get; }
```

Gets the factory transferring storage ownership to this session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/EngineSessionComposition.cs#L91).

## `inputSource`

<a id="api-aa15d1190380e2a9"></a>
<!-- api: P:Inno.Engine.Default.EngineSessionComposition.inputSource c4519eba11789bf3d93d3ed7ac2f69e4f8943f391bb966c520580aa4e2042d28 -->

```csharp
public Inno.Adapter.Input.IInputEventSource Inno.Engine.Default.EngineSessionComposition.inputSource { get; }
```

Gets the host input source shared by isolated session readers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/EngineSessionComposition.cs#L79).

## `selection`

<a id="api-f5f18f301a1a1985"></a>
<!-- api: P:Inno.Engine.Default.EngineSessionComposition.selection a7636a619f6a0d5859e21e0d98ed89795ab5499b4af079f9f91d433b744a9d57 -->

```csharp
public Inno.Adapter.AdapterSelection Inno.Engine.Default.EngineSessionComposition.selection { get; }
```

Gets portable backend selection values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/EngineSessionComposition.cs#L75).

## `session`

<a id="api-4fef130c855dc281"></a>
<!-- api: P:Inno.Engine.Default.EngineSessionComposition.session c37a7821a01ea5d56b709308ff940f661bf01184e6e64c29db862c83ccccb816 -->

```csharp
public Inno.Runtime.RuntimeSession Inno.Engine.Default.EngineSessionComposition.session { get; }
```

Gets the isolated session selected by the product.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/EngineSessionComposition.cs#L67).
