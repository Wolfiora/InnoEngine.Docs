---
title: Inno.Player.Runtime
description: "Shared desktop and Browser Player launch, content validation and application lifetime."
uid: project.inno-player-runtime
kind: project
owners: [Inno.Player.Runtime]
exampleMode: host
exampleProjects: [Inno.Player.Runtime]
---
# Inno.Player.Runtime

Shared desktop and Browser Player launch, content validation and application lifetime.

Start with [composing a runtime host](../../extending/runtime-host.md) and [runtime lifetime](../runtime-lifetime.md).

## Launch from explicit sources

Platform composition provides content, metadata, adapters, storage, logs and a frame driver. Shared Player code does not read deployment files, create cache directories, depend on Build or reference a concrete content adapter. Internal GamePlayerHost is not a public extension protocol.

1. `IPlayerContentSource.ReadMetadataAsync` returns owned manifest/catalog bytes, independent of an external download buffer.
2. Validate the envelope, application ID, code closure and Pack description; the activator verifies linked static code identity.
3. `PrepareAsync` returns a verified read-only content store using the same Pack protocol for file or HTTP sources.
4. Shell creates adapters; Session reads the asset catalog and read-only Project Settings from the store. Host factories provide storage and logs.
5. Start the selected Scene and advance the common frame driver.

The source object is borrowed; the store it hands over is Player-owned. Startup failure and cancellation clean up explicitly without fabricating a default Scene or hiding errors.

## Exit in dependency order

Retire the Session first, then Settings, Content, Engine and diagnostic owners. Shell finally releases devices and the platform application. Ordinary cleanup errors are aggregated; `RetirementPendingException` stops downstream release and retains owners still in use. Unfinished retirement is not a successful exit.

A desktop blocking entry uses OwnerThreadExecution.Run. An asynchronous host retains an owner-thread synchronization context. `windowVisible=false` avoids taking focus for a bounded rendered journey; it does not bypass the rendering lifecycle.

## Extend a boundary, not the loop

A new content source implements IPlayerContentSource and a content store without changing Session or the asset database. A new host selects a frame driver and adapters. Static Player execution includes neither a collectible loader nor a runtime compiler, and does not weaken Editor unload verification.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using System.Threading;
using System.Threading.Tasks;
using Inno.Player.Runtime;

static Task<int> StartPlayer(
    PlayerLaunchOptions options,
    CancellationToken cancellationToken
) {
    return PlayerApplication.RunAsync(options, cancellationToken);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Inno.Player.Runtime.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse exact types and members](../../api/engine/player/runtime/index.md).
