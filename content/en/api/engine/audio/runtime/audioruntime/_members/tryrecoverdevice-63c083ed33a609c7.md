---
uid: api.63c083ed33a609c7044fc6f275566b30e8790b0a1b40b69ece0d039b29dc35f7
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.TryRecoverDevice(System.Func{Inno.Audio.IAudioDevice})"
source: xml
reviewed: bcc6a8f9d9f1768185af21b7359c002b7cbf37f4196f51fe63d3284a7ebe53ab
title: "TryRecoverDevice"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Attempts to replace a muted or lost output generation while preserving the active mixer graph.

**Parameter `deviceFactory`:** Host-owned factory that creates a fresh initialized device candidate.

**Returns:** `true` when output is already ready or a ready candidate was installed; otherwise `false` and the current muted or lost generation remains active.
