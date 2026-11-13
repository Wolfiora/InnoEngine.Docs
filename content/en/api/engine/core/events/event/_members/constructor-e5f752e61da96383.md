---
uid: api.e5f752e61da96383176099fcbdc2cc2276dbf0f40ac1b0b43c47ff39ef3fd067
symbol: "engine:Inno.Core.Events:M:Inno.Core.Events.Event.#ctor(Inno.Core.Events.Event)"
source: xml
reviewed: bdc07beebe95d1117a1e03a0bae4c519de762ff3b443ed0609c28f1e56e339fe
title: "Constructor"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
---

Creates a routed representation that shares global consumption with its source event.

**Parameter `source`:** The original event whose consumption lifetime remains authoritative.

**Exception `T:System.ArgumentNullException`:** The source event is null.
