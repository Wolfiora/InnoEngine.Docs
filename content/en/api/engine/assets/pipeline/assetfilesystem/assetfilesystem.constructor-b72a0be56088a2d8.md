---
uid: api.b72a0be56088a2d8ef833f4c00aaa1a138bc4d0ff572f129f0408518698ccd0c
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetFileSystem.#ctor(System.String,System.Boolean,System.Int32,Inno.Assets.Pipeline.AssetSourcePolicy)"
source: xml
reviewed: 5931b65567b9b200b16be333db8dc6d53c979ae124f7a429e8efbf6608137969
title: "AssetFileSystem.Constructor"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Creates an indexed source file system.

## Parameters

**Parameter `assetRoot`:** The absolute source root.

**Parameter `autoStart`:** Whether file watching should start immediately.

**Parameter `flushDelayMs`:** The watcher batch delay in milliseconds.

**Parameter `sourcePolicy`:** The source filtering policy, or `null` for defaults.
