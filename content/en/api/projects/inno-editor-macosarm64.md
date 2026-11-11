---
title: Inno.Editor.MacOSArm64
description: "Explicit MacOSArm64 composition for shared Editor startup, platform services and native presentation."
uid: project.inno-editor-macosarm64
kind: project
owners: [Inno.Editor.MacOSArm64]
---
# Inno.Editor.MacOSArm64

Explicit MacOSArm64 composition for shared Editor startup, platform services and native presentation.

## Start through the unified Editor entry

The product runs on the caller's main thread and selects its actual platform/backend integrations. With no arguments it opens a native project-folder dialog. Run returns 0 on normal exit/dialog cancellation, 2 on cancellation/invalid arguments and 1 on startup failure. A live dialog retains its callback owner until completion.

The composition supplies keyboard policy, authoring providers, collectible modules, serialization and build distribution to the shared host. Native resources are prepared and deployed by the product, not borrowed from a bootstrap directory. Shared hosting owns its created resources; caller-owned inputs retain their declared lifetimes.

Its handwritten startup signature uses System types. Generated registration contracts separately expose Core.Serialization and Extensibility.Catalogs dependencies; other product dependencies are implementation choices.

## Shared product contracts

[Product composition](../../platforms/product-composition.md) explains startup, return codes, content layouts, platform selection and shutdown. [Publish a Player](../../platforms/publish-player.md) covers export prerequisites; [platform selection](../../platforms/select-target.md) distinguishes source support from certified execution.

## Source and verification

[Source project](https://github.com/Wolfiora/InnoEngine/blob/c63dae76b618578863de6022b38211a835a8d876/platforms/MacOSArm64/editor/Inno.Editor.MacOSArm64/Inno.Editor.MacOSArm64.csproj). Target-configured source extraction is currently blocked by missing managed compile references. Source review is not a substitute for a complete evaluated surface; cross-platform build/runtime acceptance remains pending.
