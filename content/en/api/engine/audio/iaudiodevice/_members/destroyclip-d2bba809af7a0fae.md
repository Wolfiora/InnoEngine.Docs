---
uid: api.d2bba809af7a0fae7aa9f5e10f7f412eda915bbf7e6d0199deaead84caaf6456
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.DestroyClip(Inno.Audio.AudioClipHandle)"
source: xml
reviewed: 46d62ba3d71c2341d9872394282b016b2e32814aaeb8c1dac4585603ac2c6ac0
title: "DestroyClip"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Releases one clip after all voices using it have ended.

**Parameter `clip`:** Clip owned by the current device generation.

**Returns:** `true` when a live clip was released.
