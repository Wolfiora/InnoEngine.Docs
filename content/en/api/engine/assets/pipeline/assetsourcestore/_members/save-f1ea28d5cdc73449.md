---
uid: api.f1ea28d5cdc7344919cfe1874f8609255ea21ae265ff4364d99a1606f2cb559e
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceStore.Save(Inno.Assets.AssetPath,System.Byte[],System.String)"
source: xml
reviewed: 4ab76bf15f0c95cc36378e94553cb67f5c316fd3869af412f26e2b53e74e57b8
title: "Save"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Atomically saves bytes after checking the source fingerprint; import is a separate operation.

**Parameter `path`:** Writable mounted destination.

**Parameter `bytes`:** Complete serializable source, including invalid authoring states.

**Parameter `expectedHash`:** Last read/save fingerprint; null requires a nonexistent destination.

**Returns:** The saved fingerprint.
