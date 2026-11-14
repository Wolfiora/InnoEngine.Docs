---
uid: api.56544d34ccd8dcbf0bb9f67a72bb22273402edc0c1fd4078869e528e9574543d
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceStore.Read(Inno.Assets.AssetPath)"
source: xml
reviewed: a6abf27632c0dc02b7372aff8ef537a8139d7e0841dc2a5724bf9e6769ce61a7
title: "AssetSourceStore.Read"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Reads a mounted source without modifying its canonical asset or compiled artifacts.

**Parameter `path`:** Exact mounted source identity.

**Returns:** A detached source and optimistic concurrency fingerprint.
