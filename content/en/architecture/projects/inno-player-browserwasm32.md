---
title: Inno.Player.BrowserWasm32
description: "Browser Player composition, page-driven frames and verified HTTP content acquisition."
uid: project.inno-player-browserwasm32
kind: project
owners: [Inno.Player.BrowserWasm32]
---
# Inno.Player.BrowserWasm32

Browser Player composition, page-driven frames and verified HTTP content acquisition.

## Export and serve the Browser application

The source project is a managed library; the WebAssembly export template produces the runnable application. Serve its index.html over HTTP with the exact runtime metadata and Pack. The page requires WebGL 2 and forwards repeated arg query parameters to shared command-line validation. There is no Browser Editor.

HTTP content sources return independently owned metadata/store data. Pack identity comes from the validated catalog; no writable Content-tree extraction or filesystem persistence fallback is introduced. The product selects scheduled frames, single-thread jobs, calling-thread rendering and inline logs. Shutdown cancels pending work and retires callbacks, stores, Session and devices.

## Shared product contracts

[Product composition](../../platforms/product-composition.md) explains startup, return codes, content layouts, platform selection and shutdown. [Publish a Player](../../platforms/publish-player.md) covers export prerequisites; [platform selection](../../platforms/select-target.md) distinguishes source support from certified execution.

## Source and verification

[Source project](https://github.com/Wolfiora/InnoEngine/blob/7e12d767c39771d8746f3e23ba6190bd2c82eb72/platforms/BrowserWasm32/player/Inno.Player.BrowserWasm32/Inno.Player.BrowserWasm32.csproj). Target-configured extraction of the actual SDK-selected source records no public or protected authored API. This composition is consumed through the shared Player contracts rather than an extension surface of its own. That source fact does not certify a cross-platform build or runtime execution; matching product acceptance remains a separate requirement.
