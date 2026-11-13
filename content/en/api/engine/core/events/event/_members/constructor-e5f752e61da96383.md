---
uid: api.e5f752e61da96383176099fcbdc2cc2276dbf0f40ac1b0b43c47ff39ef3fd067
symbol: "engine:Inno.Core.Events:M:Inno.Core.Events.Event.#ctor(Inno.Core.Events.Event)"
source: xml
reviewed: 9f8c142a3d4e7b5dd147d9786912af7f18e2859048ea8d91a768e5641f9f15d7
title: "Constructor"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
---

Creates a routed representation that shares global consumption with its source event.

**Parameter `source`:** The original event whose consumption lifetime remains authoritative.

**Exception `T:System.ArgumentNullException`:** The source event is null.
