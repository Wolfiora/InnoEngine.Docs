---
title: "PlayerCommandLineOptions"
description: "Reference for PlayerCommandLineOptions in Inno.Player.Runtime."
uid: api.inno.player.runtime.521b75d9522f5ea3
kind: api
owners:
  - Inno.Player.Runtime
apiSurface: source-clr
contracts:
  - project.inno-player-runtime
---
# `PlayerCommandLineOptions`

This reference describes `PlayerCommandLineOptions` in `Inno.Player.Runtime`. Read the [shared contract](../../../projects/inno-player-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Parse`](#api-61ce663530e5dfe3) | Method |
| [`graphicsApi`](#api-289638a8741c4ace) | Property |
| [`smokeFrameLimit`](#api-4446705412562b73) | Property |
| [`windowVisible`](#api-6b4c10cc3d953020) | Property |

## Type declaration

<a id="api-521b75d9522f5ea3"></a>
<!-- api: T:Inno.Player.Runtime.PlayerCommandLineOptions a051d6ae82bd724f9c57840ab3e5bd445bd82b6c325ef2f3ca5c17dcb606adc5 -->

```csharp
public sealed class Inno.Player.Runtime.PlayerCommandLineOptions
```

Parses the shared Player verification and window preferences independently of publication platform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerCommandLineOptions.cs#L9).

## `Parse`

<a id="api-61ce663530e5dfe3"></a>
<!-- api: M:Inno.Player.Runtime.PlayerCommandLineOptions.Parse(System.String[]) 32c5423989460bee8eb21027abe2e8731d2df43030b0f4957ac3239570ac725d -->

```csharp
public static Inno.Player.Runtime.PlayerCommandLineOptions Inno.Player.Runtime.PlayerCommandLineOptions.Parse(string[] arguments)
```

Parses the shared Player command line before creating any native resource.

**Parameter `arguments`:** Pairs of supported option names and values.

**Returns:** A complete immutable command configuration.

**Throws `System.ArgumentException`:** An option is missing, repeated or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerCommandLineOptions.cs#L40).

## `graphicsApi`

<a id="api-289638a8741c4ace"></a>
<!-- api: P:Inno.Player.Runtime.PlayerCommandLineOptions.graphicsApi ab822a130bd8c59b489cc01d0bf08ec8bd01bbc3deda7365716512dae415f232 -->

```csharp
public Inno.Rendering.GraphicsApi? Inno.Player.Runtime.PlayerCommandLineOptions.graphicsApi { get; private init; }
```

Gets an explicit renderer preference, or null to use the selected backend's policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerCommandLineOptions.cs#L21).

## `smokeFrameLimit`

<a id="api-4446705412562b73"></a>
<!-- api: P:Inno.Player.Runtime.PlayerCommandLineOptions.smokeFrameLimit 1f05c879dfc4e879e4439b10a1bdb7916121d0d23413babca0b2c9909994cd3e -->

```csharp
public int? Inno.Player.Runtime.PlayerCommandLineOptions.smokeFrameLimit { get; private init; }
```

Gets an optional positive bounded run length.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerCommandLineOptions.cs#L16).

## `windowVisible`

<a id="api-6b4c10cc3d953020"></a>
<!-- api: P:Inno.Player.Runtime.PlayerCommandLineOptions.windowVisible 16df601b0bdc89b38bfbfbe20daebb5440955cb5ae982bbffbbe0b7b147f5b34 -->

```csharp
public bool Inno.Player.Runtime.PlayerCommandLineOptions.windowVisible { get; private init; }
```

Gets whether the primary window should initially be shown.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerCommandLineOptions.cs#L26).
