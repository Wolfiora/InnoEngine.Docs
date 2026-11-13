---
uid: api.f4ee93d0899eb5aa7506906094844658acf57571bc6f46b036994ee914573f25
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetFileSystem.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount},System.Boolean,System.Int32,Inno.Assets.Pipeline.AssetSourcePolicy,System.Boolean)"
source: xml
reviewed: 0c6990050546f70697429a226b72b74ca2a0b771260f390c60e4feaf395d3d64
title: "Constructor"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Creates an indexed file system over isolated source mounts.

**Parameter `mounts`:** Complete source mount snapshot.

**Parameter `autoStart`:** Whether writable project source watching starts immediately.

**Parameter `flushDelayMs`:** Watcher batch delay in milliseconds.

**Parameter `sourcePolicy`:** Source filtering policy, or `null` for defaults.

**Parameter `requireWritableProject`:** Whether the project mount must support authoring mutations. Runtime catalogs may set this to `false` when every mounted identity directory is read-only.
