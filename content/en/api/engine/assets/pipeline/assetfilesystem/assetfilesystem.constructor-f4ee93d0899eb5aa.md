---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f4ee93d0899eb5aa7506906094844658acf57571bc6f46b036994ee914573f25
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetFileSystem.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount},System.Boolean,System.Int32,Inno.Assets.Pipeline.AssetSourcePolicy,System.Boolean)
title: AssetFileSystem.Constructor
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 4044921bf9a7dea108d2607c785a49db80424ce3fe5b1f0472a82eb685cfce3e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `mounts`:** Complete source mount snapshot.

**Parameter `autoStart`:** Whether writable project source watching starts immediately.

**Parameter `flushDelayMs`:** Watcher batch delay in milliseconds.

**Parameter `sourcePolicy`:** Source filtering policy, or `null` for defaults.

**Parameter `requireWritableProject`:** Whether the project mount must support authoring mutations. Runtime catalogs may set this to `false` when every mounted identity directory is read-only.
