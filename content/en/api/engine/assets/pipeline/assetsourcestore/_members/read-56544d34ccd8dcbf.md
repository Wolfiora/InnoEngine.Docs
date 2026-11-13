---
uid: api.56544d34ccd8dcbf0bb9f67a72bb22273402edc0c1fd4078869e528e9574543d
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceStore.Read(Inno.Assets.AssetPath)"
source: xml
reviewed: 8379599386b13770ebb74bb605144e0abe76528a1df8cba8de30bb2e5fc5adcf
title: "Read"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Reads a mounted source without modifying its canonical asset or compiled artifacts.

**Parameter `path`:** Exact mounted source identity.

**Returns:** A detached source and optimistic concurrency fingerprint.
