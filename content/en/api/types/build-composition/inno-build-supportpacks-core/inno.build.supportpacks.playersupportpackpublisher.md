---
title: "Inno.Build.SupportPacks.PlayerSupportPackPublisher"
description: "Reference for Inno.Build.SupportPacks.PlayerSupportPackPublisher in Inno.Build.SupportPacks.Core."
uid: api.inno.build.supportpacks.core.a9391a540e81f608
kind: api
owners:
  - Inno.Build.SupportPacks.Core
apiSurface: source-clr
contracts:
  - project.inno-build-supportpacks-core
---
# `Inno.Build.SupportPacks.PlayerSupportPackPublisher`

This reference describes `Inno.Build.SupportPacks.PlayerSupportPackPublisher` in `Inno.Build.SupportPacks.Core`. Read the [shared contract](../../../projects/inno-build-supportpacks-core.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-78734222f8efb1d4) | Method |
| [`PublishAsync`](#api-b8b96ea3083d50a9) | Method |

## Type declaration

<a id="api-a9391a540e81f608"></a>
<!-- api: T:Inno.Build.SupportPacks.PlayerSupportPackPublisher d3f3bfc09386cf7c4ece5cfb84875003d27fd68a280c043d4f828a1198d0e97a -->

```csharp
public sealed class Inno.Build.SupportPacks.PlayerSupportPackPublisher
```

Installs verified Support Packs with rollback protection using explicitly registered platform sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPublisher.cs#L15).

## `#ctor`

<a id="api-78734222f8efb1d4"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackPublisher.#ctor(System.Collections.Generic.IEnumerable{Inno.Build.SupportPacks.IPlayerSupportPackSource}) 7eeaee66629c7ab66d06df649edcd13d04b3485e419652a7143281727a809018 -->

```csharp
public Inno.Build.SupportPacks.PlayerSupportPackPublisher.PlayerSupportPackPublisher(System.Collections.Generic.IEnumerable<Inno.Build.SupportPacks.IPlayerSupportPackSource> sources)
```

Freezes the platform sources used by this publisher.

**Parameter `sources`:** Exactly one source for each supported target identity.

**Throws `System.ArgumentException`:** A source is null or a target is registered more than once.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPublisher.cs#L28).

## `PublishAsync`

<a id="api-b8b96ea3083d50a9"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackPublisher.PublishAsync(System.String,System.String,Inno.Build.BuildTargetId,System.String,System.Threading.CancellationToken) 692aefeed4e41bd6bb317237e24079800c49446a1b47cf2aa226b174bf476a39 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.SupportPacks.PlayerSupportPackPublication> Inno.Build.SupportPacks.PlayerSupportPackPublisher.PublishAsync(string engineRoot, string outputRoot, Inno.Build.BuildTargetId target, string dotnetHost, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Prepares a target closure in isolation and publishes its immutable deployment inputs.

**Parameter `engineRoot`:** The source checkout containing InnoEngine.sln.

**Parameter `outputRoot`:** The directory owning installed target packs.

**Parameter `target`:** The registered target identity.

**Parameter `dotnetHost`:** The SDK executable selected by the host.

**Parameter `cancellationToken`:** Cancels preparation before directory installation begins.

**Returns:** Reading ownership of the selected Pack and any post-commit diagnostics. Dispose after consuming its files.

**Constraints:** Writers targeting the same pack share an exclusive, cancelable preparation lease.
Publication atomically selects a fingerprint directory; previous generations remain valid for readers.

**Throws `System.ArgumentException`:** A required path is blank or the target has no registered source.

**Throws `System.IO.DirectoryNotFoundException`:** The engine checkout is unavailable.

**Throws `System.IO.InvalidDataException`:** The prepared closure is incomplete or invalid.

**Throws `System.IO.IOException`:** The staging tree, immutable artifact or atomic current index cannot be installed.

**Throws `System.OperationCanceledException`:** Preparation was canceled; the installed pack is unchanged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPublisher.cs#L81).
