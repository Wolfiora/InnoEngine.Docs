---
uid: api.3931acfb4ea1883652ce93d97d2b7cb6349801a175ebd5cdee7d5f97c2c1a532
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioContentProviderContext.#ctor(InnoEngine.References.ContentReadScope,System.Single,System.Int32)"
source: xml
reviewed: e6db03ccf3b0bde5054d3308c5a583e4199e8e52097fc3752a4e94d8600c6c70
title: "AudioContentProviderContext.Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Opens a control-thread snapshot collector over one content read scope.

**Parameter `content`:** The caller-owned identity read scope.

**Parameter `deltaTime`:** Finite non-negative time elapsed since the previous update.

**Parameter `capacity`:** Maximum combined emitter and listener count accepted by this contribution. Zero permits an empty contribution only.

**Exception `T:System.ArgumentOutOfRangeException`:** The elapsed time is invalid or capacity is negative.

**Exception `T:System.ArgumentNullException`:** The borrowed content scope is null.
