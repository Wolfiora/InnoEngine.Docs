---
title: Compose a runtime host
description: Select explicit backend factories, metadata and subsystem owners without duplicating Editor or Player loops.
uid: extending.runtime-host
kind: how-to
---
# Compose a runtime host

Use the existing composition boundaries when adding a product or host. A host owns application resources and long-lived services; a Session owns one Edit, Play or Player execution scope. Script facades borrow these services through explicit execution scopes and fail when no scope is active.

## Choose the boundary to extend

| Goal | Extension boundary |
| --- | --- |
| Supply platform, rendering or storage implementations | Explicit factories in [runtime adapter composition](../architecture/projects/inno-adapter-default.md). |
| Supply Editor authoring or presentation | [Authoring adapter composition](../architecture/projects/inno-adapter-authoring-default.md). |
| Add a domain's frame behavior | [Runtime subsystem contract](../architecture/projects/inno-runtime-contracts.md) and its distribution declaration. |
| Supply game metadata/content from another transport | [Player content source](../architecture/projects/inno-player-runtime.md). |
| Adapt event/frame scheduling to another host | [Shell frame driver](../architecture/projects/inno-shell.md). |

Do not copy the whole Editor or Player loop to add one service. Concrete adapters implement the domain boundary; a host's public/protected API remains neutral.

## Preflight before allocation

Create the immutable provider catalogs and choose all seven runtime backend IDs: Platform, Input, Storage, Rendering, Audio, Text and UI. [Validate the complete selection](../architecture/projects/inno-adapter.md) before opening native resources. An unknown or missing provider fails; it does not fall back to the host OS.

Platform, Rendering and Storage factories are mandatory product inputs. A null optional provider collection uses the standard family; an empty collection intentionally leaves that family unavailable. Editor authoring/presentation collections are explicit and must match the runtime capabilities they extend.

Catalogs borrow providers. Keep those providers alive for their composition lifetime and release each created service through its actual caller. Avoid static caches holding a replaced plugin generation.

## Compose engine services and Sessions

Configure [EngineHost](../architecture/projects/inno-runtime.md) with actual module/type/serialization metadata sources, reference resolution and subsystem factories. Static products use generated catalogs; dynamic sources own their loading and shadow-copy policy.

[Default engine composition](../architecture/projects/inno-engine-default.md) supplies generated domain factories. Session services cover Input, Storage, Animation, Audio, Text and UI; RuntimeSession adds Scene simulation. Rendering is Host-scoped, so an Editor and its Play Session do not each submit a frame for the same device.

An Editor may supply a Session audio factory for preview/Play management without duplicating every domain registration. Scope diagnostic reporters to the actual Session identity and preserve their borrowing order.

## Add a domain subsystem

Implement the appropriate `RuntimeSubsystem` hooks and declare its dependencies, lifetime and required capabilities. Register factory-acquired resources and work in `context.resources` until ownership transfers to the returned instance. The host retains the pipeline before invoking factories or Attach, so failed initialization can drain correctly.

Add the distribution reference and its domain registration declaration. [Compile-time catalogs](../architecture/projects/inno-runtime-generators.md) generate direct calls and detect invalid registration; shared hosts need no new domain switch.

Optional capability absence can make a subsystem unavailable before its factory runs. It does not excuse duplicate IDs, dependency cycles, invalid lifetimes, frame exceptions or incomplete retirement.

## Preserve the complete shutdown order

Stop admitting work, cancel and drain tracked operations, then retire product resources before adapters. A borrowed content store remains alive until its Sessions retire. A diagnostic producer remains alive until the owners using it retire.

Read [runtime lifetime](../architecture/runtime-lifetime.md) for Pending and Faulted states. Do not treat an early exit, aggregate cleanup error or an emitted compile artifact as evidence that every owner has been released.
