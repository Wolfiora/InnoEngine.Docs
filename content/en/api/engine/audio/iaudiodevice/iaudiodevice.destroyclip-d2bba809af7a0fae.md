---
uid: api.d2bba809af7a0fae7aa9f5e10f7f412eda915bbf7e6d0199deaead84caaf6456
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.DestroyClip(Inno.Audio.AudioClipHandle)"
source: xml
reviewed: 3feef4c023cff09522daca9de5cdec6de560bd08a7978f6a79ca002b5c062e93
title: "IAudioDevice.DestroyClip"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Releases one clip after all voices using it have ended.

## Parameters

**Parameter `clip`:** Clip owned by the current device generation.

## Returns

`true` when a live clip was released.
