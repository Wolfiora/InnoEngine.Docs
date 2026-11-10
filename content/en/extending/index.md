---
title: Extending InnoEngine
description: Choose an extension boundary that matches the behavior you want to add.
uid: extending.home
kind: landing
---
# Extending InnoEngine

An extension belongs to the layer that owns its behavior. Start by identifying the public contract and lifecycle, then select the appropriate host, script, backend, or product integration.

## Choose the boundary

Start with [a panel](editor-panels.md), [a shared module](editor-modules.md),
[a modal](editor-modals.md), or [an action and menu](editor-actions.md).
Use the shared [selection](editor-selection.md), [History](editor-history.md) and
[state persistence](editor-state.md) contracts when your feature needs them.

| You want to change | Boundary to inspect |
| --- | --- |
| A panel's internal presentation | The owning panel and presentation services |
| Editor discovery and lifecycle | Editor extension contracts, registry, and host |
| A game script capability | The actual runtime or Editor script projection |
| A neutral service implementation | Its adapter/provider contract |
| Third-party native integration | The owning backend facade, bindings, and recipe |
| Target SDK or product composition | The owning platform and distribution contributions |

[Customize Console presentation](customize-console.md) is a concrete example of keeping a local change within its owner.

[Add an Editor panel](editor-panels.md) explains registration, host-driven drawing, readable state and retirement without requiring prior knowledge of the assembly list.

## Discovery is not ownership

Discovery identifies an extension and its stable metadata. The owning registry/host decides how it is constructed, activated, and retired. Do not manually invoke lifecycle callbacks or create a parallel discovery system to bypass that owner.

## Keep public and internal behavior distinct

A CLR public API may exist for host composition and be excluded from scripts. An internal style value is not a persistent or script protocol. Read the selected API surface before building an extension around a member.

See [ownership](../architecture/ownership.md) for shared lifecycle obligations and [API reference](../api/index.md) for precise contracts.
