---
uid: api.d2ad0603c8de45fb027997c972052517031e148e2725d5e79eecfb9b4e631b60
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioContentProviderContext.#ctor(Inno.References.ContentReadScope,System.Single,System.Int32)"
source: xml
reviewed: 58abe2dd388d1ff1626ace359e07e60af08d86eb102fc1c9588d24cc7b39fcb1
title: "AudioContentProviderContext.Constructor"
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
