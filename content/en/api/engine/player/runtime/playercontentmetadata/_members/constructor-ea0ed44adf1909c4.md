---
uid: api.ea0ed44adf1909c493145c8259feb7dd0d812b2cfc7577b6ff47bdc028fb09d8
symbol: "engine:Inno.Player.Runtime:M:Inno.Player.Runtime.PlayerContentMetadata.#ctor(System.ReadOnlySpan{System.Byte},System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: a55bafa05c2cf8340d1729277a245d88f2724b47122013cbf8d1312c553b6ea5
title: "Constructor"
kind: api
owners: [Inno.Player.Runtime]
apiSurface: source-clr
---

Copies deployment metadata so the source can retire its own buffers immediately.

**Parameter `manifest`:** The complete strict runtime manifest envelope.

**Parameter `catalog`:** The serialized runtime content catalog.

**Exception `T:System.ArgumentException`:** Either document is empty.
