---
uid: api.90387efa2067ba63e816e13be301e225bd019f826548531192072545d4acc625
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.EventInputSource.CreateBackend"
source: xml
reviewed: 21a985d6926fdef2a6f1fb94b46c4fe1b3d419f6155c5f3af0dc013d5eb0d38c
title: "CreateBackend"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Creates one isolated backend that receives subsequent events from this source.

**Returns:** A caller-owned backend whose disposal unregisters it from this source.

**Exception `T:System.ObjectDisposedException`:** Thrown after this source has been disposed.
