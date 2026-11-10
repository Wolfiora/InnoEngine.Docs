---
title: Engine architecture
description: Understand the direction of dependencies from products to reusable mechanisms.
uid: architecture.overview
kind: explanation
---
# Engine architecture

InnoEngine places reusable mechanisms below explicit product composition. A shared service describes what it needs; a backend implements that capability; a platform product supplies the actual combination and environment.

## Layers and responsibilities

| Layer | Responsibility |
| --- | --- |
| Foundation | Identity, events, serialization, values, catalogs, and generation mechanisms. |
| Content | Assets, references, scenes, animation, and neutral content access. |
| Services | Backend-neutral domain contracts and runtime services. |
| Runtime | Sessions, subsystem activation, registration, plugins, and runtime execution. |
| Adapters | Neutral provider interfaces, capabilities, and catalogs. |
| Backends | Concrete runtime implementations, native facades, bindings, recipes, and component tests. |
| Platforms | System/SDK integration, target-specific products, layout, and support packs. |
| Composition | Engine, Shell, Player, Editor, and explicitly selected implementations. |
| Build and tools | Build mechanisms, distribution registration, API extraction, and validation. |

Shared layers do not select a named operating system or backend. Platform products and the standard build distribution perform their respective explicit composition.

## Four independent choices

**Host**, **target**, **product**, and **managed deployment** are separate inputs. A tool running on one host can prepare an explicitly supported target. Selecting a desktop Editor does not implicitly request a browser workload or another Player configuration.

The two normal development executables are `InnoEngine.Editor` and `InnoEngine.Build`, under `entry/`. Shared Editor and Build application projects are libraries. Player hosts are inputs to the product publishing process.

## Runtime lifetime

A host receives borrowed catalogs and immutable configuration, then owns the sessions and resources it creates. Shutdown stops new work, completes or cancels outstanding work, unregisters callbacks, saves owned state, retires resources, and finally releases devices and platform owners.

See [ownership and lifetime](ownership.md) for the corresponding obligations. Source-level layering alone does not prove that this runtime protocol is correct.

## Rendering model

The rendering core provides backend-neutral graphics mechanisms and explicit resource/frame ownership. Higher-level scene models and rendering techniques are composed above that boundary. A third-party backend's capabilities do not automatically become neutral engine promises.

## Build artifacts

Build requests freeze the selected host, target, tools, configuration, and component inputs. Artifacts are validated before publication, and consumers retain their own reading protection. Content-identical deployment can preserve existing files rather than replacing loaded libraries.

The same architectural principle applies to documentation snapshots: publish verified content, identify it explicitly, and do not confuse a cached snapshot with a mutable working directory.
