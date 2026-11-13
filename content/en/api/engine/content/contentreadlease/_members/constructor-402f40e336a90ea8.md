---
uid: api.402f40e336a90ea8637b18dacf817059908ac95380e56bd408e0c35b8198d2c1
symbol: "engine:Inno.Content:M:Inno.Content.ContentReadLease.#ctor(Inno.Content.ContentEntry,System.Func{System.IO.Stream},System.Action)"
source: xml
reviewed: 25a2b38810d7d7c5662adf36810c7b26595c786810c7d2bb1f521143244ee1ad
title: "Constructor"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Transfers a provider pin and independent-stream factory into a caller-owned lease.

**Parameter `entry`:** Immutable metadata identifying the pinned bytes.

**Parameter `openRead`:** Opens a stream with its own provider pin; stream disposal must release that pin.

**Parameter `release`:** Releases this lease's provider pin exactly once, independently of any open stream.
