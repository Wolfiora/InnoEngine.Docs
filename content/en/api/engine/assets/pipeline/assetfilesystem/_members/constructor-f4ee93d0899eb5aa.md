---
uid: api.f4ee93d0899eb5aa7506906094844658acf57571bc6f46b036994ee914573f25
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetFileSystem.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount},System.Boolean,System.Int32,Inno.Assets.Pipeline.AssetSourcePolicy,System.Boolean)"
source: xml
reviewed: ec9a658bdca6fbc4db67691739c649a29e9bfd3789c5fc10722f6e128d47cbf1
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
