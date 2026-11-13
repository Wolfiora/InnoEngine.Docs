---
uid: api.d2ad0603c8de45fb027997c972052517031e148e2725d5e79eecfb9b4e631b60
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioContentProviderContext.#ctor(Inno.References.ContentReadScope,System.Single,System.Int32)"
source: xml
reviewed: 8a9877f1d46358e7671bc1e03a258c89d7ff97e7365c757426583b7411487627
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Opens a control-thread snapshot collector over one content read scope.

**Parameter `content`:** The caller-owned identity read scope.

**Parameter `deltaTime`:** Finite non-negative time elapsed since the previous update.

**Parameter `capacity`:** Maximum combined emitter and listener count accepted by this contribution. Zero permits an empty contribution only.

**Exception `T:System.ArgumentOutOfRangeException`:** The elapsed time is invalid or capacity is negative.

**Exception `T:System.ArgumentNullException`:** The borrowed content scope is null.
