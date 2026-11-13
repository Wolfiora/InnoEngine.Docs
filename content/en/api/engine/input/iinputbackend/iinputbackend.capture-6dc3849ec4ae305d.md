---
uid: api.6dc3849ec4ae305d4bd9fcd492bfc122a73a5e68a05b2bb1a55b901ba8bfa9ee
symbol: "engine:Inno.Input:M:Inno.Input.IInputBackend.Capture(System.Int64)"
source: xml
reviewed: a8215185a840faa0a37879c9b780af2a1ca0a769620e50db91364132ce74c6ac
title: "IInputBackend.Capture"
kind: api
owners: [Inno.Input]
apiSurface: source-clr
---

Captures a snapshot and consumes transient press, release, movement, and wheel state.

**Parameter `frameIndex`:** The runtime frame receiving the snapshot.

**Returns:** The immutable state for that exact frame.
