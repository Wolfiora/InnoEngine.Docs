---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f1ea28d5cdc7344919cfe1874f8609255ea21ae265ff4364d99a1606f2cb559e
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceStore.Save(Inno.Assets.AssetPath,System.Byte[],System.String)
title: AssetSourceStore.Save
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: c8344d019c3a1092ee1713290aa669d43390a403c1d8662957ecb1802e0c0a34
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** Writable mounted destination.

**Parameter `bytes`:** Complete serializable source, including invalid authoring states.

**Parameter `expectedHash`:** Last read/save fingerprint; null requires a nonexistent destination.

## Returns

The saved fingerprint.
