---
title: "PlayerLaunchOptions"
description: "Reference for PlayerLaunchOptions in Inno.Player.Runtime."
uid: api.inno.player.runtime.f7777778712605ce
kind: api
owners:
  - Inno.Player.Runtime
apiSurface: source-clr
contracts:
  - project.inno-player-runtime
---
# `PlayerLaunchOptions`

This reference describes `PlayerLaunchOptions` in `Inno.Player.Runtime`. Read the [shared contract](../../../projects/inno-player-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c7b6f84e5c3d0047) | Method |
| [`adapters`](#api-9e3678020633557a) | Property |
| [`adapterSelection`](#api-52c08a34b854425b) | Property |
| [`consoleColors`](#api-001b132dfd9a55dc) | Property |
| [`contentSource`](#api-8e53cf9124055248) | Property |
| [`createLogSink`](#api-6880f855d2f7c409) | Property |
| [`createStorage`](#api-8bf9fcb90f8b6695) | Property |
| [`frameDriver`](#api-8f672d536774e941) | Property |
| [`graphicsApi`](#api-537cb85a8306ad82) | Property |
| [`jobExecutionMode`](#api-2a620b7309ef99de) | Property |
| [`logDeliveryMode`](#api-dc6b4f35026cd8fb) | Property |
| [`moduleActivator`](#api-901abe679b9b186b) | Property |
| [`modules`](#api-d77cd71dcb08f421) | Property |
| [`renderOnCallingThread`](#api-e74fae437c15d02e) | Property |
| [`serializationMetadata`](#api-0b3c97c953cab6c7) | Property |
| [`smokeFrameLimit`](#api-46689e594c98031b) | Property |
| [`types`](#api-2def09a9fd531e11) | Property |
| [`windowVisible`](#api-cd376da0b972ba64) | Property |

## Type declaration

<a id="api-f7777778712605ce"></a>
<!-- api: T:Inno.Player.Runtime.PlayerLaunchOptions bf3423b1f5efa84fe8cedd10f04dd4c10b302dca506767d5c2cf6fc819faa926 -->

```csharp
public sealed class Inno.Player.Runtime.PlayerLaunchOptions
```

Supplies resolved host services and content to the common Player lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L17).

## `#ctor`

<a id="api-c7b6f84e5c3d0047"></a>
<!-- api: M:Inno.Player.Runtime.PlayerLaunchOptions.#ctor 0a6b58cc22ca9b0b31bb4c40e10fda4929bc3331bc6a777be34566707a674b8c -->

```csharp
public Inno.Player.Runtime.PlayerLaunchOptions.PlayerLaunchOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L17).

## `adapters`

<a id="api-9e3678020633557a"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.adapters 16f60f2d19b31b3373571177ce576b985a997b74166fc4adb4c69e9a3d13e8cc -->

```csharp
public required Inno.Adapter.IAdapterCatalog Inno.Player.Runtime.PlayerLaunchOptions.adapters { get; init; }
```

Gets the host-owned factories used to create isolated runtime adapters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L37).

## `adapterSelection`

<a id="api-52c08a34b854425b"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.adapterSelection c2dca5801c93398894e9c7940406586a87f556d3805efbcb6e95263b9f359fc0 -->

```csharp
public required Inno.Adapter.AdapterSelection Inno.Player.Runtime.PlayerLaunchOptions.adapterSelection { get; init; }
```

Gets the coherent runtime backend selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L67).

## `consoleColors`

<a id="api-001b132dfd9a55dc"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.consoleColors 0798ea1cd977139f58048ede26a83e49c18cf1045ce871d5a5391680f3a02c94 -->

```csharp
public bool Inno.Player.Runtime.PlayerLaunchOptions.consoleColors { get; init; }
```

Gets whether the host console supports changing terminal colors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L87).

## `contentSource`

<a id="api-8e53cf9124055248"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.contentSource 7b82375bf5b187e78bb9ce2be089a8cd1a868859ee39389320d4b3b2ad12072d -->

```csharp
public required Inno.Player.Runtime.IPlayerContentSource Inno.Player.Runtime.PlayerLaunchOptions.contentSource { get; init; }
```

Gets the borrowed source of deployment metadata and verified immutable content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L42).

## `createLogSink`

<a id="api-6880f855d2f7c409"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.createLogSink 1c3209533945ab3df2a3eb09dde5e946f041f98e702a23e28ccf73b66ad1cefb -->

```csharp
public System.Func<Inno.Runtime.GameRuntimeManifest, Inno.Core.Logging.LogSessionId, Inno.Core.Logging.ILogSink>? Inno.Player.Runtime.PlayerLaunchOptions.createLogSink { get; init; }
```

Gets the optional host factory transferring a session log sink to the game session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L52).

## `createStorage`

<a id="api-8bf9fcb90f8b6695"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.createStorage 851f699840c8ba59fe051e858e64ed94718512702e4041bd4938661fbbdc06b9 -->

```csharp
public required System.Func<Inno.Runtime.GameRuntimeManifest, Inno.Storage.IApplicationStorage> Inno.Player.Runtime.PlayerLaunchOptions.createStorage { get; init; }
```

Gets the host factory transferring application storage ownership to the game session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L47).

## `frameDriver`

<a id="api-8f672d536774e941"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.frameDriver 112bfa4956f6840f0e0670efdcdd1b2c7c29979cd5fd574b45c2d8ca0c37cdbe -->

```csharp
public required Inno.Shell.IShellFrameDriver Inno.Player.Runtime.PlayerLaunchOptions.frameDriver { get; init; }
```

Gets the owner-thread driver that schedules the common shell frames.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L62).

## `graphicsApi`

<a id="api-537cb85a8306ad82"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.graphicsApi d0080254898c6a110ca070b19dc1c105003c66384d98b480fa2691c95c390ee1 -->

```csharp
public Inno.Rendering.GraphicsApi? Inno.Player.Runtime.PlayerLaunchOptions.graphicsApi { get; init; }
```

Gets an optional rendering API preference; null selects the adapter default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L92).

## `jobExecutionMode`

<a id="api-2a620b7309ef99de"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.jobExecutionMode aa82c86878d54175c142ee3f757dbe4323f61c095e4d2a050f5b5d80797b5e65 -->

```csharp
public Inno.Runtime.RuntimeJobExecutionMode Inno.Player.Runtime.PlayerLaunchOptions.jobExecutionMode { get; init; }
```

Gets the execution policy available to the game's job scheduler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L72).

## `logDeliveryMode`

<a id="api-dc6b4f35026cd8fb"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.logDeliveryMode 63db3a640540ea92ce2518eb0ef99bb178018d91a22fc7e5118803537630fa08 -->

```csharp
public Inno.Core.Logging.LogDeliveryMode Inno.Player.Runtime.PlayerLaunchOptions.logDeliveryMode { get; init; }
```

Gets the host's logging delivery policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L82).

## `moduleActivator`

<a id="api-901abe679b9b186b"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.moduleActivator 7d5ea6c87b04e8aeb1bef73bbe9c5de6b77a96ee6562cf7894b097b3fac76f95 -->

```csharp
public required Inno.Player.Runtime.IPlayerModuleActivator Inno.Player.Runtime.PlayerLaunchOptions.moduleActivator { get; init; }
```

Gets the strategy that activates the frozen deployment's managed modules.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L57).

## `modules`

<a id="api-d77cd71dcb08f421"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.modules 0aed2ff38ffe727d29a43142fbb9fb1d811370128a04b6fd171fb51368039d02 -->

```csharp
public required Inno.Extensibility.Modules.IAssemblyCatalogSource Inno.Player.Runtime.PlayerLaunchOptions.modules { get; init; }
```

Gets the code catalog selected by the platform composition; ownership transfers to the application.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L22).

## `renderOnCallingThread`

<a id="api-e74fae437c15d02e"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.renderOnCallingThread 132f04da574d222bae4ac98b3a5503979bc9616bee5607cc577c4e8a839495af -->

```csharp
public bool Inno.Player.Runtime.PlayerLaunchOptions.renderOnCallingThread { get; init; }
```

Gets whether graphics commands must execute on the frame owner's thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L77).

## `serializationMetadata`

<a id="api-0b3c97c953cab6c7"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.serializationMetadata 6801689cc47e29c8d05d581a43c81d79e98e362f77eb6f49ff75c83fd70dabe6 -->

```csharp
public required Inno.Core.Serialization.ISerializationMetadataSource Inno.Player.Runtime.PlayerLaunchOptions.serializationMetadata { get; init; }
```

Gets generated declaration access and collection construction for the linked code closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L32).

## `smokeFrameLimit`

<a id="api-46689e594c98031b"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.smokeFrameLimit 0db9b29889ad449695ecf39dc6f8de5691b05948ffb77cb4d8af7c2c47ced7b9 -->

```csharp
public int? Inno.Player.Runtime.PlayerLaunchOptions.smokeFrameLimit { get; init; }
```

Gets an optional positive frame count for a bounded verification run.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L102).

## `types`

<a id="api-2def09a9fd531e11"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.types e1174132b946769e3cefe2f676c17bdabe9d3b3b429f4fe29ecac21ee76fbcf8 -->

```csharp
public required Inno.Extensibility.Types.ITypeCatalogSource Inno.Player.Runtime.PlayerLaunchOptions.types { get; init; }
```

Gets the metadata implementation corresponding to the selected code deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L27).

## `windowVisible`

<a id="api-cd376da0b972ba64"></a>
<!-- api: P:Inno.Player.Runtime.PlayerLaunchOptions.windowVisible bb685645b31c654dc4c039c805f0f72685e0d3fcff55cf16c0a33a92dba3fc48 -->

```csharp
public bool Inno.Player.Runtime.PlayerLaunchOptions.windowVisible { get; init; }
```

Gets whether the primary window is initially shown; false preserves rendering without taking focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerLaunchOptions.cs#L97).
