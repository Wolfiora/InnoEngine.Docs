---
uid: api.90387efa2067ba63e816e13be301e225bd019f826548531192072545d4acc625
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.EventInputSource.CreateBackend"
source: xml
reviewed: 09aa109314df5b013e6f74d441855ac1aa213d89e825e154cc78e0e80454be6f
title: "CreateBackend"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Creates one isolated backend that receives subsequent events from this source.

**Returns:** A caller-owned backend whose disposal unregisters it from this source.

**Exception `T:System.ObjectDisposedException`:** Thrown after this source has been disposed.
