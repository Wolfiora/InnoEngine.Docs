---
title: Inno.Player.WindowsX64
description: "Exported WindowsX64 game composition with shared Player hosting and verified file content."
uid: project.inno-player-windowsx64
kind: project
owners: [Inno.Player.WindowsX64]
---
# Inno.Player.WindowsX64

Exported WindowsX64 game composition with shared Player hosting and verified file content.

## Run the exported game

This source library is not an IDE game executable. The export template combines game code, generated registration, matching native support, runtime.manifest, catalog.inno and its exact Pack. The internal composition accepts Player options, not an authoring Project directory.

Content is deployed beneath the exported application's Content directory. Platform code chooses layout and OS application data; the FileSystem backend owns shared metadata/cache verification. CoreCLR and NativeAOT use the same shared Player lifecycle. No stable public/protected extension API is exposed by the handwritten composition.

## Shared product contracts

[Product composition](../../platforms/product-composition.md) explains startup, return codes, content layouts, platform selection and shutdown. [Publish a Player](../../platforms/publish-player.md) covers export prerequisites; [platform selection](../../platforms/select-target.md) distinguishes source support from certified execution.

## Source and verification

[Source project](https://github.com/Wolfiora/InnoEngine/blob/c63dae76b618578863de6022b38211a835a8d876/platforms/WindowsX64/player/Inno.Player.WindowsX64/Inno.Player.WindowsX64.csproj). The evaluated Windows source surface was captured without executing the product.
