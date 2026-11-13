---
uid: api.3666655dcdef0a1bb8749e3e3165c0ff4a7e6888ac3d304ff41fe6044fa0b576
symbol: "engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationRuntime.Play(Inno.Animation.AnimationClipAsset,Inno.Animation.AnimationTarget)"
source: xml
reviewed: 952a3cb77c3845126f0d0b497e494b6e52a9e76835e1c84d17b85e3028c2ab08
title: "Play"
kind: api
owners: [Inno.Animation.Runtime]
apiSurface: source-clr
---

Starts one clip with the runtime's default playback policy.

**Parameter `clip`:** Valid clip to sample until completion or explicit stop.

**Returns:** A generation-checked handle owned by this runtime.

**Exception `T:System.ObjectDisposedException`:** Thrown when this runtime has been disposed.

**Exception `T:System.ArgumentNullException`:** Thrown when `clip` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the clip is structurally invalid.

**Parameter `target`:** The weak destination or explicit sampling-only policy.
