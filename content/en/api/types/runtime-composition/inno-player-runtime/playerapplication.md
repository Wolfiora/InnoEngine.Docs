---
title: "PlayerApplication"
description: "Reference for PlayerApplication in Inno.Player.Runtime."
uid: api.inno.player.runtime.90cdaf3284e7a878
kind: api
owners:
  - Inno.Player.Runtime
apiSurface: source-clr
contracts:
  - project.inno-player-runtime
---
# `PlayerApplication`

This reference describes `PlayerApplication` in `Inno.Player.Runtime`. Read the [shared contract](../../../projects/inno-player-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`RunAsync`](#api-ec999cde975575ce) | Method |

## Type declaration

<a id="api-90cdaf3284e7a878"></a>
<!-- api: T:Inno.Player.Runtime.PlayerApplication b187fd756127fcfb508dc9d17212347a34c9082129399e358c40eb0e187345a8 -->

```csharp
public static class Inno.Player.Runtime.PlayerApplication
```

Owns the common Player startup, frame execution and verified resource retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerApplication.cs#L10).

## `RunAsync`

<a id="api-ec999cde975575ce"></a>
<!-- api: M:Inno.Player.Runtime.PlayerApplication.RunAsync(Inno.Player.Runtime.PlayerLaunchOptions,System.Threading.CancellationToken) 3b42c74784cfe926a95bebcec8433766c86cf7854fcc8f0b3f3e2f6580b7998f -->

```csharp
public static System.Threading.Tasks.Task<int> Inno.Player.Runtime.PlayerApplication.RunAsync(Inno.Player.Runtime.PlayerLaunchOptions options, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Runs a frozen game deployment using explicitly supplied host services.

**Parameter `options`:** The prepared content and platform service composition.

**Parameter `cancellationToken`:** Requests termination of frame scheduling.

**Returns:** Zero after orderly shutdown; startup, execution and retirement failures propagate.

**Constraints:** Hosts must preserve their owner thread across asynchronous startup and frame callbacks using
their synchronization context. A blocking host can use OwnerThreadExecution.Run.

**Throws `System.ArgumentNullException`:** Options or a required host service is null.

**Throws `System.OperationCanceledException`:** Frame scheduling was canceled.

**Throws `System.IO.InvalidDataException`:** Deployment metadata, linked code, or the prepared content identity is inconsistent.

**Throws `System.InvalidOperationException`:** A host factory does not provide its required product, or runtime startup or retirement fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/PlayerApplication.cs#L40).
