---
uid: api.a1edc54fdaca9e7a269ea8f391ab8311646574aae95beadc32de94e26a66841a
symbol: "engine:Inno.Runtime:M:Inno.Runtime.EngineHost.CreateSession(Inno.Runtime.RuntimeSessionOptions)"
source: xml
reviewed: f97df140f7972a66fdcfddb777176baed978535e492a9ef6edf3ea39cf90230a
title: "CreateSession"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Creates an isolated Edit, Play, or Player runtime session.

**Parameter `options`:** The validated ownership, storage, and timing options for the session.

**Returns:** A started session owned by this host and the caller.

**Exception `T:System.ArgumentNullException`:** Thrown when `options` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown when this host has been disposed.
