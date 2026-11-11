---
title: Inno.Player.MacOSArm64
description: "Exported MacOSArm64 game composition with shared Player hosting and verified file content."
uid: project.inno-player-macosarm64
kind: project
owners: [Inno.Player.MacOSArm64]
---
# Inno.Player.MacOSArm64

Exported MacOSArm64 game composition with shared Player hosting and verified file content.

## Run the exported game

This source library is not an IDE game executable. The export template combines game code, generated registration, matching native support, runtime.manifest, catalog.inno and its exact Pack. The internal composition accepts Player options, not an authoring Project directory.

Content is deployed beneath .app/Contents/Resources/Content. Platform code chooses layout and OS application data; the FileSystem backend owns shared metadata/cache verification. CoreCLR and NativeAOT use the same shared Player lifecycle. No stable public/protected extension API is exposed by the handwritten composition.

## Shared product contracts

[Product composition](../../platforms/product-composition.md) explains startup, return codes, content layouts, platform selection and shutdown. [Publish a Player](../../platforms/publish-player.md) covers export prerequisites; [platform selection](../../platforms/select-target.md) distinguishes source support from certified execution.

## Source and verification

[Source project](https://github.com/Wolfiora/InnoEngine/blob/c63dae76b618578863de6022b38211a835a8d876/platforms/MacOSArm64/player/Inno.Player.MacOSArm64/Inno.Player.MacOSArm64.csproj). Target-configured source extraction is currently blocked by missing managed compile references. Source review is not a substitute for a complete evaluated surface; cross-platform build/runtime acceptance remains pending.
