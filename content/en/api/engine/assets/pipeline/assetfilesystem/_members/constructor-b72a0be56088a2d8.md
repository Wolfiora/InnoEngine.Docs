---
uid: api.b72a0be56088a2d8ef833f4c00aaa1a138bc4d0ff572f129f0408518698ccd0c
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetFileSystem.#ctor(System.String,System.Boolean,System.Int32,Inno.Assets.Pipeline.AssetSourcePolicy)"
source: xml
reviewed: ac2f5b11f88473f8019673d34db84ed6dae1a134ea17fa4570b9f708329ef9f5
title: "Constructor"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Creates an indexed source file system.

**Parameter `assetRoot`:** The absolute source root.

**Parameter `autoStart`:** Whether file watching should start immediately.

**Parameter `flushDelayMs`:** The watcher batch delay in milliseconds.

**Parameter `sourcePolicy`:** The source filtering policy, or `null` for defaults.
